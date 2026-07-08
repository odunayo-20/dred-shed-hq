"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does a dreadlock installation take?",
      answer: "Full installations typically take between 4 to 8 hours depending on your hair's density, length, and the style of dreadlocks chosen (such as wavy dreads or custom color sets). We provide a luxury experience with breaks, snacks, and consultations throughout.",
    },
    {
      question: "Can I wash my wavy dreadlocks?",
      answer: "Absolutely! Washing is vital for scalp health. We recommend washing your dreadlocks every 1-2 weeks with a residue-free shampoo. Gently squeeze the water out, wrap them in a microfiber towel, and allow them to air dry or use a hair dryer on a cool setting.",
    },
    {
      question: "How often do dreads need maintenance?",
      answer: "For new installations, we recommend root maintenance and tightening every 6 to 8 weeks. For mature, established locks, you can stretch this to 10 to 12 weeks. Regular maintenance keeps your root sections tidy and prevents interlocking issues.",
    },
    {
      question: "What is the difference between human hair and synthetic dreads?",
      answer: "Premium human hair dreadlocks look and feel identical to natural locks, can be dyed, and last a lifetime. Synthetic dreads are made from high-quality fibers, offer fantastic color options, hold wavy styling perfectly, and serve as excellent temporary extensions.",
    },
    {
      question: "Do you ship your custom sets worldwide?",
      answer: "Yes, we ship all custom dreadlock sets internationally! Each set is hand-crocheted to order in Chesterfield, packaged securely, and shipped via a tracked postal service to guarantee safe arrival.",
    },
  ];

  return (
    <section className="relative bg-[#0D0D0D] py-20 sm:py-28 overflow-hidden z-20 border-t border-white/5">
      {/* Background glow decoration */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
            Got Questions?
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#151515] border-[#7B2CBF]/40 glow-purple"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#7B2CBF] rounded-3xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-white text-sm sm:text-base font-semibold tracking-wide uppercase">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    isOpen ? "border-[#D4AF37] text-[#D4AF37]" : "border-white/10 text-white"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-white/5 pt-4">
                        <p className="text-[#D8D8D8]/75 text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
