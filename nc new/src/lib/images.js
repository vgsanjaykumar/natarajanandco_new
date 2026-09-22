// Image resolution.
// Drop official pack shots / logos into these folders and they are picked up
// automatically (no code change):
//   src/assets/products/<product-slug>.webp|png|jpg   e.g. birla-opus-one-pure-elegance.webp
//   src/assets/brands/<brand-slug>.webp|png|svg       e.g. birla-opus.svg
// Vite fingerprints, bundles and caches them.

const toMap = (glob) =>
  Object.fromEntries(Object.entries(glob).map(([path, url]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), url]));

const productOverrides = toMap(
  import.meta.glob("../assets/products/*.{webp,png,jpg,jpeg,avif}", { eager: true, query: "?url", import: "default" }),
);
const brandOverrides = toMap(
  import.meta.glob("../assets/brands/*.{webp,png,jpg,jpeg,svg,avif}", { eager: true, query: "?url", import: "default" }),
);

export const productImage = (product) => productOverrides[product.slug] ?? product.image ?? null;
export const brandLogo = (brand) => brandOverrides[brand.slug] ?? brand.logo ?? null;
export const hasRealProductImage = (product) => Boolean(productImage(product));
