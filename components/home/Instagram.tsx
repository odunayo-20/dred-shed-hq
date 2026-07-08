"use client";

import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

// Self-contained custom SVG icon to avoid Turbopack import issues with social media icons
const InstaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

import { motion } from "framer-motion";

interface InstaPost {
  id: number;
  image: string;
  likes: string;
  comments: string;
  aspect: string;
}

export default function Instagram() {
  const posts: InstaPost[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
      likes: "245",
      comments: "18",
      aspect: "aspect-[4/5]",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      likes: "312",
      comments: "25",
      aspect: "aspect-square",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=600&q=80",
      likes: "420",
      comments: "39",
      aspect: "aspect-[4/5]",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=600&q=80",
      likes: "189",
      comments: "12",
      aspect: "aspect-square",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=600&q=80",
      likes: "512",
      comments: "47",
      aspect: "aspect-[4/5]",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      likes: "340",
      comments: "22",
      aspect: "aspect-square",
    },
  ];

  return (
    <section className="relative bg-[#151515] py-20 sm:py-28 overflow-hidden z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
            Follow Our Journey
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white mb-4">
            Instagram Feed
          </h2>
          <a
            href="https://instagram.com/dredshedhq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#7B2CBF] hover:text-[#9D4EDD] transition-colors"
          >
            <InstaIcon className="w-4 h-4" />
            <span>@dredshedhq</span>
          </a>
        </div>

        {/* Masonry / Staggered Layout Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border border-white/5 break-inside-avoid shadow-lg group cursor-pointer ${post.aspect}`}
            >
              {/* Image */}
              <Image
                src={post.image}
                alt="Dred Shed Instagram Post"
                fill
                sizes="(max-w-7xl) 400px, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Dark Glass Overlay */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 z-10">
                <InstaIcon className="w-8 h-8 text-white mb-4 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                
                {/* Stats */}
                <div className="flex space-x-6 text-white text-sm font-semibold">
                  <div className="flex items-center space-x-1.5">
                    <Heart className="w-4 h-4 fill-current text-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MessageCircle className="w-4 h-4 fill-current text-sky-400" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
