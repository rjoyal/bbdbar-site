import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Espresso & Dessert Bar | Blue Bird Mobile Dessert Bar",
  description:
    "Make your wedding unforgettable with a custom espresso and dessert bar from Blue Bird. Handmade pastries, signature drinks, and a charming vintage camper — serving eastern Massachusetts and New England.",
};

const testimonials = [
  {
    quote:
      "There really aren't enough words to express how absolutely phenomenal Shauna and Blue Bird are! Everything was 100% perfect, from the signature drinks with custom sign to the incredible desserts to the stunning blue camper.",
    author: "Sara",
  },
  {
    quote:
      "The espresso and affogato bar was a total hit — our guests are still talking about it. Shauna also created an incredible dessert table full of delicious treats and even designed custom signage that tied everything together beautifully.",
    author: "Caty",
  },
  {
    quote:
      "Working with Shauna was one of the highlights of our wedding! 7 months later, guests still talk about how delicious the desserts were. We HIGHLY recommend working with her.",
    author: "Theresa & John",
  },
];

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/photos/weddings/07_20_24 Molly and Declans Wedding Teasers-89 - hero.jpeg"
          alt="Blue Bird at a wedding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 px-6 pb-12 max-w-3xl mx-auto w-full">
          <p className="text-[#c8dcf6] text-sm font-semibold uppercase tracking-widest mb-2">Weddings</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            The sweetest ending to your perfect day
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <p className="text-lg text-[#494a52] leading-relaxed mb-6">
          Blue Bird Mobile Dessert Bar is a 2× Best of Zola winner and has served over 100 weddings across New England. We bring a handcrafted espresso bar and custom pastry table — along with our charming Happier Camper — directly to your venue.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Every detail is tailored around your vision: your flavor preferences, dietary needs, wedding theme, and signature drink. Guests consistently call us the highlight of the reception.
        </p>
      </section>

      {/* What's included / add-ons */}
      <section className="bg-[#f7f9fd] py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Base package */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-1 text-center">
              Every package includes
            </h2>
            <p className="text-gray-400 text-sm text-center mb-6">Camper packages from $575 · Cart packages from $450</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "The Blue Bird camper or cart",
                  body: "Our Happier Camper HC1 — a gorgeous photo backdrop and event centerpiece. Lounge furniture is included alongside the camper setup.",
                },
                {
                  title: "Transportation",
                  body: "We handle all travel to and from your venue.",
                },
                {
                  title: "Full setup & breakdown",
                  body: "We arrive 1 hour early to set up and break down in 30 minutes after service. You don't lift a finger.",
                },
                {
                  title: "Insurance & staffing",
                  body: "Fully insured, with professional service staff throughout your event.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-xl p-4 border border-[#c8dcf6]">
                  <div className="text-[#4178ac] font-bold text-lg mt-0.5">✓</div>
                  <div>
                    <h3 className="font-semibold text-[#494a52] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-1 text-center">
              Popular add-ons
            </h2>
            <p className="text-gray-400 text-sm text-center mb-6">Build your perfect experience — Shauna will help you choose.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Espresso bar service",
                  body: "Hot and iced lattes, cappuccinos, cold brew, matcha, herbal teas, and artisan sodas — plus a custom signature drink for your wedding.",
                },
                {
                  title: "Handmade dessert table",
                  body: "Custom pastry menu designed with you — French macarons, cookies, brownies, elegant pastries, and more. Every item made from scratch.",
                },
                {
                  title: "Custom signage & décor",
                  body: "Custom drink menus and signage designed to match your wedding aesthetic.",
                },
                {
                  title: "Dietary accommodations",
                  body: "Vegan, dairy-free, and gluten-free options available — just let us know during consultation.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded-xl p-4 border border-[#c8dcf6]">
                  <div className="text-[#488be2] font-bold text-lg mt-0.5">+</div>
                  <div>
                    <h3 className="font-semibold text-[#494a52] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-8 text-center">
          Blue Bird at weddings
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "/photos/weddings/07_20_24 Molly and Declans Wedding Teasers-89 - hero.jpeg",
            "/photos/camper/_K5A8603_hero.jpeg",
            "/photos/camper/Bluebird - 20 of 126 - hero.jpg",
            "/photos/desserts/Bluebird - 18 of 126_hero.jpg",
            "/photos/coffee-and-tea/_K5A8582_hero.jpeg",
            "/photos/desserts/IMG_6489_hero.jpeg",
          ].map((src, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
              <Image src={src} alt="Blue Bird wedding event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/gallery" className="text-[#4178ac] font-semibold hover:underline text-sm">
            See the full gallery →
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f7f9fd] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-8 text-center">
            From our wedding clients
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl p-6 border border-[#c8dcf6]">
                <div className="text-[#4178ac] text-xl mb-3">★★★★★</div>
                <p className="text-[#494a52] text-sm leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-sm text-[#494a52]">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#494a52] mb-6 text-center">Venue requirements</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {[
            ["Space", "15′ × 20′ horizontal clearance, 11′ vertical clearance"],
            ["Power", "20-amp circuit (preferred) or we can bring a generator"],
            ["Setup / breakdown", "1 hour setup · 30 min breakdown"],
            ["Minimum guests", "25 guests"],
            ["Booking lead time", "Most weddings book 6–12 months in advance"],
            ["Deposit", "$300 to secure your date"],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#f7f9fd] rounded-xl p-4 border border-[#c8dcf6]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4178ac] mb-1">{label}</p>
              <p className="text-[#494a52]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4178ac] py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s plan your wedding dessert bar</h2>
        <p className="text-[#c8dcf6] mb-8 max-w-md mx-auto">
          Tell us your date and vision — we&apos;ll send a custom proposal within 24 hours.
        </p>
        <Link
          href="/inquire"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#4178ac] font-bold hover:bg-[#c8dcf6] transition-colors"
        >
          Start Your Inquiry
        </Link>
      </section>
    </>
  );
}
