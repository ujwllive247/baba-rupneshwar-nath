import { forwardRef } from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorSummaryProps {
  title: string;
  /** Field id → message; each entry links to its field. */
  errors: { fieldId: string; message: string }[];
}

/**
 * Announced error list shown above a form after a failed submit. Focusable
 * (tabIndex -1) so the form can move focus here; each item jumps to its field.
 */
export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(function ErrorSummary(
  { title, errors },
  ref
) {
  if (errors.length === 0) return null;
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      className="rounded-xl border border-kumkum-600/30 bg-kumkum-500/5 p-4 text-sm text-kumkum-700 focus:outline-none"
    >
      <p className="flex items-center gap-2 font-semibold">
        <AlertCircle aria-hidden="true" size={18} className="shrink-0" />
        {title}
      </p>
      <ul className="mt-2 list-inside list-disc space-y-1">
        {errors.map(({ fieldId, message }) => (
          <li key={fieldId}>
            <a
              href={`#${fieldId}`}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(fieldId)?.focus();
              }}
              className="underline decoration-kumkum-600/40 underline-offset-2 hover:decoration-kumkum-700"
            >
              {message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
