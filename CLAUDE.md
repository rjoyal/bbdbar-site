# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (runs next build && next-sitemap)
npm run lint     # Run ESLint
npm start        # Run production server
```

## Architecture

**Next.js App Router, statically exported.** All pages are server components by default. The site has no backend—content is hardcoded as JavaScript arrays/objects within each page file. There is no CMS, database, or API calls.

**Key config:**
- `next.config.ts`: `output: "export"` + `images.unoptimized: true` — generates static HTML to `/out`
- `next-sitemap.config.js`: auto-generates sitemap and robots.txt to `/out` on build
- `vercel.json`: redirects (`/experiences` → `/services`, `/quote` → `/inquire`)

**Routes:** `app/page.tsx` (home), `app/about/`, `app/services/`, `app/weddings/`, `app/corporate/`, `app/gallery/`, `app/faq/`, `app/inquire/`

**Components:** Only two shared components — `components/Nav.tsx` (client component, uses `useState` + `usePathname`) and `components/Footer.tsx`.

**Styling:** Tailwind CSS v4 with custom brand tokens defined in `app/globals.css` via `@theme inline`. Brand colors: `--color-primary: #4178ac`, `--color-accent-dark: #494a52`. Font: Montserrat (loaded via `next/font/google` in `layout.tsx`).

**SEO:** Every page exports a `metadata` object with `alternates.canonical` set to the clean canonical URL. `layout.tsx` includes JSON-LD `LocalBusiness`/`CateringService` schema. `app/faq/page.tsx` includes `FAQPage` schema. The dynamic blog slug page sets canonical via `generateMetadata`.

**Honeybook widget:** The widget in `app/inquire/page.tsx` injects `?hsLang=en` and `?hs_amp=true` query parameters, causing Google to discover URL variants like `/?hsLang=en` and `/inquire?hsLang=en`. The explicit `alternates.canonical` on each page is the fix — those variants get classified as alternates rather than separate pages.

**Inquiry form:** `app/inquire/page.tsx` embeds a Honeybook widget via a `<script>` tag—no custom form handling.

**Images:** Served from `public/photos/` (organized by category subfolder) and `public/logos/`. Use `next/image` with `fill` layout. Photos with `hero` in the filename are hero image candidates.

**Path alias:** `@/` maps to the repo root (`/Users/rjoyal/src/new-bbdbar/site`).

## Google Search Console & SEO Status (as of 2026-06-06)

- GSC property for `bbdbar.com` set up March 2026
- Domain migration from `bluebirdmobiledessertbar.com` → `bbdbar.com` via GSC Change of Address tool (completed); old domain still live and pointing to Vercel so 301 redirects remain active
- Old domain had no meaningful backlinks — domain authority is starting fresh on bbdbar.com
- Indexing: 22 indexed, 27 not indexed
  - 6 "page with redirect" — old URLs clearing naturally, no action needed
  - 4 "alternate page with proper canonical tag" — likely www/trailing-slash variants, expected
  - 10 "discovered – currently not indexed" — crawl budget issue; improves as domain gains authority/backlinks
  - 7 "crawled – currently not indexed" — all technical artifacts (Honeybook query-param URLs, Next.js JS chunks, one http:// redirect URL); no thin content issues
- Key remaining SEO opportunities: backlinks from wedding/event vendor directories (The Knot, WeddingWire, Zola), high-intent blog content, venue backlinks
