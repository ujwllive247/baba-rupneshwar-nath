/**
 * Donation and payment state machines.
 *
 * Pure functions with no storage or provider knowledge, so the same rules can
 * later run server-side (where webhook results are applied). The browser never
 * gets the final word on a live payment: `applyPaymentResult` only confirms a
 * non-demo donation from a result marked `verified`.
 */
import type { Donation, DonationStatus, PaymentResult, PaymentStatus } from '@/types/donation';

const DONATION_TRANSITIONS: Record<DonationStatus, DonationStatus[]> = {
  CREATED: ['PAYMENT_PENDING', 'CANCELLED'],
  PAYMENT_PENDING: ['CONFIRMED', 'FAILED', 'CANCELLED'],
  // A failed payment can be retried with a fresh attempt.
  FAILED: ['PAYMENT_PENDING', 'CANCELLED'],
  CONFIRMED: [],
  CANCELLED: [],
};

const PAYMENT_TRANSITIONS: Record<PaymentStatus, PaymentStatus[]> = {
  INITIATED: ['PENDING', 'SUCCESS', 'FAILED', 'CANCELLED'],
  PENDING: ['SUCCESS', 'FAILED', 'CANCELLED'],
  SUCCESS: [],
  FAILED: [],
  CANCELLED: [],
};

export class InvalidTransitionError extends Error {
  constructor(kind: 'donation' | 'payment', from: string, to: string) {
    super(`Invalid ${kind} status transition: ${from} → ${to}`);
    this.name = 'InvalidTransitionError';
  }
}

export function canTransitionDonation(from: DonationStatus, to: DonationStatus): boolean {
  return DONATION_TRANSITIONS[from].includes(to);
}

export function canTransitionPayment(from: PaymentStatus, to: PaymentStatus): boolean {
  return PAYMENT_TRANSITIONS[from].includes(to);
}

export function isTerminalPayment(status: PaymentStatus): boolean {
  return PAYMENT_TRANSITIONS[status].length === 0;
}

export function transitionDonation(donation: Donation, to: DonationStatus, now: string): Donation {
  if (donation.status === to) return donation;
  if (!canTransitionDonation(donation.status, to)) {
    throw new InvalidTransitionError('donation', donation.status, to);
  }
  return { ...donation, status: to, updatedAt: now };
}

/**
 * Applies one provider result to its donation. Idempotent: replaying the same
 * terminal result (as a retried webhook would) returns the donation unchanged.
 */
export function applyPaymentResult(donation: Donation, result: PaymentResult, now: string): Donation {
  const attempt = donation.paymentAttempts.find((item) => item.id === result.attemptId);
  if (!attempt) throw new Error(`Unknown payment attempt ${result.attemptId}`);

  if (attempt.status === result.status) return donation;
  if (!canTransitionPayment(attempt.status, result.status)) {
    throw new InvalidTransitionError('payment', attempt.status, result.status);
  }

  const updatedAttempt = {
    ...attempt,
    status: result.status,
    providerReference: result.providerReference ?? attempt.providerReference,
    failureReason: result.failureReason,
    completedAt: isTerminalPayment(result.status) ? now : attempt.completedAt,
  };
  const withAttempt: Donation = {
    ...donation,
    paymentAttempts: donation.paymentAttempts.map((item) =>
      item.id === attempt.id ? updatedAttempt : item
    ),
    updatedAt: now,
  };

  switch (result.status) {
    case 'SUCCESS':
      // Live donations wait for server verification; only the demo trusts itself.
      return result.verified || donation.isDemo
        ? transitionDonation(withAttempt, 'CONFIRMED', now)
        : transitionDonation(withAttempt, 'PAYMENT_PENDING', now);
    case 'FAILED':
      return transitionDonation(withAttempt, 'FAILED', now);
    case 'CANCELLED':
      return transitionDonation(withAttempt, 'CANCELLED', now);
    default:
      return transitionDonation(withAttempt, 'PAYMENT_PENDING', now);
  }
}

/** The most recent attempt, if any. */
export function latestAttempt(donation: Donation) {
  return donation.paymentAttempts[donation.paymentAttempts.length - 1];
}
