import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { templeInfo, socialPlaceholders } from '@/data/temple';
import { TempleMark } from './TempleMark';
import type { TranslationKey } from '@/i18n';

const EXPLORE_LINKS: { to: string; labelKey: TranslationKey }[] = [
  { to: PATHS.about, labelKey: 'nav.about' },
  { to: PATHS.history, labelKey: 'nav.history' },
  { to: PATHS.katha, labelKey: 'nav.katha' },
  { to: PATHS.gallery, labelKey: 'nav.gallery' },
];

const VISIT_LINKS: { to: string; labelKey: TranslationKey }[] = [
  { to: PATHS.darshan, labelKey: 'nav.darshan' },
  { to: PATHS.events, labelKey: 'nav.events' },
  { to: PATHS.contact, labelKey: 'nav.contact' },
];

const SOCIAL_ICONS: Record<string, typeof Facebook> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
};

export function Footer() {
  const { t, pick } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-night-900/10 bg-night-900 text-sand-200">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <TempleMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold text-white">{t('site.name')}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-300">{t('footer.about')}</p>
        </div>

        <nav aria-label={t('footer.explore')}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sand-400">
            {t('footer.explore')}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="text-sand-300 transition hover:text-white">
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t('footer.visit')}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sand-400">
            {t('footer.visit')}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {VISIT_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="text-sand-300 transition hover:text-white">
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sand-400">
            {t('footer.connect')}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-300">
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-saffron-400" />
              <span>{pick(templeInfo.address)}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone aria-hidden="true" size={18} className="shrink-0 text-saffron-400" />
              <a href={`tel:${templeInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                {templeInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail aria-hidden="true" size={18} className="shrink-0 text-saffron-400" />
              <a href={`mailto:${templeInfo.email}`} className="hover:text-white">
                {templeInfo.email}
              </a>
            </li>
          </ul>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-sand-400">
            {t('footer.follow')}
          </h2>
          <p className="mt-2 text-xs text-sand-400">{t('footer.socialPlaceholder')}</p>
          <ul className="mt-3 flex gap-2">
            {socialPlaceholders.map((social) => {
              const Icon = SOCIAL_ICONS[social.id] ?? Facebook;
              return (
                <li key={social.id}>
                  <span
                    aria-hidden="true"
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sand-300"
                  >
                    <Icon size={17} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t('site.nameFull')}. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <NavLink to={PATHS.privacy} className="hover:text-sand-100">
              {t('footer.privacy')}
            </NavLink>
            <NavLink to={PATHS.terms} className="hover:text-sand-100">
              {t('footer.terms')}
            </NavLink>
          </div>
        </div>
        <p className="container-page pb-6 text-xs text-sand-500">{t('footer.builtNote')}</p>
      </div>
    </footer>
  );
}
