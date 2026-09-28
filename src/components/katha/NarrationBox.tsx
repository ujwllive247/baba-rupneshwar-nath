import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface NarrationBoxProps {
  children: ReactNode;
  /** `dark` is used inside comic panels, which sit on a night-toned background. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** The storyteller's voice — a narration card between dialogue and imagery. */
export function NarrationBox({ children, tone = 'light', className }: NarrationBoxProps) {
  return (
    <div
      className={cn(
        'rounded-2xl px-5 py-4 sm:px-6 sm:py-5',
        tone === 'light' ? 'bg-white/85 shadow-soft ring-1 ring-sand-200' : 'bg-white/5 ring-1 ring-white/10',
        className
      )}
    >
      <p className={cn('text-base leading-[1.85] sm:text-lg', tone === 'light' ? 'text-ink-700' : 'text-sand-100')}>
        {children}
      </p>
    </div>
  );
}
