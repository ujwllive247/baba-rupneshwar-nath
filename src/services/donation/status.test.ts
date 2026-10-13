import { describe, expect, it } from 'vitest';
import type { Donation } from '@/types/donation';
import { applyPaymentResult, canTransitionDonation, InvalidTransitionError, transitionDonation } from './status';

const NOW = '2026-10-03T10:00:00.000Z';

function donation(overrides: Partial<Donation> = {}): Donation {
  return {
    id: 'BRN-DEMO-20261003-AAAAAA',
    campaignId: 'cmp-temple-construction',
    amount: 50100,
    currency: 'INR',
    donor: { name: 'Test', mobile: '9876543210', isAnonymous: false },
    status: 'PAYMENT_PENDING',
    idempotencyKey: 'k',
    consentAt: NOW,
    createdAt: NOW,
    updatedAt: NOW,
    isDemo: false,
    paymentAttempts: [
      {
        id: 'PAY-1',
        donationId: 'BRN-DEMO-20261003-AAAAAA',
        provider: 'test',
        status: 'PENDING',
        session: { attemptId: 'PAY-1', method: 'qr', expiresAt: NOW },
        createdAt: NOW,
      },
    ],
    ...overrides,
  };
}

describe('donation status transitions', () => {
  it('allows retry after failure but nothing after confirmation', () => {
    expect(canTransitionDonation('FAILED', 'PAYMENT_PENDING')).toBe(true);
    expect(canTransitionDonation('CONFIRMED', 'FAILED')).toBe(false);
    expect(canTransitionDonation('CANCELLED', 'PAYMENT_PENDING')).toBe(false);
  });

  it('throws on an invalid transition', () => {
    expect(() => transitionDonation(donation({ status: 'CONFIRMED' }), 'FAILED', NOW)).toThrow(
      InvalidTransitionError
    );
  });
});

describe('applyPaymentResult', () => {
  it('does NOT confirm a live donation from an unverified success', () => {
    const result = applyPaymentResult(donation(), { attemptId: 'PAY-1', status: 'SUCCESS', verified: false }, NOW);
    expect(result.paymentAttempts[0].status).toBe('SUCCESS');
    expect(result.status).toBe('PAYMENT_PENDING');
  });

  it('confirms a live donation from a verified success', () => {
    const result = applyPaymentResult(
      donation(),
      { attemptId: 'PAY-1', status: 'SUCCESS', providerReference: 'UTR123', verified: true },
      NOW
    );
    expect(result.status).toBe('CONFIRMED');
    expect(result.paymentAttempts[0]).toMatchObject({ providerReference: 'UTR123', completedAt: NOW });
  });

  it('confirms a demo donation from the dummy (unverified) success', () => {
    const result = applyPaymentResult(
      donation({ isDemo: true }),
      { attemptId: 'PAY-1', status: 'SUCCESS', verified: false },
      NOW
    );
    expect(result.status).toBe('CONFIRMED');
  });

  it('maps failure and cancellation onto the donation', () => {
    expect(applyPaymentResult(donation(), { attemptId: 'PAY-1', status: 'FAILED', verified: true }, NOW).status).toBe(
      'FAILED'
    );
    expect(
      applyPaymentResult(donation(), { attemptId: 'PAY-1', status: 'CANCELLED', verified: true }, NOW).status
    ).toBe('CANCELLED');
  });

  it('is idempotent when the same terminal result is replayed', () => {
    const once = applyPaymentResult(donation(), { attemptId: 'PAY-1', status: 'SUCCESS', verified: true }, NOW);
    const twice = applyPaymentResult(once, { attemptId: 'PAY-1', status: 'SUCCESS', verified: true }, NOW);
    expect(twice).toBe(once);
  });

  it('rejects a conflicting result for a finished attempt', () => {
    const done = applyPaymentResult(donation(), { attemptId: 'PAY-1', status: 'SUCCESS', verified: true }, NOW);
    expect(() => applyPaymentResult(done, { attemptId: 'PAY-1', status: 'FAILED', verified: true }, NOW)).toThrow();
  });

  it('rejects a result for an unknown attempt', () => {
    expect(() => applyPaymentResult(donation(), { attemptId: 'nope', status: 'SUCCESS', verified: true }, NOW)).toThrow();
  });
});
