import { useId, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { StoryCategory } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { stories, featuredStory, popularStories } from '@/data/stories';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { StoryCard } from '@/components/StoryCard';
import { CategoryFilter } from '@/components/CategoryFilter';

const CATEGORIES: StoryCategory[] = [
  'shiv-katha',
  'shiv-puran',
  'mahadev',
  'shiv-parvati',
  'jyotirlinga',
  'ganesh',
  'kartikeya',
  'sawan-vishesh',
  'mahashivratri-vishesh',
  'adhyatmik-gyan',
];

const PAGE_SIZE = 6;

export default function MahadevKatha() {
  const { t, lang } = useLanguage();
  usePageMeta({
    title: t('katha.title'),
    description: t('katha.pageIntro'),
    path: PATHS.katha,
  });

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<StoryCategory | 'all'>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const searchId = useId();

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return stories.filter((story) => {
      if (category !== 'all' && story.category !== category) return false;
      if (!term) return true;
      const title = (lang === 'hi' ? story.titleHindi : story.titleEnglish).toLowerCase();
      const excerpt = (lang === 'hi' ? story.excerptHindi : story.excerptEnglish).toLowerCase();
      return title.includes(term) || excerpt.includes(term);
    });
  }, [query, category, lang]);

  const visibleStories = filtered.slice(0, visibleCount);
  const isFiltering = query.trim().length > 0 || category !== 'all';

  function resetFilters() {
    setQuery('');
    setCategory('all');
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <>
      <PageHero eyebrow={t('nav.katha')} title={t('katha.title')} intro={t('katha.pageIntro')} />
      <Breadcrumb items={[{ label: t('nav.katha') }]} />

      <div className="container-page space-y-14 pb-20">
        {!isFiltering && featuredStory && (
          <section>
            <SectionHeading title={t('katha.featured')} />
            <div className="mt-6">
              <StoryCard story={featuredStory} featured />
            </div>
          </section>
        )}

        {!isFiltering && popularStories.length > 0 && (
          <section>
            <SectionHeading title={t('katha.popular')} />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularStories.slice(0, 3).map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </section>
        )}

        <section>
          <SectionHeading title={isFiltering ? t('katha.all') : t('katha.latest')} />

          <div className="mt-6 space-y-4">
            <div className="relative max-w-md">
              <label htmlFor={searchId} className="sr-only">
                {t('katha.searchLabel')}
              </label>
              <Search
                aria-hidden="true"
                size={18}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500"
              />
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                placeholder={t('katha.searchPlaceholder')}
                className="w-full rounded-full border border-sand-300 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-800 placeholder:text-ink-500/60 focus-visible:border-saffron-500"
              />
            </div>

            <CategoryFilter
              label={t('katha.categoriesLabel')}
              allLabel={t('common.all')}
              categories={CATEGORIES}
              active={category}
              onChange={(value) => {
                setCategory(value);
                setVisibleCount(PAGE_SIZE);
              }}
              getLabel={(value) => t(`katha.category.${value}`)}
            />

            <div className="flex items-center justify-between text-sm text-ink-500">
              <p>{filtered.length === 1 ? t('katha.resultsCountOne') : t('katha.resultsCount', { count: filtered.length })}</p>
              {isFiltering && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 font-medium text-saffron-700 hover:text-saffron-800"
                >
                  <X aria-hidden="true" size={15} />
                  {t('common.clear')}
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-ink-500">{t('katha.noResults')}</p>
          ) : (
            <>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
              {visibleCount < filtered.length && (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                    className="btn-outline"
                  >
                    {t('common.loadMore')}
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
}
