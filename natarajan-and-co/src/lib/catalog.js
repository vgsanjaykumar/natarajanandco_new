// Product search + faceted filtering (pure functions).
import products from "../data/products.js";
import { displayName, categoryName } from "../data/helpers.js";

const norm = (s) => String(s ?? "").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu, " ");

const index = new Map(
  products.map((p) => [
    p.slug,
    norm([displayName(p), categoryName(p.category), p.subCategory, p.finish, p.shortDescription, (p.tags ?? []).join(" "), (p.suitableFor ?? []).join(" ")].join(" ")),
  ]),
);

export const EMPTY_FILTERS = { q: "", brand: "", category: "", sub: "", finish: "", surface: "" };

const matchers = {
  q: (p, v) => norm(v).split(/\s+/).filter(Boolean).every((t) => index.get(p.slug).includes(t)),
  brand: (p, v) => p.brandSlug === v,
  category: (p, v) => p.category === v,
  sub: (p, v) => p.subCategory === v,
  finish: (p, v) => p.finish === v,
  surface: (p, v) => (p.suitableFor ?? []).includes(v),
};

export function filterProducts(filters, list = products) {
  const active = Object.entries(filters).filter(([k, v]) => v && matchers[k]);
  return list.filter((p) => active.every(([k, v]) => matchers[k](p, v)));
}

const valuesOf = {
  brand: (p) => [p.brandSlug],
  category: (p) => [p.category],
  sub: (p) => (p.subCategory ? [p.subCategory] : []),
  finish: (p) => (p.finish ? [p.finish] : []),
  surface: (p) => p.suitableFor ?? [],
};

// Facet counts ignore the facet's own selection so options stay selectable.
export function facetCounts(filters, key, list = products) {
  const rest = filterProducts({ ...filters, [key]: "" }, list);
  const counts = new Map();
  rest.forEach((p) => valuesOf[key](p).forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1)));
  return counts;
}

// Same category first, then the same brand, then anything else — capped at `limit`.
export function relatedTo(product, limit = 4, list = products) {
  const rest = list.filter((p) => p.slug !== product.slug);
  const score = (p) => (p.category === product.category ? 2 : 0) + (p.brandSlug === product.brandSlug ? 1 : 0);
  return rest
    .map((p) => [p, score(p)])
    .filter(([, s]) => s > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([p]) => p);
}
