"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/weddings", label: "Weddings" },
  { href: "/corporate", label: "Corporate" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#c8dcf6] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logos/BlueBird_Trailer_HR.png"
            alt="Blue Bird Mobile Dessert Bar"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "text-[#4178ac] border-b-2 border-[#4178ac] pb-0.5"
                  : "text-[#494a52] hover:text-[#4178ac]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/inquire"
            className="ml-2 px-4 py-2 rounded-full bg-[#4178ac] text-white text-sm font-semibold hover:bg-[#488be2] transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#494a52]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#c8dcf6] px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium ${
                  pathname === l.href
                    ? "text-[#4178ac] font-semibold"
                    : "text-[#494a52] hover:text-[#4178ac]"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/inquire"
              className="mt-1 px-4 py-2 rounded-full bg-[#4178ac] text-white text-sm font-semibold text-center hover:bg-[#488be2] transition-colors"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
