import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2, Lock } from 'lucide-react';
import type { Campaign, Paise } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { DEFAULT_PRESET_INDEX, MAX_AMOUNT, MIN_AMOUNT, PRESET_AMOUNTS } from '@/data/donationConfig';
import { donationService } from '@/services/donation/donationService';
import { createIdempotencyKey } from '@/services/donation/ids';
import { formatINR, rupeesToPaise } from '@/utils/money';
import { TextField } from '@/components/form/TextField';
import { CheckboxField } from '@/components/form/CheckboxField';
import { ErrorSummary } from '@/components/form/ErrorSummary';
import { AmountSelector, type AmountSelection } from './AmountSelector';

const MOBILE_PATTERN = /^[6-9]\d{9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldKey = 'amount' | 'name' | 'mobile' | 'email' | 'consent';

function resolveAmount(selection: AmountSelection, customValue: string): Paise | null {
  if (selection.kind === 'preset') return PRESET_AMOUNTS[selection.index]?.amount ?? null;
  if (!/^\d+$/.test(customValue)) return null;
  return rupeesToPaise(Number(customValue));
}

/**
 * Amount + donor details on one form. Submitting creates the donation and
 * moves to the payment screen; the payment provider is never touched here.
 */
export function DonationForm({ campaign, aside }: { campaign: Campaign; aside?: (amount: Paise | null) => ReactNode }) {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [selection, setSelection] = useState<AmountSelection>({ kind: 'preset', index: DEFAULT_PRESET_INDEX });
  const [customValue, setCustomValue] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  // One key per form instance: a double-submit returns the same donation.
  const idempotencyKey = useRef(createIdempotencyKey());
  const summaryRef = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const ids: Record<FieldKey | 'custom', string> = {
    amount: `${baseId}-amount`,
    custom: `${baseId}-custom`,
    name: `${baseId}-name`,
    mobile: `${baseId}-mobile`,
    email: `${baseId}-email`,
    consent: `${baseId}-consent`,
  };

  const amount = resolveAmount(selection, customValue);
  const min = formatINR(MIN_AMOUNT, lang);
  const max = formatINR(MAX_AMOUNT, lang);

  // Once a field has been flagged, re-check it as the visitor corrects it.
  useEffect(() => {
    if (Object.keys(errors).length === 0) return;
    const current = validate();
    setErrors((previous) => {
      const next = { ...previous };
      let changed = false;
      for (const key of Object.keys(previous) as FieldKey[]) {
        if (!current[key]) {
          delete next[key];
          changed = true;
        }
      }
      return changed ? next : previous;
    });
  }, [selection, customValue, name, mobile, email, consent]);

  // Move focus to the error summary after each failed submit.
  useEffect(() => {
    if (attempt > 0 && Object.keys(errors).length > 0) summaryRef.current?.focus();
  }, [attempt, errors]);

  function validate(): Partial<Record<FieldKey, string>> {
    const next: Partial<Record<FieldKey, string>> = {};
    if (selection.kind === 'custom' && customValue && !/^\d+$/.test(customValue)) {
      next.amount = t('donate.form.errorAmountWhole');
    } else if (amount === null || amount < MIN_AMOUNT || amount > MAX_AMOUNT) {
      next.amount = t('donate.form.errorAmount', { min, max });
    }
    if (name.trim().length < 2) next.name = t('donate.form.errorName');
    if (!MOBILE_PATTERN.test(mobile)) next.mobile = t('donate.form.errorMobile');
    if (email.trim() && !EMAIL_PATTERN.test(email.trim())) next.email = t('donate.form.errorEmail');
    if (!consent) next.consent = t('donate.form.errorConsent');
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const validation = validate();
    setErrors(validation);
    setSubmitError(null);
    setAttempt((value) => value + 1);
    if (Object.keys(validation).length > 0 || amount === null) return;

    setSubmitting(true);
    try {
      const donation = await donationService.createDonation({
        campaignId: campaign.id,
        amount,
        donor: {
          name: name.trim(),
          mobile,
          email: email.trim() || undefined,
          isAnonymous,
        },
        consentAt: new Date().toISOString(),
        idempotencyKey: idempotencyKey.current,
      });
      navigate(PATHS.donatePayment(donation.id));
    } catch {
      setSubmitError(t('donate.form.errorGeneric'));
      setSubmitting(false);
    }
  }

  const summaryErrors = (Object.keys(errors) as FieldKey[]).map((key) => ({
    fieldId: ids[key],
    message: errors[key] as string,
  }));

  return (
    <div className="grid items-start gap-8 lg:grid-cols-12">
      <form noValidate onSubmit={handleSubmit} className="card space-y-8 p-5 sm:p-8 lg:col-span-7">
        <ErrorSummary ref={summaryRef} title={t('donate.form.errorSummary')} errors={summaryErrors} />

        <section aria-labelledby={`${baseId}-step1`} className="space-y-4">
          <StepHeading id={`${baseId}-step1`} number={1} title={t('donate.form.stepAmount')} />
          <AmountSelector
            name={`${baseId}-preset`}
            firstOptionId={ids.amount}
            customId={ids.custom}
            selection={selection}
            customValue={customValue}
            onSelectPreset={(index) => {
              setSelection({ kind: 'preset', index });
              setCustomValue('');
            }}
            onCustomChange={(value) => {
              setSelection({ kind: 'custom' });
              setCustomValue(value);
            }}
            error={errors.amount}
            hint={t('donate.form.amountHint', { min, max })}
          />
        </section>

        <section aria-labelledby={`${baseId}-step2`} className="space-y-5 border-t border-sand-200 pt-8">
          <StepHeading id={`${baseId}-step2`} number={2} title={t('donate.form.stepDetails')} />
          <TextField
            id={ids.name}
            label={t('donate.form.name')}
            required
            requiredLabel={t('donate.form.required')}
            autoComplete="name"
            placeholder={t('donate.form.namePlaceholder')}
            value={name}
            error={errors.name}
            onChange={setName}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              id={ids.mobile}
              label={t('donate.form.mobile')}
              required
              requiredLabel={t('donate.form.required')}
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder={t('donate.form.mobilePlaceholder')}
              value={mobile}
              error={errors.mobile}
              onChange={(value) => setMobile(value.replace(/[^\d]/g, '').slice(0, 10))}
            />
            <TextField
              id={ids.email}
              label={t('donate.form.email')}
              optionalLabel={t('donate.form.optional')}
              type="email"
              autoComplete="email"
              placeholder={t('donate.form.emailPlaceholder')}
              value={email}
              error={errors.email}
              onChange={setEmail}
            />
          </div>
          <CheckboxField
            id={`${baseId}-anonymous`}
            label={t('donate.form.anonymous')}
            hint={t('donate.form.anonymousHint')}
            checked={isAnonymous}
            onChange={setIsAnonymous}
          />
          <CheckboxField
            id={ids.consent}
            label={t('donate.form.consent')}
            required
            requiredLabel={t('donate.form.required')}
            checked={consent}
            error={errors.consent}
            onChange={setConsent}
          />
        </section>

        <div className="space-y-3 border-t border-sand-200 pt-6">
          {submitError && (
            <p role="alert" className="text-sm text-kumkum-600">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            aria-disabled={submitting}
            className="btn-primary min-h-12 w-full text-base aria-disabled:cursor-wait aria-disabled:opacity-80 sm:w-auto"
          >
            {submitting ? (
              <>
                <Loader2 aria-hidden="true" size={18} className="motion-safe:animate-spin" />
                {t('donate.form.submitting')}
              </>
            ) : (
              <>
                {amount !== null && amount >= MIN_AMOUNT && amount <= MAX_AMOUNT
                  ? t('donate.form.submit', { amount: formatINR(amount, lang) })
                  : t('donate.form.submitNoAmount')}
                <ArrowRight aria-hidden="true" size={18} />
              </>
            )}
          </button>
          <p className="flex items-center gap-2 text-xs text-ink-500">
            <Lock aria-hidden="true" size={14} className="shrink-0" />
            {t('donate.summary.secureNote')}
          </p>
        </div>
      </form>

      {aside && <div className="hidden lg:sticky lg:top-24 lg:col-span-5 lg:block">{aside(amount)}</div>}
    </div>
  );
}

function StepHeading({ id, number, title }: { id: string; number: number; title: string }) {
  return (
    <h3 id={id} className="flex items-center gap-3 text-lg font-semibold">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-night-800 font-sans text-sm text-gold-400"
      >
        {number}
      </span>
      {title}
    </h3>
  );
}
