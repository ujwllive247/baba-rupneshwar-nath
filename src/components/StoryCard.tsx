import { NavLink } from 'react-router-dom';
import type { Story } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { formatDateShort } from '@/utils/format';
import { cn } from '@/utils/cn';

interface StoryCardProps {
  story: Story;
  className?: string;
  /** Larger presentation for the single featured story slot. */
  featured?: boolean;
}

export function StoryCard({ story, className, featured = false }: StoryCardProps) {
  const { t, lang } = useLanguage();
  const title = lang === 'hi' ? story.titleHindi : story.titleEnglish;
  const excerpt = lang === 'hi' ? story.excerptHindi : story.excerptEnglish;

  return (
    <article className={cn('card-interactive flex h-full flex-col overflow-hidden', className)}>
      <NavLink to={PATHS.storyDetail(story.slug)} className="flex h-full flex-col">
        <div
          className={cn(
            'w-full overflow-hidden bg-sand-200',
            featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          )}
        >
          <img
            src={story.image}
            alt={lang === 'hi' ? story.imageAlt.hi : story.imageAlt.en}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-5">
          <span className="eyebrow">{t(`katha.category.${story.category}`)}</span>
          <h3
            className={cn(
              'font-display font-semibold leading-snug text-ink-900',
              featured ? 'text-2xl' : 'text-lg'
            )}
          >
            {story.titleHindi}
          </h3>
          <p className="text-sm text-ink-500">{story.titleEnglish}</p>
          <p className={cn('text-ink-600', featured ? 'text-base' : 'line-clamp-2 text-sm')}>
            {excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-2 text-xs text-ink-500">
            <span>{formatDateShort(story.publishedAt, lang)}</span>
            <span>
              {story.readingMinutes} {t('common.minRead')}
            </span>
          </div>
          <span className="text-sm font-semibold text-saffron-700">
            {t('katha.readStory')}
            <span className="sr-only"> — {title}</span>
          </span>
        </div>
      </NavLink>
    </article>
  );
}
