import { useId, useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface FormValues {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = { name: '', mobile: '', email: '', message: '' };

const MOBILE_PATTERN = /^[6-9]\d{9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Frontend-only contact form. Phase 1 has no backend or email delivery — this
 * validates in the browser and shows a confirmation, matching the scope note
 * in `contact.form.successNote`. Wiring a real submit handler in Phase 2 means
 * replacing only the body of `handleSubmit`.
 */
export function ContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const errorSummaryId = useId();
  const fieldIds = {
    name: useId(),
    mobile: useId(),
    email: useId(),
    message: useId(),
  };

  function validate(current: FormValues): FormErrors {
    const next: FormErrors = {};
    if (current.name.trim().length < 2) next.name = t('contact.form.errorName');
    if (!MOBILE_PATTERN.test(current.mobile.trim())) next.mobile = t('contact.form.errorMobile');
    if (current.email.trim() && !EMAIL_PATTERN.test(current.email.trim())) {
      next.email = t('contact.form.errorEmail');
    }
    if (current.message.trim().length < 10) next.message = t('contact.form.errorMessage');
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function reset() {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div role="status" className="card flex flex-col items-center gap-3 p-8 text-center">
        <CheckCircle2 aria-hidden="true" size={40} className="text-saffron-600" />
        <p className="font-medium text-ink-900">{t('contact.form.success')}</p>
        <p className="text-sm text-ink-500">{t('contact.form.successNote')}</p>
        <button type="button" onClick={reset} className="btn-outline mt-2">
          {t('contact.form.sendAnother')}
        </button>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form noValidate onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      {hasErrors && (
        <div
          id={errorSummaryId}
          role="alert"
          className="rounded-lg border border-kumkum-600/30 bg-kumkum-500/5 p-4 text-sm text-kumkum-700"
        >
          <p className="font-semibold">{t('contact.form.errorSummary')}</p>
          <ul className="mt-1.5 list-inside list-disc space-y-0.5">
            {Object.values(errors).map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <Field
        id={fieldIds.name}
        label={t('contact.form.name')}
        required
        placeholder={t('contact.form.namePlaceholder')}
        value={values.name}
        error={errors.name}
        onChange={(value) => handleChange('name', value)}
        autoComplete="name"
      />

      <Field
        id={fieldIds.mobile}
        label={t('contact.form.mobile')}
        required
        type="tel"
        inputMode="numeric"
        placeholder={t('contact.form.mobilePlaceholder')}
        value={values.mobile}
        error={errors.mobile}
        onChange={(value) => handleChange('mobile', value.replace(/[^\d]/g, '').slice(0, 10))}
        autoComplete="tel-national"
      />

      <Field
        id={fieldIds.email}
        label={t('contact.form.email')}
        optionalLabel={t('contact.form.optional')}
        type="email"
        placeholder={t('contact.form.emailPlaceholder')}
        value={values.email}
        error={errors.email}
        onChange={(value) => handleChange('email', value)}
        autoComplete="email"
      />

      <div>
        <label htmlFor={fieldIds.message} className="mb-1.5 block text-sm font-medium text-ink-800">
          {t('contact.form.message')}
          <span aria-hidden="true" className="ml-1 text-kumkum-600">
            *
          </span>
          <span className="sr-only"> ({t('contact.form.required')})</span>
        </label>
        <textarea
          id={fieldIds.message}
          rows={5}
          required
          placeholder={t('contact.form.messagePlaceholder')}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${fieldIds.message}-error` : undefined}
          onChange={(event) => handleChange('message', event.target.value)}
          className="w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-ink-800 placeholder:text-ink-500/60 focus-visible:border-saffron-500"
        />
        {errors.message && (
          <p id={`${fieldIds.message}-error`} className="mt-1.5 text-sm text-kumkum-600">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-fit">
        {t('contact.form.submit')}
      </button>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  optionalLabel?: string;
  type?: string;
  inputMode?: 'numeric' | 'text';
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  optionalLabel,
  type = 'text',
  inputMode,
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-kumkum-600">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
        {optionalLabel && !required && (
          <span className="ml-1.5 text-xs font-normal text-ink-500">({optionalLabel})</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        required={required}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-ink-800 placeholder:text-ink-500/60 focus-visible:border-saffron-500"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-kumkum-600">
          {error}
        </p>
      )}
    </div>
  );
}
