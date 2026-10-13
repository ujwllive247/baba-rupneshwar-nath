import { useEffect, useRef, useState } from 'react';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';
import type { Donation } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { getCampaignById } from '@/data/campaigns';
import { DEMO_PROCESSING_MS } from '@/data/donationConfig';
import { donationService } from '@/services/donation/donationService';
import { DONATION_ID_PATTERN } from '@/services/donation/ids';
import { latestAttempt } from '@/services/donation/status';
import { DonationSteps } from '@/components/donation/DonationSteps';
import { DemoPaymentBanner } from '@/components/donation/DemoPaymentBanner';
import { QrPaymentPanel } from '@/components/donation/QrPaymentPanel';
import { PaymentStatusMessage, type PaymentViewState } from '@/components/donation/PaymentStatusMessage';
import { DemoPaymentControls } from '@/components/donation/DemoPaymentControls';
import { DonationSummaryCard } from '@/components/donation/DonationSummaryCard';
import { DonationNotFound } from '@/components/donation/DonationNotFound';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function DonatePayment() {
  const { t } = useLanguage();
  const { donationId = '' } = useParams();
  const navigate = useNavigate();
  usePageMeta({
    title: t('donate.payment.pageTitle'),
    description: t('donate.metaDescription'),
    path: PATHS.donate,
    noindex: true,
  });

  // undefined = loading, null = not found
  const [donation, setDonation] = useState<Donation | null | undefined>(undefined);
  const [processing, setProcessing] = useState(false);
  const [confirmingCancel, setConfirmingCancel] = useState(false);
  // Shared across StrictMode's double effect run so only one attempt is opened.
  const startRef = useRef<Promise<Donation> | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!DONATION_ID_PATTERN.test(donationId)) {
        setDonation(null);
        return;
      }
      let current = await donationService.getDonation(donationId);
      if (current?.status === 'CREATED') {
        startRef.current ??= donationService.startPayment(donationId).then((result) => result.donation);
        current = await startRef.current;
      }
      if (active) setDonation(current);
    })();
    return () => {
      active = false;
    };
  }, [donationId]);

  if (donation === undefined) {
    return (
      <p role="status" className="container-page py-24 text-center text-ink-500">
        {t('donate.loading')}
      </p>
    );
  }
  if (donation === null) return <DonationNotFound />;
  if (donation.status === 'CONFIRMED') return <Navigate to={PATHS.donateConfirmation(donation.id)} replace />;

  const campaign = getCampaignById(donation.campaignId);
  const attempt = latestAttempt(donation);
  if (!campaign || !attempt) return <DonationNotFound />;

  const view: PaymentViewState = processing
    ? 'processing'
    : donation.status === 'FAILED'
      ? 'failed'
      : donation.status === 'CANCELLED'
        ? 'cancelled'
        : 'pending';
  const isOpen = view === 'pending' || view === 'processing';

  async function simulate(outcome: 'success' | 'failed') {
    if (processing) return;
    setProcessing(true);
    await wait(DEMO_PROCESSING_MS);
    const updated = await donationService.simulatePayment(donationId, outcome);
    if (!mounted.current) return;
    setProcessing(false);
    setDonation(updated);
    if (updated.status === 'CONFIRMED') navigate(PATHS.donateConfirmation(updated.id), { replace: true });
  }

  async function retry() {
    const { donation: updated } = await donationService.startPayment(donationId);
    if (mounted.current) setDonation(updated);
  }

  async function cancel() {
    const updated = await donationService.cancelDonation(donationId);
    if (!mounted.current) return;
    setConfirmingCancel(false);
    setDonation(updated);
  }

  return (
    <div className="bg-sand-50">
      <div className="container-page space-y-8 py-10 sm:py-14">
        <DonationSteps current={1} />

        <div>
          <p className="eyebrow [html[lang=hi]_&]:tracking-normal">{t('donate.steps.payment')}</p>
          <h1 className="mt-1.5 text-2xl font-semibold sm:text-3xl">{t('donate.payment.pageTitle')}</h1>
          <p className="mt-2 text-ink-500">{t('donate.payment.intro')}</p>
        </div>

        {donationService.isDemo && <DemoPaymentBanner />}

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <PaymentStatusMessage state={view} />

            {isOpen && <QrPaymentPanel session={attempt.session} amount={donation.amount} dimmed={processing} />}

            {view === 'failed' && (
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={retry} className="btn-primary min-h-12">
                  <RotateCcw aria-hidden="true" size={18} />
                  {t('donate.payment.retry')}
                </button>
              </div>
            )}

            {view === 'cancelled' && (
              <NavLink to={PATHS.donate} className="btn-primary min-h-12 w-full sm:w-auto">
                {t('donate.payment.startNew')}
              </NavLink>
            )}

            {view === 'pending' && donationService.supportsSimulation && (
              <DemoPaymentControls disabled={processing} onSimulate={simulate} />
            )}

            {(view === 'pending' || view === 'failed') && (
              <div className="rounded-2xl border border-sand-200 bg-white p-4">
                {confirmingCancel ? (
                  <div role="group" aria-labelledby="cancel-confirm-label" className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <p id="cancel-confirm-label" className="flex-1 text-sm font-medium text-ink-800">
                      {t('donate.payment.cancelConfirm')}
                    </p>
                    <button type="button" onClick={cancel} className="btn-outline min-h-11 border-kumkum-600/50 text-kumkum-700 hover:border-kumkum-600 hover:text-kumkum-700">
                      {t('donate.payment.cancelYes')}
                    </button>
                    <button type="button" onClick={() => setConfirmingCancel(false)} className="btn-ghost min-h-11">
                      {t('donate.payment.cancelNo')}
                    </button>
                  </div>
                ) : (
                  <button type="button" onClick={() => setConfirmingCancel(true)} className="btn-ghost min-h-11 px-3 text-kumkum-700">
                    {t('donate.payment.cancel')}
                  </button>
                )}
              </div>
            )}
          </div>

          <DonationSummaryCard
            className="lg:sticky lg:top-24 lg:col-span-5"
            campaign={campaign}
            amount={donation.amount}
            rows={[
              { label: t('donate.payment.donationId'), value: donation.id, mono: true },
              { label: t('donate.payment.attemptId'), value: attempt.id, mono: true },
              { label: t('donate.confirm.donor'), value: donation.donor.name },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
