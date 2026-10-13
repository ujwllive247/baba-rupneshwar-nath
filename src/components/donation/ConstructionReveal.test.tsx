import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { LanguageProvider } from '@/context/LanguageProvider';
import { STORAGE_KEY } from '@/i18n';
import { ConstructionReveal } from './ConstructionReveal';

beforeEach(() => window.localStorage.setItem(STORAGE_KEY, 'en'));
afterEach(() => window.localStorage.clear());

function renderReveal(completedSrc?: string) {
  return render(
    <LanguageProvider>
      <ConstructionReveal currentSrc="/now.jpg" completedSrc={completedSrc} width={1280} height={720} />
    </LanguageProvider>
  );
}

describe('ConstructionReveal', () => {
  it('shows only the construction photo when there is no completed image', () => {
    renderReveal();
    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('toggles the completed concept view with a button for touch and keyboard users', async () => {
    const user = userEvent.setup();
    renderReveal('/done.jpg');
    expect(screen.getByRole('img', { name: /concept image/i })).toHaveAttribute('src', '/done.jpg');
    expect(screen.getByText(/not the final design/i)).toBeInTheDocument();

    const toggle = screen.getByRole('button', { name: 'See completed temple' });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await user.click(toggle);
    expect(screen.getByRole('button', { name: 'See construction today' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('falls back to the construction photo alone if the completed image fails to load', () => {
    renderReveal('/missing.jpg');
    fireEvent.error(screen.getByRole('img', { name: /concept image/i }));
    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
