import { useState } from 'react';
import { Camera, Eye, EyeOff, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

interface ConstructionRevealProps {
  /** Today's construction photo. */
  currentSrc: string;
  /**
   * Concept image of the finished temple, revealed on hover (pointer devices),
   * on keyboard focus, or with the toggle button (touch). Leave unset to show
   * only the current photo.
   */
  completedSrc?: string;
  width: number;
  height: number;
}

/**
 * Hero photo that cross-fades from the site today to the finished temple.
 * The finished view is always captioned as a concept image so it is never
 * mistaken for a photograph or an approved design.
 */
export function ConstructionReveal({ currentSrc, completedSrc, width, height }: ConstructionRevealProps) {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);
  const [completedFailed, setCompletedFailed] = useState(false);
  const canReveal = Boolean(completedSrc) && !completedFailed;

  // Hover only on devices that really hover, so a tap on a phone does not
  // leave the image stuck; touch uses the toggle button instead.
  const showOnHover = '[@media(hover:hover)]:group-hover:opacity-100';
  const hideOnHover = '[@media(hover:hover)]:group-hover:opacity-0';

  return (
    <figure
      data-revealed={revealed}
      className="group relative overflow-hidden rounded-[1.75rem] border-4 border-gold-400/60 bg-night-800 shadow-lift"
    >
      <img
        src={currentSrc}
        alt={t('donate.heroImageAlt')}
        width={width}
        height={height}
        fetchPriority="high"
        className="aspect-video h-auto w-full object-cover"
      />

      {canReveal && (
        <img
          src={completedSrc}
          alt={t('donate.heroCompletedAlt')}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onError={() => setCompletedFailed(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 ease-out',
            'motion-safe:scale-105 group-data-[revealed=true]:opacity-100 motion-safe:group-data-[revealed=true]:scale-100',
            showOnHover,
            '[@media(hover:hover)]:motion-safe:group-hover:scale-100'
          )}
        />
      )}

      <figcaption className="absolute bottom-3 left-3 right-3 flex flex-wrap items-end justify-between gap-2">
        <span className="relative inline-grid text-xs font-semibold text-sand-100">
          <span
            className={cn(
              'col-start-1 row-start-1 inline-flex items-center gap-1.5 self-end justify-self-start rounded-full bg-night-900/80 px-3 py-1.5 backdrop-blur-sm transition-opacity duration-300',
              canReveal && `group-data-[revealed=true]:opacity-0 ${hideOnHover}`
            )}
          >
            <Camera aria-hidden="true" size={14} className="text-gold-400" />
            {t('donate.heroImageCaption')}
          </span>
          {canReveal && (
            <span
              className={cn(
                'col-start-1 row-start-1 inline-flex items-center gap-1.5 self-end justify-self-start rounded-full bg-night-900/80 px-3 py-1.5 opacity-0 backdrop-blur-sm transition-opacity duration-300',
                'group-data-[revealed=true]:opacity-100',
                showOnHover
              )}
            >
              <Sparkles aria-hidden="true" size={14} className="text-gold-400" />
              {t('donate.heroCompletedCaption')}
            </span>
          )}
        </span>

        {canReveal && (
          <button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            aria-pressed={revealed}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-white/90 px-3 text-xs font-semibold text-ink-900 shadow-sm backdrop-blur-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            {revealed ? <EyeOff aria-hidden="true" size={14} /> : <Eye aria-hidden="true" size={14} />}
            {revealed ? t('donate.heroShowCurrent') : t('donate.heroShowCompleted')}
          </button>
        )}
      </figcaption>
    </figure>
  );
}
