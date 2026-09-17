import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import type { TempleEvent } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { EventCard } from './EventCard';
import { cn } from '@/utils/cn';

interface EventCarouselProps {
  events: TempleEvent[];
}

const AUTOPLAY_MS = 6000;

/**
 * Responsive events carousel.
 *
 * Slides are laid out in a native horizontal scroll-snap track — that alone
 * gives free touch/trackpad swipe and keyboard arrow-key scrolling inside the
 * track. Prev/next buttons, dot navigation, autoplay and pause-on-hover/focus
 * are layered on top and all drive the same `scrollTo`, so every input method
 * stays in sync with the same active-slide state.
 */
export function EventCarousel({ events }: EventCarouselProps) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const carouselId = useId();
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    if (!track || !slide) return;
    // Scroll only the track's own horizontal position (via scrollLeft), never
    // `slide.scrollIntoView()`. The track only scrolls on the x-axis, so
    // scrollIntoView's block/vertical handling falls through to the nearest
    // vertically-scrollable ancestor — the whole document — and this fires
    // on every autoplay tick, including while the carousel is scrolled out
    // of view, yanking the page back to it. Setting scrollLeft directly
    // cannot affect vertical scroll on any ancestor.
    track.scrollTo({
      left: slide.offsetLeft,
      behavior: prefersReducedMotion.current ? 'auto' : 'smooth',
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + events.length) % events.length;
      setActiveIndex(next);
      scrollToIndex(next);
    },
    [events.length, scrollToIndex]
  );

  // Track which slide is centred as the visitor scrolls/swipes manually.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;
        let closest = 0;
        let closestDistance = Infinity;
        slideRefs.current.forEach((slide, index) => {
          if (!slide) return;
          const rect = slide.getBoundingClientRect();
          const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = index;
          }
        });
        setActiveIndex((current) => (current === closest ? current : closest));
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Autoplay — paused on hover, focus-within, reduced-motion preference, or the explicit toggle.
  useEffect(() => {
    if (!playing || hovered || focused || prefersReducedMotion.current || events.length < 2) {
      return;
    }
    const id = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % events.length;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [playing, hovered, focused, events.length, scrollToIndex]);

  if (events.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setFocused(false);
      }}
    >
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={t('events.carouselLabel')}
        id={carouselId}
        className="snap-track relative -mx-4 gap-4 px-4 sm:-mx-6 sm:gap-5 sm:px-6 lg:-mx-8 lg:px-8"
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            ref={(node) => {
              slideRefs.current[index] = node;
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={t('events.slideLabel', { current: index + 1, total: events.length })}
            aria-hidden={index !== activeIndex}
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[38%] xl:w-[32%]"
          >
            <EventCard event={event} variant="slide" className="h-full" />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label={t('events.previousSlide')}
          aria-controls={carouselId}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-white text-ink-700 transition hover:border-saffron-500 hover:text-saffron-700"
        >
          <ChevronLeft aria-hidden="true" size={20} />
        </button>

        <div className="flex items-center gap-1.5" role="tablist" aria-label={t('events.carouselLabel')}>
          {events.map((event, index) => (
            <button
              key={event.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={carouselId}
              aria-label={t('events.goToSlide', { index: index + 1 })}
              onClick={() => goTo(index)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === activeIndex ? 'w-6 bg-saffron-600' : 'w-2.5 bg-sand-300 hover:bg-sand-400'
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label={t('events.nextSlide')}
          aria-controls={carouselId}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-white text-ink-700 transition hover:border-saffron-500 hover:text-saffron-700"
        >
          <ChevronRight aria-hidden="true" size={20} />
        </button>

        {events.length > 1 && (
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? t('events.pauseAutoplay') : t('events.playAutoplay')}
            aria-pressed={!playing}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 bg-white text-ink-700 transition hover:border-saffron-500 hover:text-saffron-700"
          >
            {playing ? <Pause aria-hidden="true" size={17} /> : <Play aria-hidden="true" size={17} />}
          </button>
        )}
      </div>
    </div>
  );
}
