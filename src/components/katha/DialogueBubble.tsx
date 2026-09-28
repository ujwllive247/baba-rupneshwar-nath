import { cn } from '@/utils/cn';

interface DialogueBubbleProps {
  speaker: string;
  line: string;
  align?: 'left' | 'right';
  tone?: 'light' | 'dark';
  className?: string;
}

/** One character's speech bubble within a comic scene. */
export function DialogueBubble({ speaker, line, align = 'left', tone = 'light', className }: DialogueBubbleProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', align === 'right' && 'items-end text-right', className)}>
      <span className={cn('eyebrow', tone === 'dark' && 'text-saffron-400')}>{speaker}</span>
      <div
        className={cn(
          'max-w-md rounded-2xl px-4 py-3 shadow-soft',
          tone === 'light'
            ? 'border border-saffron-200 bg-saffron-50 text-ink-800'
            : 'border border-saffron-500/30 bg-saffron-500/10 text-sand-50',
          align === 'left' ? 'rounded-tl-sm' : 'rounded-tr-sm'
        )}
      >
        <p className="text-sm leading-relaxed sm:text-base">{line}</p>
      </div>
    </div>
  );
}
