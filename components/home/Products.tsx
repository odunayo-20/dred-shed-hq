"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Eye, Globe, Sparkles, HeartHandshake, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function Products() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [cartNotification, setCartNotification] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 1,
      title: "Premium Wavy Set",
      price: 120.0,
      image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=600&q=80",
      description: "Handcrafted 100% premium human hair wavy extensions. Lightweight, blendable, and designed to flow with natural curls.",
    },
    {
      id: 2,
      title: "Custom Colour Set",
      price: 140.0,
      image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=600&q=80",
      description: "Vibrant custom-dyed locs created to match your unique style. Standard size is 50-60 locs.",
    },
    {
      id: 3,
      title: "Natural Dread Set",
      price: 110.0,
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
      description: "Classic straight-textured loc sets crocheted using traditional, pure-crochet techniques.",
    },
  ];

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = (title: string) => {
    setCartNotification(title);
    setTimeout(() => {
      setCartNotification(null);
    }, 3000);
  };

  return (
    <section id="shop" className="relative bg-[#151515] py-20 sm:py-28 overflow-hidden z-20">
      
      {/* Toast Notification for Cart */}
      <AnimatePresence>
        {cartNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-55%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-55%" }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#7B2CBF] text-white border border-[#9D4EDD] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl flex items-center space-x-3 glow-purple"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            <span>{cartNotification} Added to Bag!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
            Shop Our
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wider text-white mb-6">
            Dread Collection
          </h2>

          {/* Badges Bar */}
          <div className="flex flex-wrap gap-6 items-center border-t border-b border-white/5 py-4">
            <div className="flex items-center space-x-2">
              <HeartHandshake className="w-4 h-4 text-[#7B2CBF]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D8D8D8]">
                Handmade With Love
              </span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D8D8D8]">
                Premium Quality Hair
              </span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-[#7B2CBF]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D8D8D8]">
                Worldwide Shipping
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards & Custom Callout Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Products mapping */}
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden glassmorphism border border-white/5 p-3 flex flex-col justify-between"
            >
              {/* Product Image Panel */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#0D0D0D]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-w-7xl) 300px, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-red-500 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </button>

                {/* Quick View Button on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-[#D4AF37] hover:text-black transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Product Info Block */}
              <div className="p-4 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-base font-semibold uppercase tracking-wider mb-1">
                    {product.title}
                  </h3>
                  <span className="text-[#D4AF37] font-bebas text-xl tracking-wider">
                    £{product.price.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart Icon Button */}
                <button
                  onClick={() => addToCart(product.title)}
                  className="w-10 h-10 rounded-full bg-[#D4AF37] hover:bg-[#FFE082] text-black flex items-center justify-center transition-all duration-300 shadow-md hover:glow-gold"
                  aria-label={`Add ${product.title} to cart`}
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Custom Order Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#7B2CBF]/80 to-[#4D0099]/90 border border-[#7B2CBF]/30 p-8 flex flex-col justify-between text-center min-h-[380px] glow-purple"
          >
            {/* Background design elements */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20" />

            <div className="my-auto flex flex-col items-center">
              <span className="font-script text-4xl text-[#D4AF37] mb-2 select-none">
                Custom orders
              </span>
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Available
              </span>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                Need a specific length, custom color blend, or set size? We craft bespoke dreadlock extensions to match any style request.
              </p>
            </div>

            <a
              href="#booking"
              className="bg-black text-[#D4AF37] border border-[#D4AF37]/30 hover:border-white hover:text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:bg-black/80"
            >
              Shop Collection
            </a>
          </motion.div>

        </div>
      </div>

      {/* Quick View Lightbox Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="absolute inset-0" onClick={() => setQuickViewProduct(null)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl overflow-hidden glassmorphism border border-white/10 z-10 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:text-[#7B2CBF] hover:border-[#7B2CBF] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/50">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Description details */}
              <div className="flex flex-col justify-between h-full py-2">
                <div>
                  <h3 className="font-bebas text-3xl text-white tracking-wider mb-2">
                    {quickViewProduct.title}
                  </h3>
                  <span className="text-[#D4AF37] font-bebas text-2xl tracking-wider mb-4 block">
                    £{quickViewProduct.price.toFixed(2)}
                  </span>
                  <p className="text-[#D8D8D8]/70 text-xs sm:text-sm leading-relaxed mb-6">
                    {quickViewProduct.description}
                  </p>
                </div>

                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct.title);
                      setQuickViewProduct(null);
                    }}
                    className="w-full bg-[#7B2CBF] hover:bg-[#9D4EDD] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md"
                  >
                    Add to Shop Bag
                  </button>
                  <button
                    onClick={() => {
                      toggleWishlist(quickViewProduct.id);
                    }}
                    className="w-full border border-white/10 hover:border-white text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors bg-white/5"
                  >
                    {wishlist.includes(quickViewProduct.id) ? "Remove From Wishlist" : "Add to Wishlist"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
