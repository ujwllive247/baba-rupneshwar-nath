import { useEffect, useRef, useState } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { getKathaChapterBySlug } from '@/data/kathaChapters';
import { getStoryBySlug } from '@/data/stories';
import { prefersReducedMotion } from '@/utils/motion';
import { ComicScene } from '@/components/katha/ComicScene';
import { ChapterProgress } from '@/components/katha/ChapterProgress';
import { KathaNavigation } from '@/components/katha/KathaNavigation';
import { KathaSourceNote } from '@/components/katha/KathaSourceNote';

function scrollToScene(sceneNumber: number) {
  document.getElementById(`scene-${sceneNumber}`)?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}

export default function KathaAnubhavChapter() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, pick } = useLanguage();
  const chapter = slug ? getKathaChapterBySlug(slug) : undefined;
  const relatedStory = chapter?.relatedStorySlug ? getStoryBySlug(chapter.relatedStorySlug) : undefined;
  const [currentScene, setCurrentScene] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  usePageMeta({
    title: chapter ? (lang === 'hi' ? chapter.titleHindi : chapter.titleEnglish) : t('notFound.title'),
    description: chapter ? pick(chapter.hook) : t('notFound.body'),
    path: chapter ? PATHS.kathaAnubhavDetail(chapter.slug) : PATHS.kathaAnubhav,
    image: chapter?.coverImage,
    type: 'article',
  });

  // Scrollspy: whichever scene sits closest to the vertical centre of the viewport is "current".
  useEffect(() => {
    if (!chapter || typeof IntersectionObserver === 'undefined') return;
    const sections = Array.from(
      containerRef.current?.querySelectorAll<HTMLElement>('[data-scene-number]') ?? []
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        const sceneNumber = Number((topMost.target as HTMLElement).dataset.sceneNumber);
        if (sceneNumber) setCurrentScene(sceneNumber);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [chapter]);

  // Single global keyboard handler — avoids double-firing if this ever renders more than one nav control.
  useEffect(() => {
    if (!chapter) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.target instanceof HTMLElement && ['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return;
      if (!chapter) return;
      if (event.key === 'ArrowRight' && currentScene < chapter.scenes.length) scrollToScene(currentScene + 1);
      if (event.key === 'ArrowLeft' && currentScene > 1) scrollToScene(currentScene - 1);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [chapter, currentScene]);

  if (!chapter) return <Navigate to={PATHS.kathaAnubhav} replace />;

  const total = chapter.scenes.length;

  return (
    <div ref={containerRef}>
      {/* --------------------------------------------------------- Sticky progress bar */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-night-900/95 backdrop-blur">
        <div className="container-page flex items-center gap-4 py-3">
          <NavLink
            to={PATHS.kathaAnubhav}
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-sand-300 transition hover:text-saffron-300 sm:inline-flex"
          >
            <ArrowLeft aria-hidden="true" size={15} />
            {t('kathaAnubhav.backToLibrary')}
          </NavLink>
          <ChapterProgress
            current={currentScene}
            total={total}
            label={t('kathaAnubhav.sceneProgress', { current: currentScene, total })}
            onJump={scrollToScene}
            className="flex-1"
          />
          <button
            type="button"
            disabled
            aria-disabled="true"
            title={t('kathaAnubhav.audioComingSoon')}
            className="inline-flex shrink-0 cursor-not-allowed items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-sand-300/50 sm:text-sm"
          >
            <Volume2 aria-hidden="true" size={16} />
            <span className="hidden sm:inline">{t('kathaAnubhav.audioLabel')}</span>
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------------------- Hero */}
      <section className="bg-night-900 px-4 pb-14 pt-12 text-sand-100 sm:px-6 sm:pb-20 sm:pt-16">
        <div className="container-page">
          <p className="font-devanagari text-xl text-saffron-300 sm:text-2xl">{t('nav.katha')}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">{chapter.titleHindi}</h1>
          <p className="mt-1.5 max-w-2xl text-base text-sand-400 sm:text-lg">{chapter.titleEnglish}</p>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-sand-200 sm:text-xl">
            {pick(chapter.hook)}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-sand-300">{pick(chapter.introduction)}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => scrollToScene(1)} className="btn-primary">
              {t('kathaAnubhav.startReading')}
            </button>
            {relatedStory && (
              <NavLink to={PATHS.storyDetail(relatedStory.slug)} className="btn-outline border-white/20 bg-white/5 text-sand-100 hover:border-saffron-400 hover:bg-white/10 hover:text-saffron-300">
                {t('kathaAnubhav.readArticleInstead')}
              </NavLink>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Source note */}
      <div className="container-page -mt-8 sm:-mt-10">
        <div className="mx-auto max-w-3xl">
          <KathaSourceNote
            source={chapter.source}
            scriptureNote={chapter.scriptureNote}
            creativeNote={chapter.creativeNote}
            versionsNote={chapter.versionsNote}
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------- Scenes */}
      <div className="bg-sand-50">
        <div className="container-page space-y-10 py-14 sm:space-y-14 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 sm:space-y-14">
            {chapter.scenes.map((scene) => (
              <div key={scene.id}>
                <ComicScene scene={scene} total={total} />
                {scene.sceneNumber < total && (
                  <KathaNavigation
                    className="mt-6"
                    onPrevious={() => scrollToScene(scene.sceneNumber - 1)}
                    onNext={() => scrollToScene(scene.sceneNumber + 1)}
                    hasPrevious={scene.sceneNumber > 1}
                    hasNext
                    previousLabel={t('kathaAnubhav.previousScene')}
                    nextLabel={t('kathaAnubhav.continueKatha')}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ----------------------------------------------------- End of chapter */}
          <div className="mx-auto max-w-3xl rounded-3xl bg-night-900 px-6 py-12 text-center text-sand-100 sm:px-10 sm:py-16">
            <p className="font-devanagari text-3xl text-saffron-300 sm:text-4xl">{t('kathaAnubhav.endTitle')}</p>

            <div className="mx-auto mt-10 max-w-xl text-left">
              <h2 className="text-center text-xl font-semibold text-sand-50">{t('kathaAnubhav.takeawaysHeading')}</h2>
              <ul className="mt-5 space-y-3">
                {chapter.takeaways.map((point, index) => (
                  <li key={index} className="flex gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <span aria-hidden="true" className="mt-0.5 text-saffron-400">
                      ✺
                    </span>
                    <span className="text-sand-100">{pick(point)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto mt-10 max-w-md border-t border-white/10 pt-8">
              <h3 className="text-lg font-semibold text-sand-50">{t('kathaAnubhav.nextChapterHeading')}</h3>
              <p className="mt-2 text-sand-300">{t('kathaAnubhav.nextChapterBody')}</p>
              <NavLink to={PATHS.kathaAnubhav} className="btn-primary mt-6 inline-flex">
                {t('kathaAnubhav.backToLibrary')}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
