import { LANGUAGES } from '@/i18n';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

interface LanguageSwitcherProps {
  className?: string;
  /** `touch` gives each option a 44px target for the mobile menu. */
  size?: 'default' | 'touch';
}

/** हिन्दी | English — a two-way toggle that also persists the choice. */
export function LanguageSwitcher({ className, size = 'default' }: LanguageSwitcherProps) {
  const { lang, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t('common.language')}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-sand-300 bg-white/70 p-0.5 text-sm',
        className
      )}
    >
      {LANGUAGES.map((option) => {
        const active = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            lang={option.htmlLang}
            aria-pressed={active}
            onClick={() => setLanguage(option.code)}
            className={cn(
              'rounded-full px-3 py-1.5 font-medium transition',
              size === 'touch' && 'inline-flex min-h-11 min-w-[5.5rem] items-center justify-center px-4',
              active
                ? 'bg-saffron-600 text-white shadow-sm'
                : 'text-ink-600 hover:bg-sand-100 hover:text-ink-900'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
