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

**SEO:** Every page exports a `metadata` object. `layout.tsx` includes JSON-LD `LocalBusiness` schema. `app/faq/page.tsx` includes `FAQPage` schema.

**Inquiry form:** `app/inquire/page.tsx` embeds a Honeybook widget via a `<script>` tag—no custom form handling.

**Images:** Served from `public/photos/` (organized by category subfolder) and `public/logos/`. Use `next/image` with `fill` layout. Photos with `hero` in the filename are hero image candidates.

**Path alias:** `@/` maps to the repo root (`/Users/rjoyal/src/new-bbdbar/site`).
