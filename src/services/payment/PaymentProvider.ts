import type { Donation, PaymentResult, PaymentSession } from '@/types/donation';

/**
 * Provider-independent payment contract. The donation UI talks only to
 * `donationService`, which talks only to this interface.
 *
 * A real provider must NOT hold gateway secrets in the browser: its methods
 * call this site's own backend, which creates the gateway order, verifies the
 * signature/webhook and reports a `verified` result.
 */
export interface PaymentProvider {
  readonly id: string;
  /** False for the demo — the UI then shows the demo banner and test controls. */
  readonly isLive: boolean;
  createPayment(donation: Donation): Promise<PaymentSession>;
  getStatus(attemptId: string): Promise<PaymentResult | null>;
  cancel(attemptId: string): Promise<PaymentResult>;
}

/** Test-only capability. Real providers never implement it. */
export interface DemoPaymentControls {
  simulate(attemptId: string, outcome: 'success' | 'failed'): Promise<PaymentResult>;
}

export function hasDemoControls(
  provider: PaymentProvider
): provider is PaymentProvider & DemoPaymentControls {
  return !provider.isLive && typeof (provider as Partial<DemoPaymentControls>).simulate === 'function';
}
