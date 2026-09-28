import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { kathaChapters } from '@/data/kathaChapters';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { KathaLibrary } from '@/components/katha/KathaLibrary';

/** Library of immersive, comic-style Katha chapters — separate from the plain-article Mahadev Katha list. */
export default function KathaAnubhav() {
  const { t } = useLanguage();
  usePageMeta({
    title: t('kathaAnubhav.libraryTitle'),
    description: t('kathaAnubhav.librarySubtitle'),
    path: PATHS.kathaAnubhav,
    image: kathaChapters[0]?.coverImage,
  });

  return (
    <>
      <PageHero eyebrow={t('nav.katha')} title={t('kathaAnubhav.libraryTitle')} intro={t('kathaAnubhav.librarySubtitle')} />
      <Breadcrumb items={[{ label: t('nav.katha'), to: PATHS.katha }, { label: t('kathaAnubhav.libraryTitle') }]} />

      <div className="container-page pb-20">
        <KathaLibrary chapters={kathaChapters} />
      </div>
    </>
  );
}
