import { Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import type { TranslationKey } from '@/i18n';
import { cn } from '@/utils/cn';

const STEPS: TranslationKey[] = ['donate.steps.details', 'donate.steps.payment', 'donate.steps.confirmation'];

/** Three-step indicator. State is conveyed by number/check icon and text, not colour alone. */
export function DonationSteps({ current }: { current: 0 | 1 | 2 }) {
  const { t } = useLanguage();
  return (
    <nav aria-label={t('donate.steps.label')}>
      <ol className="flex items-start gap-2 sm:gap-3">
        {STEPS.map((key, index) => {
          const state = index < current ? 'completed' : index === current ? 'current' : 'upcoming';
          return (
            <li
              key={key}
              aria-current={state === 'current' ? 'step' : undefined}
              className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold',
                  state === 'completed' && 'border-saffron-600 bg-saffron-600 text-white',
                  state === 'current' && 'border-saffron-600 bg-white text-saffron-700 ring-4 ring-saffron-100',
                  state === 'upcoming' && 'border-sand-300 bg-white text-ink-500'
                )}
              >
                {state === 'completed' ? <Check size={17} strokeWidth={3} /> : index + 1}
              </span>
              <span
                className={cn(
                  'min-w-0 text-xs font-medium leading-tight sm:text-sm',
                  state === 'upcoming' ? 'text-ink-500' : 'text-ink-900'
                )}
              >
                {t(key)}
                <span className="sr-only"> — {t(`donate.steps.${state}`)}</span>
              </span>
              {index < STEPS.length - 1 && (
                <span aria-hidden="true" className="hidden h-0.5 flex-1 rounded bg-sand-300 sm:block" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
