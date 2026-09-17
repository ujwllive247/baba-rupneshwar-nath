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
    <div className={cn('card flex items-start gap-4 p-5', className)}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron-50 text-saffron-700">
        <Icon aria-hidden="true" size={22} />
      </span>
      <div>
        <h3 className="font-semibold text-ink-900">{pick(timing.label)}</h3>
        <p className="mt-1 text-xl font-display text-saffron-700">{pick(timing.time)}</p>
        {timing.note && <p className="mt-1.5 text-sm text-ink-500">{pick(timing.note)}</p>}
      </div>
    </div>
  );
}
