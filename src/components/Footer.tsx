import type { ReactNode } from 'react';
import { NavLink, type To } from 'react-router-dom';
import { ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { templeInfo, socialPlaceholders } from '@/data/temple';
import { upcomingEvents } from '@/data/events';
import { NAV_LINKS, VISIT_LINK } from '@/data/navigation';
import { formatDateRange } from '@/utils/format';
import { TempleMark } from './TempleMark';

const QUICK_LINKS = [
  NAV_LINKS.home,
  NAV_LINKS.about,
  NAV_LINKS.history,
  NAV_LINKS.events,
  NAV_LINKS.katha,
  NAV_LINKS.gallery,
  NAV_LINKS.visit,
];

const SOCIAL_ICONS: Record<string, typeof Facebook> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

/** Shown in the footer's Events column. */
const FOOTER_EVENT_COUNT = 2;

/** Mobile rows get a 44px target; desktop falls back to a compact list. */
const linkClass =
  'inline-flex min-h-11 items-center text-sand-300 transition hover:text-white lg:min-h-0 lg:py-1';

const legalLinkClass =
  'inline-flex min-h-11 items-center text-sand-400 transition hover:text-sand-100 focus-visible:ring-offset-night-900 lg:min-h-0 lg:py-1';

const headingClass = 'text-sm font-semibold uppercase tracking-wide text-sand-400';

export function Footer() {
  const { t, pick, lang } = useLanguage();
  const year = new Date().getFullYear();
  const socials = socialPlaceholders.filter((social) => social.url);
  const nextEvents = upcomingEvents.slice(0, FOOTER_EVENT_COUNT);

  return (
    <footer className="border-t border-night-900/10 bg-night-900 text-sand-200">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Temple identity */}
        <div className="sm:col-span-2 lg:col-span-4">
          <NavLink
            to={PATHS.home}
            aria-label={t('site.nameFull')}
            className="inline-flex items-center gap-2.5 rounded-md focus-visible:ring-offset-night-900"
          >
            <TempleMark className="h-11 w-11" />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-white">{t('site.name')}</span>
              <span className="block text-[11px] uppercase tracking-wide text-sand-400">{t('site.mantra')}</span>
            </span>
          </NavLink>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-300">{t('footer.about')}</p>

          <h2 className={`mt-6 ${headingClass}`}>{t('footer.follow')}</h2>
          {socials.length === 0 ? (
            <p className="mt-2 text-xs text-sand-400">{t('footer.socialPlaceholder')}</p>
          ) : (
            <ul className="mt-3 flex gap-2">
              {socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.id] ?? Facebook;
                return (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${social.label} (${t('footer.opensNewTab')})`}
                      title={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sand-300 transition hover:bg-white/20 hover:text-white focus-visible:ring-offset-night-900"
                    >
                      <Icon aria-hidden="true" size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Quick links */}
        <nav aria-label={t('footer.quickLinks')} className="lg:col-span-2">
          <h2 className={headingClass}>{t('footer.quickLinks')}</h2>
          <ul className="mt-3 text-sm lg:mt-4 lg:space-y-1">
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <FooterLink to={link.to} end={link.end}>
                  {t(link.labelKey)}
                </FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Events + Visit Us */}
        <div className="space-y-8 lg:col-span-3">
          <section aria-labelledby="footer-events">
            <h2 id="footer-events" className={headingClass}>
              {t('footer.events')}
            </h2>
            {nextEvents.length === 0 ? (
              <p className="mt-3 text-sm text-sand-300">{t('footer.noEvents')}</p>
            ) : (
              <ul className="mt-3 text-sm">
                {nextEvents.map((event) => (
                  <li key={event.id}>
                    <NavLink
                      to={PATHS.eventDetail(event.slug)}
                      className="group block rounded-md py-1.5 focus-visible:ring-offset-night-900"
                    >
                      <span className="block font-medium text-sand-100 transition group-hover:text-white">
                        {lang === 'hi' ? event.titleHindi : event.titleEnglish}
                      </span>
                      <span className="block text-xs text-sand-400">
                        {formatDateRange(event.date, event.endDate, lang)}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
            <FooterLink to={PATHS.events} arrow>
              {t('footer.allEvents')}
            </FooterLink>
          </section>

          <section aria-labelledby="footer-visit">
            <h2 id="footer-visit" className={headingClass}>
              {t('footer.visitUs')}
            </h2>
            <FooterLink to={VISIT_LINK} arrow>
              {t('footer.directions')}
            </FooterLink>
          </section>
        </div>

        {/* Temple information, Contact */}
        <div className="space-y-8 lg:col-span-3">
          <section aria-labelledby="footer-info">
            <h2 id="footer-info" className={headingClass}>
              {t('footer.templeInfo')}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-sand-300">
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-saffron-400" />
                <span>{pick(templeInfo.address)}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-saffron-400" />
                <span>
                  <span className="sr-only">{t('contact.officeHours')}: </span>
                  {pick(templeInfo.officeHours)}
                </span>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className={headingClass}>
              {t('footer.contact')}
            </h2>
            <ul className="mt-3 text-sm">
              <li>
                <a href={`tel:${templeInfo.phone.replace(/\s+/g, '')}`} className={`${linkClass} gap-2.5 focus-visible:ring-offset-night-900`}>
                  <Phone aria-hidden="true" size={18} className="shrink-0 text-saffron-400" />
                  <span className="sr-only">{t('contact.phone')}: </span>
                  {templeInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${templeInfo.email}`} className={`${linkClass} gap-2.5 break-all focus-visible:ring-offset-night-900`}>
                  <Mail aria-hidden="true" size={18} className="shrink-0 text-saffron-400" />
                  <span className="sr-only">{t('contact.email')}: </span>
                  {templeInfo.email}
                </a>
              </li>
            </ul>
            <FooterLink to={PATHS.contact} arrow>
              {t('footer.contactPage')}
            </FooterLink>
          </section>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t('site.nameFull')}. {t('footer.rights')}
          </p>
          <nav aria-label={t('footer.legal')}>
            <ul className="flex flex-wrap items-center gap-x-5">
              <li>
                <NavLink to={PATHS.privacy} className={legalLinkClass}>
                  {t('footer.privacy')}
                </NavLink>
              </li>
              <li>
                <NavLink to={PATHS.terms} className={legalLinkClass}>
                  {t('footer.terms')}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <p className="container-page pb-6 text-xs text-sand-500">{t('footer.builtNote')}</p>
      </div>
    </footer>
  );
}

function FooterLink({ to, end, arrow, children }: { to: To; end?: boolean; arrow?: boolean; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={
        arrow
          ? 'mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-saffron-300 transition hover:text-saffron-200 focus-visible:ring-offset-night-900 lg:min-h-0 lg:py-1'
          : `${linkClass} focus-visible:ring-offset-night-900`
      }
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" size={15} />}
    </NavLink>
  );
}
