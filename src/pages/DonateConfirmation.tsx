import { useEffect, useRef, useState } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import { HandHeart, Home, Printer } from 'lucide-react';
import type { Donation } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { donationService } from '@/services/donation/donationService';
import { DONATION_ID_PATTERN } from '@/services/donation/ids';
import { DonationSteps } from '@/components/donation/DonationSteps';
import { DonationNotFound } from '@/components/donation/DonationNotFound';
import { SevaConfirmationCard } from '@/components/donation/SevaConfirmationCard';

export default function DonateConfirmation() {
  const { t } = useLanguage();
  const { donationId = '' } = useParams();
  usePageMeta({
    title: t('donate.confirm.pageTitle'),
    description: t('donate.metaDescription'),
    path: PATHS.donate,
    noindex: true,
  });

  const [donation, setDonation] = useState<Donation | null | undefined>(undefined);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const found = DONATION_ID_PATTERN.test(donationId) ? await donationService.getDonation(donationId) : null;
      if (active) setDonation(found);
    })();
    return () => {
      active = false;
    };
  }, [donationId]);

  const confirmation = donation ? donationService.getConfirmation(donation) : null;
  const confirmedId = confirmation?.donationId;

  // Land screen-reader and keyboard users on the thank-you heading.
  useEffect(() => {
    if (confirmedId) headingRef.current?.focus();
  }, [confirmedId]);

  if (donation === undefined) {
    return (
      <p role="status" className="container-page py-24 text-center text-ink-500">
        {t('donate.loading')}
      </p>
    );
  }
  if (donation === null) return <DonationNotFound />;
  // Never show a confirmation for a donation that is not CONFIRMED.
  if (!confirmation) return <Navigate to={PATHS.donatePayment(donation.id)} replace />;

  return (
    <div className="bg-gradient-to-b from-sand-100/80 to-sand-50">
      <div className="container-page max-w-3xl space-y-8 py-10 sm:py-14">
        <div className="print:hidden">
          <DonationSteps current={2} />
        </div>

        <SevaConfirmationCard ref={headingRef} confirmation={confirmation} />

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center print:hidden">
          <button type="button" onClick={() => window.print()} className="btn-primary min-h-12">
            <Printer aria-hidden="true" size={18} />
            {t('donate.confirm.print')}
          </button>
          <NavLink to={PATHS.donate} className="btn-outline min-h-12">
            <HandHeart aria-hidden="true" size={18} />
            {t('donate.confirm.another')}
          </NavLink>
          <NavLink to={PATHS.home} className="btn-ghost min-h-12">
            <Home aria-hidden="true" size={18} />
            {t('common.backToHome')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
