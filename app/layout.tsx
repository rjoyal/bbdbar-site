import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Blue Bird Mobile Dessert Bar | Espresso & Desserts for Events",
  description:
    "Blue Bird Mobile Dessert Bar brings handcrafted espresso drinks and custom desserts to weddings, corporate events, and private parties across eastern Massachusetts and New England.",
  keywords: [
    "mobile dessert bar",
    "espresso bar catering",
    "wedding dessert bar",
    "corporate catering",
    "Boston mobile bar",
    "Massachusetts dessert catering",
  ],
  openGraph: {
    title: "Blue Bird Mobile Dessert Bar",
    description:
      "Handcrafted espresso & custom desserts for weddings and events across eastern Massachusetts.",
    url: "https://bbdbar.com",
    siteName: "Blue Bird Mobile Dessert Bar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Bird Mobile Dessert Bar",
    description:
      "Handcrafted espresso & custom desserts for weddings and events across eastern Massachusetts.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Blue Bird Mobile Dessert Bar",
  url: "https://bbdbar.com",
  logo: "https://bbdbar.com/logos/bluebird-logo.png",
  description:
    "Blue Bird Mobile Dessert Bar brings handcrafted espresso drinks and custom desserts to weddings, corporate events, and private parties across eastern Massachusetts and New England.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hamilton",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: [
    "Eastern Massachusetts",
    "Boston metropolitan area",
    "Maine",
    "New Hampshire",
    "Connecticut",
    "Rhode Island",
  ],
  servesCuisine: ["Espresso", "Desserts", "Pastries"],
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://bbdbar.com/inquire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased flex flex-col min-h-screen`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
