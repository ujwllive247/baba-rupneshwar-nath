import { useState } from 'react';
import type { GalleryCategory } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { galleryImages, galleryCategoryOrder } from '@/data/gallery';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { CategoryFilter } from '@/components/CategoryFilter';
import { GalleryGrid } from '@/components/GalleryGrid';
import { PlaceholderNotice } from '@/components/PlaceholderNotice';

export default function Gallery() {
  const { t } = useLanguage();
  usePageMeta({
    title: t('gallery.title'),
    description: t('gallery.subtitle'),
    path: PATHS.gallery,
  });

  const [category, setCategory] = useState<GalleryCategory | 'all'>('all');
  const filtered =
    category === 'all' ? galleryImages : galleryImages.filter((image) => image.category === category);

  return (
    <>
      <PageHero eyebrow={t('nav.gallery')} title={t('gallery.title')} intro={t('gallery.subtitle')} />
      <Breadcrumb items={[{ label: t('nav.gallery') }]} />

      <div className="container-page space-y-6 pb-20">
        <PlaceholderNotice message={t('gallery.placeholderNotice')} />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter
            label={t('gallery.filterLabel')}
            allLabel={t('common.all')}
            categories={galleryCategoryOrder}
            active={category}
            onChange={setCategory}
            getLabel={(value) => t(`gallery.category.${value}`)}
          />
          <p className="text-sm text-ink-500">{t('gallery.imageCount', { count: filtered.length })}</p>
        </div>

        <GalleryGrid images={filtered} />
      </div>
    </>
  );
}
