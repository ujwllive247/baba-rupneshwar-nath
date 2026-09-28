/**
 * Site navigation hierarchy — the single source for the header (desktop and
 * mobile) and the footer, so the two can never drift apart.
 */
import type { To } from 'react-router-dom';
import { PATHS } from '@/routes/paths';
import type { TranslationKey } from '@/i18n';

export interface NavLinkEntry {
  kind: 'link';
  id: string;
  to: To;
  labelKey: TranslationKey;
  /** Match the path exactly (only needed for "/"). */
  end?: boolean;
}

export interface NavGroupEntry {
  kind: 'group';
  id: string;
  labelKey: TranslationKey;
  children: NavLinkEntry[];
}

export type NavEntry = NavLinkEntry | NavGroupEntry;

/** The directions + map section on the contact page. */
export const VISIT_SECTION_ID = 'visit';
export const VISIT_LINK: To = { pathname: PATHS.contact, hash: `#${VISIT_SECTION_ID}` };

const link = (id: string, to: To, labelKey: TranslationKey, end?: boolean): NavLinkEntry => ({
  kind: 'link',
  id,
  to,
  labelKey,
  end,
});

export const NAV_LINKS = {
  home: link('home', PATHS.home, 'nav.home', true),
  about: link('about', PATHS.about, 'nav.aboutTemple'),
  history: link('history', PATHS.history, 'nav.history'),
  events: link('events', PATHS.events, 'nav.events'),
  katha: link('katha', PATHS.katha, 'nav.mahadevKatha'),
  gallery: link('gallery', PATHS.gallery, 'nav.gallery'),
  visit: link('visit', VISIT_LINK, 'nav.visit'),
} as const;

export const PRIMARY_NAV: NavEntry[] = [
  NAV_LINKS.home,
  {
    kind: 'group',
    id: 'temple',
    labelKey: 'nav.temple',
    children: [NAV_LINKS.about, NAV_LINKS.history],
  },
  NAV_LINKS.events,
  NAV_LINKS.katha,
  NAV_LINKS.gallery,
  NAV_LINKS.visit,
];

/** The header call to action. */
export const HEADER_CTA = link('plan-visit', VISIT_LINK, 'nav.planVisit');

/** True when `pathname` is the link's page or one of its sub-pages. */
export function isPathActive(pathname: string, entry: NavLinkEntry): boolean {
  const target = typeof entry.to === 'string' ? entry.to : (entry.to.pathname ?? '');
  if (entry.end || target === PATHS.home) return pathname === target;
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function isGroupActive(pathname: string, group: NavGroupEntry): boolean {
  return group.children.some((child) => isPathActive(pathname, child));
}
