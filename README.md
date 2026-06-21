# Cheenu Travels — International Holidays Website

A fast, SEO-friendly, animation-rich marketing site for an international travel
business based in India. Built with **Next.js (App Router)**, **TypeScript**,
**Tailwind CSS v4**, **Motion** and an interactive WebGL **globe** (cobe).

It's an **information + enquiry** site (no payments). Visitors browse
destinations and submit a quick form that hands off to **WhatsApp** (or email)
with their trip details pre-filled.

## ✨ What's inside

- **Home** — hero with an interactive globe, featured destinations, why-choose-us,
  how-it-works, group-tours teaser, testimonials and a closing call-to-action.
- **Destination pages** (`/destinations/vietnam`, `/bali`, `/singapore`, `/dubai`)
  — each a standalone, SEO-optimised page (great for Google ranking).
- **Group Tours** (`/group-tours`) — Europe, Japan, Southeast Asia, Dubai, Switzerland.
- **About** (`/about`) and **Contact** (`/contact`) with the enquiry form.
- SEO built-in: per-page metadata, `sitemap.xml`, `robots.txt`, Open Graph tags
  and `TravelAgency` structured data (JSON-LD).

## 🚀 Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## 🛠️ Customise (no deep coding needed)

Almost everything the client cares about lives in two files:

| What to change | File |
| --- | --- |
| **Brand name, tagline, phone, email, socials, site URL** | `src/lib/site.ts` |
| **Destinations, prices, photos, group-tour content** | `src/lib/destinations.ts` |

> ⚠️ **Brand name** is currently set to **"Cheenu Travels"** as a placeholder
> (from the repo name). Change `name` in `src/lib/site.ts` to the real business
> name. Phone (`+91 93408 52824`) and email were taken from the brochures —
> please double-check them.

### Photos

Destinations use real **Unsplash** photos (free for commercial use) via
`next/image`, with a hand-built illustrated "scene" underneath as a graceful
fallback so nothing ever shows a broken image. Each destination's `image` lives
in `src/lib/destinations.ts` — swap in your own by dropping a file in
`public/images/` and pointing `image` at it, or by changing the Unsplash URL.
Allowed remote hosts are configured in `next.config.ts`.

### Prices

Set per-destination starting prices (INR) via the `price` field in
`src/lib/destinations.ts`. They're formatted as Indian rupees automatically and
shown on the cards, hero and destination pages.

### Dark / light mode

A toggle in the header switches themes (default: dark, remembered per visitor).
Colours are driven by semantic tokens in `src/app/globals.css` — photo tiles,
the footer and feature bands are intentionally kept dark in both themes.

## ☁️ Deploy

One-click on **Vercel** (recommended for Next.js):

1. Push this branch to GitHub (already set up).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. After deploying, update `url` in `src/lib/site.ts` to the live domain so SEO
   tags and the sitemap use the correct address.

## 🧱 Tech

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion · cobe · lucide-react
