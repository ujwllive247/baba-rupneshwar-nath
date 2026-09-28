import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface KathaNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  previousLabel: string;
  nextLabel: string;
  className?: string;
}

/**
 * Previous/Next scene controls. Purely presentational — the page owns
 * `currentScene` state and the single global ArrowLeft/ArrowRight listener,
 * so this can be reused without every instance racing to handle a keypress.
 */
export function KathaNavigation({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  previousLabel,
  nextLabel,
  className,
}: KathaNavigationProps) {
  return (
    <div className={cn('flex items-center justify-between gap-3', className)}>
      <button
        type="button"
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="btn-outline border-white/20 bg-white/5 text-sand-100 hover:border-saffron-400 hover:bg-white/10 hover:text-saffron-300 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft aria-hidden="true" size={16} />
        {previousLabel}
      </button>
      <button type="button" onClick={onNext} disabled={!hasNext} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">
        {nextLabel}
        <ChevronRight aria-hidden="true" size={16} />
      </button>
    </div>
  );
}
