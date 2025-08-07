import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import About from '@components/About';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Experience from '@components/Experience';
import Education from '@components/Education';
import Blog from '@components/Blog';
import Contact from '@components/Contact';
import Testimonials from '@components/Testimonials';
import WhatsAppFloat from '@components/WhatsAppFloat';
import LoadingSpinner from '@components/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import { profile } from '@data/profile';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={profile.tagline} />
        <meta property="og:title" content={`${profile.name} — Portfolio`} />
        <meta property="og:description" content={profile.tagline} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <Suspense fallback={<div className="section text-center"><LoadingSpinner /></div>}>
                    <HomePage />
                  </Suspense>
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}