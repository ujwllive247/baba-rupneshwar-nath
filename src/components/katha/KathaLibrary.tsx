import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import type { KathaChapter } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { cn } from '@/utils/cn';

interface KathaLibraryProps {
  chapters: KathaChapter[];
  className?: string;
}

/** Data-driven grid of immersive Katha chapters — adding a chapter to the data file is enough to add a card here. */
export function KathaLibrary({ chapters, className }: KathaLibraryProps) {
  const { t, pick } = useLanguage();

  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {chapters.map((chapter) => (
        <article key={chapter.id} className="card-interactive flex h-full flex-col overflow-hidden">
          <NavLink to={PATHS.kathaAnubhavDetail(chapter.slug)} className="flex h-full flex-col">
            <div className="aspect-[16/9] w-full overflow-hidden bg-sand-200">
              <img
                src={chapter.coverImage}
                alt={pick(chapter.coverImageAlt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-5">
              <span className="eyebrow inline-flex items-center gap-1.5">
                <Sparkles aria-hidden="true" size={13} />
                {t('kathaAnubhav.badge')}
              </span>
              <h3 className="font-display text-xl font-semibold leading-snug text-ink-900">{chapter.titleHindi}</h3>
              <p className="text-sm text-ink-500">{chapter.titleEnglish}</p>
              <p className="line-clamp-2 text-sm text-ink-600">{pick(chapter.hook)}</p>
              <span className="mt-auto pt-2 text-sm font-semibold text-saffron-700">
                {t('kathaAnubhav.enterChapter')}
              </span>
            </div>
          </NavLink>
        </article>
      ))}
      <div className="card flex h-full min-h-[16rem] flex-col items-center justify-center gap-2 border-2 border-dashed border-sand-300 bg-sand-100/50 p-8 text-center text-ink-500">
        <Sparkles aria-hidden="true" size={20} className="text-saffron-500" />
        <p className="font-semibold text-ink-700">{t('kathaAnubhav.comingSoonTitle')}</p>
        <p className="text-sm">{t('kathaAnubhav.comingSoonBody')}</p>
      </div>
    </div>
  );
}
