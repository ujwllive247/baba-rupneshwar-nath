import type { ReactNode } from 'react';
import { HandHeart } from 'lucide-react';
import type { Campaign, Paise } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { formatINR } from '@/utils/money';
import { cn } from '@/utils/cn';

interface DonationSummaryCardProps {
  campaign: Campaign;
  amount: Paise | null;
  /** Extra rows (donation ID, donor…) as label/value pairs. */
  rows?: { label: string; value: ReactNode; mono?: boolean }[];
  footer?: ReactNode;
  className?: string;
}

/** Dark "your seva" card used beside the form and on the payment screen. */
export function DonationSummaryCard({ campaign, amount, rows = [], footer, className }: DonationSummaryCardProps) {
  const { t, lang, pick } = useLanguage();
  return (
    <aside
      aria-label={t('donate.summary.heading')}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-gradient-to-br from-night-900 via-night-800 to-night-700 p-6 text-sand-100 shadow-lift sm:p-7',
        className
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-temple-grid opacity-40" />
      <div className="relative">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 [html[lang=hi]_&]:tracking-normal">
          <HandHeart aria-hidden="true" size={16} />
          {t('donate.summary.heading')}
        </p>
        <dl className="mt-5 space-y-4">
          <div>
            <dt className="text-xs text-sand-400">{t('donate.summary.campaign')}</dt>
            <dd className="mt-0.5 font-display text-lg text-white">{pick(campaign.title)}</dd>
          </div>
          <div>
            <dt className="text-xs text-sand-400">{t('donate.summary.amount')}</dt>
            <dd className="mt-0.5 font-display text-4xl font-semibold tabular-nums text-white">
              {amount !== null ? formatINR(amount, lang) : (
                <span className="text-base font-normal text-sand-300">{t('donate.summary.noAmount')}</span>
              )}
            </dd>
          </div>
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="text-xs text-sand-400">{row.label}</dt>
              <dd className={cn('mt-0.5 text-sand-100', row.mono ? 'break-all font-mono text-sm' : 'break-words')}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
        {footer && <div className="mt-6 border-t border-white/10 pt-5">{footer}</div>}
      </div>
    </aside>
  );
}
