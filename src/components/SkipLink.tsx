import { useLanguage } from '@/hooks/useLanguage';

/** First focusable element on every page — jumps keyboard/screen-reader users past the nav. */
export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-night-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lift"
    >
      {t('common.skipToContent')}
    </a>
  );
}
