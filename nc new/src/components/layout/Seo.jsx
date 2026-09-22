import { useEffect } from "react";
import { SITE, absUrl } from "../../config/site.js";
import { BASE_JSON_LD } from "../../seo/routes.js";

function upsert(selector, tag, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tag);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

const meta = (attr, name, content) => upsert(`meta[${attr}="${name}"]`, "meta", { [attr]: name, content });

// Applies per-route title, description, canonical, Open Graph, Twitter and
// JSON-LD. The same values are baked into static HTML by scripts/prerender.mjs
// so crawlers that don't run JavaScript also see them.
export default function Seo({ meta: m }) {
  const { title, description, path, image, type = "website", noindex = false, jsonLd } = m;

  useEffect(() => {
    document.title = title;
    const url = absUrl(path);
    const img = image?.startsWith("http") ? image : absUrl(image || SITE.ogImage);

    meta("name", "description", description);
    meta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    upsert('link[rel="canonical"]', "link", { rel: "canonical", href: url });

    meta("property", "og:type", type === "product" ? "website" : type);
    meta("property", "og:site_name", SITE.name);
    meta("property", "og:locale", SITE.locale);
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:url", url);
    meta("property", "og:image", img);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);
    meta("name", "twitter:image", img);

    const ld = upsert("script#ld-json", "script", { id: "ld-json", type: "application/ld+json" });
    ld.textContent = JSON.stringify(jsonLd ?? BASE_JSON_LD());
  }, [title, description, path, image, type, noindex, jsonLd]);

  return null;
}
