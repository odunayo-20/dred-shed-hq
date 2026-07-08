"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative bg-[#151515] py-20 sm:py-28 overflow-hidden z-20 border-t border-white/5">
      {/* Decorative gradient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#7B2CBF]/10 to-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glassmorphism p-8 sm:p-16 rounded-3xl border border-white/10 text-center luxury-shadow relative overflow-hidden">
          {/* Subtle gold accent border on hover */}
          <div className="absolute inset-0 border border-transparent hover:border-[#D4AF37]/20 transition-colors duration-500 rounded-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
              Dred Shed Club
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white mb-4">
              Join The Club
            </h2>
            <p className="text-[#D8D8D8]/70 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto mb-10">
              Subscribe to get notified about exclusive custom set releases, care guides by Jay & Katie, and styling events. No spam, only premium loc content.
            </p>
          </motion.div>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3"
                >
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-black/60 border border-white/10 hover:border-white/20 focus:border-[#7B2CBF] text-white text-xs tracking-widest px-6 py-4 rounded-full focus:outline-none transition-all placeholder:text-[#D8D8D8]/30 uppercase"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#7B2CBF] hover:bg-[#9D4EDD] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:glow-purple"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-2"
                >
                  <CheckCircle className="w-12 h-12 text-[#D4AF37] mb-3" />
                  <p className="text-white text-sm font-semibold uppercase tracking-wider mb-1">
                    Welcome to the Club!
                  </p>
                  <p className="text-xs text-[#D8D8D8]/65">
                    Check your inbox soon for your exclusive welcome mail.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
