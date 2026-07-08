"use client";

import { useEffect, useState, useRef } from "react";
import { ShieldCheck, Sparkles, Users, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-bebas text-4xl sm:text-5xl text-[#D4AF37] tracking-wider block mb-1">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function TrustSection() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Fully Qualified & Insured",
      desc: "Top tier stylists certified in advanced dreadlock methods.",
      value: 100,
      suffix: "% Certified",
    },
    {
      icon: Sparkles,
      title: "Handmade Premium Dreads",
      desc: "Individually crocheted dreadlocks using custom hair selection.",
      value: 1200,
      suffix: "+ Created",
    },
    {
      icon: Users,
      title: "Thousands of Clients",
      desc: "A massive, loyal family of wavy dread lovers and styling fans.",
      value: 1500,
      suffix: "+ Satisfied",
    },
    {
      icon: Globe,
      title: "Worldwide Shipping",
      desc: "UK crafted custom dread sets, securely shipped across the globe.",
      value: 50,
      suffix: "+ Countries",
    },
  ];

  return (
    <section className="relative bg-[#0D0D0D] py-16 sm:py-24 border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative overflow-hidden p-8 rounded-3xl glassmorphism-light hover:border-[#7B2CBF]/30 hover:glow-purple transition-all duration-300 group flex flex-col items-center text-center"
              >
                {/* Glow backdrop indicator */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#7B2CBF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#7B2CBF] group-hover:bg-[#7B2CBF]/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Animated counter */}
                <Counter value={card.value} suffix={card.suffix} />

                {/* Title */}
                <h3 className="text-white text-base font-semibold tracking-wider uppercase mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#D8D8D8]/70 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
