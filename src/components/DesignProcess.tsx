import { ReactNode } from "react";
import { motion } from "motion/react";
import { Coffee, Compass, Layers, Tv, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin with deep conversation to understand your aesthetic aspirations, lifestyle rituals, and functional needs.",
    icon: <Coffee className="text-brand-taupe" size={24} />
  },
  {
    num: "02",
    title: "Concept Development",
    desc: "Drafting mood boards, materiality options, and zoning schemes that define the emotional soul and character of the space.",
    icon: <Layers className="text-brand-taupe" size={24} />
  },
  {
    num: "03",
    title: "Space Planning",
    desc: "Perfecting spatial flow. We meticulously detail spatial layout, volumes, and custom-milled partitions for perfect balance.",
    icon: <Compass className="text-brand-taupe" size={24} />
  },
  {
    num: "04",
    title: "3D Visualization",
    desc: "Translating layouts into photorealistic 3D renders, physical models, and material samples for a flawless sensory review.",
    icon: <Tv className="text-brand-taupe" size={24} />
  },
  {
    num: "05",
    title: "Execution",
    desc: "End-to-end realization with elite local craftsmen to deliver your space with perfection, on time, and fully staged.",
    icon: <CheckCircle2 className="text-brand-taupe" size={24} />
  }
];

export default function DesignProcess() {
  return (
    <section id="process" className="py-32 bg-brand-cream border-t border-brand-divider-light relative overflow-hidden">
      {/* Delicate ambient blur gradient base */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-tau/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.45em] text-brand-taupe font-bold mb-4 block">
            HOW WE WORK
          </span>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-brand-charcoal mb-6">
            THE CHOREOGRAPHY OF <span className="italic font-normal text-brand-espresso">CREATION</span>
          </h2>
          <p className="text-brand-text/75 font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto">
            Our structured, client-centric methodology ensures seamless transitions from initial sketch to hand-keyed delivery.
          </p>
        </div>

        {/* Dynamic Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-16">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-brand-taupe/20 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Icon Container with interactive pulse */}
              <div className="w-20 h-20 bg-brand-ivory rounded-full border border-brand-divider-light flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-taupe group-hover:bg-brand-charcoal group-hover:text-white transition-all duration-500 relative">
                <div className="absolute inset-0 rounded-full border border-brand-taupe/0 group-hover:scale-110 group-hover:border-brand-taupe/30 transition-all duration-500" />
                <span className="group-hover:text-brand-cream transition-colors duration-500">
                  {step.icon}
                </span>
              </div>

              {/* Number and Step details */}
              <span className="text-xs font-mono font-bold tracking-widest text-brand-taupe mb-2">
                STEP {step.num}
              </span>
              <h3 className="text-lg font-serif font-medium text-brand-charcoal mb-3 group-hover:text-brand-taupe transition-colors">
                {step.title}
              </h3>
              <p className="text-xs md:text-[13px] text-brand-text/70 leading-relaxed font-light max-w-xs md:max-w-none">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
