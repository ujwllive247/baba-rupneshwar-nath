import { CheckCircle2, Circle, Hammer } from 'lucide-react';
import type { ConstructionMilestone, MilestoneStatus } from '@/types/donation';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

const STATUS_ICON: Record<MilestoneStatus, typeof Circle> = {
  completed: CheckCircle2,
  'in-progress': Hammer,
  planned: Circle,
};

/** Vertical timeline. Each status has its own icon and text label, not just a colour. */
export function ConstructionMilestones({ milestones }: { milestones: ConstructionMilestone[] }) {
  const { t, pick } = useLanguage();
  return (
    <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[1.1rem] before:top-4 before:w-0.5 before:bg-sand-300">
      {milestones.map((milestone) => {
        const Icon = STATUS_ICON[milestone.status];
        return (
          <li key={milestone.id} className="relative flex gap-4">
            <span
              aria-hidden="true"
              className={cn(
                'relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-4 ring-sand-50',
                milestone.status === 'completed' && 'bg-saffron-600 text-white',
                milestone.status === 'in-progress' && 'bg-white text-saffron-700 ring-saffron-100',
                milestone.status === 'planned' && 'bg-white text-ink-500'
              )}
            >
              <Icon size={18} />
            </span>
            <div
              className={cn(
                'card min-w-0 flex-1 p-4 sm:p-5',
                milestone.status === 'in-progress' && 'ring-2 ring-saffron-300'
              )}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="break-words text-base font-semibold">{pick(milestone.title)}</h3>
                <span
                  className={cn(
                    'rounded-full px-2.5 py-0.5 text-xs font-semibold',
                    milestone.status === 'completed' && 'bg-saffron-600 text-white',
                    milestone.status === 'in-progress' && 'bg-saffron-100 text-saffron-800',
                    milestone.status === 'planned' && 'bg-sand-200 text-ink-600'
                  )}
                >
                  {t(`donate.milestones.status.${milestone.status}`)}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-ink-600">{pick(milestone.description)}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
