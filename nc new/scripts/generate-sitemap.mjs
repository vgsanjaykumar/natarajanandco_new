// Writes public/sitemap.xml from the same route list the prerender step uses,
// so the sitemap can never drift from the pages that exist.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { allRoutes } from "../src/seo/routes.js";
import { SITE } from "../src/config/site.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const today = new Date().toISOString().slice(0, 10);

const priority = (r) => (r === "/" ? "1.0" : /^\/(products|brands|about|contact|dealership)$/.test(r) ? "0.9" : r.startsWith("/categories/") || r.startsWith("/brands/") ? "0.8" : "0.6");
const freq = (r) => (r === "/" || r.startsWith("/products") ? "weekly" : "monthly");

const urls = allRoutes()
  .map((r) => `  <url>\n    <loc>${SITE.url}${r === "/" ? "/" : r}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq(r)}</changefreq>\n    <priority>${priority(r)}</priority>\n  </url>`)
  .join("\n");

writeFileSync(
  join(root, "public", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${allRoutes().length} URLs`);
