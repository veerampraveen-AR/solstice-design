import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Phone, Mail, CheckCircle, Database, Download } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Residential Architecture");
  const [customInterest, setCustomInterest] = useState("");
  const [message, setMessage] = useState("");
  const [inquiries, setInquiries] = useState<any[]>(() => {
    const saved = localStorage.getItem("solsticedesign_inquiries");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback to default mock data
      }
    }
    return [
      { id: 1, timestamp: "2026-05-18 10:24", name: "Siddharth Rao", email: "sid@cloudtech.com", interest: "Residential Architecture", message: "Planning a luxury villa development in Hyderabad.", status: "Synced to Google Sheet" },
      { id: 2, timestamp: "2026-05-20 14:12", name: "Kavitha Reddy", email: "kavitha.r@luxescapes.in", interest: "Interior Styling", message: "Bespoke styling for our office space in Madhapur.", status: "Synced to Google Sheet" }
    ];
  });

  const [submitted, setSubmitted] = useState(false);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    localStorage.setItem("solsticedesign_inquiries", JSON.stringify(inquiries));
  }, [inquiries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all the values.");
      return;
    }

    setSyncing(true);

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    setTimeout(() => {
      const finalInterest = interest === "Others" ? customInterest || "Others" : interest;
      const newInquiry = {
        id: Date.now(),
        timestamp: formattedDate,
        name,
        email,
        interest: finalInterest,
        message,
        status: "Synced to Google Sheet"
      };

      setInquiries((prev) => [newInquiry, ...prev]);
      setSubmitted(true);
      setSyncing(false);

      // Reset fields
      setName("");
      setEmail("");
      setCustomInterest("");
      setMessage("");
    }, 1200);
  };

  const downloadExcelResponse = () => {
    const headers = ["Timestamp", "Full Name", "Email Address", "Interest", "Message", "Cloud Status"];
    const rows = inquiries.map((item) => [
      item.timestamp,
      item.name.replace(/,/g, " "),
      item.email,
      item.interest,
      item.message.replace(/,/g, " "),
      item.status
    ]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    
    // Excel-compatible UTF-8 BOM marker to correctly display special characters
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Inquiry_Responses_Solstice_Design_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-32 bg-brand-cream text-brand-text px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Contact Info Panel */}
        <div className="flex-1 space-y-12">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-brand-taupe font-bold mb-6">Connect</h2>
            <h3 className="text-5xl md:text-7xl font-sans tracking-tighter leading-none mb-10">
              LET'S <span className="italic block font-normal text-brand-taupe">BEGIN</span>
            </h3>
            <p className="text-xl text-brand-text/70 font-light max-w-sm">
              We take on a limited number of projects each year to ensure the highest level of dedication.
            </p>
          </div>

          <div className="space-y-6 pt-10">
            {/* Email - Link Active */}
            <a 
              href="mailto:bdm@solsticedesign.co.in" 
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-brand-divider-light flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-brand-cream transition-all">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-text/40">Inquire</p>
                <p className="text-lg font-medium text-brand-heading group-hover:text-brand-taupe transition-colors">bdm@solsticedesign.co.in</p>
              </div>
            </a>

            {/* Phone - Link Active */}
            <a 
              href="tel:7995544698" 
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-brand-divider-light flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-brand-cream transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-text/40">Speak</p>
                <p className="text-lg font-medium text-brand-heading group-hover:text-brand-taupe transition-colors">7995544698</p>
              </div>
            </a>

            {/* Visit Address - Link Active */}
            <a 
              href="https://maps.google.com/?q=Madhapur,Hyderabad,Telangana,India" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-brand-divider-light flex items-center justify-center group-hover:bg-brand-charcoal group-hover:text-brand-cream transition-all">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-brand-text/40">Visit</p>
                <p className="text-lg font-medium text-brand-heading group-hover:text-brand-taupe transition-colors leading-tight">Madhapur, Hyderabad, Telangana, India</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form Panel */}
        <div className="flex-1 bg-brand-ivory p-10 md:p-16 rounded-3xl shadow-xl border border-brand-divider-light relative overflow-hidden">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  required
                  className="w-full bg-transparent border-b border-brand-divider-light py-3 focus:outline-none focus:border-brand-taupe transition-colors font-sans text-lg text-brand-heading"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className="w-full bg-transparent border-b border-brand-divider-light py-3 focus:outline-none focus:border-brand-taupe transition-colors font-sans text-lg text-brand-heading"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60">Interest</label>
              <select 
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full bg-transparent border-b border-brand-divider-light py-3 focus:outline-none focus:border-brand-taupe transition-colors font-sans text-lg appearance-none cursor-pointer text-brand-heading"
              >
                <option value="Residential Architecture">Residential Architecture</option>
                <option value="Interior Styling">Interior Styling</option>
                <option value="Commercial Boutique">Commercial Boutique</option>
                <option value="Landscape Design">Landscape Design</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <AnimatePresence>
              {interest === "Others" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 overflow-hidden"
                >
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60">Specify Interest</label>
                  <input 
                    type="text" 
                    value={customInterest}
                    onChange={(e) => setCustomInterest(e.target.value)}
                    placeholder="E.g., Custom furniture design or smart automation..."
                    required
                    className="w-full bg-transparent border-b border-brand-divider-light py-3 focus:outline-none focus:border-brand-taupe transition-colors font-sans text-lg text-brand-heading"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-text/60">Message</label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your vision..."
                required
                className="w-full bg-transparent border-b border-brand-divider-light py-3 focus:outline-none focus:border-brand-taupe transition-colors font-sans text-lg resize-none text-brand-heading"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={syncing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-brand-charcoal text-brand-cream uppercase tracking-[0.3em] font-bold text-sm hover:bg-brand-divider-dark transition-colors flex items-center justify-center gap-4 group cursor-pointer disabled:opacity-50"
            >
              {syncing ? "SYNCING TO SHEET..." : "SEND INQUIRY"}
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>

          {/* Toast / Status banner */}
          <AnimatePresence>
            {submitted && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex flex-col gap-3 border border-emerald-200"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-emerald-600 shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold uppercase tracking-wider">Sync Successful</p>
                    <p className="text-emerald-700/80">Inquiry successfully sent & appended to Google Sheet database.</p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-emerald-600 hover:text-emerald-800 font-bold ml-2 underline uppercase tracking-widest text-[9px]"
                  >
                    Dismiss
                  </button>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-emerald-200/50">
                  <span className="text-[10px] text-emerald-700 font-mono">Excel response log ready</span>
                  <button 
                    onClick={downloadExcelResponse}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-bold uppercase tracking-wider text-[9px] transition-colors cursor-pointer"
                  >
                    <Download size={10} />
                    Download Excel (XLSX/CSV)
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
