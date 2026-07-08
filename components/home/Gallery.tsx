"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Transformation {
  id: number;
  category: "wavy" | "install" | "maintenance";
  beforeImg: string;
  afterImg: string;
  title: string;
  description: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<"all" | "wavy" | "install" | "maintenance">("all");
  const [selectedItem, setSelectedItem] = useState<Transformation | null>(null);
  const [lightboxPosition, setLightboxPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  const transformations: Transformation[] = [
    {
      id: 1,
      category: "wavy",
      beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
      title: "Signature Wavy Locks",
      description: "Full head installation of premium human hair wavy dreads, custom blended for a natural look.",
    },
    {
      id: 2,
      category: "install",
      beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80",
      title: "Textured Loc Extension",
      description: "Transitioned short curly hair into full-bodied, organic custom dread extensions.",
    },
    {
      id: 3,
      category: "wavy",
      beforeImg: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=800&q=80",
      title: "Blonde Wavy Dreads",
      description: "Full installation of premium light-blonde wavy locs styled for effortless beachy volume.",
    },
    {
      id: 4,
      category: "maintenance",
      beforeImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80",
      title: "Complete Loc Restoration",
      description: "Deep cleanse, root tightening, and length repair on mature locks.",
    },
  ];

  const filteredTransformations = activeFilter === "all"
    ? transformations
    : transformations.filter((t) => t.category === activeFilter);

  const handleLightboxMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setLightboxPosition(position);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
    setLightboxPosition(50);
  };

  return (
    <section id="gallery" className="relative bg-[#0D0D0D] py-20 sm:py-28 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
              Real People. Real Results
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white">
              Transformations
            </h2>
          </div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {["all", "wavy", "install", "maintenance"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#7B2CBF] border-[#7B2CBF] text-white glow-purple"
                    : "border-white/10 text-[#D8D8D8]/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {filter === "all" ? "All Work" : filter === "wavy" ? "Wavy Dreads" : filter === "install" ? "Installations" : "Maintenance"}
              </button>
            ))}
          </div>
        </div>

        {/* Transformations Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTransformations.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glassmorphism border border-white/5 p-3 flex flex-col cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Comparison Box (Side-by-side in grid) */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden grid grid-cols-2 gap-0.5">
                  {/* Before half */}
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={item.beforeImg}
                      alt={`${item.title} Before`}
                      fill
                      sizes="(max-w-7xl) 200px, 200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 bottom-3 bg-black/70 backdrop-blur-sm border border-white/5 px-2 py-0.5 rounded text-[8px] font-bold tracking-widest text-white uppercase">
                      Before
                    </div>
                  </div>

                  {/* After half */}
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={item.afterImg}
                      alt={`${item.title} After`}
                      fill
                      sizes="(max-w-7xl) 200px, 200px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-3 bottom-3 bg-black/70 backdrop-blur-sm border border-[#D4AF37]/30 px-2 py-0.5 rounded text-[8px] font-bold tracking-widest text-[#D4AF37] uppercase">
                      After
                    </div>
                  </div>

                  {/* Maximize Icon on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-10">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-4 pt-5">
                  <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#D8D8D8]/60 text-xs line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More button */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center space-x-3 border border-white/10 hover:border-[#7B2CBF] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#D8D8D8] hover:text-white transition-all duration-300 bg-white/5 hover:bg-[#7B2CBF]/10"
          >
            <span>View More Transformations</span>
          </a>
        </div>

      </div>

      {/* Lightbox / Slider Popup Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            {/* Close trigger */}
            <div className="absolute inset-0" onClick={handleCloseLightbox} />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl aspect-[4/3] max-h-[85vh] rounded-3xl overflow-hidden glassmorphism border border-white/10 z-10 p-2 sm:p-4 flex flex-col justify-between"
            >
              {/* Top Controls */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-40 pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white uppercase">
                  {selectedItem.title}
                </div>
                <button
                  onClick={handleCloseLightbox}
                  className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#7B2CBF] hover:border-[#7B2CBF] transition-colors pointer-events-auto shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Draggable slider container */}
              <div
                className="relative flex-1 rounded-2xl overflow-hidden cursor-ew-resize select-none mx-2 sm:mx-4 mt-16 mb-4"
                onMouseMove={handleLightboxMove}
                onTouchMove={handleLightboxMove}
                onMouseDown={() => setIsSliding(true)}
                onMouseUp={() => setIsSliding(false)}
                onTouchStart={() => setIsSliding(true)}
                onTouchEnd={() => setIsSliding(false)}
              >
                {/* AFTER image */}
                <Image
                  src={selectedItem.afterImg}
                  alt="Transformation After"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  draggable={false}
                />
                <div className="absolute right-6 bottom-6 z-20 bg-black/75 backdrop-blur-md border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                  After Lock Transformation
                </div>

                {/* BEFORE image (clipped) */}
                <div
                  className="absolute inset-0 z-10 overflow-hidden"
                  style={{ clipPath: `polygon(0 0, ${lightboxPosition}% 0, ${lightboxPosition}% 100%, 0 100%)` }}
                >
                  <Image
                    src={selectedItem.beforeImg}
                    alt="Transformation Before"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="absolute left-6 bottom-6 z-20 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-white uppercase">
                    Before Hair State
                  </div>
                </div>

                {/* Separator / Drag Bar */}
                <div
                  className="absolute top-0 bottom-0 z-30 w-1 bg-[#D4AF37]"
                  style={{ left: `${lightboxPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#D4AF37] border-4 border-[#0D0D0D] flex items-center justify-center shadow-2xl pointer-events-none">
                    <div className="flex space-x-1">
                      <span className="w-1.5 h-4 bg-black rounded-full" />
                      <span className="w-1.5 h-4 bg-black rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer info text */}
              <div className="px-4 pb-2 text-center z-10">
                <p className="text-[#D8D8D8]/80 text-sm max-w-xl mx-auto">
                  {selectedItem.description}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
