import { Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-brand-light-text pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-md">
            <img
              src="/logo.png"
              alt="Solstice Design"
              referrerPolicy="no-referrer"
              className="w-64 sm:w-80 h-auto mb-8 object-contain"
            />
            <p className="text-brand-light-text/60 font-light leading-relaxed mb-8">
              Curation at the intersection of architecture and human emotion. We build legacies of light and shadow.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-3 border border-brand-divider-dark rounded-full hover:bg-brand-taupe hover:text-brand-charcoal hover:border-brand-taupe transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 border border-brand-divider-dark rounded-full hover:bg-brand-taupe hover:text-brand-charcoal hover:border-brand-taupe transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 border border-brand-divider-dark rounded-full hover:bg-brand-taupe hover:text-brand-charcoal hover:border-brand-taupe transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe">Studio</h4>
              <ul className="space-y-4 font-light text-brand-light-text/60">
                <li><a href="#philosophy" className="hover:text-brand-light-text transition-colors">Philosophy</a></li>
                <li><a href="#" className="hover:text-brand-light-text transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-brand-light-text transition-colors">Atelier</a></li>
                <li><a href="#" className="hover:text-brand-light-text transition-colors">Press</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe">Work</h4>
              <ul className="space-y-4 font-light text-brand-light-text/60">
                <li><a href="#portfolio" className="hover:text-brand-light-text transition-colors">Residential</a></li>
                <li><a href="#portfolio" className="hover:text-brand-light-text transition-colors">Commercial</a></li>
                <li><a href="#portfolio" className="hover:text-brand-light-text transition-colors">Bespoke</a></li>
                <li><a href="#portfolio" className="hover:text-brand-light-text transition-colors">Landscape</a></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 lg:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe">Newsletter</h4>
              <p className="text-xs text-brand-light-text/40 mb-4 tracking-wider">Updates from our studio.</p>
              <div className="flex border-b border-brand-divider-dark pb-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-transparent text-sm w-full focus:outline-none placeholder:text-brand-light-text/20"
                />
                <button className="text-brand-taupe text-[10px] font-bold uppercase tracking-widest hover:text-brand-light-text transition-colors">JOIN</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-divider-dark pt-16 gap-8 text-[10px] uppercase tracking-[0.3em] text-brand-light-text/30 font-bold">
          <p>© 2024 SOLSTICE DESIGN ATELIER. ALL RIGHTS RESERVED.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-brand-taupe transition-colors group"
          >
            BACK TO TOP
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-taupe">Privacy</a>
            <a href="#" className="hover:text-brand-taupe">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
