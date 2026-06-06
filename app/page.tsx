import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blue Bird Mobile Dessert Bar | Coffee Cart & Espresso Bar · Boston & Eastern MA",
  description:
    "Blue Bird is a mobile coffee cart and espresso bar serving handcrafted drinks and custom desserts at weddings, corporate events, and private parties across Boston and eastern Massachusetts.",
  alternates: { canonical: "https://bbdbar.com" },
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

const testimonials = [
  {
    quote:
      "From the moment their charming blue camper arrived, our guests were wowed. Shauna made planning effortless and tailored everything to our event. Blue Bird won't disappoint if you want to delight your guests and elevate any gathering.",
    author: "Barry",
    event: "Wedding",
  },
  {
    quote:
      "Working with Shauna was one of the highlights of our wedding! 7 months later, guests still talk about how delicious the desserts were! Shauna's hand-made quality is impossible to beat.",
    author: "Theresa & John",
    event: "Wedding",
  },
  {
    quote:
      "Shauna was incredible to work with while planning our company's annual summer outing. It was a real treat to have her posh camper, lounge area, and the sundae bar on a hot summer day in Boston.",
    author: "Nyeka",
    event: "Corporate Event",
  },
];

const services: { title: string; description: ReactNode; illustration: string; alt: string }[] = [
  {
    title: "Espresso Bar",
    description: (
      <>
        Lattes, cappuccinos, and cold brew using locally-roasted{" "}
        <a href="https://atomicroastery.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#4178ac]">
          Atomic Coffee
        </a>
        . Matcha and teas from{" "}
        <a href="https://memteaimports.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#4178ac]">
          MEM Tea
        </a>
        . Signature drinks crafted by our baristas.
      </>
    ),
    illustration: "/illustrations/latteelement.png",
    alt: "Illustrated latte",
  },
  {
    title: "Dessert Table",
    description:
      "Handmade cookies, brownies, French macarons, and more — every menu custom-built for your event.",
    illustration: "/illustrations/chocolatecookielement.png",
    alt: "Illustrated chocolate cookie",
  },
  {
    title: "Specialty Bars",
    description:
      "Affogato bar, ice cream sundae bar, and cannoli bar — show-stopping additions to any event.",
    illustration: "/illustrations/affogattoelement.png",
    alt: "Illustrated affogato",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/weddings/07_20_24 Molly and Declans Wedding Teasers-89 - hero.jpeg"
          alt="Blue Bird camper at a wedding"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-[#c8dcf6]">
            Mobile Dessert &amp; Espresso Bar · Boston &amp; Eastern MA
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The sweetest addition to your event
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
            Handcrafted espresso drinks and custom desserts — served from our charming vintage camper at weddings, corporate events, and private parties across New England.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/inquire"
              className="px-7 py-3 rounded-full bg-[#4178ac] text-white font-semibold hover:bg-[#488be2] transition-colors text-base"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-full bg-white/20 backdrop-blur text-white font-semibold border border-white/40 hover:bg-white/30 transition-colors text-base"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-[#4178ac] text-white py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-center">
          <span>⭐ 5-Star Google Reviews</span>
          <span className="hidden sm:block text-[#c8dcf6]">|</span>
          <span>🏆 2× Best of Zola Winner</span>
          <span className="hidden sm:block text-[#c8dcf6]">|</span>
          <span>🎉 100+ Events Served</span>
          <span className="hidden sm:block text-[#c8dcf6]">|</span>
          <span>📍 Boston &amp; Eastern Massachusetts</span>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#494a52] mb-3">
            What we bring to your event
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything is handmade and custom-designed around your vision, guests, and theme.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#c8dcf6] p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image src={s.illustration} alt={s.alt} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#4178ac] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block px-6 py-3 rounded-full border-2 border-[#4178ac] text-[#4178ac] font-semibold hover:bg-[#4178ac] hover:text-white transition-colors"
          >
            View All Packages
          </Link>
        </div>
      </section>

      {/* Photo split — camper + desserts */}
      <section className="grid md:grid-cols-2 gap-0">
        <div className="relative h-80 md:h-96">
          <Image
            src="/photos/camper/_K5A8603_hero.jpeg"
            alt="Blue Bird vintage camper bar setup"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25 flex items-end p-6">
            <div>
              <h3 className="text-white text-2xl font-bold">The Camper</h3>
              <p className="text-gray-200 text-sm mt-1">
                A charming Happier Camper HC1 that becomes the centerpiece of your event.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-80 md:h-96">
          <Image
            src="/photos/desserts/Bluebird - 18 of 126_hero.jpg"
            alt="Custom handmade desserts"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25 flex items-end p-6">
            <div>
              <h3 className="text-white text-2xl font-bold">The Desserts</h3>
              <p className="text-gray-200 text-sm mt-1">
                Every item is crafted and customized for your event by our pastry chef.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-20 px-4 bg-[#f7f9fd]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#494a52] mb-3">
            Perfect for any celebration
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From intimate weddings to large corporate gatherings — Blue Bird brings something truly memorable.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Link
            href="/weddings"
            className="group relative rounded-2xl overflow-hidden h-64"
          >
            <Image
              src="/photos/camper/Bluebird - 20 of 126 - hero.jpg"
              alt="Wedding espresso and dessert bar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white text-2xl font-bold">Weddings</h3>
              <p className="text-gray-200 text-sm mt-1">The sweetest ending to your perfect day →</p>
            </div>
          </Link>
          <Link
            href="/corporate"
            className="group relative rounded-2xl overflow-hidden h-64"
          >
            <Image
              src="/photos/corporate/_DSF7621-1.jpeg"
              alt="Corporate event catering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white text-2xl font-bold">Corporate Events</h3>
              <p className="text-gray-200 text-sm mt-1">Impress your team and clients →</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#494a52] mb-2">
              What our clients say
            </h2>
            <p className="text-gray-500">All 5-star Google reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-[#f7f9fd] rounded-2xl p-6 border border-[#c8dcf6]"
              >
                <div className="text-[#4178ac] text-xl mb-3">★★★★★</div>
                <p className="text-[#494a52] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-[#494a52]">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 px-4 bg-[#f7f9fd]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-3">
            Bringing the coffee cart to you
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Our mobile espresso bar and coffee cart serve events across greater Boston and eastern Massachusetts, with regular travel throughout New England.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-[#494a52]">
            <div className="bg-white rounded-xl p-4 border border-[#c8dcf6]">
              <p className="font-semibold text-[#4178ac] mb-2">Boston Metro</p>
              <p className="text-gray-500 leading-relaxed">Boston · Cambridge · Somerville · Newton · Brookline · Quincy · Medford</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#c8dcf6]">
              <p className="font-semibold text-[#4178ac] mb-2">North Shore & Beyond</p>
              <p className="text-gray-500 leading-relaxed">Salem · Beverly · Gloucester · Newburyport · Hamilton · Ipswich · Manchester · Rockport</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#c8dcf6]">
              <p className="font-semibold text-[#4178ac] mb-2">South Shore & New England</p>
              <p className="text-gray-500 leading-relaxed">Plymouth · Cape Cod · MetroWest · NH · Maine · RI · CT</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#4178ac] py-16 px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to add Blue Bird to your event?
        </h2>
        <p className="text-[#c8dcf6] mb-8 max-w-md mx-auto">
          Tell us about your event and we&apos;ll put together a custom proposal — usually within 24 hours.
        </p>
        <Link
          href="/inquire"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#4178ac] font-bold hover:bg-[#c8dcf6] transition-colors text-base"
        >
          Start Your Inquiry
        </Link>
      </section>
    </>
  );
}
