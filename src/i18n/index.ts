import type { Language } from '@/types';
import { en, type TranslationKey } from './en';
import { hi } from './hi';

export const dictionaries: Record<Language, Record<TranslationKey, string>> = {
  en,
  hi,
};

export const LANGUAGES: { code: Language; label: string; htmlLang: string }[] = [
  { code: 'hi', label: 'हिन्दी', htmlLang: 'hi' },
  { code: 'en', label: 'English', htmlLang: 'en' },
];

export const DEFAULT_LANGUAGE: Language = 'hi';
export const STORAGE_KEY = 'brn:language';

/**
 * Looks up a string and substitutes `{placeholders}`.
 * Falls back to the key itself so a missing string is visible, never blank.
 */
export function translate(
  lang: Language,
  key: TranslationKey,
  vars?: Record<string, string | number>
): string {
  const value = dictionaries[lang][key] ?? key;
  if (!vars) return value;
  return value.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in vars ? String(vars[name]) : match
  );
}

export type { TranslationKey };
