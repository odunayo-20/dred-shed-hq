"use client";

import Image from "next/image";
import { Award, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const timelineSteps = [
    {
      year: "2018",
      title: "The Craft Begins",
      desc: "Jay & Katie began hand-crocheting custom dread extensions from a home studio, driven by a passion for premium hair styling.",
    },
    {
      year: "2020",
      title: "Studio Launch",
      desc: "Opened our first boutique studio in Derbyshire, serving local clients and perfecting our signature dread techniques.",
    },
    {
      year: "2022",
      title: "Wavy Dread Signature",
      desc: "Officially launched our trademarked 'Wavy Dreads' style, combining luxury synthetic & premium human hair blends.",
    },
    {
      year: "2024",
      title: "Dred Shed HQ",
      desc: "Opened our custom-built luxury salon space in Chesterfield, now shipping custom dread sets worldwide.",
    },
  ];

  return (
    <section id="about" className="relative bg-[#0D0D0D] py-20 sm:py-28 overflow-hidden z-20 border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute left-10 top-1/3 w-72 h-72 bg-[#7B2CBF]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Photos of Jay & Katie */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Jay & Katie, Salon Owners"
                  fill
                  sizes="(max-w-7xl) 500px, 500px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Overlapping Floating Small Image (Styling Close-up) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -30, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-10 -left-10 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20 hidden md:block"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                  alt="Styling session close up"
                  fill
                  sizes="(max-w-7xl) 300px, 300px"
                  className="object-cover"
                />
              </motion.div>

              {/* Float Experience Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-6 top-10 z-20 glassmorphism p-5 rounded-2xl border border-white/15 max-w-[200px] text-center"
              >
                <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <span className="block font-bebas text-3xl text-white">8+ Years</span>
                <span className="text-[10px] text-[#D8D8D8]/70 uppercase tracking-widest font-semibold">
                  Professional Experience
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Story & Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
              The Creators
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white mb-6">
              Meet Jay & Katie
            </h2>
            
            <p className="text-[#D8D8D8] text-base leading-relaxed mb-6 font-medium">
              We believe dreadlocks are more than just hair—they are a statement of identity, confidence, and natural beauty. Our mission at Dred Shed HQ is to deliver custom, hand-crafted locks that look organic and feel incredibly luxurious.
            </p>
            
            <p className="text-[#D8D8D8]/70 text-sm leading-relaxed mb-10">
              Each set we make is meticulously hand-crocheted without chemical additives, using only natural tools. We work closely with every client to formulate custom color gradients, wavy textures, and loc distributions that perfectly complement their aesthetic.
            </p>

            {/* Timeline Layout */}
            <div className="relative border-l border-white/10 pl-6 ml-2 mb-10 space-y-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0D0D0D] border-2 border-[#7B2CBF] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-colors duration-300" />
                  
                  <span className="text-xs font-bold text-[#D4AF37] tracking-widest block mb-1">
                    {step.year}
                  </span>
                  <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#D8D8D8]/70 text-xs sm:text-sm leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <a
                href="#booking"
                className="bg-[#D4AF37] hover:bg-[#FFE082] text-black px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:glow-gold"
              >
                Book with Jay & Katie
              </a>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B2CBF]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D8D8D8]">
                  Fully Insured Salon
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
