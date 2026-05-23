import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-40 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5]"
          >
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover"
              alt="Design process" 
            />
          </motion.div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-taupe/10 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-charcoal/5 rounded-full blur-3xl z-0" />
        </div>

        <div className="space-y-12">
          <div className="relative">
            <span className="text-[140px] md:text-[180px] font-serif font-black text-brand-taupe/10 absolute -top-24 -left-10 select-none">
              SHAPING
            </span>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                AN INTEGRAL <br />
                <span className="italic">APPROACH</span> TO SOULFUL SPACE
              </h2>
            </div>
          </div>
          
          <div className="space-y-8 max-w-lg">
            <p className="text-lg text-brand-text leading-relaxed font-light">
              We don't just design buildings; we choreograph experiences. Our philosophy is rooted in the "Solstice" concept—the pivot between stillness and movement, light and dark.
            </p>
            <p className="text-lg text-brand-text leading-relaxed font-light">
              Every detail, from the gradient of a shadow to the texture of a custom-milled wood, is considered an essential note in a silent symphony.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-8">
            <div>
              <h4 className="text-brand-espresso font-bold text-4xl font-serif">12+</h4>
              <p className="text-[10px] uppercase tracking-widest text-brand-text/60 mt-1">Design Awards</p>
            </div>
            <div>
              <h4 className="text-brand-espresso font-bold text-4xl font-serif">150+</h4>
              <p className="text-[10px] uppercase tracking-widest text-brand-text/60 mt-1">Global Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
