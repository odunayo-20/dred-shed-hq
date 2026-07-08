"use client";

import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone, Globe } from "lucide-react";

// Self-contained custom SVG icons to avoid Turbopack import issues with social media icons
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
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

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Shop", href: "#shop" },
  ];

  const secondaryLinks = [
    { name: "About Us", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
    { name: "Booking", href: "#booking" },
  ];

  return (
    <footer id="contact" className="relative bg-[#0D0D0D] pt-20 pb-10 border-t border-white/5 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Logo & Contacts */}
          <div className="flex flex-col space-y-6">
            <Link href="#home" className="flex flex-col group w-fit">
              <span className="font-bebas text-3xl tracking-wider text-white group-hover:text-[#7B2CBF] transition-colors duration-300">
                Dred Shed <span className="text-[#7B2CBF]">HQ</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-sans font-medium -mt-1">
                Home of Wavy Dreads
              </span>
            </Link>
            
            <ul className="space-y-4 text-sm text-[#D8D8D8]/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Chesterfield, Derbyshire, UK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#7B2CBF] shrink-0" />
                <a href="tel:+447770662036" className="hover:text-white transition-colors">
                  +44 7770 662036
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#7B2CBF] shrink-0" />
                <a href="mailto:dredshedhq@gmail.com" className="hover:text-white transition-colors">
                  dredshedhq@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-[#D8D8D8]/70 hover:text-[#D4AF37] hover:pl-1 transition-all duration-300 uppercase tracking-wider block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {secondaryLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-[#D8D8D8]/70 hover:text-[#D4AF37] hover:pl-1 transition-all duration-300 uppercase tracking-wider block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Follow Us
            </h4>
            <p className="text-xs text-[#D8D8D8]/60 mb-6 leading-relaxed">
              Check out our latest transformations, styles and updates on our social channels.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/dredshedhq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#7B2CBF] text-[#D8D8D8] hover:text-white flex items-center justify-center transition-all hover:bg-[#7B2CBF]/15"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/dredshedhq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-sky-600 text-[#D8D8D8] hover:text-white flex items-center justify-center transition-all hover:bg-sky-600/15"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/447770662036"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500 text-[#D8D8D8] hover:text-white flex items-center justify-center transition-all hover:bg-emerald-500/15"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 4: Shipping Badge */}
          <div className="flex flex-col justify-start items-start md:items-end">
            <div className="glassmorphism p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center w-full max-w-[240px]">
              <div className="w-12 h-12 rounded-full bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-[#D4AF37] animate-pulse" />
              </div>
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-1">
                Worldwide Shipping
              </span>
              <span className="text-[10px] text-[#D8D8D8]/50 uppercase tracking-widest font-semibold">
                Available on all sets
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs text-[#D8D8D8]/45">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Dred Shed HQ. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
