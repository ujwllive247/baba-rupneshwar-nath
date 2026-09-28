import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';
import type { Timing } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

const ICONS = { Sun, Moon, Sunrise, Sunset };

interface TimingCardProps {
  timing: Timing;
  /** Picks the icon without teaching the data file about lucide. */
  icon: keyof typeof ICONS;
  className?: string;
}

export function TimingCard({ timing, icon, className }: TimingCardProps) {
  const { pick } = useLanguage();
  const Icon = ICONS[icon];

  return (
    <div className={cn('card p-5', className)}>
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron-50 text-saffron-700">
          <Icon aria-hidden="true" size={22} />
        </span>
        <div className="min-w-0 flex-1">
          {/* Label demoted to descriptor so the time numeral reads as the primary content */}
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            {pick(timing.label)}
          </h3>
          {/* Time numeral — largest element in the card */}
          <p className="mt-1 font-display text-2xl font-semibold leading-none text-saffron-700">
            {pick(timing.time)}
          </p>
          {timing.note && (
            <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{pick(timing.note)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
