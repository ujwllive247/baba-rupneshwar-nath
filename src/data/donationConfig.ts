/**
 * Donation module configuration. Every value here is a placeholder pending
 * temple-committee approval — amounts, limits and seva labels included.
 */
import type { Bilingual } from '@/types';
import type { Paise } from '@/types/donation';
import { rupeesToPaise } from '@/utils/money';

/**
 * The module is visible in local development and tests, but a production
 * build hides it unless VITE_DONATIONS_ENABLED=true. `main` deploys straight
 * to the public site, and a demo payment flow must not reach real devotees
 * without approval.
 */
export const DONATIONS_ENABLED =
  import.meta.env.DEV || import.meta.env.VITE_DONATIONS_ENABLED === 'true';

export interface PresetAmount {
  amount: Paise;
  /** Devotional label shown under the amount. Not a claim about what it buys. */
  label: Bilingual;
}

export const PRESET_AMOUNTS: PresetAmount[] = [
  { amount: rupeesToPaise(101), label: { hi: 'श्रद्धा', en: 'Shraddha' } },
  { amount: rupeesToPaise(251), label: { hi: 'भक्ति', en: 'Bhakti' } },
  { amount: rupeesToPaise(501), label: { hi: 'सेवा', en: 'Seva' } },
  { amount: rupeesToPaise(1100), label: { hi: 'समर्पण', en: 'Samarpan' } },
  { amount: rupeesToPaise(2100), label: { hi: 'संकल्प', en: 'Sankalp' } },
  { amount: rupeesToPaise(5100), label: { hi: 'अर्पण', en: 'Arpan' } },
];

export const DEFAULT_PRESET_INDEX = 2;

export const MIN_AMOUNT: Paise = rupeesToPaise(10);
export const MAX_AMOUNT: Paise = rupeesToPaise(500000);

/** Demo processing delay, so the "verifying" state is visible. */
export const DEMO_PROCESSING_MS = 1200;

/** How long a payment session stays open before it should be treated as expired. */
export const PAYMENT_SESSION_MINUTES = 15;
