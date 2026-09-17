import { useState } from 'react';
import type { GalleryImage } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { Lightbox } from './Lightbox';

interface GalleryGridProps {
  images: GalleryImage[];
}

/** Responsive photo grid; clicking any tile opens the lightbox at that image. */
export function GalleryGrid({ images }: GalleryGridProps) {
  const { t, pick } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return <p className="text-ink-500">{t('events.none')}</p>;
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {images.map((image, index) => (
          <li key={image.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={t('gallery.openImage', { name: pick(image.caption) })}
              className="group block aspect-square w-full overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200 transition hover:shadow-lift"
            >
              <img
                src={image.src}
                alt={pick(image.alt)}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox images={images} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  );
}
