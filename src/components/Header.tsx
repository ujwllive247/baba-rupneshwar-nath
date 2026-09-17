import { useEffect, useId, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import { cn } from '@/utils/cn';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TempleMark } from './TempleMark';
import type { TranslationKey } from '@/i18n';

const NAV_ITEMS: { to: string; labelKey: TranslationKey; end?: boolean }[] = [
  { to: PATHS.home, labelKey: 'nav.home', end: true },
  { to: PATHS.about, labelKey: 'nav.about' },
  { to: PATHS.history, labelKey: 'nav.history' },
  { to: PATHS.darshan, labelKey: 'nav.darshan' },
  { to: PATHS.events, labelKey: 'nav.events' },
  { to: PATHS.katha, labelKey: 'nav.katha' },
  { to: PATHS.gallery, labelKey: 'nav.gallery' },
  { to: PATHS.contact, labelKey: 'nav.contact' },
];

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on route change and on Escape; keeps focus predictable.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    // Prevent background scroll while the mobile menu is open.
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition',
      isActive ? 'text-saffron-700' : 'text-ink-600 hover:text-saffron-700'
    );

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <NavLink
          to={PATHS.home}
          className="flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none"
        >
          <TempleMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-semibold text-night-900 sm:text-lg">
              {t('site.name')}
            </span>
            <span className="hidden text-[11px] uppercase tracking-wide text-ink-500 sm:block">
              {t('site.mantra')}
            </span>
          </span>
        </NavLink>

        <nav aria-label={t('nav.label')} className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={linkClass}>
                  {t(item.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-sand-100 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id={menuId}
        hidden={!open}
        className="border-t border-sand-200 bg-sand-50 lg:hidden"
      >
        <nav aria-label={t('nav.label')} className="container-page py-3">
          <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
            {t('nav.menu')}
          </p>
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-3 py-3 text-base font-medium transition',
                      isActive
                        ? 'bg-saffron-50 text-saffron-700'
                        : 'text-ink-700 hover:bg-sand-100'
                    )
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-sand-200 px-1 pt-3">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
