// Photos from around the Natarajan & Co store — shelves, stock and the
// storefront. Shown as a lightbox gallery on the About page.
// thumb = small grid tile (~640w), full = lightbox image (~1600w).

const gallery = [
  { id: "shop-01", alt: "Paint tins on shelves at the Natarajan & Co store" },
  { id: "shop-02", alt: "UltraTech Building Solutions display inside the store" },
  { id: "shop-03", alt: "UltraTech Building Solutions display and paint stock" },
  { id: "shop-04", alt: "Waterproofing and construction-chemical stock on shelves" },
  { id: "shop-05", alt: "Inside the Natarajan & Co store" },
  { id: "shop-06", alt: "Stock room shelves" },
  { id: "shop-07", alt: "Automotive oils and chemicals on shelves" },
  { id: "shop-08", alt: "Automotive oils and chemicals on shelves" },
  { id: "shop-09", alt: "Construction chemicals and cement stock on shelves" },
  { id: "shop-10", alt: "Store shelves" },
  { id: "shop-11", alt: "Paint tins on shelves" },
  { id: "shop-12", alt: "Natarajan & Co storefront with Birla Opus signage" },
  { id: "shop-13", alt: "Natarajan & Co storefront" },
  { id: "shop-14", alt: "Natarajan & Co storefront" },
  { id: "shop-15", alt: "Natarajan & Co storefront, street view" },
  { id: "shop-16", alt: "Stock room with cement bags" },
  { id: "shop-17", alt: "Stock room — building materials in storage" },
  { id: "shop-18", alt: "Paint tins on shelves, UltraTech Building Solutions signage" },
  { id: "shop-19", alt: "Birla Opus paint tinting machines" },
].map((g) => ({
  ...g,
  thumb: `/img/gallery/${g.id}-thumb.webp`,
  full: `/img/gallery/${g.id}.webp`,
}));

export default gallery;
