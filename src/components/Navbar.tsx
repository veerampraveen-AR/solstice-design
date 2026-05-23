import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-brand-charcoal/95 backdrop-blur-md py-3 shadow-md border-b border-brand-divider-dark" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer block flex items-center"
          >
            <img
              src="/logo.png"
              alt="Solstice Design"
              referrerPolicy="no-referrer"
              className={`w-auto object-contain transition-all duration-500 hover:opacity-90 ${
                scrolled ? "h-8 sm:h-10 md:h-12" : "h-11 sm:h-15 md:h-18"
              }`}
            />
          </motion.a>
 
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[10.5px] uppercase tracking-[0.25em] transition-colors font-semibold cursor-pointer text-brand-cream/80 hover:text-brand-taupe"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
 
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 transition-colors text-brand-cream hover:text-brand-taupe"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-black z-[60] flex flex-col p-8 md:hidden"
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-brand-cream p-2">
            <X size={32} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              onClick={(e) => {
                setIsOpen(false);
                handleSmoothScroll(e, link.href);
              }}
              className="text-4xl font-serif text-brand-cream hover:text-brand-taupe transition-colors cursor-pointer"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-6 justify-center text-brand-cream pb-8">
          <Instagram size={20} className="hover:text-brand-taupe cursor-pointer" />
          <Linkedin size={20} className="hover:text-brand-taupe cursor-pointer" />
          <Facebook size={20} className="hover:text-brand-taupe cursor-pointer" />
        </div>
      </motion.div>
    </>
  );
}
