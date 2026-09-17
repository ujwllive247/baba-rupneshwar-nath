import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { announcements } from '@/data/announcements';
import { darshanTimings, aartiTimings } from '@/data/timings';
import { upcomingEvents } from '@/data/events';
import { featuredStory, latestStories } from '@/data/stories';
import { galleryImages } from '@/data/gallery';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';
import { TimingCard } from '@/components/TimingCard';
import { EventCarousel } from '@/components/EventCarousel';
import { StoryCard } from '@/components/StoryCard';
import { SectionHeading } from '@/components/SectionHeading';
import { MapSection } from '@/components/MapSection';
import { templeInfo, directions } from '@/data/temple';

export default function Home() {
  const { t, pick } = useLanguage();
  usePageMeta({
    title: t('site.nameFull'),
    description: t('hero.intro'),
    path: PATHS.home,
  });

  const topAnnouncement = [...announcements].sort((a, b) => b.date.localeCompare(a.date))[0];
  const galleryPreview = galleryImages.slice(0, 8);

  return (
    <>
      {/* -------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-night-900 text-sand-100">
        <img
          src="/images/hero-temple.svg"
          alt={t('hero.imageAlt')}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-900/70 to-night-900/20" />
        <div className="container-page relative flex min-h-[78vh] flex-col justify-end gap-6 py-16 sm:min-h-[85vh] sm:py-20">
          <p className="font-devanagari text-2xl text-saffron-300 sm:text-3xl">{t('site.mantra')}</p>
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            {t('hero.welcome')}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-sand-300 sm:text-lg">
            {t('hero.intro')}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <NavLink to={PATHS.darshan} className="btn-primary">
              {t('hero.ctaPrimary')}
            </NavLink>
            <NavLink to={PATHS.katha} className="btn-outline bg-white/5 text-white hover:bg-white/10 hover:text-white">
              {t('hero.ctaSecondary')}
            </NavLink>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Announcement */}
      {topAnnouncement && <AnnouncementBanner announcement={topAnnouncement} />}

      {/* ------------------------------------------------------------ Darshan */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow={t('darshan.title')} title={t('darshan.title')} subtitle={t('darshan.subtitle')} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TimingCard timing={darshanTimings[0]} icon="Sunrise" />
          <TimingCard timing={darshanTimings[1]} icon="Sunset" />
          <TimingCard timing={aartiTimings[0]} icon="Sun" />
          <TimingCard timing={aartiTimings[1]} icon="Moon" />
        </div>
        <div className="mt-6">
          <NavLink to={PATHS.darshan} className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-700 hover:text-saffron-800">
            {t('darshan.viewFull')}
            <ArrowRight aria-hidden="true" size={16} />
          </NavLink>
        </div>
      </section>

      {/* -------------------------------------------------------------- Events */}
      <section className="bg-sand-100/70 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={t('nav.events')} title={t('events.title')} subtitle={t('events.subtitle')} />
        </div>
        <div className="container-page mt-8">
          <EventCarousel events={upcomingEvents} />
        </div>
        <div className="container-page mt-8">
          <NavLink to={PATHS.events} className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-700 hover:text-saffron-800">
            {t('events.allEvents')}
            <ArrowRight aria-hidden="true" size={16} />
          </NavLink>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Katha */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow={t('nav.katha')} title={t('katha.title')} subtitle={t('katha.subtitle')} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStory && <StoryCard story={featuredStory} featured className="sm:col-span-2 lg:col-span-2 lg:row-span-2" />}
          {latestStories
            .filter((story) => story.id !== featuredStory?.id)
            .slice(0, 4)
            .map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
        </div>
        <div className="mt-8">
          <NavLink to={PATHS.katha} className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-700 hover:text-saffron-800">
            {t('katha.all')}
            <ArrowRight aria-hidden="true" size={16} />
          </NavLink>
        </div>
      </section>

      {/* ----------------------------------------------------------- About preview */}
      <section className="bg-night-900 py-16 text-sand-100 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
            <img
              src="/images/about-temple.svg"
              alt={t('about.previewTitle')}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow text-saffron-400">{t('about.previewEyebrow')}</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{t('about.previewTitle')}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-sand-300">{t('about.previewBody')}</p>
            <NavLink to={PATHS.about} className="btn-primary mt-6">
              {t('about.readMore')}
            </NavLink>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Gallery preview */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow={t('nav.gallery')} title={t('gallery.previewTitle')} />
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {galleryPreview.map((image) => (
            <li key={image.id} className="aspect-square overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200">
              <img
                src={image.src}
                alt={pick(image.alt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <NavLink to={PATHS.gallery} className="btn-outline">
            {t('gallery.viewFull')}
          </NavLink>
        </div>
      </section>

      {/* ------------------------------------------------------------ How to reach */}
      <section className="bg-sand-100/70 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={t('reach.title')} title={t('reach.title')} subtitle={t('reach.subtitle')} />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="card p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">{t('reach.address')}</h3>
                <p className="mt-1.5 text-ink-800">{pick(templeInfo.address)}</p>
              </div>
              <div className="card p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">{t('reach.landmark')}</h3>
                <p className="mt-1.5 text-ink-800">{pick(templeInfo.landmark)}</p>
              </div>
              <div className="card divide-y divide-sand-200 p-5">
                {directions.map((item) => (
                  <div key={item.id} className="py-3 first:pt-0 last:pb-0">
                    <h3 className="text-sm font-semibold text-ink-800">{t(item.labelKey)}</h3>
                    <p className="mt-1 text-sm text-ink-500">{pick(item.detail)}</p>
                  </div>
                ))}
              </div>
            </div>
            <MapSection />
          </div>
        </div>
      </section>
    </>
  );
}
