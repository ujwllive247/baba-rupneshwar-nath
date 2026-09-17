import { NavLink } from 'react-router-dom';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import type { TempleEvent } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { formatDateRange, formatTime, toDateTimeAttr } from '@/utils/format';
import { cn } from '@/utils/cn';

interface EventCardProps {
  event: TempleEvent;
  className?: string;
  /** Renders as a plain div slide inside the carousel instead of a standalone card link wrapper. */
  variant?: 'card' | 'slide';
}

export function EventCard({ event, className, variant = 'card' }: EventCardProps) {
  const { t, lang, pick } = useLanguage();
  const title = lang === 'hi' ? event.titleHindi : event.titleEnglish;
  const description = lang === 'hi' ? event.descriptionHindi : event.descriptionEnglish;

  return (
    <article
      className={cn(
        variant === 'card' ? 'card-interactive' : 'card',
        'flex h-full flex-col overflow-hidden',
        className
      )}
    >
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
          <h3 className="font-display text-lg font-semibold leading-snug text-ink-900">
            {event.titleHindi}
          </h3>
          <p className="text-sm text-ink-500">{event.titleEnglish}</p>
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
            <dd>{pick(event.location)}</dd>
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
