import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Blue Bird Mobile Dessert Bar",
  description:
    "Browse photos from Blue Bird Mobile Dessert Bar events — weddings, corporate gatherings, and private parties across eastern Massachusetts and New England.",
};

const categories = [
  {
    label: "The Camper",
    photos: [
      "/photos/camper/_K5A8603_hero.jpeg",
      "/photos/camper/Bluebird - 20 of 126 - hero.jpg",
      "/photos/camper/Bluebird - 1 of 126.JPG",
      "/photos/camper/Bluebird - 4 of 126.JPG",
      "/photos/camper/Bluebird - 52 of 126.jpeg",
      "/photos/camper/Bluebird - 71 of 126.jpeg",
      "/photos/camper/Bluebird - 76 of 126.jpeg",
      "/photos/camper/Bluebird - 87 of 126.jpeg",
      "/photos/camper/the-cafe-1.jpeg",
    ],
  },
  {
    label: "Weddings",
    photos: [
      "/photos/weddings/07_20_24 Molly and Declans Wedding Teasers-89 - hero.jpeg",
      "/photos/camper/_K5A8603_hero.jpeg",
      "/photos/weddings/17877162270309294.jpg",
      "/photos/weddings/18029329718510070.jpg",
      "/photos/weddings/18059060387653731.jpg",
      "/photos/weddings/18109734022657209.jpg",
    ],
  },
  {
    label: "Desserts",
    photos: [
      "/photos/desserts/Bluebird - 18 of 126_hero.jpg",
      "/photos/desserts/Bluebird - 9 of 126_hero.jpeg",
      "/photos/desserts/IMG_6489_hero.jpeg",
      "/photos/desserts/Bluebird - 116 of 126_hero.JPG",
    ],
  },
  {
    label: "Espresso & Drinks",
    photos: [
      "/photos/coffee-and-tea/_K5A8582_hero.jpeg",
      "/photos/coffee-and-tea/17853270423551403.jpg",
      "/photos/coffee-and-tea/17909879004113720.jpg",
      "/photos/coffee-and-tea/Bluebird - 37 of 126.jpeg",
    ],
  },
  {
    label: "Corporate Events",
    photos: [
      "/photos/corporate/_DSF7621-1.jpeg",
      "/photos/corporate/17856797772527016.jpg",
      "/photos/corporate/17904364425266599.jpg",
      "/photos/corporate/18044645396382806.jpg",
      "/photos/corporate/18045967577380846.jpg",
      "/photos/corporate/18053792699311526.jpg",
    ],
  },
  {
    label: "The Cart",
    photos: [
      "/photos/cart/_K5A8885_hero.jpg",
      "/photos/cart/18068183330090976.jpg",
      "/photos/cart/18075338332796980.jpg",
      "/photos/cart/Bluebird - 21 of 126.jpg",
      "/photos/cart/Bluebird - 88 of 126.jpeg",
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#f7f9fd] py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4178ac] mb-2">Gallery</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#494a52] mb-4">
          See Blue Bird in action
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Real photos from real events — weddings, corporate parties, and private celebrations across New England.
        </p>
      </section>

      {/* Gallery sections */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        {categories.map((cat) => (
          <section key={cat.label}>
            <h2 className="text-xl font-bold text-[#494a52] mb-4">{cat.label}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cat.photos.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`${cat.label} photo`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#4178ac] py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Like what you see?</h2>
        <p className="text-[#c8dcf6] mb-8 max-w-md mx-auto">
          Let&apos;s create something just as beautiful for your event.
        </p>
        <Link
          href="/inquire"
          className="inline-block px-8 py-3 rounded-full bg-white text-[#4178ac] font-bold hover:bg-[#c8dcf6] transition-colors"
        >
          Get a Quote
        </Link>
      </section>
    </>
  );
}
