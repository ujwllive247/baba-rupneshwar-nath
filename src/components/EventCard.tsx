import { NavLink } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, Hourglass, MapPin } from 'lucide-react';
import type { TempleEvent } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { daysUntil, formatDateRange, formatDayMonth, formatTime, toDateTimeAttr } from '@/utils/format';
import { cn } from '@/utils/cn';

interface EventCardProps {
  event: TempleEvent;
  className?: string;
  /** Renders as a plain div slide inside the carousel instead of a standalone card link wrapper. */
  variant?: 'card' | 'slide';
}

export function EventCard({ event, className, variant = 'card' }: EventCardProps) {
  if (variant === 'slide') return <EventSlideCard event={event} className={className} />;
  return <EventListCard event={event} className={className} />;
}

/** "Today" / "Tomorrow" / "In 5 days" for an upcoming event; null otherwise. */
function useCountdown(event: TempleEvent): string | null {
  const { t } = useLanguage();
  if (event.status !== 'upcoming') return null;
  const days = daysUntil(event.date);
  if (days === null || days < 0) return null;
  if (days === 0) return t('events.countdown.today');
  if (days === 1) return t('events.countdown.tomorrow');
  return t('events.countdown.inDays', { count: days });
}

/**
 * Carousel slide: the whole card is one click target (the "View details" link
 * is stretched over it), with a calendar tile, a countdown chip and a compact
 * time · place row.
 */
function EventSlideCard({ event, className }: Omit<EventCardProps, 'variant'>) {
  const { t, lang, pick } = useLanguage();
  const title = lang === 'hi' ? event.titleHindi : event.titleEnglish;
  const description = lang === 'hi' ? event.descriptionHindi : event.descriptionEnglish;
  const dayMonth = formatDayMonth(event.date, lang);
  const countdown = useCountdown(event);

  return (
    <article className={cn('card-interactive group relative flex h-full flex-col', className)}>
      <div className="relative">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-sand-200">
          <img
            src={event.image}
            alt={pick(event.imageAlt)}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-t-2xl bg-gradient-to-b from-night-900/40 to-transparent"
          />
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-saffron-700 shadow-sm">
          {t(`events.category.${event.category}`)}
        </span>
        {event.status !== 'upcoming' ? (
          <span className="absolute right-3 top-3 rounded-full bg-night-900/85 px-2.5 py-1 text-xs font-semibold text-white">
            {t(`events.status.${event.status}`)}
          </span>
        ) : (
          countdown && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-saffron-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
              <Hourglass aria-hidden="true" size={12} />
              {countdown}
            </span>
          )
        )}

        {/* Decorative calendar tile; the full date is in the <dl> below. */}
        <span
          aria-hidden="true"
          className="absolute -bottom-7 left-5 flex w-16 flex-col items-center overflow-hidden rounded-xl bg-white text-center leading-none shadow-lift ring-1 ring-sand-200"
        >
          <span className="w-full bg-saffron-600 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
            {dayMonth.month}
          </span>
          <span className="py-1.5 font-display text-2xl font-semibold text-ink-900">
            {dayMonth.day}
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-10">
        <div>
          <h3 className="break-words font-display text-lg font-semibold leading-snug text-ink-900 transition-colors [overflow-wrap:anywhere] group-hover:text-saffron-700">
            {event.titleHindi}
          </h3>
          <p className="break-words text-sm text-ink-500 [overflow-wrap:anywhere]">
            {event.titleEnglish}
          </p>
        </div>

        <p className="line-clamp-2 text-sm text-ink-600">{description}</p>

        <dl className="mt-auto space-y-1.5 border-t border-sand-200 pt-3 text-sm text-ink-600">
          <div className="flex items-center gap-2">
            <CalendarDays aria-hidden="true" size={15} className="shrink-0 text-saffron-600" />
            <dt className="sr-only">{t('common.date')}</dt>
            <dd>
              <time dateTime={toDateTimeAttr(event.date)}>
                {formatDateRange(event.date, event.endDate, lang)}
              </time>
            </dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <div className="flex items-center gap-2">
              <Clock aria-hidden="true" size={15} className="shrink-0 text-saffron-600" />
              <dt className="sr-only">{t('common.time')}</dt>
              <dd className="whitespace-nowrap">
                {formatTime(event.startTime, lang)} – {formatTime(event.endTime, lang)}
              </dd>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <MapPin aria-hidden="true" size={15} className="shrink-0 text-saffron-600" />
              <dt className="sr-only">{t('common.location')}</dt>
              <dd className="min-w-0 truncate">{pick(event.location)}</dd>
            </div>
          </div>
        </dl>

        <NavLink
          to={PATHS.eventDetail(event.slug)}
          className="inline-flex w-fit items-center gap-1.5 rounded-full text-sm font-semibold text-saffron-700 after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-saffron-600"
        >
          {t('common.viewDetails')}
          <span className="sr-only"> — {title}</span>
          <ArrowRight
            aria-hidden="true"
            size={16}
            className="transition-transform motion-safe:group-hover:translate-x-1"
          />
        </NavLink>
      </div>
    </article>
  );
}

/** Standalone card for the Events listing and "Other events" grids. */
function EventListCard({ event, className }: Omit<EventCardProps, 'variant'>) {
  const { t, lang, pick } = useLanguage();
  const title = lang === 'hi' ? event.titleHindi : event.titleEnglish;
  const description = lang === 'hi' ? event.descriptionHindi : event.descriptionEnglish;

  return (
    <article className={cn('card-interactive flex h-full flex-col overflow-hidden', className)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-200">
        <img
          src={event.image}
          alt={pick(event.imageAlt)}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-saffron-700 shadow-sm">
          {t(`events.category.${event.category}`)}
        </span>
        {event.status !== 'upcoming' && (
          <span className="absolute right-3 top-3 rounded-full bg-night-900/85 px-2.5 py-1 text-xs font-semibold text-white">
            {t(`events.status.${event.status}`)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="break-words font-display text-lg font-semibold leading-snug text-ink-900 [overflow-wrap:anywhere]">
            {event.titleHindi}
          </h3>
          <p className="break-words text-sm text-ink-500 [overflow-wrap:anywhere]">
            {event.titleEnglish}
          </p>
        </div>

        <p className="line-clamp-2 text-sm text-ink-600">{description}</p>

        <dl className="mt-1 space-y-1.5 text-sm text-ink-600">
          <div className="flex items-center gap-2">
            <CalendarDays aria-hidden="true" size={16} className="shrink-0 text-saffron-600" />
            <dt className="sr-only">{t('common.date')}</dt>
            <dd>
              <time dateTime={toDateTimeAttr(event.date)}>
                {formatDateRange(event.date, event.endDate, lang)}
              </time>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock aria-hidden="true" size={16} className="shrink-0 text-saffron-600" />
            <dt className="sr-only">{t('common.time')}</dt>
            <dd>
              {formatTime(event.startTime, lang)} – {formatTime(event.endTime, lang)}
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin aria-hidden="true" size={16} className="shrink-0 text-saffron-600" />
            <dt className="sr-only">{t('common.location')}</dt>
            <dd className="min-w-0 break-words">{pick(event.location)}</dd>
          </div>
        </dl>

        <NavLink
          to={PATHS.eventDetail(event.slug)}
          className="btn-outline mt-auto w-full sm:w-fit"
        >
          {t('common.viewDetails')}
          <span className="sr-only"> — {title}</span>
        </NavLink>
      </div>
    </article>
  );
}
