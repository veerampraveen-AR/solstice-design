import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Black Background */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl pt-16"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold text-brand-cream leading-tight tracking-tight mb-8">
            <span className="block uppercase">Designing Spaces</span>
            <span className="block italic text-brand-taupe font-normal">That Feel Like You</span>
          </h1>
          <p className="text-brand-cream/70 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
            Luxury interiors and architectural spaces designed with elegance, functionality, and emotional depth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button 
              onClick={() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-brand-light-text text-brand-charcoal rounded-none text-sm uppercase tracking-widest font-bold hover:bg-brand-cream transition-colors duration-300 w-full sm:w-auto cursor-pointer"
            >
              View Projects
            </button>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 border border-brand-divider-light text-brand-light-text rounded-none text-sm uppercase tracking-widest font-medium hover:bg-brand-cream/10 transition-colors duration-300 w-full sm:w-auto cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-brand-cream flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll down</span>
        <ArrowDown size={16} />
      </motion.div>
      
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-brand-taupe/5 blur-3xl pointer-events-none" />
    </section>
  );
}
