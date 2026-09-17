import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { historySections, historySources } from '@/data/temple';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { PageSectionList } from '@/components/PageSectionList';

export default function History() {
  const { t, pick } = useLanguage();
  usePageMeta({
    title: t('history.pageTitle'),
    description: t('history.pageIntro'),
    path: PATHS.history,
  });

  return (
    <>
      <PageHero eyebrow={t('nav.history')} title={t('history.pageTitle')} intro={t('history.pageIntro')} />
      <Breadcrumb items={[{ label: t('nav.history') }]} />

      <div className="container-page grid gap-12 pb-20 lg:grid-cols-[14rem_1fr]">
        <nav aria-label={t('history.onThisPage')} className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              {t('history.onThisPage')}
            </h2>
            <ul className="mt-3 space-y-2 border-l border-sand-200 pl-4 text-sm">
              {historySections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-ink-600 transition hover:text-saffron-700">
                    {t(section.headingKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div>
          <PageSectionList sections={historySections} />

          <section id="sources" className="mt-14 scroll-mt-24 border-t border-sand-200 pt-10">
            <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">{t('common.sources')}</h2>
            <ul className="mt-5 space-y-4">
              {historySources.map((source) => (
                <li key={source.id} className="card p-4">
                  <p className="font-semibold text-ink-900">{pick(source.label)}</p>
                  <p className="mt-1 text-sm text-ink-500">{pick(source.note)}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
