import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { destinations } from "@/lib/destinations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollBackground from "@/components/layout/ScrollBackground";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — International Holidays from India`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "international tour packages from India",
    "Vietnam tour package",
    "Bali holiday package",
    "Singapore tour",
    "Dubai tour package",
    "international group tours",
    "honeymoon packages",
    "family holiday packages",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — International Holidays from India`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — International Holidays from India`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Structured data so Google understands this is a travel agency + its offers.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    areaServed: "Worldwide",
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    makesOffer: destinations.map((d) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "TouristTrip",
        name: `${d.name} Tour Package`,
        description: d.intro,
      },
    })),
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`dark ${jakarta.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background antialiased">
        {/* Apply the saved theme before paint to avoid a flash. Default: dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
