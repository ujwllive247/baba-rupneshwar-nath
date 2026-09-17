import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { LanguageProvider } from './LanguageProvider';
import { useLanguage } from '@/hooks/useLanguage';
import { STORAGE_KEY } from '@/i18n';

function Probe() {
  const { lang, t, setLanguage } = useLanguage();
  return (
    <div>
      <p data-testid="lang">{lang}</p>
      <p data-testid="greeting">{t('site.name')}</p>
      <button onClick={() => setLanguage('en')}>switch to en</button>
    </div>
  );
}

describe('LanguageProvider', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = '';
  });

  it('defaults to Hindi when nothing is stored', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang')).toHaveTextContent('hi');
    expect(screen.getByTestId('greeting')).toHaveTextContent('बाबा रुपनेश्वर नाथ');
  });

  it('reads a previously stored language preference', () => {
    window.localStorage.setItem(STORAGE_KEY, 'en');
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });

  it('updates the language, the document lang attribute, and persists the choice', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );

    await user.click(screen.getByRole('button', { name: 'switch to en' }));

    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(screen.getByTestId('greeting')).toHaveTextContent('Baba Rupneshwar Nath');
    expect(document.documentElement.lang).toBe('en');
    expect(window.localStorage.getItem(STORAGE_KEY)).toBe('en');
  });
});