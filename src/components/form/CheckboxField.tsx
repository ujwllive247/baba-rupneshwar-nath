import { cn } from '@/utils/cn';

interface CheckboxFieldProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  hint?: string;
  error?: string;
  required?: boolean;
  requiredLabel?: string;
  className?: string;
}

/** Native checkbox with a large hit area; label, hint and error are all programmatically linked. */
export function CheckboxField({
  id,
  label,
  checked,
  onChange,
  hint,
  error,
  required,
  requiredLabel = 'required',
  className,
}: CheckboxFieldProps) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  return (
    <div className={className}>
      <div
        className={cn(
          'flex items-start gap-3 rounded-xl border bg-white p-4 transition',
          error ? 'border-kumkum-600' : checked ? 'border-saffron-300 bg-saffron-50/60' : 'border-sand-300'
        )}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-sand-400 accent-saffron-600"
        />
        <div className="min-w-0">
          <label htmlFor={id} className="cursor-pointer text-sm font-medium leading-snug text-ink-800">
            {label}
            {required && (
              <>
                <span aria-hidden="true" className="ml-1 text-kumkum-600">
                  *
                </span>
                <span className="sr-only"> ({requiredLabel})</span>
              </>
            )}
          </label>
          {hint && (
            <p id={`${id}-hint`} className="mt-1 text-xs leading-relaxed text-ink-500">
              {hint}
            </p>
          )}
        </div>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-kumkum-600">
          {error}
        </p>
      )}
    </div>
  );
}
