import { Navigate, useParams } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS, SITE_URL } from '@/routes/paths';
import { getStoryBySlug, getRelatedStories } from '@/data/stories';
import { formatDate } from '@/utils/format';
import { Breadcrumb } from '@/components/Breadcrumb';
import { StoryBody } from '@/components/StoryBody';
import { StoryCard } from '@/components/StoryCard';
import { ShareButtons } from '@/components/ShareButtons';
import { SectionHeading } from '@/components/SectionHeading';

export default function StoryDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, pick } = useLanguage();
  const story = slug ? getStoryBySlug(slug) : undefined;

  usePageMeta({
    title: story ? (lang === 'hi' ? story.titleHindi : story.titleEnglish) : t('notFound.title'),
    description: story ? (lang === 'hi' ? story.excerptHindi : story.excerptEnglish) : t('notFound.body'),
    path: story ? PATHS.storyDetail(story.slug) : PATHS.katha,
    image: story?.image,
    type: 'article',
    publishedTime: story?.publishedAt,
  });

  if (!story) return <Navigate to={PATHS.katha} replace />;

  const related = getRelatedStories(story);
  const shareUrl = `${SITE_URL}${PATHS.storyDetail(story.slug)}`;

  return (
    <>
      <Breadcrumb
        items={[
          { label: t('nav.katha'), to: PATHS.katha },
          { label: lang === 'hi' ? story.titleHindi : story.titleEnglish },
        ]}
      />

      <article className="container-page pb-20">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">{t(`katha.category.${story.category}`)}</span>
          <h1 className="mt-1.5 text-3xl font-semibold text-ink-900 sm:text-4xl">{story.titleHindi}</h1>
          <p className="mt-1 text-lg text-ink-500">{story.titleEnglish}</p>

          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-ink-500">
            <div className="flex gap-1.5">
              <dt className="font-medium text-ink-700">{t('katha.publishedOn')}:</dt>
              <dd>
                <time dateTime={story.publishedAt}>{formatDate(story.publishedAt, lang)}</time>
              </dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="font-medium text-ink-700">{t('katha.author')}:</dt>
              <dd>{pick(story.author)}</dd>
            </div>
            <div>
              {story.readingMinutes} {t('common.minRead')}
            </div>
          </dl>
        </div>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl">
          <img
            src={story.image}
            alt={pick(story.imageAlt)}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <StoryBody blocks={story.body} />

          <div className="mt-8 rounded-xl border border-sand-200 bg-sand-100/70 px-5 py-4">
            <p className="text-sm font-semibold text-ink-800">
              {t('katha.source')}: <span className="font-normal text-ink-600">{pick(story.source)}</span>
            </p>
          </div>

          <div className="mt-8 border-t border-sand-200 pt-6">
            <ShareButtons title={lang === 'hi' ? story.titleHindi : story.titleEnglish} url={shareUrl} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl">
            <SectionHeading title={t('katha.related')} />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <StoryCard key={item.id} story={item} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
