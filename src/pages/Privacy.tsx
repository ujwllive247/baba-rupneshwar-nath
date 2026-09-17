import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { PlaceholderNotice } from '@/components/PlaceholderNotice';

/**
 * Placeholder legal page. Phase 1 collects no personal data server-side (the
 * contact form is browser-only, see ContactForm), so there is no processing
 * to describe yet — this is a marker for Phase 2 content, not a real policy.
 */
export default function Privacy() {
  const { t, choose } = useLanguage();
  usePageMeta({
    title: t('privacy.title'),
    description: t('privacy.title'),
    path: PATHS.privacy,
  });

  return (
    <>
      <PageHero eyebrow={t('privacy.title')} title={t('privacy.title')} />
      <Breadcrumb items={[{ label: t('privacy.title') }]} />
      <div className="container-page max-w-2xl space-y-5 pb-20">
        <PlaceholderNotice />
        <p className="prose-temple">
          {choose(
            'इस वेबसाइट की गोपनीयता नीति तैयार की जा रही है। संपर्क फ़ॉर्म फिलहाल केवल ब्राउज़र में सत्यापित होता है और किसी सर्वर या ईमेल सेवा को डेटा नहीं भेजता।',
            'This website’s privacy policy is being prepared. The contact form is currently validated only in the browser and does not send data to any server or email service.'
          )}
        </p>
      </div>
    </>
  );
}
