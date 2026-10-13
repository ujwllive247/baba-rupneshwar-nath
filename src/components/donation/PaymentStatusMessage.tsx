import { CheckCircle2, Clock3, Loader2, XCircle, Ban } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import type { TranslationKey } from '@/i18n';
import { cn } from '@/utils/cn';

export type PaymentViewState = 'pending' | 'processing' | 'failed' | 'cancelled' | 'success';

const VIEW: Record<PaymentViewState, { icon: typeof Clock3; title: TranslationKey; hint?: TranslationKey; tone: string }> = {
  pending: {
    icon: Clock3,
    title: 'donate.payment.status.pending',
    hint: 'donate.payment.status.pendingHint',
    tone: 'border-gold-400/60 bg-gold-400/10 text-ink-800',
  },
  processing: {
    icon: Loader2,
    title: 'donate.payment.status.processing',
    hint: 'donate.payment.status.processingHint',
    tone: 'border-saffron-300 bg-saffron-50 text-saffron-900',
  },
  failed: {
    icon: XCircle,
    title: 'donate.payment.status.failed',
    hint: 'donate.payment.status.failedHint',
    tone: 'border-kumkum-600/40 bg-kumkum-500/5 text-kumkum-700',
  },
  cancelled: {
    icon: Ban,
    title: 'donate.payment.status.cancelled',
    hint: 'donate.payment.status.cancelledHint',
    tone: 'border-sand-300 bg-sand-100 text-ink-700',
  },
  success: {
    icon: CheckCircle2,
    title: 'donate.payment.status.success',
    tone: 'border-saffron-300 bg-saffron-50 text-saffron-900',
  },
};

/**
 * Status with icon + words (never colour alone). The wrapper is a polite live
 * region that stays mounted, so every change is announced.
 */
export function PaymentStatusMessage({ state }: { state: PaymentViewState }) {
  const { t } = useLanguage();
  const view = VIEW[state];
  const Icon = view.icon;
  return (
    <div role="status" aria-live="polite" aria-atomic="true">
      <div className={cn('flex items-start gap-3 rounded-2xl border p-4', view.tone)}>
        <Icon
          aria-hidden="true"
          size={22}
          className={cn('mt-0.5 shrink-0', state === 'processing' && 'motion-safe:animate-spin')}
        />
        <div>
          <p className="text-xs font-medium uppercase tracking-wide opacity-75 [html[lang=hi]_&]:tracking-normal">{t('donate.payment.statusLabel')}</p>
          <p className="font-semibold">{t(view.title)}</p>
          {view.hint && <p className="mt-0.5 text-sm opacity-90">{t(view.hint)}</p>}
        </div>
      </div>
    </div>
  );
}
