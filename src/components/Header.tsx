import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, MapPin, Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { PATHS } from '@/routes/paths';
import {
  HEADER_CTA,
  PRIMARY_NAV,
  isGroupActive,
  type NavGroupEntry,
  type NavLinkEntry,
} from '@/data/navigation';
import { cn } from '@/utils/cn';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TempleMark } from './TempleMark';

/** Matches Tailwind's `lg` breakpoint — the desktop navigation takes over from here. */
const DESKTOP_QUERY = '(min-width: 1024px)';

const FOCUSABLE = 'a[href], button:not([disabled])';

/** Visible, focusable elements inside `root`, skipping anything under a `hidden` ancestor. */
function focusableWithin(root: HTMLElement | null): HTMLElement[] {
  if (!root) return [];
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.closest('[hidden]')
  );
}

const desktopLinkClass = (isActive: boolean) =>
  cn(
    'inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-sm font-medium transition xl:px-3',
    isActive ? 'bg-saffron-50 text-saffron-700' : 'text-ink-600 hover:bg-sand-100 hover:text-saffron-700'
  );

const mobileLinkClass = (isActive: boolean) =>
  cn(
    'flex min-h-12 w-full items-center rounded-lg px-3 text-base font-medium transition',
    isActive ? 'bg-saffron-50 text-saffron-700' : 'text-ink-700 hover:bg-sand-100'
  );

export function Header() {
  const { t } = useLanguage();
  const { pathname, hash, key } = useLocation();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Any navigation closes the menu.
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash, key]);

  // Growing past the mobile breakpoint closes the menu, so the scroll lock never lingers.
  useEffect(() => {
    if (!open || typeof window.matchMedia !== 'function') return;
    const query = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [open]);

  // Escape closes and returns focus to the toggle; Tab is trapped between the toggle and the panel.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu(true);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [toggleRef.current, ...focusableWithin(panelRef.current)].filter(
        (el): el is HTMLElement => el !== null
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement as HTMLElement | null;
      const inside = current !== null && focusable.includes(current);
      if (event.shiftKey && (current === first || !inside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !inside)) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, closeMenu]);

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (!open) return;
    focusableWithin(panelRef.current)[0]?.focus();
  }, [open]);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-20 xl:gap-4">
          <NavLink
            to={PATHS.home}
            aria-label={t('site.nameFull')}
            className="flex min-w-0 items-center gap-2.5 rounded-md lg:shrink-0"
          >
            <TempleMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
            {/* Desktop shows the mark alone — the link keeps the full temple name as its accessible name. */}
            <span className="min-w-0 leading-tight lg:hidden">
              <span className="block truncate font-display text-base font-semibold text-night-900 sm:text-lg">
                {t('site.name')}
              </span>
              <span className="hidden text-[11px] uppercase tracking-wide text-ink-500 sm:block">
                {t('site.mantra')}
              </span>
            </span>
          </NavLink>

          <nav aria-label={t('nav.label')} className="hidden lg:block">
            <ul className="flex items-center xl:gap-0.5">
              {PRIMARY_NAV.map((item) =>
                item.kind === 'group' ? (
                  <li key={item.id}>
                    <DesktopDisclosure group={item} pathname={pathname} />
                  </li>
                ) : (
                  <li key={item.id}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) => desktopLinkClass(isActive)}
                    >
                      {t(item.labelKey)}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <NavLink
              to={HEADER_CTA.to}
              className="btn-primary hidden whitespace-nowrap px-4 py-2.5 md:inline-flex"
            >
              <MapPin aria-hidden="true" size={16} className="hidden xl:block" />
              {t(HEADER_CTA.labelKey)}
            </NavLink>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-700 hover:bg-sand-100 lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel — contents mount on open so each group starts from the current route. */}
        <div
          id={menuId}
          ref={panelRef}
          hidden={!open}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-sand-200 bg-sand-50 shadow-lift motion-safe:animate-fade-in sm:max-h-[calc(100dvh-5rem)] lg:hidden"
        >
          {open && (
            <nav aria-label={t('nav.label')} className="container-page py-4">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                {t('nav.menu')}
              </p>
              <ul className="flex flex-col gap-0.5">
                {PRIMARY_NAV.map((item) =>
                  item.kind === 'group' ? (
                    <li key={item.id}>
                      <MobileDisclosure group={item} pathname={pathname} onNavigate={() => closeMenu(false)} />
                    </li>
                  ) : (
                    <li key={item.id}>
                      <MobileLink item={item} onNavigate={() => closeMenu(false)} />
                    </li>
                  )
                )}
              </ul>
              <div className="mt-4 flex flex-col gap-4 border-t border-sand-200 px-1 pt-4">
                <NavLink
                  to={HEADER_CTA.to}
                  onClick={() => closeMenu(false)}
                  className="btn-primary min-h-12 w-full"
                >
                  <MapPin aria-hidden="true" size={18} />
                  {t(HEADER_CTA.labelKey)}
                </NavLink>
                <LanguageSwitcher size="touch" className="self-start" />
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Dims the page behind the mobile menu; a tap on it closes the menu. */}
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-night-950/40 motion-safe:animate-fade-in lg:hidden"
          onClick={() => closeMenu(true)}
        />
      )}
    </>
  );
}

