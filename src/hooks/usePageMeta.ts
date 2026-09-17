import { useEffect } from 'react';
import { SITE_URL } from '@/routes/paths';
import { useLanguage } from './useLanguage';

export interface PageMeta {
  /** Page-specific title; the site name is appended automatically. */
  title: string;
  description: string;
  /** Route path, e.g. `/events/maha-shivratri`. Used for canonical + og:url. */
  path: string;
  /** Absolute or root-relative image path for social cards. */
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Applies per-page SEO metadata to the document head.
 *
 * Phase 1 is a client-rendered SPA, so these tags are written at runtime. The
 * shape mirrors what a server-rendered or pre-rendered Phase 2 build would emit,
 * which keeps the migration mechanical.
 */
export function usePageMeta({
  title,
  description,
  path,
  image = '/images/hero-temple.svg',
  type = 'website',
  publishedTime,
}: PageMeta) {
  const { t, lang } = useLanguage();
  const siteName = t('site.nameFull');

  useEffect(() => {
    const fullTitle = title === siteName ? siteName : `${title} | ${siteName}`;
    const url = `${SITE_URL}${path === '/' ? '' : path}`;
    const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);

    upsertMeta('property', 'og:site_name', siteName);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', absoluteImage);
    upsertMeta('property', 'og:locale', lang === 'hi' ? 'hi_IN' : 'en_IN');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteImage);

    if (publishedTime) {
      upsertMeta('property', 'article:published_time', publishedTime);
    }
  }, [title, description, path, image, type, publishedTime, siteName, lang]);
}
