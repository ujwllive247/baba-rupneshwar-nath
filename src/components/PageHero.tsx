import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}

/** Compact hero banner used at the top of interior (non-home) pages. */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <div className="border-b border-sand-200 bg-gradient-to-b from-night-900 to-night-800 py-14 text-sand-100 sm:py-20">
      <div className="container-page">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-400">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand-300">{intro}</p>}
        {children}
      </div>
    </div>
  );
}
