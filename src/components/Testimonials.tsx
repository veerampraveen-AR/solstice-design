import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kiran & Sravani",
    location: "The Satish & Sravani Residence, Hyderabad",
    type: "Bespoke Villa Interior",
    quote: "The team at Solstice designed our home with outstanding care. They took the time to understand our family routines and translated them into custom wood shelving, beautiful neutral plaster walls, and a warm atmosphere. It is simple, quiet, and extremely functional."
  },
  {
    name: "Siddharth Rao",
    location: "Kohinoor Residences, Hyderabad",
    type: "Premium Apartment Interior",
    quote: "Integrating Calacatta marble slab details with custom-engineered warm lighting was done beautifully. Rather than placing random decorative blocks, every corner and panel has a purpose. The result is a truly elegant contemporary home."
  },
  {
    name: "Ananya Reddy",
    location: "Forest Edge Villa, Hyderabad",
    type: "Luxury Villa",
    quote: "We wanted our main living room to merge naturally with the green garden view outside. Choosing flamed charcoal granite for the fireplace and minimal furniture sets made our home feel incredibly peaceful. Their five-step design process was very clear from day one."
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-cream px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.4em] text-brand-taupe font-bold mb-6">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-serif tracking-tighter">
            REAL WORDS FROM <br />
            <span className="italic">REAL SPACES</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-12 bg-brand-ivory rounded-3xl relative border border-brand-divider-light"
            >
              <Quote className="text-brand-taupe/20 absolute top-8 right-8" size={32} />
              <p className="text-lg leading-relaxed text-brand-text font-light mb-10 italic">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-serif text-xl">{t.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-text/40 mt-1">
                  {t.location} — {t.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
