import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Bilingual, Language } from '@/types';
import { DEFAULT_LANGUAGE, STORAGE_KEY, translate, type TranslationKey } from '@/i18n';
import { LanguageContext, type LanguageContextValue } from './LanguageContext';

/** Reads the saved preference. Storage can throw in private mode, so it is guarded. */
function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'hi' || stored === 'en') return stored;
  } catch {
    // Ignore — fall through to the default.
  }
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readStoredLanguage);

  // Keep the document language in sync so screen readers switch pronunciation.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = useCallback((next: Language) => {
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // A failed write only costs persistence, not the switch itself.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLanguage,
      t: (key: TranslationKey, vars?: Record<string, string | number>) =>
        translate(lang, key, vars),
      pick: (pair: Bilingual) => pair[lang],
      choose: <T,>(hiValue: T, enValue: T) => (lang === 'hi' ? hiValue : enValue),
    }),
    [lang, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
