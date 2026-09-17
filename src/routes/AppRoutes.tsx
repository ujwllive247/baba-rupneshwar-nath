import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import History from '@/pages/History';
import DarshanAarti from '@/pages/DarshanAarti';
import Events from '@/pages/Events';
import EventDetails from '@/pages/EventDetails';
import MahadevKatha from '@/pages/MahadevKatha';
import StoryDetails from '@/pages/StoryDetails';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="history" element={<History />} />
        <Route path="darshan-aarti" element={<DarshanAarti />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:slug" element={<EventDetails />} />
        <Route path="mahadev-katha" element={<MahadevKatha />} />
        <Route path="mahadev-katha/:slug" element={<StoryDetails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
