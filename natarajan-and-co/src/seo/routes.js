// Route-level SEO: titles, descriptions, canonical paths and JSON-LD.
// Pure JS (no JSX / Vite APIs) so both <Seo/> in the browser and the Node
// build scripts (sitemap + prerender) use exactly the same source.

import { SITE, BUSINESS, PHONES, absUrl } from "../config/site.js";
import brands from "../data/brands.js";
import products from "../data/products.js";
import categories from "../data/categories.js";
import services from "../data/services.js";
import { displayName, categoryName } from "../data/helpers.js";

const clip = (s, n = 158) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/\s+\S*$/, "")}…`);
const withSite = (t) => `${t} | ${SITE.name}`;

// ───────────── JSON-LD builders ─────────────
export const localBusinessLd = () => ({
  "@type": "HardwareStore",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: [SITE.legalName, "Natarajan and Co UltraTech Building Solution"],
  description:
    "Authorised UltraTech dealer in Karaikudi supplying cement, paints, waterproofing, wall putty, tile adhesives and construction chemicals.",
  url: `${SITE.url}/`,
  image: absUrl(SITE.ogImage),
  logo: absUrl("/icon-512.png"),
  telephone: PHONES.schema,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
  hasMap: BUSINESS.mapsLink,
  areaServed: { "@type": "City", name: BUSINESS.locality },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    },
  ],
  sameAs: [BUSINESS.instagram],
});

export const websiteLd = () => ({
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE.url}/#business` },
});

export const breadcrumbLd = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absUrl(path),
  })),
});

const productLd = (p) => ({
  "@type": "Product",
  name: displayName(p),
  description: p.shortDescription,
  category: categoryName(p.category),
  url: absUrl(`/products/${p.slug}`),
  brand: { "@type": "Brand", name: p.brand },
  ...(p.image ? { image: absUrl(p.image) } : {}),
});

const brandLd = (b) => ({
  "@type": "Brand",
  name: b.name,
  url: absUrl(`/brands/${b.slug}`),
  description: b.intro,
  ...(b.logo ? { logo: absUrl(b.logo) } : {}),
});

const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes });

export const BASE_JSON_LD = () => graph(localBusinessLd(), websiteLd());

// ───────────── Static pages ─────────────
const STATIC = {
  "/": {
    title: "Paints, Cement & Building Materials in Karaikudi | Natarajan & Co",
    description:
      "Natarajan & Co, Karaikudi: authorised UltraTech dealer with Birla Opus paints, Birla White, MYK Laticrete, Fosroc, Araldite and Dr Fixit under one roof.",
  },
  "/about": {
    title: withSite("About Us — Paint & Building Material Dealer"),
    description:
      "Learn about Natarajan & Co, a Karaikudi building-materials dealer with over two decades of experience, authorised brand partnerships and dealer recognitions.",
  },
  "/brands": {
    title: withSite("Our Brands — UltraTech, Birla Opus & more"),
    description:
      "Brands available at Natarajan & Co, Karaikudi: UltraTech, Birla Opus, Birla White, MYK Laticrete, Fosroc, Araldite and Dr Fixit.",
  },
  "/products": {
    title: withSite("Product Catalogue — Paints, Cement & More"),
    description:
      "Search and filter paints, primers, putty, waterproofing, cement, tile adhesives and construction chemicals available at Natarajan & Co, Karaikudi.",
  },
  "/dealership": {
    title: withSite("Dealership — Authorised Brand Partners in Karaikudi"),
    description:
      "Natarajan & Co is an authorised dealer for UltraTech, Birla White, MYK Laticrete, Fosroc, Araldite and Dr Fixit, and offers Birla Opus paints in Karaikudi.",
  },
  "/services": {
    title: withSite("Services — Supply, Consultation & Bulk Orders"),
    description:
      "Building material supply, product consultation, bulk and dealership orders and customer support from Natarajan & Co, Karaikudi.",
  },
  "/contact": {
    title: withSite("Contact & Store Location in Karaikudi"),
    description:
      "Visit, call or WhatsApp Natarajan & Co in Karaikudi. Open daily 9 AM – 8 PM. Enquire about paints, cement, waterproofing and building materials.",
  },
};

const crumbs = (...items) => [["Home", "/"], ...items];

export function metaForPath(rawPath) {
  const path = rawPath.replace(/\/+$/, "") || "/";
  const base = (extra) => ({ path, type: "website", image: SITE.ogImage, ...extra });

  if (STATIC[path]) {
    const s = STATIC[path];
    if (path === "/") return base({ ...s, jsonLd: BASE_JSON_LD() });
    const trail = breadcrumbLd(crumbs([s.title.split(" | ")[0].split(" — ")[0], path]));
    return base({ ...s, jsonLd: graph(trail) });
  }

  let m;
  if ((m = path.match(/^\/brands\/([^/]+)$/))) {
    const b = brands.find((x) => x.slug === m[1]);
    if (!b) return null;
    return base({
      title: withSite(`${b.name} Products in Karaikudi`),
      description: clip(`${b.name} products available through Natarajan & Co in Karaikudi. ${b.intro}`),
      jsonLd: graph(brandLd(b), breadcrumbLd(crumbs(["Brands", "/brands"], [b.name, path]))),
    });
  }
  if ((m = path.match(/^\/products\/([^/]+)$/))) {
    const p = products.find((x) => x.slug === m[1]);
    if (!p) return null;
    return base({
      title: withSite(displayName(p)),
      description: clip(`${displayName(p)} available through Natarajan & Co in Karaikudi. ${p.shortDescription}`),
      type: "product",
      image: p.image || SITE.ogImage,
      jsonLd: graph(
        productLd(p),
        breadcrumbLd(crumbs(["Products", "/products"], [categoryName(p.category), `/categories/${p.category}`], [displayName(p), path])),
      ),
    });
  }
  if ((m = path.match(/^\/categories\/([^/]+)$/))) {
    const c = categories.find((x) => x.slug === m[1]);
    if (!c) return null;
    return base({
      title: withSite(c.seoTitle),
      description: clip(c.seoDescription),
      jsonLd: graph(
        {
          "@type": "CollectionPage",
          name: c.name,
          url: absUrl(path),
          about: c.description,
          isPartOf: { "@id": `${SITE.url}/#website` },
        },
        breadcrumbLd(crumbs(["Products", "/products"], [c.name, path])),
      ),
    });
  }
  if ((m = path.match(/^\/services\/([^/]+)$/))) {
    const s = services.find((x) => x.slug === m[1]);
    if (!s) return null;
    return base({
      title: withSite(s.name),
      description: clip(`${s.shortDescription} Natarajan & Co, Karaikudi.`),
      jsonLd: graph(breadcrumbLd(crumbs(["Services", "/services"], [s.name, path]))),
    });
  }
  return null;
}

export const NOT_FOUND_META = {
  path: "/404",
  title: withSite("Page Not Found"),
  description: "The page you are looking for does not exist.",
  noindex: true,
  type: "website",
  image: SITE.ogImage,
};

// Every indexable public route (used for sitemap + prerender).
export function allRoutes() {
  return [
    ...Object.keys(STATIC),
    ...brands.map((b) => `/brands/${b.slug}`),
    ...categories.map((c) => `/categories/${c.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...services.map((s) => `/services/${s.slug}`),
  ];
}

