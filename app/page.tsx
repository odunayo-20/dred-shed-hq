import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import Services from "@/components/home/Services";
import Gallery from "@/components/home/Gallery";
import Products from "@/components/home/Products";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import BookingSteps from "@/components/home/BookingSteps";
import Instagram from "@/components/home/Instagram";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Dred Shed HQ",
    "image": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://dredshedhq.com/#salon",
    "url": "https://dredshedhq.com",
    "telephone": "+447770662036",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chesterfield",
      "addressLocality": "Derbyshire",
      "addressRegion": "East Midlands",
      "postalCode": "S40",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/dredshedhq",
      "https://instagram.com/dredshedhq"
    ]
  };

  return (
    <>
      {/* Local Business Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Main Layout Elements */}
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <Services />
        <Gallery />
        <Products />
        <About />
        <Testimonials />
        <BookingSteps />
        <Instagram />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
