import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CategoryFilterProps<T extends string> {
  label: string;
  allLabel: string;
  categories: readonly T[];
  active: T | 'all';
  onChange: (value: T | 'all') => void;
  getLabel: (category: T) => string;
}

/** Pill-style single-select filter, used by the Gallery and Mahadev Katha pages. */
export function CategoryFilter<T extends string>({
  label,
  allLabel,
  categories,
  active,
  onChange,
  getLabel,
}: CategoryFilterProps<T>) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      <FilterPill selected={active === 'all'} onClick={() => onChange('all')}>
        {allLabel}
      </FilterPill>
      {categories.map((category) => (
        <FilterPill key={category} selected={active === category} onClick={() => onChange(category)}>
          {getLabel(category)}
        </FilterPill>
      ))}
    </div>
  );
}

function FilterPill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'rounded-full border px-4 py-1.5 text-sm font-medium transition',
        selected
          ? 'border-saffron-600 bg-saffron-600 text-white'
          : 'border-sand-300 bg-white text-ink-600 hover:border-saffron-400 hover:text-saffron-700'
      )}
    >
      {children}
    </button>
  );
}
