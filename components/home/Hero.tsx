"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star, ArrowRight, Calendar, Compass } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 250]);
  const opacityBg = useTransform(scrollY, [0, 600], [1, 0.4]);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isResizing) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Dreads Showcase"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105"
        />
        {/* Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/40 z-10" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Chesterfield, UK
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
              Worldwide Shipping
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-bebas text-6xl sm:text-7xl md:text-8xl tracking-wider text-white leading-[0.9] uppercase"
          >
            Home of <br />
            <span className="text-gradient-purple font-bold">Wavy Dreads</span>
          </motion.h1>

          {/* Accent Script Subheadline */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-script text-4xl sm:text-5xl text-[#D4AF37] my-3 select-none"
          >
            Premium Handmade Dreads
          </motion.p>

          {/* Short paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#D8D8D8]/85 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-sans"
          >
            Custom made. Naturally you. Created by Jay & Katie, fully qualified
            and insured with thousands of happy clients. Let's make your dream hair a reality.
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10"
          >
            <a
              href="#booking"
              className="flex items-center justify-center space-x-2 bg-[#7B2CBF] hover:bg-[#9D4EDD] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:glow-purple group shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#shop"
              className="flex items-center justify-center space-x-2 border border-white/20 hover:border-white text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>View Collection</span>
            </a>
          </motion.div>

          {/* Review badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center space-x-4"
          >
            <div className="flex -space-x-2.5">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative w-8 h-8 rounded-full border-2 border-[#0D0D0D] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Happy Client Avatar"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-white text-xs font-bold ml-2">4.9/5</span>
              </div>
              <span className="text-xs text-[#D8D8D8]/70">
                From 1000+ happy clients
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Before/After Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 glow-purple glassmorphism p-3">
            <div
              ref={sliderRef}
              className="relative w-full h-full rounded-2xl overflow-hidden cursor-ew-resize select-none"
            >
              {/* After Image (Full Background) */}
              <Image
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80"
                alt="After Transformation"
                fill
                sizes="(max-w-7xl) 400px, 400px"
                className="object-cover"
                draggable={false}
              />
              <div className="absolute right-4 bottom-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">
                After
              </div>

              {/* Before Image (Clipping Path) */}
              <div
                className="absolute inset-0 z-10 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
                  alt="Before Transformation"
                  fill
                  sizes="(max-w-7xl) 400px, 400px"
                  className="object-cover"
                  draggable={false}
                />
                <div className="absolute left-4 bottom-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white uppercase">
                  Before
                </div>
              </div>

              {/* Slider Line / Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-[#D4AF37] cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={() => setIsResizing(true)}
                onTouchStart={() => setIsResizing(true)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#D4AF37] border-4 border-[#0D0D0D] flex items-center justify-center shadow-lg pointer-events-none">
                  <div className="flex space-x-0.5">
                    <span className="w-1 h-3 bg-black rounded-full" />
                    <span className="w-1 h-3 bg-black rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
