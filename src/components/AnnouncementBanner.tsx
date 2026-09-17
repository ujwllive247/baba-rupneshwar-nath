import { NavLink } from 'react-router-dom';
import { Megaphone, ArrowRight } from 'lucide-react';
import type { Announcement } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { formatDate } from '@/utils/format';
import { cn } from '@/utils/cn';

interface AnnouncementBannerProps {
  announcement: Announcement;
}

/** Highlighted temple announcement shown near the top of the home page. */
export function AnnouncementBanner({ announcement }: AnnouncementBannerProps) {
  const { t, lang } = useLanguage();
  const title = lang === 'hi' ? announcement.titleHindi : announcement.titleEnglish;
  const body = lang === 'hi' ? announcement.bodyHindi : announcement.bodyEnglish;

  return (
    <section aria-label={t('announcement.label')} className="container-page -mt-8 sm:-mt-10">
      <div
        className={cn(
          'card flex flex-col gap-3 border-l-4 p-5 shadow-lift sm:flex-row sm:items-center sm:gap-4 sm:p-6',
          announcement.priority === 'high' ? 'border-l-kumkum-600' : 'border-l-saffron-500'
        )}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron-50 text-saffron-700">
          <Megaphone aria-hidden="true" size={22} />
        </span>
        <div className="flex-1">
          <p className="eyebrow">{t('announcement.eyebrow')}</p>
          <h2 className="mt-0.5 text-lg font-semibold text-ink-900">{title}</h2>
          <p className="mt-1 text-sm text-ink-600">{body}</p>
          <p className="mt-1.5 text-xs text-ink-500">{formatDate(announcement.date, lang)}</p>
        </div>
        {announcement.link && (
          <NavLink
            to={announcement.link}
            className="btn-outline w-full shrink-0 sm:w-fit"
          >
            {t('common.viewDetails')}
            <ArrowRight aria-hidden="true" size={16} />
          </NavLink>
        )}
      </div>
    </section>
  );
}