function MobileLink({ item, onNavigate }: { item: NavLinkEntry; onNavigate: () => void }) {
  const { t } = useLanguage();
  return (
    <NavLink
      to={item.to}
      end={item.end}
      onClick={onNavigate}
      className={({ isActive }) => mobileLinkClass(isActive)}
    >
      {t(item.labelKey)}
    </NavLink>
  );
}

interface DisclosureProps {
  group: NavGroupEntry;
  pathname: string;
}

/**
 * Desktop "Temple" dropdown — a disclosure (button + list of links), not an ARIA menu,
 * so links keep their normal Tab order and screen-reader semantics.
 */
function DesktopDisclosure({ group, pathname }: DisclosureProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pendingFocus = useRef<'first' | 'last' | null>(null);
  const active = isGroupActive(pathname, group);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    if (pendingFocus.current) {
      const links = focusableWithin(containerRef.current).filter((el) => el.tagName === 'A');
      (pendingFocus.current === 'first' ? links[0] : links[links.length - 1])?.focus();
      pendingFocus.current = null;
    }
    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      const hadFocus = containerRef.current?.contains(document.activeElement) ?? false;
      setOpen(false);
      if (hadFocus) buttonRef.current?.focus();
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function onButtonKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const target = event.key === 'ArrowDown' ? 'first' : 'last';
    if (open) {
      const links = focusableWithin(containerRef.current).filter((el) => el.tagName === 'A');
      (target === 'first' ? links[0] : links[links.length - 1])?.focus();
    } else {
      pendingFocus.current = target;
      setOpen(true);
    }
  }

  function onListKeyDown(event: ReactKeyboardEvent<HTMLUListElement>) {
    const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    const links = focusableWithin(containerRef.current).filter((el) => el.tagName === 'A');
    const index = links.indexOf(document.activeElement as HTMLElement);
    if (index === -1) return;
    event.preventDefault();
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? links.length - 1
          : (index + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
    links[next]?.focus();
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        // Close once focus moves elsewhere on the page (a null target is a click, handled above).
        const next = event.relatedTarget as Node | null;
        if (next && !event.currentTarget.contains(next)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onButtonKeyDown}
        className={desktopLinkClass(active)}
      >
        {t(group.labelKey)}
        <ChevronDown
          aria-hidden="true"
          size={15}
          className={cn('transition-transform', open && 'rotate-180')}
        />
      </button>
      <ul
        id={panelId}
        hidden={!open}
        onKeyDown={onListKeyDown}
        className="card absolute left-0 top-full z-10 mt-2 min-w-[13rem] p-2 motion-safe:animate-fade-in"
      >
        {group.children.map((child) => (
          <li key={child.id}>
            <NavLink
              to={child.to}
              end={child.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition',
                  isActive ? 'bg-saffron-50 text-saffron-700' : 'text-ink-700 hover:bg-sand-100 hover:text-saffron-700'
                )
              }
            >
              {t(child.labelKey)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Mobile "Temple" group — expands in place; starts open when one of its pages is current. */
function MobileDisclosure({ group, pathname, onNavigate }: DisclosureProps & { onNavigate: () => void }) {
  const { t } = useLanguage();
  const active = isGroupActive(pathname, group);
  const [expanded, setExpanded] = useState(active);
  const panelId = useId();

  return (
    <>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
        className={cn(mobileLinkClass(active), 'justify-between')}
      >
        {t(group.labelKey)}
        <ChevronDown
          aria-hidden="true"
          size={20}
          className={cn('transition-transform', expanded && 'rotate-180')}
        />
      </button>
      <ul id={panelId} hidden={!expanded} className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-sand-300 pl-3">
        {group.children.map((child) => (
          <li key={child.id}>
            <MobileLink item={child} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </>
  );
}
