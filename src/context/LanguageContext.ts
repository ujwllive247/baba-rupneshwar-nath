import { createContext } from 'react';
import type { Bilingual, Language } from '@/types';
import type { TranslationKey } from '@/i18n';

export interface LanguageContextValue {
  /** Currently selected language. */
  lang: Language;
  setLanguage: (lang: Language) => void;
  /** Looks up a UI string, substituting `{placeholders}`. */
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
  /** Reads the active half of a `{ hi, en }` pair. */
  pick: (value: Bilingual) => string;
  /** Chooses between two parallel values of any type (e.g. two string arrays). */
  choose: <T>(hiValue: T, enValue: T) => T;
}

/**
 * Null default — `useLanguage` throws when the provider is missing, which
 * surfaces the mistake immediately instead of silently rendering English.
 */
export const LanguageContext = createContext<LanguageContextValue | null>(null);
