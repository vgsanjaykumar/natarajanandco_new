// Static SEO pass. Runs after `vite build`.
//
// The site is a client-rendered React app, so a crawler that does not run
// JavaScript would see the same empty page for every URL. This script writes
// one HTML file per route (dist/<route>/index.html) that already contains that
// route's own <title>, description, canonical, Open Graph / Twitter tags,
// JSON-LD and a plain-text <noscript> summary with links. React then takes
// over in the browser exactly as before. It also writes dist/404.html.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { allRoutes, metaForPath, NOT_FOUND_META } from "../src/seo/routes.js";
import { SITE, absUrl } from "../src/config/site.js";
import categories from "../src/data/categories.js";
import brands from "../src/data/brands.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const templatePath = join(dist, "index.html");
if (!existsSync(templatePath)) throw new Error("dist/index.html not found — run `vite build` first.");
const template = readFileSync(templatePath, "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonSafe = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

function head(m) {
  const url = absUrl(m.path);
  const img = m.image?.startsWith("http") ? m.image : absUrl(m.image || SITE.ogImage);
  const robots = m.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  return [
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="${m.type === "product" ? "website" : m.type}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`,
    m.jsonLd ? `<script id="ld-json" type="application/ld+json">${jsonSafe(m.jsonLd)}</script>` : "",
  ].filter(Boolean).join("\n    ");
}

const links = [
  ["/", "Home"], ["/products", "Products"], ["/brands", "Brands"], ["/dealership", "Dealership"], ["/services", "Services"], ["/about", "About"], ["/contact", "Contact"],
  ...categories.map((c) => [`/categories/${c.slug}`, c.name]),
  ...brands.map((b) => [`/brands/${b.slug}`, b.name]),
];

function noscript(m, heading) {
  const nav = links.map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join("");
  return `<noscript>
      <main style="max-width:44rem;margin:0 auto;padding:24px;font-family:system-ui,sans-serif;line-height:1.6">
        <h1>${esc(heading)}</h1>
        <p>${esc(m.description)}</p>
        <p>Natarajan &amp; Co, 14/1 Paruppooranai South, V.O.C Road, Karaikudi 630001. Call 04565-401379 or WhatsApp 86674 08717. Open daily 9:00 AM – 8:00 PM.</p>
        <nav aria-label="Site"><ul>${nav}</ul></nav>
        <p>Please enable JavaScript to use the full catalogue.</p>
      </main>
    </noscript>`;
}

function render(m) {
  const heading = m.title.split(" | ")[0];
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(m.description)}" />`)
    .replace("<!--SEO_HEAD-->", head(m))
    .replace(/<noscript>[\s\S]*?<\/noscript>/, noscript(m, heading));
}

function write(route, html) {
  const dir = route === "/" ? dist : join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
}

const routes = allRoutes();
let missing = 0;
for (const r of routes) {
  const m = metaForPath(r);
  if (!m) { console.error(`✗ no metadata for ${r}`); missing++; continue; }
  write(r, render(m));
}
writeFileSync(join(dist, "404.html"), render(NOT_FOUND_META));
if (missing) process.exit(1);
console.log(`prerender: ${routes.length} routes + 404.html`);
