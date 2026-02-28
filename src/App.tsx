import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Fleet = lazy(() => import('./pages/Fleet'));
const CarDetail = lazy(() => import('./pages/CarDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Wedding = lazy(() => import('./pages/Wedding'));
const About = lazy(() => import('./pages/About'));
const Locations = lazy(() => import('./pages/Locations'));
const BugattiChiron = lazy(() => import('./pages/BugattiChiron'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const Cookies = lazy(() => import('./pages/legal/Cookies'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Minimalist Luxury Loader
const PageLoader = () => (
  <div className="min-h-screen bg-luxury-black flex items-center justify-center">
    <div className="w-12 h-12 border-2 border-luxury-gold/20 border-t-luxury-gold rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="fleet" element={<Fleet />} />
            <Route path="cars/:id" element={<CarDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/:city" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="wedding" element={<Wedding />} />
            <Route path="about" element={<About />} />
            <Route path="locations" element={<Locations />} />
            <Route path="bugatti-chiron" element={<BugattiChiron />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
