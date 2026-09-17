import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface LightboxProps {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}

/** Focus-trapped, keyboard-navigable image viewer, rendered in a portal. */
export function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const { t, pick } = useLanguage();
  const [index, setIndex] = useState(startIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Remember what had focus, move it into the dialog, and restore it on close.
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      previouslyFocused.current?.focus();
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        next();
      } else if (event.key === 'ArrowLeft') {
        prev();
      } else if (event.key === 'Tab') {
        // Simple focus trap — only the close/prev/next buttons are focusable in the dialog.
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button');
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [next, prev, onClose]);

  const image = images[index];

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-night-950/90 p-4 animate-fade-in"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-label={t('gallery.lightboxLabel')}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col items-center"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={t('common.close')}
          className="absolute -top-2 right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:top-0"
        >
          <X aria-hidden="true" size={22} />
        </button>

        <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-night-900/40">
          <img
            src={image.src}
            alt={pick(image.alt)}
            className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label={t('common.previous')}
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronLeft aria-hidden="true" size={22} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={t('common.next')}
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronRight aria-hidden="true" size={22} />
              </button>
            </>
          )}
        </div>

        <div className="mt-4 w-full text-center text-sand-200">
          <p id={titleId} className="font-medium text-white">
            {pick(image.caption)}
          </p>
          <p className="mt-1 text-sm text-sand-400">
            {t('gallery.imageOf', { current: index + 1, total: images.length })}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
