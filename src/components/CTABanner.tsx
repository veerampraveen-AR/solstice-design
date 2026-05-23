import { motion } from "motion/react";

export default function CTABanner() {
  return (
    <section className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto bg-brand-charcoal py-24 px-10 md:px-20 text-center relative overflow-hidden rounded-[3rem]"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif text-brand-light-text tracking-tighter mb-8 italic">
            Ready to <span className="text-brand-taupe not-italic">reimagine</span> your space?
          </h2>
          <p className="text-brand-light-text/60 max-w-xl mx-auto text-lg font-light mb-12">
            Let's start with a conversation. We take pride in understanding the story before the structure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-12 py-5 bg-brand-light-text text-brand-charcoal uppercase tracking-[0.3em] font-bold text-sm hover:bg-brand-cream transition-colors cursor-pointer"
          >
            Start Your Journey
          </motion.button>
        </div>
        
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-taupe/10 blur-3xl rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-taupe/10 blur-[120px] rounded-full -translate-x-1/3" />
      </motion.div>
    </section>
  );
}
