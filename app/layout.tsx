import type { Metadata } from "next";
import { Bebas_Neue, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dred Shed HQ | Premium Wavy Dreads & Luxury Dreadlock Salon",
  description: "Experience premium, custom handmade dreadlocks at Dred Shed HQ. Created by Jay & Katie, Chesterfield's leading luxury dreadlock stylists. Book your transformation today.",
  keywords: ["dreadlocks", "wavy dreads", "handmade dreads", "dreadlock installation", "dreadlock maintenance", "luxury salon Chesterfield", "Jay & Katie dreads"],
  authors: [{ name: "Jay & Katie" }],
  openGraph: {
    title: "Dred Shed HQ | Premium Wavy Dreads & Luxury Dreadlock Salon",
    description: "Experience premium, custom handmade dreadlocks at Dred Shed HQ. Created by Jay & Katie, Chesterfield's leading luxury dreadlock stylists.",
    url: "https://dredshedhq.com",
    siteName: "Dred Shed HQ",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dred Shed HQ | Premium Wavy Dreads & Luxury Dreadlock Salon",
    description: "Experience premium, custom handmade dreadlocks at Dred Shed HQ. Created by Jay & Katie, Chesterfield's leading luxury dreadlock stylists.",
  },
  alternates: {
    canonical: "https://dredshedhq.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="bg-[#0D0D0D] text-[#D8D8D8] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
