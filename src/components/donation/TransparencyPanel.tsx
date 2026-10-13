import { FileCheck2, Landmark, Phone, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import type { TranslationKey } from '@/i18n';
import { templeInfo } from '@/data/temple';

const ITEMS: { icon: typeof Landmark; title: TranslationKey; body: TranslationKey }[] = [
  { icon: Landmark, title: 'donate.trust.fundsTitle', body: 'donate.trust.fundsBody' },
  { icon: FileCheck2, title: 'donate.trust.recordsTitle', body: 'donate.trust.recordsBody' },
  { icon: ShieldCheck, title: 'donate.trust.safetyTitle', body: 'donate.trust.safetyBody' },
  { icon: Phone, title: 'donate.trust.contactTitle', body: 'donate.trust.contactBody' },
];

export function TransparencyPanel() {
  const { t } = useLanguage();
  return (
    <div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {ITEMS.map(({ icon: Icon, title, body }) => (
          <li key={title} className="card flex gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-night-800 text-gold-400">
              <Icon aria-hidden="true" size={20} />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-semibold">{t(title)}</h3>
              <p className="mt-1 text-sm text-ink-600">{t(body)}</p>
              {title === 'donate.trust.contactTitle' && (
                <p className="mt-2 text-sm font-medium text-ink-900">
                  <a
                    href={`tel:${templeInfo.phone.replace(/\s+/g, '')}`}
                    className="hover:text-saffron-700"
                  >
                    {templeInfo.phone}
                  </a>
                  <span aria-hidden="true" className="mx-2 text-sand-400">
                    ·
                  </span>
                  <a href={`mailto:${templeInfo.email}`} className="break-all hover:text-saffron-700">
                    {templeInfo.email}
                  </a>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-ink-500">{t('donate.trust.taxNote')}</p>
    </div>
  );
}
