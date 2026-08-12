import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Cart & Espresso Bar Packages | Blue Bird Mobile Dessert Bar · Boston, MA",
  description:
    "Rent a mobile coffee cart or espresso bar for your Boston-area wedding or event. Blue Bird offers camper and cart packages with handcrafted drinks and custom desserts. Camper packages from $575, cart packages from $450.",
  alternates: { canonical: "https://bbdbar.com/services" },
  openGraph: {
    title: "Coffee Cart & Espresso Bar Packages | Blue Bird Mobile Dessert Bar",
    description:
      "Rent a mobile coffee cart or espresso bar for your Boston-area wedding or event. Camper packages from $575, cart packages from $450.",
    url: "https://bbdbar.com/services",
    siteName: "Blue Bird Mobile Dessert Bar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Cart & Espresso Bar Packages | Blue Bird Mobile Dessert Bar",
    description:
      "Rent a mobile coffee cart or espresso bar for your Boston-area wedding or event. Camper packages from $575, cart packages from $450.",
  },
};

const packages = [
  {
    name: "The Camper",
    tag: "Vintage Camper Bar",
    price: "Starting at $575",
    image: "/photos/camper/_K5A8603_hero.jpeg",
    description:
      "Our signature Happier Camper HC1 trailer — a charming, photo-worthy centerpiece for your event. Includes lounge furniture setup alongside the camper.",
    includes: [
      "Transportation to/from your venue",
      "Full setup and breakdown",
      "Lounge furniture",
      "Insurance coverage",
      "Service staff",
    ],
  },
  {
    name: "The Perch Cart",
    tag: "Mobile Coffee Cart",
    price: "Starting at $450",
    image: "/photos/cart/_K5A8885_hero.jpg",
    description:
      "A compact, elegant coffee cart — perfect for indoor venues or tighter spaces. All the same handcrafted espresso quality in a smaller footprint.",
    includes: [
      "Transportation to/from your venue",
      "Full setup and breakdown",
      "Insurance coverage",
      "Service staff",
    ],
  },
];

const addOns = [
  {
    name: "Espresso Bar Service",
    description:
      "Two hours of continuous service from two baristas. Hot and iced lattes, matcha, cold brew, artisan sodas — plus a custom signature drink for your event.",
  },
  {
    name: "Affogato Bar",
    description:
      "Espresso poured over our own house-made gelato. Perfect as a late-night reception treat.",
  },
  {
    name: "Gelato Bar",
    description:
      "Our own house-made gelato in a variety of flavors and seasonal specials.",
  },
  {
    name: "Cannoli Bar",
    description:
      "Freshly filled cannoli with a variety of fillings — an elegant, interactive dessert experience.",
  },
  {
    name: "Custom Dessert Table",
    description:
      "Handmade pastries designed around your event: cookies, brownies, macarons, cupcakes, and more. Every menu is built with you from scratch.",
  },
];

const menuItems = [
  {
    category: "Cookies",
    items: "Triple chocolate · S'mores · Molasses spice · Brown butter chai · Caramel overload · Hand-painted · Chocolate chip",
  },
  {
    category: "Bars & Brownies",
    items: "Tahini brownies · Lemon squares · Raspberry cream cheese bars",
  },
  {
    category: "Elegant Pastries",
    items: "French macarons · Madeleines · Persian love cake · Cupcakes · Sugar cookie pops",
  },
  {
    category: "Showpieces",
    items: "Babka bread · Kouign Amann · Cutting cake",
  },
  {
    category: "Brunch Options",
    items: "Blueberry muffins · Scones · Meat pies · Veggie galettes",
  },
  {
    category: "Espresso & Drinks",
    items: "Lattes · Cappuccinos · Cold brew · Matcha · Herbal teas · Affogato · Custom signature drinks",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#f7f9fd] py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4178ac] mb-2">Coffee Cart & Espresso Bar · Boston & Eastern MA</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#494a52] mb-4">
          Everything is custom-built for your event
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Choose your base package — our signature camper or compact coffee cart — then work with Shauna to design your perfect menu of espresso drinks, desserts, specialty bars, and more.
        </p>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-8 text-center">Base packages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-2xl overflow-hidden border border-[#c8dcf6] hover:shadow-lg transition-shadow">
              <div className="relative h-56">
                <Image src={pkg.image} alt={pkg.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold text-[#494a52]">{pkg.name}</h3>
                  <span className="text-[#4178ac] font-semibold text-sm whitespace-nowrap ml-3">{pkg.price}</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4178ac] mb-3">{pkg.tag}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{pkg.description}</p>
                <ul className="space-y-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#494a52]">
                      <span className="text-[#4178ac]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          A $300 deposit is required to reserve your date.
        </p>
      </section>

      {/* Add-ons */}
      <section className="bg-[#f7f9fd] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-2 text-center">
            Services & add-ons
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Add these to any base package to create your perfect experience.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-5 border border-[#c8dcf6]">
                <h3 className="font-semibold text-[#4178ac] mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu sampler */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#494a52] mb-2 text-center">
          Sample menu items
        </h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Every menu is custom. This is a sample of what we can create — your event menu will be built with you from scratch.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {menuItems.map((cat) => (
            <div key={cat.category} className="bg-[#f7f9fd] rounded-xl p-4 border border-[#c8dcf6]">
              <h3 className="font-semibold text-[#4178ac] text-sm uppercase tracking-wider mb-2">{cat.category}</h3>
              <p className="text-sm text-[#494a52] leading-relaxed">{cat.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dietary */}
      <section className="bg-[#f7f9fd] py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-[#494a52] mb-3">Dietary accommodations</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We can accommodate vegan, dairy-free, and gluten-free dietary needs — we&apos;ve created full vegan and dairy-free dessert menus for past events. Nut-free options are available, though our kitchen does contain nuts and cross-contact is possible. Share your needs during consultation and we&apos;ll find delicious solutions for every guest.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4178ac] py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to design your event menu?</h2>
        <p className="text-[#c8dcf6] mb-8 max-w-md mx-auto">
          Reach out with your event details and Shauna will put together a custom proposal.
        </p>
        <Link
          href="/inquire"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#4178ac] font-bold hover:bg-[#c8dcf6] transition-colors"
        >
          Get a Custom Quote
        </Link>
      </section>
    </>
  );
}
