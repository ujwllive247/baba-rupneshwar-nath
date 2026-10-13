import type {
  Donation,
  DonationRequest,
  PaymentResult,
  PaymentSession,
  SevaConfirmation,
} from '@/types/donation';
import { getCampaignById } from '@/data/campaigns';
import { MAX_AMOUNT, MIN_AMOUNT } from '@/data/donationConfig';
import { maskMobile } from '@/utils/money';
import { createPaymentProvider, hasDemoControls, type PaymentProvider } from '@/services/payment';
import { SessionDonationRepository, type DonationRepository } from './DonationRepository';
import { createDemoDonationId } from './ids';
import { applyPaymentResult, latestAttempt, transitionDonation } from './status';

/**
 * The one entry point the donation UI uses. Methods are async and return
 * plain records so a backend API can replace the internals unchanged.
 */
export class DonationService {
  constructor(
    readonly provider: PaymentProvider,
    private readonly repository: DonationRepository,
    private readonly clock: () => Date = () => new Date()
  ) {}

  get isDemo(): boolean {
    return !this.provider.isLive;
  }

  get supportsSimulation(): boolean {
    return hasDemoControls(this.provider);
  }

  async createDonation(request: DonationRequest): Promise<Donation> {
    const existing = await this.repository.findByIdempotencyKey(request.idempotencyKey);
    if (existing) return existing;

    if (!getCampaignById(request.campaignId)) throw new Error('Unknown campaign');
    if (!Number.isInteger(request.amount) || request.amount < MIN_AMOUNT || request.amount > MAX_AMOUNT) {
      throw new Error('Amount out of range');
    }

    const now = this.clock();
    const donation: Donation = {
      id: createDemoDonationId(now),
      campaignId: request.campaignId,
      amount: request.amount,
      currency: 'INR',
      donor: request.donor,
      status: 'CREATED',
      idempotencyKey: request.idempotencyKey,
      consentAt: request.consentAt,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      paymentAttempts: [],
      isDemo: this.isDemo,
    };
    await this.repository.save(donation);
    return donation;
  }

  getDonation(id: string): Promise<Donation | null> {
    return this.repository.get(id);
  }

  /** Opens a new payment attempt (also used for "try again" after a failure). */
  async startPayment(donationId: string): Promise<{ donation: Donation; session: PaymentSession }> {
    const donation = await this.require(donationId);
    const now = this.clock().toISOString();
    const pending = transitionDonation(donation, 'PAYMENT_PENDING', now);
    const session = await this.provider.createPayment(pending);
    const updated: Donation = {
      ...pending,
      paymentAttempts: [
        ...pending.paymentAttempts,
        {
          id: session.attemptId,
          donationId,
          provider: this.provider.id,
          status: 'PENDING',
          session,
          createdAt: now,
        },
      ],
    };
    await this.repository.save(updated);
    return { donation: updated, session };
  }

  /** Demo only — asks the dummy provider for a result and applies it. */
  async simulatePayment(donationId: string, outcome: 'success' | 'failed'): Promise<Donation> {
    if (!hasDemoControls(this.provider)) throw new Error('Simulation is not available for a live provider');
    const donation = await this.require(donationId);
    const attempt = latestAttempt(donation);
    if (!attempt) throw new Error('No payment attempt to complete');
    return this.applyResult(donation, await this.provider.simulate(attempt.id, outcome));
  }

  async cancelDonation(donationId: string): Promise<Donation> {
    const donation = await this.require(donationId);
    const attempt = latestAttempt(donation);
    if (attempt && attempt.status === 'PENDING') {
      return this.applyResult(donation, await this.provider.cancel(attempt.id));
    }
    const cancelled = transitionDonation(donation, 'CANCELLED', this.clock().toISOString());
    await this.repository.save(cancelled);
    return cancelled;
  }

  /** Builds the confirmation, or null unless the donation is CONFIRMED. */
  getConfirmation(donation: Donation): SevaConfirmation | null {
    if (donation.status !== 'CONFIRMED') return null;
    const campaign = getCampaignById(donation.campaignId);
    const attempt = donation.paymentAttempts.find((item) => item.status === 'SUCCESS');
    if (!campaign || !attempt) return null;
    return {
      donationId: donation.id,
      receiptNumber: null,
      campaignTitle: campaign.title,
      amount: donation.amount,
      donorName: donation.donor.name,
      isAnonymous: donation.donor.isAnonymous,
      maskedMobile: maskMobile(donation.donor.mobile),
      email: donation.donor.email,
      paymentStatus: attempt.status,
      paymentReference: attempt.providerReference,
      confirmedAt: attempt.completedAt ?? donation.updatedAt,
      isDemo: donation.isDemo,
    };
  }

  private async applyResult(donation: Donation, result: PaymentResult): Promise<Donation> {
    const updated = applyPaymentResult(donation, result, this.clock().toISOString());
    await this.repository.save(updated);
    return updated;
  }

  private async require(id: string): Promise<Donation> {
    const donation = await this.repository.get(id);
    if (!donation) throw new Error(`Donation ${id} not found`);
    return donation;
  }
}

export const donationService = new DonationService(createPaymentProvider(), new SessionDonationRepository());
