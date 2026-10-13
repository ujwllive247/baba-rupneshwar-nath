import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TempleEvent } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { prefersReducedMotion } from '@/utils/motion';
import { cn } from '@/utils/cn';
import { EventCard } from './EventCard';

interface EventCarouselProps {
  events: TempleEvent[];
}

interface VisibleRange {
  first: number;
  last: number;
}

/**
 * Responsive events carousel — manual only, no autoplay.
 *
 * Slides sit in a native horizontal scroll-snap track, which gives touch and
 * trackpad swipe for free. The prev/next buttons and the track's own
 * ArrowLeft/ArrowRight/Home/End keys step one card at a time. How many cards
 * are visible is decided purely by CSS widths (1 on mobile, 2 on tablet,
 * 3 on desktop); the visible range is then read back from the layout, so the
 * controls and the position counter stay correct at every breakpoint.
 */
export function EventCarousel({ events }: EventCarouselProps) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [range, setRange] = useState<VisibleRange>({ first: 0, last: 0 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(events.length <= 1);
  const trackId = useId();

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    let first = -1;
    let last = -1;
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const rect = slide.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      if (center >= trackRect.left && center <= trackRect.right) {
        if (first === -1) first = index;
        last = index;
      }
    });
    if (first !== -1) {
      setRange((current) =>
        current.first === first && current.last === last ? current : { first, last }
      );
    }
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    schedule();
    track.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [measure, events.length]);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    // Scroll the track's own x-position only — `scrollIntoView` would also
    // move the page vertically. Offsets come from rects (not offsetLeft, which
    // depends on the offsetParent) and exclude the track's inline padding so
    // the card lands where scroll-snap would put it.
    const padding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const offset = slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({
      left: Math.max(0, track.scrollLeft + offset - padding),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }, []);

  const lastIndex = events.length - 1;
  const goPrevious = () => {
    if (!atStart) scrollToIndex(Math.max(0, range.first - 1));
  };
  const goNext = () => {
    if (!atEnd) scrollToIndex(Math.min(lastIndex, range.first + 1));
  };

  const onTrackKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    // Only when the track itself has focus — arrow keys inside a card's link
    // keep their normal behaviour.
    if (event.target !== event.currentTarget) return;
    const actions: Record<string, () => void> = {
      ArrowLeft: goPrevious,
      ArrowRight: goNext,
      Home: () => scrollToIndex(0),
      End: () => scrollToIndex(lastIndex),
    };
    const action = actions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  if (events.length === 0) return null;

  const total = events.length;
  const position =
    range.first === range.last
      ? t('events.positionSingle', { current: range.first + 1, total })
      : t('events.positionRange', { first: range.first + 1, last: range.last + 1, total });

  const controlClass =
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand-300 bg-white text-ink-700 shadow-soft transition hover:border-saffron-500 hover:text-saffron-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-sand-300 aria-disabled:hover:text-ink-700';

  // Buttons stay focusable when unavailable (aria-disabled, not disabled) so
  // focus is never dropped to <body> when the visitor reaches either end.
  const previousButton = (
    <button
      type="button"
      onClick={goPrevious}
      aria-label={t('events.previousSlide')}
      aria-controls={trackId}
      aria-disabled={atStart}
      className={controlClass}
    >
      <ChevronLeft aria-hidden="true" size={22} />
    </button>
  );
  const nextButton = (
    <button
      type="button"
      onClick={goNext}
      aria-label={t('events.nextSlide')}
      aria-controls={trackId}
      aria-disabled={atEnd}
      className={controlClass}
    >
      <ChevronRight aria-hidden="true" size={22} />
    </button>
  );
  const hasOverflow = !(atStart && atEnd);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={t('events.carouselLabel')}>
      <div className="flex items-center gap-4">
        {hasOverflow && <div className="hidden lg:block">{previousButton}</div>}

        <div
          ref={trackRef}
          id={trackId}
          tabIndex={0}
          onKeyDown={onTrackKeyDown}
          role="group"
          aria-label={t('events.trackLabel')}
          className="snap-track relative -mx-4 min-w-0 flex-1 gap-4 scroll-px-4 px-4 py-2 sm:gap-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-600 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:px-0"
        >
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(node) => {
                slideRefs.current[index] = node;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={t('events.slideLabel', { current: index + 1, total })}
              className="flex w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <EventCard event={event} variant="slide" className="w-full" />
            </div>
          ))}
        </div>

        {hasOverflow && <div className="hidden lg:block">{nextButton}</div>}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 lg:mt-4">
        {hasOverflow && <div className="lg:hidden">{previousButton}</div>}
        {hasOverflow && (
          <div className="flex items-center">
            {events.map((event, index) => {
              const visible = index >= range.first && index <= range.last;
              return (
                // 24px hit area around a small dot.
                <button
                  key={event.id}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={t('events.goToSlide', { current: index + 1 })}
                  aria-controls={trackId}
                  aria-current={index === range.first ? 'true' : undefined}
                  className="group/dot flex h-6 items-center justify-center px-1"
                >
                  <span
                    className={cn(
                      'block h-2 rounded-full transition-all duration-300',
                      visible
                        ? 'w-6 bg-saffron-600'
                        : 'w-2 bg-sand-300 group-hover/dot:bg-saffron-300'
                    )}
                  />
                </button>
              );
            })}
          </div>
        )}
        <p className="sr-only" aria-live="polite">
          {position}
        </p>
        {hasOverflow && <div className="lg:hidden">{nextButton}</div>}
      </div>
    </div>
  );
}
