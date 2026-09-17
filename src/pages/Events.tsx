import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { upcomingEvents, pastEvents } from '@/data/events';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { EventCard } from '@/components/EventCard';

export default function Events() {
  const { t } = useLanguage();
  usePageMeta({
    title: t('events.pageTitle'),
    description: t('events.pageIntro'),
    path: PATHS.events,
  });

  return (
    <>
      <PageHero eyebrow={t('nav.events')} title={t('events.pageTitle')} intro={t('events.pageIntro')} />
      <Breadcrumb items={[{ label: t('nav.events') }]} />

      <div className="container-page space-y-16 pb-20">
        <section>
          <SectionHeading title={t('events.upcoming')} />
          {upcomingEvents.length === 0 ? (
            <p className="mt-6 text-ink-500">{t('events.none')}</p>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>

        <section>
          <SectionHeading title={t('events.past')} />
          {pastEvents.length === 0 ? (
            <p className="mt-6 text-ink-500">{t('events.none')}</p>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
