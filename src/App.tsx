import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import DesignProcess from "./components/DesignProcess";
import Portfolio from "./components/Portfolio";
import Materials from "./components/Materials";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-charcoal flex items-center justify-center p-6"
    >
      <div className="overflow-hidden flex flex-col items-center max-w-sm w-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src="/logo.png"
          alt="Solstice Design"
          referrerPolicy="no-referrer"
          className="w-80 sm:w-96 max-w-full h-auto object-contain"
        />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="h-px bg-brand-taupe mt-8"
        />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of high-quality assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <BrandStatement />
            <DesignProcess />
            <Portfolio />
            <Materials />
            <Services />
            <Testimonials />
            <Contact />
            <CTABanner />
          </main>
          <Footer />
        </motion.div>
      )}

      {/* Custom noise overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}

