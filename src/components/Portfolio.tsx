import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, ArrowRight, MapPin, Grid, Layers, Sparkles } from "lucide-react";

interface ProjectImage {
  url: string;
  label: string;
}

interface Project {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  type: string;
  style: string;
  concept: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    id: "kohinoor",
    name: "Kohinoor Residences",
    subtitle: "by Auro Realty",
    location: "Hyderabad",
    type: "Residential Interior",
    style: "Modern Contemporary",
    concept: "Contemporary apartment interiors designed to balance comfort, sophistication, and spatial openness.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
        label: "Hero Perspective - Architectural Welcome"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
        label: "Living Space - Sun-Drenched Relaxation"
      },
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
        label: "Bedroom Oasis - Subtle Linens & Calms"
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
        label: "Detailing - Book-Matched Calacatta Gold Marble"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
        label: "Dining Vault - Refined Conversational Geometry"
      }
    ]
  },
  {
    id: "satish",
    name: "The Satish Residence",
    subtitle: "Mr. Satish & Sravani",
    location: "Hyderabad",
    type: "Private Bespoke Home",
    style: "Warm Minimalist",
    concept: "A personalized home designed around warmth, functionality, and timeless family living.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
        label: "Hero Entrance - Monolithic Exterior Meet"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
        label: "Living Atrium - Conversation Pit Structure"
      },
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200",
        label: "Rest Area - Natural Timber Canopy & Cozy Warmths"
      },
      {
        url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
        label: "Detailing - Rough Tactile plaster & Clay Vessels"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
        label: "Courtyard Frame - Indoor-Outdoor Seamless Balance"
      }
    ]
  },
  {
    id: "forest-edge",
    name: "Subishi Forest Edge",
    subtitle: "Forest Edge Villas",
    location: "Hyderabad",
    type: "Luxury Villa Architecture",
    style: "Biophilic Elegant Modernism",
    concept: "Villa interiors inspired by natural textures, openness, and contemporary luxury.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
        label: "Hero Facade - Biophilic Glass Elegance"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
        label: "Grand Atrium - Double-Height Garden Lookout"
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
        label: "Master Suite - Serene Forest-Line Glazing"
      },
      {
        url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1200",
        label: "Detailing - Dark Granite Hearth & Sleek Brass Accent"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
        label: "Sun Terrace - Cantilever Structural Frame"
      }
    ]
  },
  {
    id: "class-e",
    name: "DSR Class E Interiors",
    subtitle: "Class E Residences",
    location: "Hyderabad",
    type: "Premium Duplex Penthouse",
    style: "Modern Industrial Understated",
    concept: "Modern apartment interiors defined by clean lines, layered lighting, and understated elegance.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
        label: "Hero Dynamic - Slate Hearth & Monolithic Columns"
      },
      {
        url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200",
        label: "Living Frame - Dark Leather & Industrial Precision"
      },
      {
        url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200",
        label: "Culinary Suite - Steel Finishes & Minimal Cabinets"
      },
      {
        url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1200",
        label: "Detailing - Aggregates & Warm Concealed Backlight"
      },
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",
        label: "Primary Chamber - Floating Platform Bed Canopy"
      }
    ]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToIntention = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-brand-ivory px-6 text-brand-charcoal overflow-hidden border-t border-brand-divider-light">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial-Style Heading */}
        <div className="text-center md:text-left mb-28 border-b border-brand-divider-light pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.45em] text-brand-taupe font-bold block mb-4">
              EDITORIAL PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-brand-charcoal">
              SELECTED <span className="italic font-normal text-brand-espresso">PROJECTS</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-text/75 font-light text-sm md:text-base leading-relaxed">
            A curated collection of residential interiors crafted with elegance, warmth, and modern spatial design.
          </p>
        </div>

        {/* Cinematic Layouts Flow */}
        <div className="space-y-36">

          {/* PROJECT 1: Large Left Image, Text on Right */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 overflow-hidden rounded shadow-xl aspect-[3/2] relative">
              <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none group-hover:bg-black/0 transition-all duration-500" />
              <img
                src={projects[0].images[0].url}
                alt={projects[0].name}
                className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-brand-taupe">
                <span>{projects[0].location}</span>
                <span>•</span>
                <span>{projects[0].type}</span>
                <span>•</span>
                <span>{projects[0].style}</span>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-brand-charcoal leading-tight">
                  {projects[0].name}
                </h3>
                <p className="text-sm font-light text-brand-text/50 uppercase tracking-widest mt-1">
                  {projects[0].subtitle}
                </p>
              </div>

              <p className="text-sm md:text-base text-brand-text/75 font-light leading-relaxed">
                {projects[0].concept}
              </p>

              <div>
                <button
                  onClick={() => setSelectedProject(projects[0])}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-brand-charcoal hover:text-brand-taupe border-b border-brand-charcoal pb-1 transition-all group/btn"
                >
                  [ View Project Album ]
                  <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>


          {/* PROJECT 2: Text on Left, Large Image on Right */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* On mobile, put the image first */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-brand-taupe">
                <span>{projects[1].location}</span>
                <span>•</span>
                <span>{projects[1].type}</span>
                <span>•</span>
                <span>{projects[1].style}</span>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-brand-charcoal leading-tight">
                  {projects[1].name}
                </h3>
                <p className="text-sm font-light text-brand-text/50 uppercase tracking-widest mt-1">
                  {projects[1].subtitle}
                </p>
              </div>

              <p className="text-sm md:text-base text-brand-text/75 font-light leading-relaxed">
                {projects[1].concept}
              </p>

              <div>
                <button
                  onClick={() => setSelectedProject(projects[1])}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-brand-charcoal hover:text-brand-taupe border-b border-brand-charcoal pb-1 transition-all group/btn"
                >
                  [ View Project Album ]
                  <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 overflow-hidden rounded shadow-xl aspect-[3/2] order-1 lg:order-2">
              <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none group-hover:bg-black/0 transition-all duration-500" />
              <img
                src={projects[1].images[0].url}
                alt={projects[1].name}
                className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>


          {/* PROJECT 3: Full-width Hero Image */}
          <div 
            className="group relative rounded overflow-hidden aspect-[21/9] md:aspect-[24/10] shadow-2xl flex flex-col justify-end p-6 md:p-14 cursor-pointer"
            onClick={() => setSelectedProject(projects[2])}
          >
            <div className="absolute inset-0 bg-black/45 hover:bg-black/35 z-10 transition-colors duration-500" />
            <img
              src={projects[2].images[0].url}
              alt={projects[2].name}
              className="absolute inset-0 w-full h-full object-cover transform duration-1000 group-hover:scale-103"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative z-20 max-w-2xl text-white space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-[#d4af37] opacity-90">
                <span>{projects[2].location}</span>
                <span>•</span>
                <span>{projects[2].type}</span>
                <span>•</span>
                <span>{projects[2].style}</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-serif font-light text-white leading-tight">
                {projects[2].name}
                <span className="text-lg md:text-xl font-sans block text-brand-cream/60 mt-1 uppercase font-semibold font-mono font-sans">
                  {projects[2].subtitle}
                </span>
              </h3>

              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed hidden sm:block max-w-lg">
                {projects[2].concept}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white hover:text-brand-taupe border-b border-white pb-1 transition-all">
                  [ View Full Spec Villa Album ]
                </span>
              </div>
            </div>
          </div>


          {/* PROJECT 4: 2-column elegant layout */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="overflow-hidden rounded shadow-xl aspect-[16/10] relative mb-8 lg:mb-0">
                <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none group-hover:bg-black/0 transition-all duration-500" />
                <img
                  src={projects[3].images[0].url}
                  alt={projects[3].name}
                  className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Detail specs at bottom on desktop */}
              <div className="hidden lg:flex items-center justify-between border-t border-brand-divider-light pt-6 text-[11px] font-mono tracking-wider text-brand-text/50">
                <span>PROJECT CODE // DS-04-E</span>
                <span>HIGH RIGOR DESIGN</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-widest text-brand-taupe">
                <span>{projects[3].location}</span>
                <span>•</span>
                <span>{projects[3].type}</span>
                <span>•</span>
                <span>{projects[3].style}</span>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-brand-charcoal leading-tight">
                  {projects[3].name}
                </h3>
                <p className="text-sm font-light text-brand-text/50 uppercase tracking-widest mt-1">
                  {projects[3].subtitle}
                </p>
              </div>

              <p className="text-sm md:text-base text-brand-text/75 font-light leading-relaxed">
                {projects[3].concept}
              </p>

              <div>
                <button
                  onClick={() => setSelectedProject(projects[3])}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-brand-charcoal hover:text-brand-taupe border-b border-brand-charcoal pb-1 transition-all group/btn"
                >
                  [ View Project Album ]
                  <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* EXTRA PREMIUM CTA TOUCH */}
        <div className="mt-36 border-t border-brand-divider-light pt-24 text-center">
          <p className="text-xs font-mono text-brand-taupe tracking-[0.45em] uppercase mb-4 font-bold">
            CURATED RIGOR
          </p>
          <h4 className="text-3xl md:text-5xl font-serif font-light text-brand-charcoal mb-8">
            “Crafting Spaces with Intention”
          </h4>
          <button
            onClick={scrollToIntention}
            className="px-12 py-5 bg-brand-charcoal text-white hover:bg-brand-taupe tracking-widest font-mono text-xs uppercase font-medium transition-all duration-300 shadow-xl cursor-pointer"
          >
            Start Your Project
          </button>
        </div>

      </div>

      {/* FULL-SCREEN IMMERSIVE MONOCHROME OR OFF-WHITE INTERACTIVE MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-ivory z-[100] overflow-y-auto"
          >
            {/* Minimal Sticky Nav Bar */}
            <div className="sticky top-0 bg-brand-ivory/90 backdrop-blur-md border-b border-brand-divider-light py-5 px-6 md:px-12 flex justify-between items-center z-50">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-taupe rounded" />
                <span className="text-[10px] font-mono text-brand-text/60 tracking-widest uppercase">
                  SPATIAL ALBUM // {selectedProject.name}
                </span>
              </div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 p-2 text-brand-charcoal hover:text-brand-taupe font-mono text-xs uppercase tracking-widest transition-colors font-semibold"
              >
                CLOSE <X size={18} />
              </button>
            </div>

            {/* Modal Canvas Flow (Lots of beautiful luxurious white space) */}
            <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
              
              {/* Project Headings */}
              <div className="max-w-3xl space-y-4">
                <span className="text-xs uppercase tracking-[0.3em] text-brand-taupe font-extrabold flex items-center gap-2">
                  <MapPin size={12} /> {selectedProject.location}
                </span>
                
                <h1 className="text-4xl md:text-7xl font-serif font-light tracking-tight text-brand-charcoal">
                  {selectedProject.name}
                </h1>
                
                <p className="text-sm font-semibold tracking-widest text-brand-text/50 uppercase">
                  {selectedProject.subtitle}
                </p>

                {/* Grid stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-brand-divider-light">
                  <div>
                    <span className="text-[10px] text-brand-text/40 font-mono tracking-widest uppercase block">
                      SECTOR
                    </span>
                    <span className="text-sm font-light text-brand-charcoal">
                      {selectedProject.type}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-text/40 font-mono tracking-widest uppercase block">
                      AESTHETICS
                    </span>
                    <span className="text-sm font-light text-brand-charcoal">
                      {selectedProject.style}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-text/40 font-mono tracking-widest uppercase block">
                      LOCATION
                    </span>
                    <span className="text-sm font-light text-brand-charcoal">
                      {selectedProject.location}, IN
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-text/40 font-mono tracking-widest uppercase block">
                      CURATORS
                    </span>
                    <span className="text-sm font-light text-brand-charcoal">
                      Solstice Studio
                    </span>
                  </div>
                </div>
              </div>

              {/* Concept Text */}
              <div className="bg-brand-cream/40 p-10 border border-brand-divider-light rounded-sm max-w-3xl">
                <p className="text-lg md:text-xl font-serif font-light text-brand-espresso leading-relaxed italic">
                  “ {selectedProject.concept} ”
                </p>
              </div>

              {/* IMAGE 1: Hero Shot (Full Width) */}
              <div className="space-y-4">
                <div className="rounded shadow-2xl overflow-hidden aspect-[16/9] bg-brand-cream border border-brand-divider-light">
                  <img
                    src={selectedProject.images[0].url}
                    alt={selectedProject.images[0].label}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-brand-text/50">
                  <span>SPEC_01 // HERO SHOT OVERVIEW</span>
                  <span>{selectedProject.images[0].label}</span>
                </div>
              </div>

              {/* IMAGE 2: Living Room */}
              <div className="space-y-4">
                <div className="rounded shadow-2xl overflow-hidden aspect-[16/9] bg-brand-cream border border-brand-divider-light">
                  <img
                    src={selectedProject.images[1].url}
                    alt={selectedProject.images[1].label}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-brand-text/50">
                  <span>SPEC_02 // LIVING SPACE DESIGN</span>
                  <span>{selectedProject.images[1].label}</span>
                </div>
              </div>

              {/* IMAGE 3: Bedroom / Kitchen */}
              <div className="space-y-4">
                <div className="rounded shadow-2xl overflow-hidden aspect-[16/10] bg-brand-cream border border-brand-divider-light">
                  <img
                    src={selectedProject.images[2].url}
                    alt={selectedProject.images[2].label}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-brand-text/50">
                  <span>SPEC_03 // TACTILE SLEEPING QUARTERS</span>
                  <span>{selectedProject.images[2].label}</span>
                </div>
              </div>

              {/* IMAGE 4: Material / Decor Close-up */}
              <div className="space-y-4">
                <div className="rounded shadow-2xl overflow-hidden aspect-[16/10] bg-brand-cream border border-brand-divider-light">
                  <img
                    src={selectedProject.images[3].url}
                    alt={selectedProject.images[3].label}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-brand-text/50">
                  <span>SPEC_04 // MATERIAL DETAIL & SENSORY</span>
                  <span>{selectedProject.images[3].label}</span>
                </div>
              </div>

              {/* IMAGE 5: Another Wide Perspective */}
              <div className="space-y-4">
                <div className="rounded shadow-2xl overflow-hidden aspect-[16/9] bg-brand-cream border border-brand-divider-light">
                  <img
                    src={selectedProject.images[4].url}
                    alt={selectedProject.images[4].label}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-brand-text/50">
                  <span>SPEC_05 // FINAL CINEMATIC ANGLE</span>
                  <span>{selectedProject.images[4].label}</span>
                </div>
              </div>

              {/* Modal Bottom Close Block */}
              <div className="border-t border-brand-divider-light pt-16 text-center space-y-6">
                <p className="text-sm text-brand-text/60 font-light">
                  You have experienced the complete digital sensory record of {selectedProject.name}.
                </p>
                
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 border border-brand-divider-light text-brand-charcoal hover:bg-brand-charcoal hover:text-white tracking-widest font-mono text-xs uppercase font-medium transition-colors"
                  >
                    Close Spatial Album
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setTimeout(scrollToIntention, 350);
                    }}
                    className="px-8 py-4 bg-brand-charcoal text-white hover:bg-brand-taupe tracking-widest font-mono text-xs uppercase font-medium transition-colors"
                  >
                    Inquire For This Aesthetic
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
