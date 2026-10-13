import { useEffect, useState } from 'react';
import { Info, Target, Users, Wallet } from 'lucide-react';
import type { Campaign } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { formatDate } from '@/utils/format';
import { formatINR, formatNumber } from '@/utils/money';
import { cn } from '@/utils/cn';

/**
 * Raised / goal / contributors with a progress bar. Shows a "to be published"
 * state when the campaign has no figures, and a visible "Sample figures"
 * badge while the campaign is sample data.
 */
export function FundProgress({ campaign, className }: { campaign: Campaign; className?: string }) {
  const { t, lang } = useLanguage();
  const figures = campaign.figures;
  // Fill animates from zero after mount (instant under reduced motion via the global rule).
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setFilled(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!figures) {
    return (
      <div className={cn('card flex items-start gap-3 p-6', className)}>
        <Info aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-saffron-600" />
        <div>
          <h2 className="text-lg font-semibold">{t('donate.progress.heading')}</h2>
          <p className="mt-1 text-sm text-ink-500">{t('donate.progress.unpublished')}</p>
        </div>
      </div>
    );
  }

  const percent = Math.min(100, Math.round((figures.raisedAmount / figures.goalAmount) * 100));
  const stats = [
    { icon: Wallet, label: t('donate.progress.raised'), value: formatINR(figures.raisedAmount, lang) },
    { icon: Target, label: t('donate.progress.goal'), value: formatINR(figures.goalAmount, lang) },
    {
      icon: Users,
      label: t('donate.progress.contributors'),
      value: formatNumber(figures.contributorCount, lang),
    },
  ];

  return (
    <section aria-labelledby="fund-progress-heading" className={cn('card p-6 sm:p-8', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="fund-progress-heading" className="text-xl font-semibold">
          {t('donate.progress.heading')}
        </h2>
        {campaign.isSample && (
          <span className="rounded-full border border-dashed border-saffron-400 bg-saffron-50 px-3 py-1 text-xs font-semibold text-saffron-800">
            {t('donate.progress.sampleBadge')}
          </span>
        )}
      </div>

      <dl className="mt-6 grid gap-5 sm:grid-cols-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron-50 text-saffron-700 ring-1 ring-saffron-100">
              <Icon aria-hidden="true" size={20} />
            </span>
            <div className="min-w-0">
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-500 [html[lang=hi]_&]:tracking-normal">{label}</dt>
              <dd className="font-display text-xl font-semibold tabular-nums text-ink-900 sm:text-2xl">{value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <div
          role="progressbar"
          aria-label={t('donate.progress.barLabel')}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          aria-valuetext={t('donate.progress.percent', { percent })}
          className="h-3.5 overflow-hidden rounded-full bg-sand-200 ring-1 ring-inset ring-sand-300"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-saffron-500 via-saffron-600 to-kumkum-500 transition-[width] duration-1000 ease-out"
            style={{ width: filled ? `${percent}%` : '0%' }}
          />
        </div>
        <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm">
          <span className="font-semibold text-saffron-800">{t('donate.progress.percent', { percent })}</span>
          <span className="text-ink-500">{t('donate.progress.asOf', { date: formatDate(figures.asOf, lang) })}</span>
        </div>
      </div>
    </section>
  );
}
