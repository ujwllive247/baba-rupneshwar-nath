import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'id' | 'prefix'> {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  /** Screen-reader text for the visual asterisk, in the active language. */
  requiredLabel?: string;
  optionalLabel?: string;
  /** Visual prefix inside the field, e.g. "₹". */
  prefix?: ReactNode;
}

/**
 * Labelled text input — same treatment as the contact form's fields, shared
 * for new forms. Hint and error are both wired to `aria-describedby`.
 */
export function TextField({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  required,
  requiredLabel = 'required',
  optionalLabel,
  prefix,
  className,
  ...inputProps
}: TextFieldProps) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-kumkum-600">
              *
            </span>
            <span className="sr-only"> ({requiredLabel})</span>
          </>
        )}
        {optionalLabel && !required && (
          <span className="ml-1.5 text-xs font-normal text-ink-500">({optionalLabel})</span>
        )}
      </label>
      <div className="relative">
        {prefix && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-4 flex items-center font-semibold text-ink-500"
          >
            {prefix}
          </span>
        )}
        <input
          id={id}
          required={required}
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            'min-h-12 w-full rounded-xl border bg-white px-4 py-2.5 text-ink-800 transition placeholder:text-ink-500/60 focus-visible:border-saffron-500',
            error ? 'border-kumkum-600' : 'border-sand-300',
            prefix ? 'pl-9' : undefined
          )}
          {...inputProps}
        />
      </div>
      {hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-kumkum-600">
          {error}
        </p>
      )}
    </div>
  );
}
