import type { Donation, PaymentResult, PaymentSession } from '@/types/donation';
import { PAYMENT_SESSION_MINUTES } from '@/data/donationConfig';
import { createDemoAttemptId, createDemoTransactionRef } from '@/services/donation/ids';
import type { DemoPaymentControls, PaymentProvider } from './PaymentProvider';

/**
 * Simulated provider for the prototype. No money moves, nothing leaves the
 * browser, and the QR image is deliberately non-scannable. Results are
 * returned with `verified: false` — they are only accepted because the
 * donation itself is flagged `isDemo`.
 */
export class DummyPaymentProvider implements PaymentProvider, DemoPaymentControls {
  readonly id = 'dummy';
  readonly isLive = false;
  private results = new Map<string, PaymentResult>();

  async createPayment(_donation: Donation): Promise<PaymentSession> {
    const attemptId = createDemoAttemptId();
    this.results.set(attemptId, { attemptId, status: 'PENDING', verified: false });
    return {
      attemptId,
      method: 'qr',
      qr: { imageSrc: '/images/demo-qr.svg', isDemo: true },
      expiresAt: new Date(Date.now() + PAYMENT_SESSION_MINUTES * 60_000).toISOString(),
    };
  }

  async getStatus(attemptId: string): Promise<PaymentResult | null> {
    return this.results.get(attemptId) ?? null;
  }

  async cancel(attemptId: string): Promise<PaymentResult> {
    const result: PaymentResult = { attemptId, status: 'CANCELLED', verified: false };
    this.results.set(attemptId, result);
    return result;
  }

  async simulate(attemptId: string, outcome: 'success' | 'failed'): Promise<PaymentResult> {
    const result: PaymentResult =
      outcome === 'success'
        ? { attemptId, status: 'SUCCESS', providerReference: createDemoTransactionRef(), verified: false }
        : { attemptId, status: 'FAILED', failureReason: 'DEMO_SIMULATED_FAILURE', verified: false };
    this.results.set(attemptId, result);
    return result;
  }
}
