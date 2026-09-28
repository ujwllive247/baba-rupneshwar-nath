import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

interface ChapterProgressProps {
  current: number;
  total: number;
  label: string;
  onJump?: (sceneNumber: number) => void;
  className?: string;
}

/** "कथा {current} / {total}" — a segmented progress bar, optionally clickable to jump to a scene. */
export function ChapterProgress({ current, total, label, onJump, className }: ChapterProgressProps) {
  const { t } = useLanguage();
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sand-300">{label}</span>
      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => i + 1).map((sceneNumber) => (
          <button
            key={sceneNumber}
            type="button"
            disabled={!onJump}
            onClick={() => onJump?.(sceneNumber)}
            aria-label={t('kathaAnubhav.jumpToScene', { index: sceneNumber })}
            aria-current={sceneNumber === current ? 'step' : undefined}
            className={cn(
              'h-1.5 flex-1 rounded-full transition-colors',
              sceneNumber === current ? 'bg-saffron-500' : sceneNumber < current ? 'bg-saffron-500/40' : 'bg-white/15',
              onJump && 'cursor-pointer hover:bg-saffron-400'
            )}
          />
        ))}
      </div>
    </div>
  );
}
