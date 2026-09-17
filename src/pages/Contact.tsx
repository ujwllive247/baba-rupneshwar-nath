import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePageMeta } from '@/hooks/usePageMeta';
import { PATHS } from '@/routes/paths';
import { templeInfo, directions, visitingNotes } from '@/data/temple';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { MapSection } from '@/components/MapSection';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  const { t, pick } = useLanguage();
  usePageMeta({
    title: t('contact.pageTitle'),
    description: t('contact.pageIntro'),
    path: PATHS.contact,
  });

  return (
    <>
      <PageHero eyebrow={t('nav.contact')} title={t('contact.pageTitle')} intro={t('contact.pageIntro')} />
      <Breadcrumb items={[{ label: t('nav.contact') }]} />

      <div className="container-page grid gap-12 pb-20 lg:grid-cols-2">
        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-ink-900">{t('contact.detailsHeading')}</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" size={19} className="mt-0.5 shrink-0 text-saffron-600" />
                <div>
                  <dt className="text-ink-500">{t('reach.address')}</dt>
                  <dd className="mt-0.5 font-medium text-ink-900">{pick(templeInfo.address)}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone aria-hidden="true" size={19} className="mt-0.5 shrink-0 text-saffron-600" />
                <div>
                  <dt className="text-ink-500">{t('contact.phone')}</dt>
                  <dd className="mt-0.5">
                    <a href={`tel:${templeInfo.phone.replace(/\s+/g, '')}`} className="font-medium text-ink-900 hover:text-saffron-700">
                      {templeInfo.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail aria-hidden="true" size={19} className="mt-0.5 shrink-0 text-saffron-600" />
                <div>
                  <dt className="text-ink-500">{t('contact.email')}</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${templeInfo.email}`} className="font-medium text-ink-900 hover:text-saffron-700">
                      {templeInfo.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock aria-hidden="true" size={19} className="mt-0.5 shrink-0 text-saffron-600" />
                <div>
                  <dt className="text-ink-500">{t('contact.officeHours')}</dt>
                  <dd className="mt-0.5 font-medium text-ink-900">{pick(templeInfo.officeHours)}</dd>
                </div>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink-900">{t('contact.visitingHeading')}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-600">
              {visitingNotes.map((note, index) => (
                <li key={index} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                  <span>{pick(note)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink-900">{t('reach.title')}</h2>
            <div className="mt-4 divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white shadow-soft">
              {directions.map((item) => (
                <div key={item.id} className="p-4">
                  <h3 className="text-sm font-semibold text-ink-800">{t(item.labelKey)}</h3>
                  <p className="mt-1 text-sm text-ink-500">{pick(item.detail)}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <MapSection />
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-ink-900">{t('contact.formHeading')}</h2>
          <p className="mt-1.5 text-sm text-ink-500">{t('contact.formIntro')}</p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
