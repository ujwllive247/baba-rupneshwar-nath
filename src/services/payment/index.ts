import { DummyPaymentProvider } from './DummyPaymentProvider';
import type { PaymentProvider } from './PaymentProvider';

export type { PaymentProvider, DemoPaymentControls } from './PaymentProvider';
export { hasDemoControls } from './PaymentProvider';

/**
 * Provider registry. Add a real provider here (backed by this site's own
 * server API) and select it with VITE_PAYMENT_PROVIDER. Unknown ids fall back
 * to the dummy, which always shows itself as a demo.
 */
const PROVIDERS: Record<string, () => PaymentProvider> = {
  dummy: () => new DummyPaymentProvider(),
};

export function createPaymentProvider(id = import.meta.env.VITE_PAYMENT_PROVIDER ?? 'dummy'): PaymentProvider {
  return (PROVIDERS[id] ?? PROVIDERS.dummy)();
}
