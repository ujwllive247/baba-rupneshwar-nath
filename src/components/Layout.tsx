import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SkipLink } from './SkipLink';
import { Header } from './Header';
import { Footer } from './Footer';

/** Root layout: skip link, header, routed page content, footer. */
export function Layout() {
  const { pathname } = useLocation();

  // Move focus to the top on every route change — mirrors a full page navigation for AT users.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
