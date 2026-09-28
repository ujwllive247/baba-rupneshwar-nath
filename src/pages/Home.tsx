import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS, SITE_URL } from '@/routes/paths';
import { announcements } from '@/data/announcements';
import { darshanTimings, aartiTimings } from '@/data/timings';
import { upcomingEvents } from '@/data/events';
import { featuredStory, latestStories } from '@/data/stories';
import { galleryImages } from '@/data/gallery';
import { AnnouncementStrip } from '@/components/AnnouncementStrip';
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
  // Six images for the editorial gallery preview (feature + 2 side + 3 bottom strip)
  const galleryPreview = galleryImages.slice(0, 6);

  // Inject JSON-LD structured data for the temple (HinduTemple / LocalBusiness schema).
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'HinduTemple',
      name: 'Baba Rupneshwar Nath Temple',
      alternateName: 'बाबा रुपनेश्वर नाथ मंदिर',
      description:
        'An ancient seat of Shiva worship where devotees gather each day for darshan, aarti and quiet prayer.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Airport Road, Bhauwara',
        addressLocality: 'Madhubani',
        addressRegion: 'Bihar',
        postalCode: '847212',
        addressCountry: 'IN',
      },
      telephone: '+919472507877',
      email: 'info@babarupneshwarnath.com',
      url: SITE_URL,
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'jsonld-home';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.getElementById('jsonld-home')?.remove();
    };
  }, []);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero
          UI-001 — centred layout, 90svh, prominent mantra, two CTAs.
          Real temple photography replaces hero-temple.svg in Phase 2. */}
      <section className="relative overflow-hidden bg-night-950 text-sand-50">
        {/* Background image — placeholder SVG until real photography is provided */}
        <img
          src="/images/hero-temple.svg"
          alt={t('hero.imageAlt')}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        {/* Overlay: even semi-transparent wash keeps centred text readable at all viewports */}
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 via-night-900/55 to-night-950/75" />

        <div className="container-page relative flex min-h-[90svh] flex-col items-center justify-center gap-6 py-24 text-center">
          {/* Mantra — increased prominence per UI/UX baseline */}
          <p className="font-devanagari text-3xl text-saffron-300 drop-shadow-lg sm:text-4xl">
            {t('site.mantra')}
          </p>

          {/* Decorative divider between mantra and temple name */}
          <div aria-hidden="true" className="h-px w-20 bg-gold-400/50" />

          {/* Temple name / page H1 */}
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
            {t('hero.welcome')}
          </h1>

          {/* Tagline */}
          <p className="max-w-xl text-base leading-relaxed text-sand-200 drop-shadow sm:text-lg">
            {t('hero.intro')}
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <NavLink to={PATHS.darshan} className="btn-primary">
              {t('hero.ctaPrimary')}
            </NavLink>
            <NavLink
              to={PATHS.katha}
              className="btn-outline border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              {t('hero.ctaSecondary')}
            </NavLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center" aria-hidden="true">
          <span className="flex animate-bounce flex-col items-center text-sand-400/70">
            <ArrowDown size={20} />
          </span>
        </div>
        <span className="sr-only">{t('hero.scroll')}</span>
      </section>

      {/* --------------------------------------------------------- Announcement
          UI-002 — slim strip; conditional on data; priority-coded background. */}
      {topAnnouncement && <AnnouncementStrip announcement={topAnnouncement} />}

      {/* ------------------------------------------------------------- Darshan
          UI-003 — eyebrow/title duplication bug fixed; cards grouped by kind;
          2-col per group gives each card adequate breathing room. */}
      <section className="container-page py-16 sm:py-20">
        {/* No eyebrow here: the previous eyebrow t('nav.darshan') = "Darshan-Aarti"
            duplicated the title t('darshan.title') = "Darshan & Aarti Timings". */}
        <SectionHeading title={t('darshan.title')} subtitle={t('darshan.subtitle')} />

        <div className="mt-10 space-y-8">
          {/* Darshan timings group */}
          <div>
            <p className="eyebrow mb-4">{t('darshan.darshanHeading')}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <TimingCard timing={darshanTimings[0]} icon="Sunrise" />
              <TimingCard timing={darshanTimings[1]} icon="Sunset" />
            </div>
          </div>

          {/* Aarti timings group */}
          <div>
            <p className="eyebrow mb-4">{t('darshan.aartiHeading')}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <TimingCard timing={aartiTimings[0]} icon="Sun" />
              <TimingCard timing={aartiTimings[1]} icon="Moon" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <NavLink
            to={PATHS.darshan}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            {t('darshan.viewFull')}
            <ArrowRight aria-hidden="true" size={16} />
          </NavLink>
        </div>
      </section>

      {/* --------------------------------------------------------------- Events
          UI-004 — horizontal scroll-snap carousel; unchanged from Phase 0. */}
      <section className="bg-sand-100/70 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={t('nav.events')} title={t('events.title')} subtitle={t('events.subtitle')} />
        </div>
        <div className="container-page mt-8">
          <EventCarousel events={upcomingEvents} />
        </div>
        <div className="container-page mt-8">
          <NavLink
            to={PATHS.events}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            {t('events.allEvents')}
            <ArrowRight aria-hidden="true" size={16} />
          </NavLink>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Katha
          UI-005 — featured + standard story grid; unchanged from Phase 0. */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow={t('nav.katha')} title={t('katha.title')} subtitle={t('katha.subtitle')} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStory && (
            <StoryCard
              story={featuredStory}
              featured
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
            />
          )}
          {latestStories
            .filter((story) => story.id !== featuredStory?.id)
            .slice(0, 4)
            .map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
        </div>
        <div className="mt-8">
          <NavLink
            to={PATHS.katha}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-saffron-700 hover:text-saffron-800"
          >
            {t('katha.all')}
            <ArrowRight aria-hidden="true" size={16} />
          </NavLink>
        </div>
      </section>

      {/* --------------------------------------------------------- About preview
          UI-006 — dark section with temple-grid texture for visual depth;
          image aspect-ratio set so it renders correctly before real photography. */}
      <section className="bg-night-900 bg-temple-grid py-16 text-sand-100 sm:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
            <img
              src="/images/about-temple.svg"
              alt={t('about.previewTitle')}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow text-saffron-400">{t('about.previewEyebrow')}</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{t('about.previewTitle')}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-sand-300">{t('about.previewBody')}</p>
            <NavLink to={PATHS.about} className="btn-primary mt-6">
              {t('about.readMore')}
              <ArrowRight aria-hidden="true" size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Gallery preview
          UI-007 — editorial mosaic layout replaces the uniform equal-square grid.
          Layout (sm+): large feature (left, 2-col × 2-row) + 2 side images (right
          stack) + 3 bottom-strip images. Mobile shows feature (full-width) + 4
          square thumbnails; 6th image hidden to avoid overflow.
          Placeholder SVGs remain in place until the temple photograph archive
          is published — swapping src is all that will be needed. */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={t('nav.gallery')} title={t('gallery.previewTitle')} />

          <ul
            aria-label={t('gallery.title')}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            {/* [0] Feature image — full-width 16:9 on mobile; 2-col × 2-row on sm+ */}
            <li className="col-span-2 overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200 sm:col-span-2 sm:row-span-2">
              <img
                src={galleryPreview[0].src}
                alt={pick(galleryPreview[0].alt)}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover sm:aspect-auto sm:h-full"
              />
            </li>

            {/* [1] Side image — right col, row 1 on sm+ */}
            <li className="aspect-[4/3] overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200">
              <img
                src={galleryPreview[1].src}
                alt={pick(galleryPreview[1].alt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>

            {/* [2] Side image — right col, row 2 on sm+ */}
            <li className="aspect-[4/3] overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200">
              <img
                src={galleryPreview[2].src}
                alt={pick(galleryPreview[2].alt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>

            {/* [3] Bottom strip — col 1 on sm+ */}
            <li className="aspect-[4/3] overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200">
              <img
                src={galleryPreview[3].src}
                alt={pick(galleryPreview[3].alt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>

            {/* [4] Bottom strip — col 2 on sm+ */}
            <li className="aspect-[4/3] overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200">
              <img
                src={galleryPreview[4].src}
                alt={pick(galleryPreview[4].alt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>

            {/* [5] Bottom strip col 3 — hidden on mobile (2-col grid already shows 5 images) */}
            <li className="hidden aspect-[4/3] overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200 sm:block">
              <img
                src={galleryPreview[5].src}
                alt={pick(galleryPreview[5].alt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </li>
          </ul>

          <div className="mt-8">
            <NavLink to={PATHS.gallery} className="btn-outline">
              {t('gallery.viewFull')}
            </NavLink>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Visit Us
          UI-008 — tonal strip; address, landmark, directions, map placeholder. */}
      <section className="bg-sand-100/70 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={t('reach.title')} title={t('reach.title')} subtitle={t('reach.subtitle')} />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="card p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                  {t('reach.address')}
                </h3>
                <p className="mt-1.5 text-ink-800">{pick(templeInfo.address)}</p>
              </div>
              <div className="card p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                  {t('reach.landmark')}
                </h3>
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
