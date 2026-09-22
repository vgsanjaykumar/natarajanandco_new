// Pure helpers shared by React components and the Node build scripts.
import categories from "./categories.js";
import brands from "./brands.js";

export const categoryName = (slug) => categories.find((c) => c.slug === slug)?.name ?? slug;

// "UltraTech Cement" already contains its brand; "One Pure Elegance" does not.
export const displayName = (product) =>
  product.name.toLowerCase().startsWith(product.brand.toLowerCase())
    ? product.name
    : `${product.brand} ${product.name}`;

export const brandOf = (product) => brands.find((b) => b.slug === product.brandSlug);

export const productPath = (p) => `/products/${p.slug}`;
export const brandPath = (b) => `/brands/${b.slug}`;
export const categoryPath = (c) => `/categories/${c.slug ?? c}`;

// Birla Opus sub-ranges, derived from the official product names
// ("One Pure Elegance" → One). Textures form their own group.
export const OPUS_RANGES = ["One", "Calista", "Style", "Alldry", "Allwood"];
export const rangeOf = (p) =>
  p.brandSlug === "birla-opus" ? OPUS_RANGES.find((r) => p.name.startsWith(`${r} `)) ?? "Textures" : null;
