import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { PlaceholderNotice } from '@/components/PlaceholderNotice';

export default function Terms() {
  const { t, choose } = useLanguage();
  usePageMeta({
    title: t('terms.title'),
    description: t('terms.title'),
    path: PATHS.terms,
  });

  return (
    <>
      <PageHero eyebrow={t('terms.title')} title={t('terms.title')} />
      <Breadcrumb items={[{ label: t('terms.title') }]} />
      <div className="container-page max-w-2xl space-y-5 pb-20">
        <PlaceholderNotice />
        <p className="prose-temple">
          {choose(
            'इस वेबसाइट की उपयोग शर्तें तैयार की जा रही हैं। पूर्ण विवरण मंदिर समिति की स्वीकृति के पश्चात प्रकाशित किया जाएगा।',
            'This website’s terms of use are being prepared and will be published in full once approved by the temple committee.'
          )}
        </p>
      </div>
    </>
  );
}
