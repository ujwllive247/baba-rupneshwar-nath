import { Navigate, useParams } from 'react-router-dom';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { getEventBySlug, getRelatedEvents } from '@/data/events';
import { formatDateRange, formatTime, toDateTimeAttr } from '@/utils/format';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EventCard } from '@/components/EventCard';
import { SectionHeading } from '@/components/SectionHeading';

export default function EventDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, pick } = useLanguage();
  const event = slug ? getEventBySlug(slug) : undefined;

  usePageMeta({
    title: event ? (lang === 'hi' ? event.titleHindi : event.titleEnglish) : t('notFound.title'),
    description: event ? (lang === 'hi' ? event.descriptionHindi : event.descriptionEnglish) : t('notFound.body'),
    path: event ? PATHS.eventDetail(event.slug) : PATHS.events,
    image: event?.image,
  });

  if (!event) return <Navigate to={PATHS.events} replace />;

  const content = lang === 'hi' ? event.contentHindi : event.contentEnglish;
  const related = getRelatedEvents(event);

  return (
    <>
      <Breadcrumb
        items={[
          { label: t('nav.events'), to: PATHS.events },
          { label: lang === 'hi' ? event.titleHindi : event.titleEnglish },
        ]}
      />

      <article className="container-page pb-20">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={event.image}
            alt={pick(event.imageAlt)}
            className="aspect-[16/8] w-full object-cover sm:aspect-[16/6]"
          />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div>
            <span className="eyebrow">{t(`events.category.${event.category}`)}</span>
            <h1 className="mt-1.5 text-3xl font-semibold text-ink-900 sm:text-4xl">{event.titleHindi}</h1>
            <p className="mt-1 text-lg text-ink-500">{event.titleEnglish}</p>

            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink-500">
              {t('events.aboutEvent')}
            </h2>
            <div className="prose-temple mt-3">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside>
            <div className="card sticky top-24 space-y-4 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                {t('events.details')}
              </h2>
              <dl className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CalendarDays aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-saffron-600" />
                  <div>
                    <dt className="text-ink-500">{t('common.date')}</dt>
                    <dd className="font-medium text-ink-900">
                      <time dateTime={toDateTimeAttr(event.date)}>
                        {formatDateRange(event.date, event.endDate, lang)}
                      </time>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-saffron-600" />
                  <div>
                    <dt className="text-ink-500">{t('common.time')}</dt>
                    <dd className="font-medium text-ink-900">
                      {formatTime(event.startTime, lang)} – {formatTime(event.endTime, lang)}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-saffron-600" />
                  <div>
                    <dt className="text-ink-500">{t('common.location')}</dt>
                    <dd className="font-medium text-ink-900">{pick(event.location)}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <SectionHeading title={t('events.related')} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <EventCard key={item.id} event={item} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
