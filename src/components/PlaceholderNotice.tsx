import { Info } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

interface PlaceholderNoticeProps {
  /** Overrides the default "unverified content" copy, e.g. for sample timings or images. */
  message?: string;
  className?: string;
}

/**
 * Visible marker for content that is a placeholder or sample rather than
 * verified fact. Used on history/about sections, sample timings and gallery.
 */
export function PlaceholderNotice({ message, className }: PlaceholderNoticeProps) {
  const { t } = useLanguage();
  return (
    <div
      role="note"
      className={cn(
        'flex items-start gap-2.5 rounded-xl border border-saffron-200 bg-saffron-50 px-4 py-3 text-sm text-saffron-900',
        className
      )}
    >
      <Info aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-saffron-600" />
      <p>{message ?? t('common.placeholderNotice')}</p>
    </div>
  );
}
