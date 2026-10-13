import { FlaskConical } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

/** Unmissable demo marker for every payment-related screen while the provider is not live. */
export function DemoPaymentBanner({ className }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <div
      role="note"
      className={cn(
        'relative overflow-hidden rounded-2xl border-2 border-dashed border-kumkum-600/60 bg-white p-4 sm:p-5',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-2 bg-[repeating-linear-gradient(45deg,theme(colors.kumkum.600)_0_8px,theme(colors.gold.400)_8px_16px)]"
      />
      <div className="flex items-start gap-3 pl-3">
        <FlaskConical aria-hidden="true" size={22} className="mt-0.5 shrink-0 text-kumkum-600" />
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-kumkum-700 [html[lang=hi]_&]:tracking-normal">{t('donate.demo.bannerTitle')}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-700">{t('donate.demo.bannerBody')}</p>
        </div>
      </div>
    </div>
  );
}
