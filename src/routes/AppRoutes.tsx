import { lazy, Suspense, type ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import History from '@/pages/History';
import Events from '@/pages/Events';
import EventDetails from '@/pages/EventDetails';
import MahadevKatha from '@/pages/MahadevKatha';
import StoryDetails from '@/pages/StoryDetails';
import KathaAnubhav from '@/pages/KathaAnubhav';
import KathaAnubhavChapter from '@/pages/KathaAnubhavChapter';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';
import { DONATIONS_ENABLED } from '@/data/donationConfig';

// The donation module is split into its own chunk so it adds nothing to the main bundle.
const Donate = lazy(() => import('@/pages/Donate'));
const DonatePayment = lazy(() => import('@/pages/DonatePayment'));
const DonateConfirmation = lazy(() => import('@/pages/DonateConfirmation'));

function Lazy({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>{children}</Suspense>;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="history" element={<History />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:slug" element={<EventDetails />} />
        <Route path="mahadev-katha" element={<MahadevKatha />} />
        <Route path="mahadev-katha/anubhav" element={<KathaAnubhav />} />
        <Route path="mahadev-katha/anubhav/:slug" element={<KathaAnubhavChapter />} />
        <Route path="mahadev-katha/:slug" element={<StoryDetails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        {DONATIONS_ENABLED && (
          <>
            <Route path="donate" element={<Lazy><Donate /></Lazy>} />
            <Route path="donate/payment/:donationId" element={<Lazy><DonatePayment /></Lazy>} />
            <Route path="donate/confirmation/:donationId" element={<Lazy><DonateConfirmation /></Lazy>} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
