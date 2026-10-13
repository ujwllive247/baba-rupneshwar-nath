import { afterEach, describe, expect, it } from 'vitest';
import type { DonationRequest } from '@/types/donation';
import { DummyPaymentProvider } from '@/services/payment/DummyPaymentProvider';
import type { PaymentProvider } from '@/services/payment';
import { SessionDonationRepository } from './DonationRepository';
import { DonationService } from './donationService';
import { DONATION_ID_PATTERN } from './ids';
import { formatINR, maskMobile, rupeesToPaise } from '@/utils/money';

function request(overrides: Partial<DonationRequest> = {}): DonationRequest {
  return {
    campaignId: 'cmp-temple-construction',
    amount: rupeesToPaise(501),
    donor: { name: 'Ram Kumar', mobile: '9876543210', isAnonymous: false },
    consentAt: '2026-10-03T10:00:00.000Z',
    idempotencyKey: `key-${Math.random()}`,
    ...overrides,
  };
}

const makeService = () => new DonationService(new DummyPaymentProvider(), new SessionDonationRepository());

afterEach(() => window.sessionStorage.clear());

describe('DonationService with the dummy provider', () => {
  it('creates a demo donation with a DEMO reference', async () => {
    const donation = await makeService().createDonation(request());
    expect(donation.id).toMatch(DONATION_ID_PATTERN);
    expect(donation.id).toContain('DEMO');
    expect(donation).toMatchObject({ status: 'CREATED', isDemo: true, amount: 50100 });
  });

  it('returns the same donation for a repeated idempotency key', async () => {
    const service = makeService();
    const first = await service.createDonation(request({ idempotencyKey: 'same' }));
    const second = await service.createDonation(request({ idempotencyKey: 'same' }));
    expect(second.id).toBe(first.id);
  });

  it('rejects amounts outside the configured range', async () => {
    await expect(makeService().createDonation(request({ amount: rupeesToPaise(1) }))).rejects.toThrow();
    await expect(makeService().createDonation(request({ amount: 1050.5 }))).rejects.toThrow();
  });

  it('runs created → pending → failed → retry → confirmed', async () => {
    const service = makeService();
    const created = await service.createDonation(request());

    const { donation: pending, session } = await service.startPayment(created.id);
    expect(pending.status).toBe('PAYMENT_PENDING');
    expect(session.qr?.isDemo).toBe(true);
    expect(service.getConfirmation(pending)).toBeNull();

    const failed = await service.simulatePayment(created.id, 'failed');
    expect(failed.status).toBe('FAILED');

    await service.startPayment(created.id);
    const confirmed = await service.simulatePayment(created.id, 'success');
    expect(confirmed.status).toBe('CONFIRMED');
    expect(confirmed.paymentAttempts).toHaveLength(2);

    const confirmation = service.getConfirmation(confirmed);
    expect(confirmation).toMatchObject({ donationId: created.id, isDemo: true, receiptNumber: null, maskedMobile: '98••••••10' });
    expect(confirmation?.paymentReference).toMatch(/^DEMO-TXN-/);
  });

  it('cancels a pending donation', async () => {
    const service = makeService();
    const created = await service.createDonation(request());
    await service.startPayment(created.id);
    expect((await service.cancelDonation(created.id)).status).toBe('CANCELLED');
  });

  it('keeps donations across service instances in the same tab (refresh)', async () => {
    const created = await makeService().createDonation(request());
    expect(await makeService().getDonation(created.id)).toMatchObject({ id: created.id });
  });

  it('refuses simulation when the provider is live', async () => {
    const live: PaymentProvider = { ...new DummyPaymentProvider(), id: 'live', isLive: true } as PaymentProvider;
    const service = new DonationService(live, new SessionDonationRepository());
    expect(service.supportsSimulation).toBe(false);
    await expect(service.simulatePayment('BRN-DEMO-20261003-AAAAAA', 'success')).rejects.toThrow(/live provider/);
  });
});

describe('money helpers', () => {
  it('formats with Indian grouping and masks mobiles', () => {
    expect(formatINR(rupeesToPaise(110000), 'en')).toBe('₹1,10,000');
    expect(maskMobile('9876543210')).toBe('98••••••10');
  });
});
