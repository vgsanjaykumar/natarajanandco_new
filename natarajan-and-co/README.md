# Natarajan & Co — website

React 18 + Vite 6 + Tailwind 3 site for Natarajan & Co, Karaikudi
(authorised UltraTech dealer · Birla White · MYK Laticrete · Fosroc · Araldite · Dr Fixit · **Birla Opus**).

## Run it

```bash
npm install
npm run dev        # local development
npm run build      # sitemap → vite build → per-route static HTML
npm run smoke      # post-build checks (SEO tags, sitemap, assets, data integrity)
npm run lint
```

Deploy the contents of `dist/` to any static host. `npm run build` writes one real
HTML file per route (`dist/products/ultratech-cement/index.html`, …) plus `404.html`,
so direct links and refreshes work on plain static hosting without rewrite rules.

## Where things live

| What | Where |
|---|---|
| Business details (address, phones, hours, map, WhatsApp) | `src/config/site.js` |
| Brands · categories · products · services | `src/data/*.js` |
| Home-page curation (which products are featured, project finder cards) | `src/data/home.js` |
| Awards (photos + captions) | `src/data/awards.js` |
| Gallery (shop photos, shown on the About page) | `src/data/gallery.js`, `src/components/about/Gallery.jsx` |
| Site logo (navbar, footer, favicons, splash screen) | `public/logo/icon.png` — see `public/logo/README.md` |
| Page titles, descriptions, JSON-LD, sitemap routes | `src/seo/routes.js` |
| Colours, fonts, spacing, buttons, dark theme | `src/index.css`, `tailwind.config.js` |
| Home sections | `src/components/home/` |
| Product/brand cards, catalogue search + filters | `src/components/products/` |
| Build scripts | `scripts/` |

## Adding or editing a product

Add an object to `src/data/products.js` (copy an existing one). `slug` must be unique;
`category` and `brandSlug` must match `categories.js` / `brands.js`. Everything else —
the product page, category listing, brand page, search/filters, related products,
sitemap and structured data — is generated from that one entry.
Run `npm run build && npm run smoke` to validate.

## Product photos

Products without a photo show an original illustration (labelled "Illustrative image"
on the product page). To use a real photo, drop `<product-slug>.webp` into
`src/assets/products/` (brand logos: `src/assets/brands/<brand-slug>.webp`). It replaces
the illustration everywhere with no code change. Only use images you have permission to
use (brand/dealer portal assets or your own photographs).

Some Birla Opus product photos are instead referenced directly by path in
`src/data/products.js` (an `image: "/images/products/birla-opus/<file>.webp"` line on
the product entry) — both approaches work; use whichever the product already has.

## Gallery photos

`src/data/gallery.js` lists the "Around the Shop" photos on the About page. Each entry
needs a `thumb` (small grid tile, ~640px wide) and `full` (lightbox image, ~1600px wide)
WebP file in `public/img/gallery/`, named `<id>-thumb.webp` and `<id>.webp`. To add a
photo: convert it to WebP at those two sizes, drop the files in, and add a matching
`{ id, alt }` entry — `thumb`/`full` paths are built automatically.

## Awards photos

`src/data/awards.js` lists the recognitions shown on the About page (and the first three
also appear on the Home page). Add a WebP photo to `public/img/awards/` and a matching
`{ id, image, title, caption, partner }` entry to add another one. Captions should only
state what is legible on the trophy, certificate or event backdrop itself.

## Things to confirm before going live

- **"Over two decades"** (About page, Why-us section) — the previous site said 21 years,
  23+ years and "two decades" in different places. The old counters (18+ brands, 150+
  products, 15+ awards) were not used because they did not match the actual data.
- **Birla Opus status** — shown as "newly added / available", not "authorised dealer".
  Change `relationship` in `src/data/brands.js` if you hold the authorisation.
- **Birla Opus product data** — names and descriptions were checked against birlaopus.com;
  each product stores its source URL. No prices, coverage, warranty or ratings are shown.
- **Contact form** — there is no backend, so the form composes the enquiry and opens
  WhatsApp or the visitor's email app. Nothing is silently discarded.
- **New award photos** — 11 event/trophy photos were added to `src/data/awards.js`.
  Captions were transcribed from what is legible in each photo (event name, place,
  sometimes a date); a few are generic ("Pidilite Chairman's Club — recognition event")
  where no more specific text was readable. Please check these read correctly.
- **Gallery placement** — the "Around the Shop" gallery was added to the About page,
  after Recognition. Move `<Gallery />` in `src/pages/About.jsx` (or to another page) if
  you'd prefer it elsewhere, e.g. the Home page.
- **Google Maps embed** — check it displays on the live site.
- **Stock / brand names** — "Also on our shelves" (Roff, Sintex, Tenax, Padmashri) reuses
  logos that were on the old site; remove them in `src/data/brands.js` if not current.

## Notes

- Fonts: Plus Jakarta Sans, self-hosted (`@fontsource-variable`), no Google Fonts request.
- Light/dark theme follows the visitor's system setting and can be toggled; the choice is
  remembered. The logo splash shows once per browser session and is skipped for
  reduced-motion users.
- Accessibility: skip link, visible focus states, labelled forms with inline errors,
  alt text on every image, keyboard-operable filters, reduced-motion support.
