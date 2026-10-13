import { CheckCircle2, Wrench, XCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface DemoPaymentControlsProps {
  disabled: boolean;
  onSimulate: (outcome: 'success' | 'failed') => void;
}

/** Visibly separate "test bench" panel — rendered only when the provider supports simulation. */
export function DemoPaymentControls({ disabled, onSimulate }: DemoPaymentControlsProps) {
  const { t } = useLanguage();
  return (
    <section
      aria-labelledby="demo-controls-heading"
      className="rounded-2xl border-2 border-dashed border-sand-400 bg-sand-100/70 p-5"
    >
      <h2 id="demo-controls-heading" className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wide text-ink-700 [html[lang=hi]_&]:tracking-normal">
        <Wrench aria-hidden="true" size={16} />
        {t('donate.demo.controlsHeading')}
      </h2>
      <p className="mt-1 text-xs text-ink-500">{t('donate.demo.controlsNote')}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          aria-disabled={disabled}
          onClick={() => !disabled && onSimulate('success')}
          className="btn-secondary min-h-12 flex-1 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          <CheckCircle2 aria-hidden="true" size={18} />
          {t('donate.demo.simulateSuccess')}
        </button>
        <button
          type="button"
          aria-disabled={disabled}
          onClick={() => !disabled && onSimulate('failed')}
          className="btn-outline min-h-12 flex-1 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        >
          <XCircle aria-hidden="true" size={18} />
          {t('donate.demo.simulateFailure')}
        </button>
      </div>
    </section>
  );
}
