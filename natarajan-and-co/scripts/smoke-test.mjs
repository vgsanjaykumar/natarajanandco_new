// Post-build checks (run with `npm run smoke` after `npm run build`).
// Verifies the things that silently rot: every route has its own static HTML,
// SEO tags are present and unique, JSON-LD parses, the sitemap matches the
// route list, and every image path used by the data actually exists.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { allRoutes, metaForPath } from "../src/seo/routes.js";
import { SITE } from "../src/config/site.js";
import products from "../src/data/products.js";
import brands, { alsoStocked } from "../src/data/brands.js";
import categories from "../src/data/categories.js";
import awards from "../src/data/awards.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
let failures = 0;
let warnings = 0;
const fail = (m) => { failures++; console.error(`✗ ${m}`); };
const warn = (m) => { warnings++; console.warn(`! ${m}`); };

const routes = allRoutes();
const titles = new Map();

for (const r of routes) {
  const file = join(dist, r === "/" ? "" : r, "index.html");
  if (!existsSync(file)) { fail(`missing static page for ${r}`); continue; }
  const html = readFileSync(file, "utf8");
  const m = metaForPath(r);
  const count = (re) => (html.match(re) ?? []).length;

  if (count(/<title>/g) !== 1) fail(`${r}: expected exactly one <title>`);
  if (count(/<meta name="description"/g) !== 1) fail(`${r}: expected exactly one meta description`);
  if (count(/rel="canonical"/g) !== 1) fail(`${r}: expected exactly one canonical`);
  if (!html.includes(`href="${SITE.url}${r === "/" ? "/" : r}"`)) fail(`${r}: canonical does not point at itself`);
  if (!html.includes(m.title.replace(/&/g, "&amp;"))) fail(`${r}: title not baked in`);
  if (count(/<h1>/g) < 1) fail(`${r}: no <h1> in static fallback`);
  if (html.includes("<!--SEO_HEAD-->")) fail(`${r}: SEO placeholder left in`);

  const ld = html.match(/<script id="ld-json" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) fail(`${r}: JSON-LD missing`);
  else { try { JSON.parse(ld[1]); } catch { fail(`${r}: JSON-LD is not valid JSON`); } }

  if (m.title.length > 70) warn(`${r}: title is ${m.title.length} chars (${m.title})`);
  if (m.description.length > 165) warn(`${r}: description is ${m.description.length} chars`);
  if (titles.has(m.title)) fail(`${r}: duplicate title with ${titles.get(m.title)}`);
  titles.set(m.title, r);
}

if (!existsSync(join(dist, "404.html"))) fail("dist/404.html missing");

// Sitemap
const sitemapPath = join(dist, "sitemap.xml");
if (!existsSync(sitemapPath)) fail("sitemap.xml missing from dist");
else {
  const locs = [...readFileSync(sitemapPath, "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map((x) => x[1]);
  if (locs.length !== routes.length) fail(`sitemap has ${locs.length} URLs, expected ${routes.length}`);
  routes.forEach((r) => { if (!locs.includes(`${SITE.url}${r === "/" ? "/" : r}`)) fail(`sitemap missing ${r}`); });
}
if (!existsSync(join(dist, "robots.txt"))) fail("robots.txt missing");
else if (!readFileSync(join(dist, "robots.txt"), "utf8").includes("sitemap.xml")) fail("robots.txt does not reference the sitemap");

// Referential integrity of the data
const catSlugs = new Set(categories.map((c) => c.slug));
const brandSlugs = new Set(brands.map((b) => b.slug));
const seen = new Set();
for (const p of products) {
  if (seen.has(p.slug)) fail(`duplicate product slug ${p.slug}`);
  seen.add(p.slug);
  if (!catSlugs.has(p.category)) fail(`${p.slug}: unknown category ${p.category}`);
  if (!brandSlugs.has(p.brandSlug)) fail(`${p.slug}: unknown brand ${p.brandSlug}`);
  if (!p.shortDescription || !p.description) fail(`${p.slug}: missing description`);
}

// Every /img/... path referenced by data exists in the build
const assets = [
  ...brands.flatMap((b) => [b.logo, b.banner]),
  ...alsoStocked.map((b) => b.logo),
  ...products.map((p) => p.image),
  ...awards.map((a) => a.image),
].filter(Boolean);
for (const a of new Set(assets)) if (!existsSync(join(dist, a))) fail(`missing asset ${a}`);

console.log(`\nsmoke: ${routes.length} routes, ${products.length} products, ${brands.length} brands checked — ${failures} failure(s), ${warnings} warning(s)`);
process.exit(failures ? 1 : 0);
