"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Shop", href: "#shop" },
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex flex-col group">
              <span className="font-bebas text-2xl sm:text-3xl tracking-wider text-white group-hover:text-[#7B2CBF] transition-colors duration-300">
                Dred Shed <span className="text-[#7B2CBF]">HQ</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase font-sans font-medium -mt-1">
                Home of Wavy Dreads
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm text-[#D8D8D8]/80 hover:text-white uppercase tracking-widest font-medium transition-colors duration-300 py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#7B2CBF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://wa.me/447770662036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-white/10 hover:border-[#7B2CBF] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D8D8D8] hover:text-white transition-all duration-300 bg-white/5 hover:bg-[#7B2CBF]/10 hover:glow-purple"
              >
                <MessageCircle className="w-4 h-4 text-[#7B2CBF] group-hover:text-white" />
                <span>WhatsApp</span>
              </a>
              <a
                href="#booking"
                className="relative overflow-hidden group bg-[#D4AF37] hover:bg-[#FFE082] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-lg transition-all duration-300 hover:glow-gold"
              >
                <span className="relative z-10">Book Appointment</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-4">
              <a
                href="https://wa.me/447770662036"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/10 rounded-full text-[#D8D8D8] hover:text-white hover:border-[#7B2CBF] transition-colors"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#7B2CBF]" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#D8D8D8] hover:text-white transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden glassmorphism border-b border-white/10 luxury-shadow py-6 px-4"
          >
            <nav className="flex flex-col space-y-4 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base text-[#D8D8D8] hover:text-white uppercase tracking-widest font-semibold py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3">
              <a
                href="https://wa.me/447770662036"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 border border-white/10 py-3 rounded-full text-sm font-semibold uppercase tracking-widest text-[#D8D8D8]"
              >
                <MessageCircle className="w-5 h-5 text-[#7B2CBF]" />
                <span>WhatsApp</span>
              </a>
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#D4AF37] hover:bg-[#FFE082] py-3 rounded-full text-sm font-bold uppercase tracking-widest text-black text-center shadow-lg"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
