import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  /** Heading level — defaults to h2 since sections sit under a page's h1. */
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
  align = 'left',
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between',
        align === 'center' && 'sm:flex-col sm:items-center sm:text-center',
        className
      )}
    >
      <div className={cn(align === 'center' && 'mx-auto max-w-2xl')}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading className="mt-1.5 text-2xl font-semibold sm:text-3xl">{title}</Heading>
        {subtitle && <p className="mt-2.5 max-w-2xl text-ink-500">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
