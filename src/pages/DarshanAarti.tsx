import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { darshanTimings, aartiTimings, specialTimings, visitorGuidelines } from '@/data/timings';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { TimingCard } from '@/components/TimingCard';
import { PlaceholderNotice } from '@/components/PlaceholderNotice';

export default function DarshanAarti() {
  const { t, pick } = useLanguage();
  usePageMeta({
    title: t('darshan.title'),
    description: t('darshan.subtitle'),
    path: PATHS.darshan,
  });

  return (
    <>
      <PageHero eyebrow={t('nav.darshan')} title={t('darshan.title')} intro={t('darshan.subtitle')} />
      <Breadcrumb items={[{ label: t('nav.darshan') }]} />

      <div className="container-page space-y-14 pb-20">
        <PlaceholderNotice message={t('darshan.sampleNotice')} />

        <section>
          <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">{t('darshan.darshanHeading')}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <TimingCard timing={darshanTimings[0]} icon="Sunrise" />
            <TimingCard timing={darshanTimings[1]} icon="Sunset" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">{t('darshan.aartiHeading')}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <TimingCard timing={aartiTimings[0]} icon="Sun" />
            <TimingCard timing={aartiTimings[1]} icon="Moon" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">{t('darshan.specialHeading')}</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-sand-200 bg-white shadow-soft">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-sand-100 text-xs font-semibold uppercase tracking-wide text-ink-500">
                <tr>
                  <th scope="col" className="px-5 py-3">{t('darshan.occasion')}</th>
                  <th scope="col" className="px-5 py-3">{t('darshan.timing')}</th>
                  <th scope="col" className="px-5 py-3">{t('darshan.note')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                {specialTimings.map((row) => (
                  <tr key={row.id}>
                    <td className="px-5 py-3.5 font-medium text-ink-900">{pick(row.occasion)}</td>
                    <td className="px-5 py-3.5 text-ink-700">{pick(row.timing)}</td>
                    <td className="px-5 py-3.5 text-ink-500">{row.note ? pick(row.note) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">{t('darshan.guidelinesHeading')}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {visitorGuidelines.map((guideline, index) => (
              <li key={index} className="card flex items-start gap-3 p-4">
                <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-saffron-600" />
                <span className="text-sm text-ink-700">{pick(guideline)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
