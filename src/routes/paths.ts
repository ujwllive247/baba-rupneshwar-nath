/** Every route in one place, so links never drift from the router. */
export const PATHS = {
  home: '/',
  about: '/about',
  history: '/history',
  darshan: '/darshan-aarti',
  events: '/events',
  eventDetail: (slug: string) => `/events/${slug}`,
  katha: '/mahadev-katha',
  storyDetail: (slug: string) => `/mahadev-katha/${slug}`,
  gallery: '/gallery',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const;

export const SITE_URL = 'https://babarupneshwarnath.com';
