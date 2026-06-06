import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Blue Bird Mobile Dessert Bar | Coffee Cart & Espresso Bar · Boston & Eastern MA",
  description:
    "Blue Bird is a mobile coffee cart and espresso bar serving handcrafted drinks and custom desserts at weddings, corporate events, and private parties across Boston and eastern Massachusetts.",
  keywords: [
    "coffee cart Boston",
    "mobile coffee cart Massachusetts",
    "espresso bar catering Boston",
    "wedding coffee cart",
    "coffee cart rental Massachusetts",
    "mobile espresso bar Boston",
    "wedding dessert bar",
    "corporate coffee catering Boston",
    "mobile dessert bar eastern Massachusetts",
    "coffee cart North Shore MA",
  ],
  openGraph: {
    title: "Blue Bird Mobile Dessert Bar | Coffee Cart & Espresso Bar · Boston & Eastern MA",
    description:
      "Mobile coffee cart and espresso bar serving handcrafted drinks and custom desserts at weddings and events across Boston and eastern Massachusetts.",
    url: "https://bbdbar.com",
    siteName: "Blue Bird Mobile Dessert Bar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Bird Mobile Dessert Bar | Coffee Cart & Espresso Bar · Boston & Eastern MA",
    description:
      "Mobile coffee cart and espresso bar serving handcrafted drinks and custom desserts at weddings and events across Boston and eastern Massachusetts.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CateringService",
  name: "Blue Bird Mobile Dessert Bar",
  url: "https://bbdbar.com",
  logo: "https://bbdbar.com/logos/bluebird-logo.png",
  description:
    "Blue Bird is a mobile coffee cart and espresso bar serving handcrafted drinks and custom desserts at weddings, corporate events, and private parties across Boston and eastern Massachusetts.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hamilton",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: [
    "Boston, MA",
    "Cambridge, MA",
    "Somerville, MA",
    "Newton, MA",
    "Brookline, MA",
    "Salem, MA",
    "Beverly, MA",
    "Gloucester, MA",
    "Newburyport, MA",
    "Hamilton, MA",
    "Ipswich, MA",
    "Manchester-by-the-Sea, MA",
    "Plymouth, MA",
    "Eastern Massachusetts",
    "North Shore Massachusetts",
    "South Shore Massachusetts",
    "Cape Cod, MA",
    "Maine",
    "New Hampshire",
    "Connecticut",
    "Rhode Island",
  ],
  servesCuisine: ["Espresso", "Coffee", "Desserts", "Pastries"],
  priceRange: "$$",
  telephone: "+19782169367",
  email: "shauna@bluebirdmobilebaking.com",
  sameAs: [
    "https://www.instagram.com/bluebirdmobiledessertbar/",
    "https://www.pinterest.com/bluebirdmobiledessertbar/",
    "https://www.linkedin.com/in/shauna-hinchen-joyal-32211032/",
    "https://www.facebook.com/Bluebirdmobiledessertbar",
  ],
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
        <Analytics />
      </body>
    </html>
  );
}
