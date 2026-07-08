"use client";

import { Scissors, Calendar, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingSteps() {
  const steps = [
    {
      icon: Scissors,
      title: "Choose Your Style",
      desc: "Browse our signature services, wavy collections, or consult for a custom set.",
    },
    {
      icon: Calendar,
      title: "Select Date",
      desc: "Pick a date and time that works best. We work flexibly around your schedule.",
    },
    {
      icon: CheckCircle2,
      title: "Confirm Booking",
      desc: "You are all set! We will send a confirmation and prep details before you arrive.",
    },
  ];

  return (
    <section id="booking" className="relative bg-[#0D0D0D] py-20 sm:py-28 overflow-hidden z-20 border-t border-white/5">
      {/* Decorative Blur */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7B2CBF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Block */}
        <div className="max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
            Ready For Your New Look?
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white mb-4">
            How It Works
          </h2>
          <p className="text-[#D8D8D8]/70 text-xs sm:text-sm leading-relaxed">
            Getting your dream hair is simple. Follow our elegant three-step booking process to start your lock journey.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative mb-16">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 hidden lg:block z-0" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#7B2CBF] via-[#D4AF37] to-[#7B2CBF] -translate-y-1/2 hidden lg:block z-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  {/* Step number badge */}
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.25em] mb-4">
                    Step 0{index + 1}
                  </span>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#0D0D0D] border-2 border-white/10 flex items-center justify-center mb-6 hover:border-[#7B2CBF] hover:glow-purple transition-all duration-300 relative group">
                    <div className="absolute inset-0.5 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors duration-300 relative z-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-base font-semibold tracking-wider uppercase mb-2">
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-[#D8D8D8]/70 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="https://wa.me/447770662036"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#D4AF37] hover:bg-[#FFE082] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-lg transition-all duration-300 hover:glow-gold w-full sm:w-auto"
          >
            <span>Book Your Appointment</span>
          </a>
          <a
            href="https://wa.me/447770662036"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 border border-white/10 hover:border-[#7B2CBF] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#D8D8D8] hover:text-white transition-all duration-300 bg-white/5 hover:bg-[#7B2CBF]/10 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 text-[#7B2CBF]" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
