import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#494a52] text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/logos/BlueBird_Trailer_WHITE_HR.png"
            alt="Blue Bird Mobile Dessert Bar"
            width={180}
            height={48}
            className="h-10 w-auto mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            Handcrafted espresso & custom desserts for weddings, corporate events, and private parties across eastern Massachusetts and New England.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-[#c8dcf6]">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              ["Weddings", "/weddings"],
              ["Corporate Events", "/corporate"],
              ["Services & Packages", "/services"],
              ["Gallery", "/gallery"],
              ["About", "/about"],
              ["FAQ", "/faq"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-[#c8dcf6]">
            Get in Touch
          </h3>
          <p className="text-sm text-gray-300 mb-3">
            Based in Hamilton, MA — serving eastern Massachusetts, Boston metro, and all of New England.
          </p>
          <Link
            href="/inquire"
            className="inline-block px-5 py-2 rounded-full bg-[#4178ac] text-white text-sm font-semibold hover:bg-[#488be2] transition-colors"
          >
            Request a Quote
          </Link>
          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} Blue Bird Mobile Dessert Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
