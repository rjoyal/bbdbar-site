import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Event Catering | Blue Bird Mobile Dessert Bar",
  description:
    "Elevate your next corporate event with Blue Bird's mobile espresso and dessert bar. A memorable experience for company parties, team outings, client entertainment, and brand activations across Boston and eastern Massachusetts.",
  alternates: { canonical: "https://bbdbar.com/corporate" },
  openGraph: {
    title: "Corporate Event Catering | Blue Bird Mobile Dessert Bar",
    description:
      "Elevate your next corporate event with Blue Bird's mobile espresso and dessert bar. A memorable experience for company parties, team outings, client entertainment, and brand activations across Boston and eastern Massachusetts.",
    url: "https://bbdbar.com/corporate",
    siteName: "Blue Bird Mobile Dessert Bar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Catering | Blue Bird Mobile Dessert Bar",
    description:
      "Elevate your next corporate event with Blue Bird's mobile espresso and dessert bar. A memorable experience for company parties, team outings, client entertainment, and brand activations across Boston and eastern Massachusetts.",
  },
};

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/photos/corporate/_DSF7621-1.jpeg"
          alt="Blue Bird at a corporate event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 px-6 pb-12 max-w-3xl mx-auto w-full">
          <p className="text-[#c8dcf6] text-sm font-semibold uppercase tracking-widest mb-2">Corporate Events</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Give your team an experience they&apos;ll actually talk about
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <p className="text-lg text-[#494a52] leading-relaxed mb-6">
          Blue Bird has provided espresso and dessert service at Google Store events, company summer outings, holiday parties, and client appreciation events. We bring the same attention to detail and handcrafted quality that makes us a wedding favorite — to your next corporate occasion.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Our charming camper creates a natural gathering point that gets people talking, networking, and snapping photos. Custom drink menus, branded signage, and dietary accommodations are all part of the experience.
        </p>
      </section>

      {/* Use cases */}
      <section className="bg-[#f7f9fd] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-8 text-center">
            Perfect for
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Company summer outings",
              "Holiday parties",
              "Client appreciation events",
              "Team-building activities",
              "Product launches & brand activations",
              "Office grand openings",
              "Networking receptions",
              "Employee appreciation days",
              "Conference & trade show booths",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#c8dcf6]">
                <span className="text-[#4178ac] font-bold">✓</span>
                <span className="text-sm text-[#494a52] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-8 text-center">
          Blue Bird at corporate events
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "/photos/corporate/_DSF7621-1.jpeg",
            "/photos/corporate/17856797772527016.jpg",
            "/photos/corporate/17904364425266599.jpg",
            "/photos/corporate/18044645396382806.jpg",
            "/photos/corporate/18045967577380846.jpg",
            "/photos/camper/_K5A8603_hero.jpeg",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
              <Image src={src} alt="Blue Bird corporate event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-[#f7f9fd] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-8 text-center">
            What&apos;s included
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Espresso & beverage service",
                body: "Full barista service: lattes, cappuccinos, cold brew, matcha, teas, sodas. We can design a custom signature drink for your company or event.",
              },
              {
                title: "Custom dessert table",
                body: "Handmade pastries tailored to your event — cookies, brownies, macarons, and more. Allergen-friendly options available.",
              },
              {
                title: "The Blue Bird camper",
                body: "Our retro Happier Camper creates an instant focal point and photo opportunity. Lounge furniture included for a complete setup.",
              },
              {
                title: "Branded experience",
                body: "Custom drink menus, signage, and décor designed to match your brand or event theme.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-[#4178ac] font-bold text-lg mt-0.5">✓</div>
                <div>
                  <h3 className="font-semibold text-[#494a52] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 max-w-2xl mx-auto text-center">
        <div className="text-[#4178ac] text-2xl mb-4">★★★★★</div>
        <p className="text-[#494a52] text-lg italic leading-relaxed mb-6">
          &ldquo;Shauna was incredible to work with while planning our company&apos;s annual summer outing! It was a real treat to have her posh camper, lounge area, and the sundae bar on a hot summer day in Boston. P.S. — I&apos;m still dreaming about her brown butter chocolate chip cookies.&rdquo;
        </p>
        <p className="font-semibold text-[#494a52]">Nyeka</p>
        <p className="text-sm text-gray-400">Corporate Summer Outing</p>
      </section>

      {/* Logistics */}
      <section className="bg-[#f7f9fd] py-12 px-4">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 text-sm">
          {[
            ["Space required", "15′ × 20′ horizontal clearance, 11′ vertical clearance"],
            ["Power", "20-amp circuit or generator provided"],
            ["Setup / breakdown", "1 hour setup · 30 min breakdown"],
            ["Minimum guests", "25 guests"],
            ["Service area", "Eastern MA / Boston metro; New England travel available"],
            ["Deposit", "$300 to secure your date"],
          ].map(([label, value]) => (
            <div key={label} className="bg-white rounded-xl p-4 border border-[#c8dcf6]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4178ac] mb-1">{label}</p>
              <p className="text-[#494a52]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4178ac] py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to book Blue Bird for your next event?</h2>
        <p className="text-[#c8dcf6] mb-8 max-w-md mx-auto">
          Tell us about your event and we&apos;ll put together a custom proposal — typically within 24 hours.
        </p>
        <Link
          href="/inquire"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#4178ac] font-bold hover:bg-[#c8dcf6] transition-colors"
        >
          Request a Quote
        </Link>
      </section>
    </>
  );
}
