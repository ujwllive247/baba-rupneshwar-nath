import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { aboutSections } from '@/data/temple';
import { galleryImages } from '@/data/gallery';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { PageSectionList } from '@/components/PageSectionList';

export default function About() {
  const { t, pick } = useLanguage();
  usePageMeta({
    title: t('about.pageTitle'),
    description: t('about.previewBody'),
    path: PATHS.about,
  });

  const templePhotos = galleryImages.filter((image) => image.category === 'temple');

  return (
    <>
      <PageHero eyebrow={t('nav.about')} title={t('about.pageTitle')} intro={t('about.previewBody')} />
      <Breadcrumb items={[{ label: t('nav.about') }]} />

      <div className="container-page grid gap-12 pb-20 lg:grid-cols-[1fr_18rem]">
        <PageSectionList sections={aboutSections} />

        <aside>
          <div className="lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              {t('about.photosHeading')}
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {templePhotos.map((image) => (
                <li key={image.id} className="aspect-[4/3] overflow-hidden rounded-xl bg-sand-200 shadow-soft ring-1 ring-sand-200">
                  <img
                    src={image.src}
                    alt={pick(image.alt)}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
