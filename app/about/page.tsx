import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Blue Bird Mobile Dessert Bar | Espresso & Dessert Catering",
  description:
    "Meet Shauna and the Blue Bird story — a mobile espresso and dessert bar serving weddings and events across eastern Massachusetts and New England.",
  alternates: { canonical: "https://bbdbar.com/about" },
  openGraph: {
    title: "About Blue Bird Mobile Dessert Bar",
    description:
      "Meet Shauna and the Blue Bird story — a mobile espresso and dessert bar serving weddings and events across eastern Massachusetts and New England.",
    url: "https://bbdbar.com/about",
    siteName: "Blue Bird Mobile Dessert Bar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Blue Bird Mobile Dessert Bar",
    description:
      "Meet Shauna and the Blue Bird story — a mobile espresso and dessert bar serving weddings and events across eastern Massachusetts and New England.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#f7f9fd] py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4178ac] mb-2">About</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#494a52] mb-3">
          Meet Blue Bird
        </h1>
        <p className="text-lg text-gray-500">Get to know us &amp; our happy, blue camper!</p>
      </section>

      {/* Core message */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-4">
          Your event is about so much more than what&apos;s on the program
        </h2>
        <p className="text-gray-500 leading-relaxed">
          Whether it&apos;s a wedding, corporate event, or private celebration, Blue Bird creates a gathering space. It&apos;s not just about serving delicious drinks and treats to your guests — it&apos;s about creating memories and reminding everyone just how much fun it is to experience something new together.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src="/photos/shauna/Shauna break - hero.jpeg"
            alt="Shauna at the Blue Bird camper"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-4">
            Meet Shauna
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
            <p>
              Shauna grew up in a family of cooks and artists, where she was encouraged to experiment in the kitchen, plan unique celebrations, and help host her mom&apos;s art shows. That creative upbringing led her to study pastry arts at Johnson &amp; Wales University — and she&apos;s been working in the baking industry for over 20 years.
            </p>
            <p>
              Shauna is joined by her husband Bob, and together they&apos;ve trained with baristas at Atomic Coffee Roasters to bring that same level of craft to every cup. Blue Bird espresso drinks are made on a La Marzocco Italian machine — the same equipment you&apos;d find at a serious specialty coffee bar.
            </p>
            <p>
              Every menu is built from scratch, in conversation with you. Your flavor preferences, dietary needs, event theme, and signature drink are all part of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#4178ac] py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "100+", label: "Events served" },
            { stat: "5★", label: "Google rating" },
            { stat: "2×", label: "Best of Zola winner" },
            { stat: "20+", label: "Years in baking" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-3xl md:text-4xl font-bold mb-1">{item.stat}</div>
              <div className="text-[#c8dcf6] text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The camper */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-4">
            The Blue Bird camper
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
            <p>
              Blue Bird is a Happier Camper HC1 — the first HC1 painted top to bottom in this stunning, unique blue. The color is a nod to the &ldquo;bluebird days&rdquo; Shauna spent skiing with her dad as a child: clear skies, fresh snow, and the feeling that everything is exactly right.
            </p>
            <p>
              The camper is more than a serving station — it&apos;s an experience. Guests are drawn to it the moment it arrives. It creates a natural gathering point, a stunning photo backdrop, and an instant conversation starter. Lounge furniture comes with the setup.
            </p>
            <p>
              We handle all setup (1 hour) and breakdown (30 minutes) — you just enjoy your event. Need a smaller footprint? Our &ldquo;Perch&rdquo; cart delivers the same handcrafted quality for tighter indoor venues.
            </p>
          </div>
        </div>
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src="/photos/camper/_K5A8603_hero.jpeg"
            alt="The Blue Bird Happier Camper"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Service area */}
      <section className="bg-[#f7f9fd] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#494a52] mb-4">Service area</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Our home base is <strong className="text-[#494a52]">Hamilton, MA</strong>. We serve events primarily in eastern Massachusetts and the Boston metropolitan area, and regularly travel throughout New England including Maine, New Hampshire, western Massachusetts, Connecticut, and Rhode Island.
          </p>
          <p className="text-sm text-gray-400">
            Events more than 20 miles from Hamilton may incur an additional mileage charge. Long-distance events may require overnight accommodation costs. Reach out — we&apos;re happy to travel for the right event.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#494a52] mb-6">Credentials & recognition</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: "🏆", label: "2× Best of Zola Winner", sub: "Top-rated wedding vendor" },
            { icon: "⭐", label: "5-Star Google Reviews", sub: "Consistent 5-star rating" },
            { icon: "🏢", label: "Google Store Events", sub: "Multiple corporate events catered" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#c8dcf6] p-6">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-semibold text-[#494a52] text-sm">{item.label}</p>
              <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4178ac] py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
        <p className="text-[#c8dcf6] mb-8 max-w-md mx-auto">
          Tell us about your event and let&apos;s start building your perfect dessert bar experience.
        </p>
        <Link
          href="/inquire"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#4178ac] font-bold hover:bg-[#c8dcf6] transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
