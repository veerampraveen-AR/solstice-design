import { motion } from "motion/react";
import { Sun, Building2, Leaf } from "lucide-react";

const principles = [
  {
    icon: <Sun className="text-brand-espresso" size={32} />,
    title: "Form Follows Light",
    text: "Every space is shaped around the movement of natural light — its direction, softness, and changing character throughout the day."
  },
  {
    icon: <Building2 className="text-brand-espresso" size={32} />,
    title: "Structure with Soul",
    text: "We believe architecture should balance functionality with emotion, creating environments that feel purposeful, calm, and deeply human."
  },
  {
    icon: <Leaf className="text-brand-espresso" size={32} />,
    title: "Timeless over Trendy",
    text: "We choose materials, textures, and palettes that age gracefully, ensuring every design remains elegant beyond passing trends."
  }
];

export default function BrandStatement() {
  return (
    <section id="philosophy" className="py-32 bg-brand-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] text-brand-taupe font-bold mb-6">Design Philosophy</h2>
          <h3 className="text-4xl md:text-6xl font-serif tracking-tighter leading-tight mb-8">
            Designing Spaces That <span className="italic">Feel Alive</span>
          </h3>
          <p className="text-lg text-brand-text font-light leading-relaxed">
            From modern interiors to architectural planning, our approach combines aesthetics with practicality, ensuring every detail serves a purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group text-center md:text-left"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-lg shadow-brand-charcoal/5 group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4">{p.title}</h4>
              <p className="text-brand-text font-light leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
