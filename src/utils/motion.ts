/** Checked before any JS-driven scroll (native `scrollIntoView` ignores CSS `scroll-behavior` in some browsers). */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
