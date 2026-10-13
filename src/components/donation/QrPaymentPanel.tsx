import { QrCode } from 'lucide-react';
import type { Paise, PaymentSession } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { formatINR } from '@/utils/money';
import { cn } from '@/utils/cn';

const TIME_LOCALE = { hi: 'hi-IN', en: 'en-IN' } as const;

/** QR area. The demo image is non-scannable and overlaid with a DEMO ribbon. */
export function QrPaymentPanel({
  session,
  amount,
  dimmed,
}: {
  session: PaymentSession;
  amount: Paise;
  /** Greyed out while processing or after the attempt has ended. */
  dimmed?: boolean;
}) {
  const { t, lang } = useLanguage();
  const isDemo = session.qr?.isDemo ?? true;
  const validUntil = new Intl.DateTimeFormat(TIME_LOCALE[lang], { hour: 'numeric', minute: '2-digit' }).format(
    new Date(session.expiresAt)
  );

  return (
    <section aria-labelledby="qr-heading" className="card p-6 text-center sm:p-8">
      <h2 id="qr-heading" className="flex items-center justify-center gap-2 text-lg font-semibold">
        <QrCode aria-hidden="true" size={20} className="text-saffron-600" />
        {t('donate.payment.qrHeading')}
      </h2>
      <p className="mt-1 font-display text-3xl font-semibold tabular-nums text-ink-900">{formatINR(amount, lang)}</p>

      <div
        className={cn(
          'relative mx-auto mt-5 w-full max-w-[15rem] overflow-hidden rounded-2xl border-4 border-sand-200 bg-white p-2 transition',
          dimmed && 'opacity-40 grayscale'
        )}
      >
        {session.qr && (
          <img
            src={session.qr.imageSrc}
            alt={t('donate.payment.qrAlt')}
            width={330}
            height={330}
            className="aspect-square h-auto w-full"
          />
        )}
        {isDemo && (
          <span
            aria-hidden="true"
            className="absolute left-[-2.5rem] top-5 w-40 -rotate-45 bg-kumkum-600 py-1 text-center text-[0.65rem] font-bold tracking-[0.2em] text-white shadow [html[lang=hi]_&]:tracking-normal"
          >
            DEMO
          </span>
        )}
      </div>

      {isDemo && <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-ink-500">{t('donate.payment.qrExplain')}</p>}
      <p className="mt-3 text-xs font-medium text-ink-500">{t('donate.payment.validUntil', { time: validUntil })}</p>
    </section>
  );
}
