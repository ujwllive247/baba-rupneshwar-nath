import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PRESET_AMOUNTS } from '@/data/donationConfig';
import { formatINR } from '@/utils/money';
import { TextField } from '@/components/form/TextField';
import { cn } from '@/utils/cn';

export type AmountSelection = { kind: 'preset'; index: number } | { kind: 'custom' };

interface AmountSelectorProps {
  name: string;
  /** Id of the first radio — the error summary links here. */
  firstOptionId: string;
  customId: string;
  selection: AmountSelection;
  customValue: string;
  onSelectPreset: (index: number) => void;
  onCustomChange: (value: string) => void;
  error?: string;
  hint: string;
}

/**
 * Preset amounts as a native radio group (arrow keys move between them),
 * plus a custom-amount field. Typing a custom amount clears the preset.
 * The chosen card shows a check icon as well as the colour change.
 */
export function AmountSelector({
  name,
  firstOptionId,
  customId,
  selection,
  customValue,
  onSelectPreset,
  onCustomChange,
  error,
  hint,
}: AmountSelectorProps) {
  const { t, lang, pick } = useLanguage();
  const errorId = `${firstOptionId}-group-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="sr-only">{t('donate.form.presetLegend')}</legend>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {PRESET_AMOUNTS.map((preset, index) => {
          const checked = selection.kind === 'preset' && selection.index === index;
          return (
            <label key={preset.amount} className="relative block cursor-pointer">
              <input
                id={index === 0 ? firstOptionId : undefined}
                type="radio"
                name={name}
                value={preset.amount}
                checked={checked}
                onChange={() => onSelectPreset(index)}
                className="peer sr-only"
              />
              <span
                className={cn(
                  'flex min-h-[5.25rem] flex-col items-center justify-center rounded-2xl border-2 bg-white px-3 py-3 text-center transition duration-200',
                  'peer-focus-visible:ring-2 peer-focus-visible:ring-saffron-600 peer-focus-visible:ring-offset-2',
                  checked
                    ? 'border-saffron-600 bg-gradient-to-b from-saffron-50 to-white shadow-soft'
                    : 'border-sand-300 hover:border-saffron-300 hover:bg-sand-50'
                )}
              >
                <span className="font-display text-xl font-semibold tabular-nums text-ink-900 sm:text-2xl">
                  {formatINR(preset.amount, lang)}
                </span>
                <span className={cn('mt-0.5 text-xs font-medium', checked ? 'text-saffron-800' : 'text-ink-500')}>
                  {pick(preset.label)}
                </span>
              </span>
              {checked && (
                <CheckCircle2
                  aria-hidden="true"
                  size={20}
                  className="absolute right-2 top-2 rounded-full bg-white text-saffron-600"
                />
              )}
            </label>
          );
        })}
      </div>

      <TextField
        id={customId}
        className="mt-4"
        label={t('donate.form.customAmount')}
        prefix="₹"
        inputMode="numeric"
        autoComplete="off"
        placeholder={t('donate.form.customPlaceholder')}
        value={customValue}
        hint={hint}
        onFocus={() => {
          if (selection.kind !== 'custom' && customValue) onCustomChange(customValue);
        }}
        onChange={(value) => onCustomChange(value.replace(/[^\d]/g, '').slice(0, 7))}
      />

      {error && (
        <p id={errorId} className="mt-2 text-sm text-kumkum-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
