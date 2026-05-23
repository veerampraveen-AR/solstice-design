import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Sliders } from "lucide-react";

interface SubService {
  name: string;
}

interface Service {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
  imageUrl: string;
  subServices: string[];
}

const services: Service[] = [
  {
    id: "architecture",
    num: "01",
    title: "Architecture Design",
    desc: "Contemporary architectural solutions that merge elegance, sustainability, and spatial intelligence.",
    icon: <Compass className="text-brand-taupe" size={24} />,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      "Residential Architecture",
      "Elevation Design",
      "Space Planning",
      "Villa Design",
      "Modern Facades"
    ]
  },
  {
    id: "interiors",
    num: "02",
    title: "Interior Design",
    desc: "Sophisticated interiors crafted with balance, warmth, and modern functionality — tailored uniquely to your lifestyle.",
    icon: <Sparkles className="text-brand-taupe" size={24} />,
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      "Living Spaces",
      "Modular Kitchens",
      "Bedroom Interiors",
      "Luxury Bathrooms",
      "Office Interiors"
    ]
  },
  {
    id: "visualization",
    num: "03",
    title: "3D Visualization",
    desc: "Hyper-realistic previews and spatial storytelling that allow you to fully experience your spaces before construction.",
    icon: <Sliders className="text-brand-taupe" size={24} />,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      "Photorealistic Renders",
      "Walkthroughs",
      "Concept Visualization",
      "Material Simulation"
    ]
  },
  {
    id: "turnkey",
    num: "04",
    title: "Turnkey Solutions",
    desc: "Complete, stress-free project realization from the initial draft to final staging, delivered to perfection.",
    icon: <ShieldCheck className="text-brand-taupe" size={24} />,
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      "End-to-End Execution",
      "Site Supervision",
      "Material Selection",
      "Custom Furniture"
    ]
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <section id="services" className="py-32 bg-brand-charcoal text-brand-light-text border-t border-brand-divider-dark relative">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/5 pb-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.45em] text-brand-taupe font-extrabold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-taupe block" /> Studio Services
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white">
              BESPOKE <span className="italic font-normal text-brand-taupe">SOLUTIONS</span>
            </h3>
          </div>
          <p className="max-w-md text-brand-light-text/60 font-light text-sm md:text-base leading-relaxed">
            Delivering a singular standard of architectural rigor and custom craftsmanship to clients worldwide.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start justify-between">
          
          {/* Left Column: Premium Interactive Photo Frame (Sticky on Desktop) */}
          <div className="hidden lg:block lg:w-[44%] lg:sticky lg:top-36 h-[540px] group rounded-md overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/25" />
            
            {/* Dynamic Image Container */}
            <AnimatePresence>
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeService.imageUrl}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlaid Title and Quick Spec block */}
            <div className="absolute bottom-0 left-0 w-full p-10 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end h-1/2">
              <span className="text-xs font-mono text-brand-taupe tracking-widest uppercase mb-2">
                // ACTIVE SPECIFICATION {activeService.num}
              </span>
              <h4 className="text-3xl font-serif font-light text-white mb-3">
                {activeService.title}
              </h4>
              <p className="text-sm text-brand-light-text/60 font-light leading-relaxed max-w-sm">
                {activeService.desc}
              </p>
            </div>
          </div>

          {/* Right Column: Premium Interactive Services Accordion List */}
          <div className="w-full lg:w-[50%] flex flex-col gap-0">
            {services.map((service) => {
              const isActive = activeService.id === service.id;

              return (
                <div
                  key={service.id}
                  id={`service-item-${service.id}`}
                  className={`group border-b border-white/10 py-10 transition-all duration-500 cursor-pointer ${
                    isActive ? "bg-white/[0.02] px-6 -mx-6" : "hover:bg-white/[0.01] hover:px-4 hover:-mx-4"
                  }`}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setActiveService(service)}
                >
                  {/* Service Row Header */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6 md:gap-8">
                      {/* Premium Accent & Index */}
                      <span className="text-sm font-mono tracking-wider font-semibold text-brand-taupe opacity-65 group-hover:opacity-100 transition-opacity mt-1.5">
                        {service.num}.
                      </span>

                      {/* Title & Description */}
                      <div>
                        <h4 className="text-2xl md:text-3.5xl font-serif font-light tracking-tight text-white mb-4 group-hover:text-brand-taupe transition-colors duration-300 flex items-center gap-3">
                          {service.title}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden">
                            <ArrowUpRight size={18} className="text-brand-taupe inline-block" />
                          </span>
                        </h4>
                        <p className="text-sm md:text-[15px] font-light leading-relaxed text-brand-light-text/60 max-w-2xl group-hover:text-brand-light-text/80 transition-colors duration-300">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Arrow / Chevron Symbol */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 border border-white/10 rounded-full group-hover:border-brand-taupe group-hover:bg-brand-taupe group-hover:text-brand-charcoal transition-all duration-500 flex-shrink-0">
                      <ArrowUpRight size={20} className="transform group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Mobile Inline Image & Sub Services Expandable Area */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : "0px",
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? "24px" : "0px"
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    {/* Native mobile/tablet image shown only if active */}
                    <div className="block lg:hidden w-full h-[220px] rounded mb-6 overflow-hidden relative border border-white/5 shadow-inner">
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                        <span className="text-[10px] font-mono text-brand-taupe tracking-wider uppercase">// DESIGN LAB</span>
                      </div>
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transform scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="border-t border-white/5 pt-6">
                      <p className="text-xs font-mono text-brand-taupe tracking-wider uppercase mb-4">
                        // PREMIUM CAPABILITIES
                      </p>

                      {/* Sub services interactive grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 bg-white/[0.012] p-5 rounded border border-white/[0.03]">
                        {service.subServices.map((sub, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-3 text-sm font-light text-brand-light-text/75 hover:text-white transition-colors group/sub cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 bg-brand-taupe/40 group-hover/sub:bg-brand-taupe rounded-sm transition-colors" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>

                      {/* Client Trust Marker */}
                      <div className="mt-5 flex items-center justify-between text-[11px] text-brand-light-text/40 font-mono tracking-widest uppercase">
                        <span>ESTATE GRADE</span>
                        <span>SOLSTICE DESIGN STUDIO</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
