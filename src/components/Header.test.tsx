import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LanguageProvider } from '@/context/LanguageProvider';
import { STORAGE_KEY } from '@/i18n';
import { Header } from './Header';
import { Footer } from './Footer';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Header />
                <main>
                  <button type="button">Page content</button>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </LanguageProvider>
    </MemoryRouter>
  );
}

// jsdom applies no CSS, so the desktop nav is always "visible"; the mobile panel relies on `hidden`.
const desktopNav = () => screen.getAllByRole('navigation', { name: 'Main navigation' })[0];

beforeEach(() => window.localStorage.setItem(STORAGE_KEY, 'en'));
afterEach(() => window.localStorage.clear());

describe('Header — desktop Temple disclosure', () => {
  it('is a button that toggles its About Temple / History links, not a link to /about', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const temple = within(desktopNav()).getByRole('button', { name: 'Temple' });

    expect(temple).toHaveAttribute('aria-expanded', 'false');
    expect(within(desktopNav()).queryByRole('link', { name: 'About Temple' })).not.toBeInTheDocument();

    await user.click(temple);
    expect(temple).toHaveAttribute('aria-expanded', 'true');
    expect(within(desktopNav()).getByRole('link', { name: 'About Temple' })).toHaveAttribute('href', '/about');
    expect(within(desktopNav()).getByRole('link', { name: 'History' })).toHaveAttribute('href', '/history');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('opens on ArrowDown, cycles with the arrow keys, and Escape returns focus to the button', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const temple = within(desktopNav()).getByRole('button', { name: 'Temple' });

    temple.focus();
    await user.keyboard('{ArrowDown}');
    expect(within(desktopNav()).getByRole('link', { name: 'About Temple' })).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(within(desktopNav()).getByRole('link', { name: 'History' })).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(within(desktopNav()).getByRole('link', { name: 'About Temple' })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(temple).toHaveAttribute('aria-expanded', 'false');
    expect(temple).toHaveFocus();
  });

  it('closes when focus tabs past the last link', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const temple = within(desktopNav()).getByRole('button', { name: 'Temple' });

    await user.click(temple);
    await user.tab();
    await user.tab();
    expect(within(desktopNav()).getByRole('link', { name: 'History' })).toHaveFocus();
    await user.tab();
    expect(temple).toHaveAttribute('aria-expanded', 'false');
    expect(within(desktopNav()).getByRole('link', { name: 'Events' })).toHaveFocus();
  });

  it('marks the current Temple page when on /history', async () => {
    const user = userEvent.setup();
    renderAt('/history');
    await user.click(within(desktopNav()).getByRole('button', { name: 'Temple' }));
    expect(within(desktopNav()).getByRole('link', { name: 'History' })).toHaveAttribute('aria-current', 'page');
    expect(within(desktopNav()).getByRole('link', { name: 'About Temple' })).not.toHaveAttribute('aria-current');
  });
});

describe('Header — navigation targets', () => {
  it('links Visit Us and the Plan your visit CTA to the contact page visit section', () => {
    renderAt('/');
    expect(within(desktopNav()).getByRole('link', { name: 'Visit Us' })).toHaveAttribute('href', '/contact#visit');
    expect(screen.getAllByRole('link', { name: 'Plan your visit' })[0]).toHaveAttribute('href', '/contact#visit');
  });

  it('no longer links to the removed Darshan & Aarti page', () => {
    renderAt('/');
    for (const link of screen.getAllByRole('link')) {
      expect(link).not.toHaveAttribute('href', '/darshan-aarti');
    }
    expect(within(desktopNav()).queryByRole('link', { name: 'Darshan & Aarti' })).not.toBeInTheDocument();
  });
});

describe('Header — mobile menu', () => {
  it('moves focus in on open, traps Tab, and restores focus to the toggle on Escape', async () => {
    const user = userEvent.setup();
    renderAt('/history');
    const toggle = screen.getByRole('button', { name: 'Open main menu' });

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAccessibleName('Close main menu');
    expect(document.body.style.overflow).toBe('hidden');

    const panel = document.getElementById(toggle.getAttribute('aria-controls')!)!;
    const panelView = within(panel);
    expect(panelView.getByRole('link', { name: 'Home' })).toHaveFocus();
    // The Temple group starts expanded because /history is one of its pages.
    expect(panelView.getByRole('button', { name: 'Temple' })).toHaveAttribute('aria-expanded', 'true');

    // Shift+Tab from the first item wraps to the toggle, and again to the last item — never the page.
    await user.tab({ shift: true });
    expect(toggle).toHaveFocus();
    await user.tab({ shift: true });
    expect(panelView.getByRole('button', { name: 'English' })).toHaveFocus();
    await user.tab();
    expect(toggle).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(panel).not.toBeVisible();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
    expect(document.body.style.overflow).toBe('');
  });

  it('closes after choosing a page', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const toggle = screen.getByRole('button', { name: 'Open main menu' });
    await user.click(toggle);
    const panel = document.getElementById(toggle.getAttribute('aria-controls')!)!;

    await user.click(within(panel).getByRole('link', { name: 'Gallery' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(panel).not.toBeVisible();
  });
});

describe('Footer', () => {
  it('provides quick links, visit, contact and legal links', () => {
    renderAt('/');
    const footer = screen.getByRole('contentinfo');
    const quick = within(footer).getByRole('navigation', { name: 'Quick links' });

    for (const name of ['Home', 'About Temple', 'History', 'Events', 'Mahadev Katha', 'Gallery', 'Visit Us']) {
      expect(within(quick).getByRole('link', { name })).toBeInTheDocument();
    }
    expect(within(footer).getByRole('link', { name: 'Directions & map' })).toHaveAttribute('href', '/contact#visit');
    expect(within(footer).getByRole('link', { name: 'Contact page' })).toHaveAttribute('href', '/contact');
    expect(within(footer).getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
    expect(within(footer).getByRole('link', { name: 'Terms of Use' })).toHaveAttribute('href', '/terms');
    expect(within(footer).queryByRole('heading', { name: 'Darshan & Aarti' })).not.toBeInTheDocument();
  });
});
