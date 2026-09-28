import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element with a fade/slide transition the first time it scrolls
 * into view. `prefers-reduced-motion` is already handled globally in
 * `index.css` (it collapses all transition durations), so this hook only
 * needs to decide *when* to flip the visible class, not how fast.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
