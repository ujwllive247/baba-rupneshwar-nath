import { ArrowDown, Building2, Flame, HeartHandshake, Lock, Mountain, ReceiptText, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { constructionCampaign as campaign } from '@/data/campaigns';
import { donationService } from '@/services/donation/donationService';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SectionHeading } from '@/components/SectionHeading';
import { PlaceholderNotice } from '@/components/PlaceholderNotice';
import { FundProgress } from '@/components/donation/FundProgress';
import { ConstructionMilestones } from '@/components/donation/ConstructionMilestones';
import { TransparencyPanel } from '@/components/donation/TransparencyPanel';
import { DonationForm } from '@/components/donation/DonationForm';
import { DonationSummaryCard } from '@/components/donation/DonationSummaryCard';
import { DemoPaymentBanner } from '@/components/donation/DemoPaymentBanner';
import { ConstructionReveal } from '@/components/donation/ConstructionReveal';

const FORM_ID = 'donate-form';
const TRANSPARENCY_ID = 'transparency';

/**
 * Concept image of the finished temple shown on hover over the hero photo.
 * It is an illustration, not the approved design — leave undefined to show
 * only the construction photo.
 */
const COMPLETED_CONCEPT_IMAGE: string | undefined = '/images/temple-completed-concept.jpg';

const PURPOSE_ICONS: Record<string, typeof Sparkles> = {
  garbhagriha: Flame,
  shikhara: Mountain,
  mandap: Building2,
  facilities: HeartHandshake,
};

export default function Donate() {
  const { t, pick } = useLanguage();
  usePageMeta({
    title: t('donate.pageTitle'),
    description: t('donate.metaDescription'),
    path: PATHS.donate,
    image: '/images/temple-construction-aerial.jpg',
  });

  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-sand-100">
        <div aria-hidden="true" className="absolute inset-0 bg-temple-grid opacity-60" />
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-saffron-500/20 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-saffron-400 [html[lang=hi]_&]:tracking-normal">
              <Sparkles aria-hidden="true" size={14} />
              {pick(campaign.title)}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {pick(campaign.tagline)}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-300 sm:text-lg">{pick(campaign.message)}</p>
            {campaign.isSample && (
              <p className="mt-5 inline-flex rounded-full border border-dashed border-gold-400/70 px-3 py-1 text-xs font-semibold text-gold-400">
                {t('donate.heroSampleChip')}
              </p>
            )}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`#${FORM_ID}`} className="btn-primary min-h-12 text-base">
                {t('donate.ctaDonate')}
                <ArrowDown aria-hidden="true" size={18} />
              </a>
              <a
                href={`#${TRANSPARENCY_ID}`}
                className="btn-outline min-h-12 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                {t('donate.ctaHowFundsUsed')}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand-300">
              <li className="flex items-center gap-2">
                <ReceiptText aria-hidden="true" size={16} className="text-gold-400" />
                {t('donate.trust.recordsTitle')}
              </li>
              <li className="flex items-center gap-2">
                <Lock aria-hidden="true" size={16} className="text-gold-400" />
                {t('donate.trust.safetyTitle')}
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden="true" className="absolute -inset-3 rotate-2 rounded-[2rem] bg-saffron-500/25" />
            <ConstructionReveal
              currentSrc="/images/temple-construction-aerial.jpg"
              completedSrc={COMPLETED_CONCEPT_IMAGE}
              width={1280}
              height={720}
            />
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: t('donate.pageTitle') }]} />

      <div className="container-page space-y-16 pb-20 sm:space-y-20">
        {campaign.isSample && <PlaceholderNotice message={t('donate.sampleNotice')} />}

        <FundProgress campaign={campaign} />

        {/* ------------------------------------------------------- Purposes */}
        <section>
          <SectionHeading title={t('donate.purpose.heading')} subtitle={t('donate.purpose.subtitle')} />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {campaign.purposes.map((purpose) => {
              const Icon = PURPOSE_ICONS[purpose.id] ?? Sparkles;
              return (
                <li key={purpose.id} className="card-interactive group p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron-500 to-kumkum-500 text-white shadow-soft transition motion-safe:group-hover:scale-105">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{pick(purpose.title)}</h3>
                  <p className="mt-1.5 text-sm text-ink-600">{pick(purpose.description)}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ----------------------------------------------------- Milestones */}
        <section className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title={t('donate.milestones.heading')} subtitle={t('donate.milestones.subtitle')} />
          </div>
          <div className="lg:col-span-8">
            <ConstructionMilestones milestones={campaign.milestones} />
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------------ Form */}
      <section
        id={FORM_ID}
        aria-labelledby="donate-form-heading"
        className="scroll-mt-20 border-y border-sand-200 bg-sand-100/70 py-16 sm:py-20"
      >
        <div className="container-page space-y-8">
          <div>
            <p className="eyebrow [html[lang=hi]_&]:tracking-normal">{pick(campaign.title)}</p>
            <h2 id="donate-form-heading" className="mt-1.5 text-2xl font-semibold sm:text-3xl">
              {t('donate.form.heading')}
            </h2>
            <p className="mt-2.5 max-w-2xl text-ink-500">{t('donate.form.subtitle')}</p>
          </div>
          {donationService.isDemo && <DemoPaymentBanner />}
          <DonationForm
            campaign={campaign}
            aside={(amount) => (
              <DonationSummaryCard
                campaign={campaign}
                amount={amount}
                footer={
                  <p className="flex items-start gap-2 text-xs leading-relaxed text-sand-300">
                    <Lock aria-hidden="true" size={14} className="mt-0.5 shrink-0 text-gold-400" />
                    {t('donate.summary.secureNote')}
                  </p>
                }
              />
            )}
          />
        </div>
      </section>

      {/* ---------------------------------------------------- Transparency */}
      <section id={TRANSPARENCY_ID} className="container-page scroll-mt-20 py-16 sm:py-20">
        <SectionHeading title={t('donate.trust.heading')} subtitle={t('donate.trust.subtitle')} />
        <div className="mt-8">
          <TransparencyPanel />
        </div>
      </section>
    </>
  );
}
