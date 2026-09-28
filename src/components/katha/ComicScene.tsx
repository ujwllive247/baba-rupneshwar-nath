import type { ComicSceneData } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/utils/cn';
import { NarrationBox } from './NarrationBox';
import { DialogueBubble } from './DialogueBubble';

interface ComicSceneProps {
  scene: ComicSceneData;
  total: number;
}

/** One comic panel: image, scene number, narration, and dialogue. Fades up into view on scroll. */
export function ComicScene({ scene, total }: ComicSceneProps) {
  const { t, pick } = useLanguage();
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id={scene.id}
      data-scene-number={scene.sceneNumber}
      ref={ref}
      aria-labelledby={`${scene.id}-heading`}
      className={cn(
        'scroll-mt-28 transition-all duration-700 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      )}
    >
      <div className="overflow-hidden rounded-3xl bg-night-900 shadow-lift ring-1 ring-white/5">
        <div className="aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
          <img
            src={scene.image}
            alt={pick(scene.imageAlt)}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
          <span className="eyebrow text-saffron-400">
            {t('kathaAnubhav.sceneLabel', { current: scene.sceneNumber, total })}
          </span>
          <h2 id={`${scene.id}-heading`} className="font-display text-2xl font-semibold text-sand-50 sm:text-3xl">
            {pick(scene.heading)}
          </h2>
          <NarrationBox tone="dark">{pick(scene.narration)}</NarrationBox>
          {scene.detail && <p className="text-sm italic leading-relaxed text-sand-300/90 sm:text-base">{pick(scene.detail)}</p>}
          {scene.dialogue && scene.dialogue.length > 0 && (
            <div className="space-y-4 pt-2">
              {scene.dialogue.map((entry, index) => (
                <DialogueBubble
                  key={index}
                  speaker={pick(entry.speaker)}
                  line={pick(entry.line)}
                  align={index % 2 === 0 ? 'left' : 'right'}
                  tone="dark"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
