"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Charlotte M.",
      role: "Wavy Dreads Client",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      quote: "The best dreads I've ever had! Jay was amazing from start to finish. So professional and the quality is unreal. I get compliments everywhere I go!",
      rating: 5,
    },
    {
      id: 2,
      name: "Liam D.",
      role: "Regular Styling Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "I travel 2 hours just to come here. Jay & Katie make you feel so welcome and my dreads are always perfect. The shop vibe is absolute luxury.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sophie R.",
      role: "Custom extensions Set",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      quote: "Beautiful handmade dreads, amazing service and they last so long. Wouldn't go anywhere else! They really took the time to color match perfectly.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emma K.",
      role: "Root Maintenance",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      quote: "My loc maintenance session was incredible. Very gentle crochet work and the salon has a super clean, premium aesthetic. Highly recommend!",
      rating: 5,
    },
  ];

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetAutoplay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    resetAutoplay();
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <section id="reviews" className="relative bg-[#151515] py-20 sm:py-28 overflow-hidden z-20 border-t border-white/5">
      {/* Decorative Blur background */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
            What Our Clients Say
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white">
            Client Testimonials
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glassmorphism p-8 sm:p-12 rounded-3xl border border-white/10 luxury-shadow flex flex-col items-center text-center max-w-3xl mx-auto"
            >
              {/* Quote Mark */}
              <div className="w-12 h-12 rounded-full bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 flex items-center justify-center mb-8">
                <Quote className="w-5 h-5 text-[#7B2CBF] fill-current" />
              </div>

              {/* Text Quote */}
              <blockquote className="text-[#D8D8D8] text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Gold Stars */}
              <div className="flex items-center space-x-1 text-[#D4AF37] mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Client Profile details */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-white font-bold text-sm tracking-wide uppercase">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="block text-xs text-[#D8D8D8]/50 uppercase tracking-widest font-semibold">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#7B2CBF] text-[#D8D8D8] hover:text-white flex items-center justify-center transition-all bg-white/5 hover:bg-[#7B2CBF]/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetAutoplay();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-[#D4AF37] w-6" : "bg-white/10 hover:bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#7B2CBF] text-[#D8D8D8] hover:text-white flex items-center justify-center transition-all bg-white/5 hover:bg-[#7B2CBF]/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
