import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Sparkles, Box, Info } from "lucide-react";

interface MaterialType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  spec: string;
}

const materials: MaterialType[] = [
  {
    id: "marble",
    name: "Italian Calacatta Gold Marble",
    tagline: "Kohinoor Residences Accent",
    description: "Sourced for the luxurious flooring and bespoke wall claddings in the Kohinoor Residences. Chosen for its warm gold undertones and deep grey veins, it seamlessly interacts with concealed lighting arrays.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    spec: "Honed Finish Slabs, 20mm Nominal Thickness"
  },
  {
    id: "wood",
    name: "Warm European Forest Oak",
    tagline: "The Satish Residence Foundation",
    description: "Employed throughout the custom ceiling paneling, platform bed canopies, and joinery of the Satish Residence. Offers a grounding organic touch paired with warm textured plaster walls.",
    imageUrl: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1200",
    spec: "Quarter-Sawn French Oak, Natural Matte Protective Oil"
  },
  {
    id: "fabrics",
    name: "Belgian Flax & Bouclé Weaves",
    tagline: "Selected Interior Textiles",
    description: "Curated neutral-toned textiles featured on custom living suites in the Kohinoor and Satish projects. High-density woven construction brings inviting touchpoints and acoustic comfort.",
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
    spec: "80% Organic Flax Linen Blend"
  },
  {
    id: "granite",
    name: "Brushed Charcoal Granite",
    tagline: "Subishi Forest Edge Hearth",
    description: "Textured flamed-and-brushed black granite slabs anchoring the fireplace hearth in the biophilic Forest Edge Villa. Echoes natural textures right alongside double-height panoramic glass.",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
    spec: "Deep Aggregate Flamed Slabs, Slip-Resistant Texture"
  },
  {
    id: "slate",
    name: "Monolithic Slate & Steel",
    tagline: "DSR Class E Industrial Detail",
    description: "Brushed matte stainless steel details paired with dark charcoal slate paneling. Curated explicitly for the high-end industrial kitchen island and columns of the Class E Residences.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
    spec: "Architectural Gauge Slate & 304 Marine Stainless Steel"
  }
];

export default function Materials() {
  const [selected, setSelected] = useState<MaterialType>(materials[0]);

  return (
    <section id="materials" className="py-32 bg-brand-charcoal text-brand-light-text border-t border-white/5 relative overflow-hidden">
      {/* Decorative architectural background circle */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-taupe/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end border-b border-white/5 pb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.45em] text-brand-taupe font-bold mb-4 block">
              PORTFOLIO TEXTURES
            </span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white">
              MATERIALS & <span className="italic font-normal text-brand-taupe">PALETTES</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-light-text/60 font-light text-sm md:text-base leading-relaxed justify-self-start lg:justify-self-end">
            An authentic design is built on material integrity. Rather than arbitrary decorations, every wood veneer, stone pattern, and slab below matches a completed spatial project in our portfolio.
          </p>
        </div>

        {/* Workspace Bento Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Active Material Interactive Card Details (Left 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-sm relative">
            <span className="text-[11px] font-mono text-brand-taupe tracking-[0.3em] uppercase block mb-8">
              // SPECIFICATION MAP
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 text-xs text-brand-taupe uppercase tracking-wider rounded-sm">
                  <Box size={12} /> {selected.tagline}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
                  {selected.name}
                </h3>
                
                <p className="text-sm md:text-base text-brand-light-text/70 leading-relaxed font-light">
                  {selected.description}
                </p>

                {/* Spec details table */}
                <div className="border-t border-white/10 pt-6 mt-8">
                  <span className="text-[10px] font-mono text-brand-taupe tracking-widest uppercase block mb-2">
                    // ACCREDITED SPECIFICATIONS
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-light-text/50">
                    <Info size={14} className="text-brand-taupe" />
                    <span>{selected.spec}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 text-[10px] font-mono text-brand-cream/20 tracking-wider">
              SOLSTICE DESIGN STUDIO ©2026 MATERIAL MAPPING
            </div>
          </div>

          {/* Grid of Materials (Right 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
            {materials.map((m) => {
              const isActive = selected.id === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelected(m)}
                  className={`group relative aspect-[3/4] rounded shadow-lg overflow-hidden cursor-pointer border transition-all duration-500 transform hover:-translate-y-1 ${
                    isActive 
                      ? "border-brand-taupe ring-1 ring-brand-taupe/40" 
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Textures background */}
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Curated Overlay Gradient */}
                  <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/30 to-transparent ${
                    isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                  }`} />

                  {/* Corner indicator */}
                  {isActive && (
                    <div className="absolute top-4 right-4 bg-brand-taupe text-brand-charcoal text-[9px] font-mono tracking-widest uppercase py-1 px-2.5 rounded-sm shadow">
                      SELECTED
                    </div>
                  )}

                  {/* Bottom title info */}
                  <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                    <span className="text-[9px] font-mono text-brand-taupe tracking-widest uppercase block mb-1">
                      {m.tagline.split(" ")[0]} // SPEC
                    </span>
                    <h4 className="text-base font-serif font-light text-white group-hover:text-brand-taupe transition-colors duration-300">
                      {m.name.split(" ")[1] || m.name}
                    </h4>
                  </div>
                </div>
              );
            })}

            {/* Premium Aesthetic Filler Box */}
            <div className="hidden md:flex flex-col justify-between p-6 bg-white/[0.01] border border-dashed border-white/10 rounded items-center text-center justify-center">
              <Sparkles className="text-brand-taupe/40 mb-3 animate-pulse" size={28} />
              <div>
                <h5 className="text-[11px] font-mono text-brand-taupe tracking-widest uppercase mb-1">
                  TACTILE LAB
                </h5>
                <p className="text-[10px] text-brand-light-text/40 font-light px-2">
                  Physical samples shipped instantly upon design engagement.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
