/** Every route in one place, so links never drift from the router. */
export const PATHS = {
  home: '/',
  about: '/about',
  history: '/history',
  events: '/events',
  eventDetail: (slug: string) => `/events/${slug}`,
  katha: '/mahadev-katha',
  storyDetail: (slug: string) => `/mahadev-katha/${slug}`,
  kathaAnubhav: '/mahadev-katha/anubhav',
  kathaAnubhavDetail: (slug: string) => `/mahadev-katha/anubhav/${slug}`,
  gallery: '/gallery',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const;

export const SITE_URL = 'https://babarupneshwarnath.com';
