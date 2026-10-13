import { forwardRef } from 'react';
import type { SevaConfirmation } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { templeInfo } from '@/data/temple';
import { formatINR } from '@/utils/money';
import { TempleMark } from '@/components/TempleMark';

const DATE_TIME_LOCALE = { hi: 'hi-IN', en: 'en-IN' } as const;

/**
 * Certificate-style Seva Confirmation. Its fields mirror a future Donation
 * Receipt (receipt number, donation ID, payment reference, donor, campaign,
 * amount, date/time), so a printable/PDF receipt can reuse this layout.
 */
export const SevaConfirmationCard = forwardRef<HTMLHeadingElement, { confirmation: SevaConfirmation }>(
  function SevaConfirmationCard({ confirmation }, headingRef) {
    const { t, lang, pick } = useLanguage();
    const dateTime = new Intl.DateTimeFormat(DATE_TIME_LOCALE[lang], {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date(confirmation.confirmedAt));

    const rows: { label: string; value: string; mono?: boolean }[] = [
      {
        label: t('donate.confirm.donor'),
        value: confirmation.isAnonymous
          ? `${confirmation.donorName} · ${t('donate.confirm.anonymousDonor')}`
          : confirmation.donorName,
      },
      { label: t('donate.payment.donationId'), value: confirmation.donationId, mono: true },
      {
        label: t('donate.confirm.receiptNumber'),
        value: confirmation.receiptNumber ?? t('donate.confirm.receiptPending'),
        mono: Boolean(confirmation.receiptNumber),
      },
      { label: t('donate.confirm.campaign'), value: pick(confirmation.campaignTitle) },
      {
        label: t('donate.confirm.paymentStatus'),
        value: confirmation.isDemo ? t('donate.confirm.paymentSuccessDemo') : t('donate.confirm.paymentSuccess'),
      },
      ...(confirmation.paymentReference
        ? [{ label: t('donate.confirm.paymentReference'), value: confirmation.paymentReference, mono: true }]
        : []),
      { label: t('donate.confirm.dateTime'), value: dateTime },
      { label: t('donate.confirm.mobile'), value: confirmation.maskedMobile, mono: true },
      ...(confirmation.email ? [{ label: t('donate.form.email'), value: confirmation.email }] : []),
      { label: t('donate.confirm.temple'), value: t('site.nameFull') },
    ];

    return (
      <article className="seva-confirmation relative overflow-hidden rounded-3xl bg-white p-1.5 shadow-lift ring-1 ring-sand-200">
        <div className="relative overflow-hidden rounded-[1.25rem] border-2 border-gold-400/70 bg-gradient-to-b from-sand-50 to-white px-5 py-8 sm:px-10 sm:py-10">
          {confirmation.isDemo && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
            >
              <span className="-rotate-[24deg] whitespace-nowrap font-display text-6xl font-bold tracking-[0.3em] text-kumkum-600/[0.07] sm:text-8xl [html[lang=hi]_&]:tracking-normal">
                DEMO
              </span>
            </span>
          )}

          <header className="relative flex flex-col items-center text-center">
            <TempleMark className="h-14 w-14" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-saffron-700 [html[lang=hi]_&]:tracking-normal">
              {t('donate.confirm.pageTitle')}
            </p>
            <h1 ref={headingRef} tabIndex={-1} className="mt-2 text-2xl font-semibold focus:outline-none sm:text-3xl">
              {confirmation.isAnonymous
                ? t('donate.confirm.thanksAnonymous')
                : t('donate.confirm.thanks', { name: confirmation.donorName })}
            </h1>
            <p className="mt-3 max-w-lg text-ink-600">{t('donate.confirm.message')}</p>
            <p className="mt-6 font-display text-5xl font-semibold tabular-nums text-saffron-700">
              {formatINR(confirmation.amount, lang)}
            </p>
            <p className="mt-2 max-w-lg text-sm text-ink-600">
              {confirmation.isDemo ? t('donate.confirm.sevaMessageDemo') : t('donate.confirm.sevaMessage')}
            </p>
            {confirmation.isDemo && (
              <p className="mt-4 rounded-full border border-dashed border-kumkum-600/60 px-4 py-1 text-xs font-bold tracking-wide text-kumkum-700 [html[lang=hi]_&]:tracking-normal">
                {t('donate.confirm.demoWatermark')}
              </p>
            )}
          </header>

          <div aria-hidden="true" className="relative my-8 flex items-center gap-3 text-gold-500">
            <span className="h-px flex-1 bg-gold-400/60" />
            <span className="text-lg">❖</span>
            <span className="h-px flex-1 bg-gold-400/60" />
          </div>

          <section aria-labelledby="seva-details-heading" className="relative">
            <h2 id="seva-details-heading" className="sr-only">
              {t('donate.confirm.detailsHeading')}
            </h2>
            <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {rows.map((row) => (
                <div key={row.label} className="min-w-0 border-b border-dashed border-sand-300 pb-3">
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-500 [html[lang=hi]_&]:tracking-normal">{row.label}</dt>
                  <dd className={row.mono ? 'mt-1 break-all font-mono text-sm text-ink-900' : 'mt-1 break-words font-medium text-ink-900'}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="relative mt-8 text-center font-display text-lg italic text-ink-700">{t('donate.confirm.blessing')}</p>

          <footer className="relative mt-6 text-center text-xs text-ink-500">
            <p className="font-semibold text-ink-700">{t('donate.confirm.contactHeading')}</p>
            <p className="mt-1">{t('donate.confirm.contactBody')}</p>
            <p className="mt-1 font-medium text-ink-800">
              {templeInfo.phone} · {templeInfo.email}
            </p>
            <p className="mt-1">{pick(templeInfo.address)}</p>
          </footer>
        </div>
      </article>
    );
  }
);
