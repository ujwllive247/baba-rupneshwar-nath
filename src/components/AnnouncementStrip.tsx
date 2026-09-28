import { NavLink } from 'react-router-dom';
import { Bell, ArrowRight } from 'lucide-react';
import type { Announcement } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

interface AnnouncementStripProps {
  announcement: Announcement;
}

/**
 * Slim full-width announcement strip for the homepage only.
 * Interior-page announcement cards use AnnouncementBanner instead.
 *
 * UI-002
 */
export function AnnouncementStrip({ announcement }: AnnouncementStripProps) {
  const { t, lang } = useLanguage();
  const title = lang === 'hi' ? announcement.titleHindi : announcement.titleEnglish;

  return (
    <section
      aria-label={t('announcement.label')}
      className={cn(
        'w-full',
        announcement.priority === 'high' ? 'bg-kumkum-500' : 'bg-saffron-600'
      )}
    >
      <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-sm text-white">
        <Bell aria-hidden="true" size={14} className="shrink-0 opacity-80" />
        <span className="font-semibold">{t('announcement.eyebrow')}</span>
        <span aria-hidden="true" className="hidden sm:inline">—</span>
        <span className="text-center sm:text-left">{title}</span>
        {announcement.link && (
          <NavLink
            to={announcement.link}
            className="inline-flex shrink-0 items-center gap-1 font-semibold underline underline-offset-2 hover:no-underline"
          >
            {t('common.viewDetails')}
            <ArrowRight aria-hidden="true" size={13} />
          </NavLink>
        )}
      </div>
    </section>
  );
}
