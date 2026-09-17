import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { LanguageProvider } from '@/context/LanguageProvider';
import { AppRoutes } from './AppRoutes';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </MemoryRouter>
  );
}

describe('AppRoutes', () => {
  it('renders the home page hero heading at "/"', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    // Header nav is always present alongside the routed page.
    expect(screen.getAllByText('बाबा रुपनेश्वर नाथ').length).toBeGreaterThan(0);
  });

  it('renders the 404 page for an unknown route', () => {
    renderAt('/this-route-does-not-exist');
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('पृष्ठ नहीं मिला')).toBeInTheDocument();
  });

  it('renders the contact page with the contact form', () => {
    renderAt('/contact');
    expect(screen.getByRole('button', { name: 'संदेश भेजें' })).toBeInTheDocument();
  });
});