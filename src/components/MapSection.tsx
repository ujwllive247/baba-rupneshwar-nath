import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { templeInfo } from '@/data/temple';

/**
 * Map placeholder area. No API key is wired up in Phase 1 — this renders a
 * clearly labelled placeholder plus a "Get directions" link that already
 * works today via a Google Maps search query, ready to become a live embed
 * once the temple's exact coordinates are confirmed.
 */
export function MapSection() {
  const { t } = useLanguage();
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    templeInfo.mapQuery
  )}`;

  return (
    <div className="card overflow-hidden">
      <div
        role="img"
        aria-label={t('reach.mapPlaceholder')}
        className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,theme(colors.sand.200),theme(colors.sand.100))] bg-temple-grid text-ink-500"
      >
        <MapPin aria-hidden="true" size={32} className="text-saffron-600" />
        <p className="text-sm font-medium">{t('reach.mapPlaceholder')}</p>
      </div>
      <div className="space-y-2 p-5">
        <p className="text-sm text-ink-500">{t('reach.mapNotice')}</p>
        <a href={directionsUrl} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-fit">
          <Navigation aria-hidden="true" size={16} />
          {t('reach.directions')}
        </a>
      </div>
    </div>
  );
}
