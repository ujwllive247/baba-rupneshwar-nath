import type { Language } from '@/types';
import type { Paise } from '@/types/donation';

const LOCALES: Record<Language, string> = { hi: 'hi-IN', en: 'en-IN' };

export function rupeesToPaise(rupees: number): Paise {
  return Math.round(rupees * 100);
}

export function paiseToRupees(paise: Paise): number {
  return paise / 100;
}

/** ₹1,10,000 — Indian digit grouping; paise shown only when present. */
export function formatINR(paise: Paise, lang: Language): string {
  const rupees = paiseToRupees(paise);
  return new Intl.NumberFormat(LOCALES[lang], {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: Number.isInteger(rupees) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(rupees);
}

/** Plain grouped number without the currency sign — "1,10,000". */
export function formatNumber(value: number, lang: Language): string {
  return new Intl.NumberFormat(LOCALES[lang]).format(value);
}

/** 9876543210 → "98••••••10". */
export function maskMobile(mobile: string): string {
  if (mobile.length < 4) return mobile;
  return `${mobile.slice(0, 2)}${'•'.repeat(mobile.length - 4)}${mobile.slice(-2)}`;
}
