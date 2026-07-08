"use client";

import Image from "next/image";
import { Scissors, Sparkles, Waves, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const servicesList = [
    {
      icon: Scissors,
      title: "Dread Installation",
      desc: "Full head or partial bespoke installation of handmade locs, tailored to your scalp & hair health.",
    },
    {
      icon: Sparkles,
      title: "Custom Dread Sets",
      desc: "Individually customized sets built around your preferred length, thickness, and color blends.",
    },
    {
      icon: Waves,
      title: "Wavy Dreads",
      desc: "Our signature luxury style: soft, flowing, textured waves that add incredible volume & look natural.",
    },
    {
      icon: RefreshCw,
      title: "Maintenance & Repairs",
      desc: "Root tightening, interlocking, deep cleansing, and structural restoration to keep locs pristine.",
    },
  ];

  return (
    <section id="services" className="relative bg-[#151515] py-20 sm:py-28 overflow-hidden z-20">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Service Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block"
            >
              Our Services
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bebas text-5xl sm:text-6xl tracking-wider text-white mb-10"
            >
              Tailored To You
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {servicesList.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-300 group"
                  >
                    {/* Circle Icon Badge */}
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#7B2CBF] group-hover:bg-[#7B2CBF]/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-white text-base font-semibold tracking-wider uppercase mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#D8D8D8]/70 text-xs sm:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#booking"
                className="inline-flex items-center space-x-3 border border-[#7B2CBF]/50 hover:border-[#7B2CBF] text-[#D8D8D8] hover:text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-transparent hover:bg-[#7B2CBF]/10 transition-all duration-300 group"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-[#7B2CBF] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Lifestyle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 glow-gold">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="Katie styling a client's wavy dreadlocks"
                fill
                sizes="(max-w-7xl) 500px, 500px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Luxury gold border highlight on hover */}
              <div className="absolute inset-0 border-2 border-transparent hover:border-[#D4AF37]/30 transition-all duration-500 rounded-3xl pointer-events-none" />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              
              {/* Neon Text Mock Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glassmorphism border border-white/10">
                <p className="font-bebas text-2xl text-white tracking-widest mb-1">
                  Dred Shed <span className="text-[#7B2CBF]">HQ</span>
                </p>
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-sans font-medium">
                  Expert styling. Uncompromising quality.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
