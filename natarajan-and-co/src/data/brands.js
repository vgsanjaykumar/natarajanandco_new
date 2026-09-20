// Brands represented by Natarajan & Co.
// The first six are unchanged from the existing site (authorised dealerships).
// Birla Opus is new; it is described as "available at Natarajan & Co" rather
// than "authorised dealer" until the dealership status is confirmed.

const brands = [
  {
    slug: "ultratech",
    name: "UltraTech",
    logo: "/img/brands/ultratech.webp",
    accent: "#FFD400",
    category: "Cement & Building Solutions",
    relationship: "Authorised dealer",
    intro: "Authorised dealer of UltraTech, India's No.1 cement brand, for over two decades.",
    description:
      "UltraTech is the cement and building-solutions brand we have represented the longest. As an authorised dealer based in Karaikudi, we stock UltraTech cement along with related building-solution products for residential and small commercial construction.",
    highlight: true,
    banner: "/img/store-night-1000.webp",
  },
  {
    slug: "birla-opus",
    name: "Birla Opus",
    logo: null,
    accent: "#E4572E",
    category: "Paints, Waterproofing & Wood Finishes",
    relationship: "Newly added",
    isNew: true,
    officialUrl: "https://www.birlaopus.com",
    intro:
      "Interior and exterior paints, primers, putty, enamels, waterproofing and wood finishes from the Aditya Birla Group's paint brand.",
    description:
      "Birla Opus is the decorative paints brand of Grasim Industries, part of the Aditya Birla Group, launched in 2024. Its range covers interior and exterior paints, waterproofing, enamels, wood finishes, textures and wallpapers. At Natarajan & Co you can enquire about the Birla Opus paints, primers, putty, waterproofing and wood-finish products listed here.",
    ranges: [
      { name: "One", tier: "Luxury", text: "The luxury range: interior and exterior emulsions, primers, putty and designer textures for refined finishes." },
      { name: "Calista", tier: "Premium", text: "The premium range of interior and exterior emulsions, enamels and metal primers built around performance." },
      { name: "Style", tier: "Economy", text: "The economy range of interior and exterior emulsions, distemper and enamels for good value." },
      { name: "Alldry", tier: "Waterproofing", text: "Waterproofing solutions against dampness and leakage, plus crack and repair products." },
      { name: "Allwood", tier: "Wood finishes", text: "PU, melamine, stain and filler products to protect and beautify wooden surfaces." },
    ],
  },
  {
    slug: "birla-white",
    name: "Birla White",
    logo: "/img/brands/birla-white.webp",
    accent: "#1E9AD6",
    category: "White Cement & Wall Putty",
    relationship: "Authorised dealer",
    intro: "Authorised dealer of Birla White cement and Wallcare putty.",
    description:
      "Birla White products are widely used for finishing work — from white cement for decorative applications to Wallcare putty for smooth, paint-ready walls. We keep both in stock for builders and homeowners in and around Karaikudi.",
    banner: "/img/brands/birla-white-wallcare.webp",
  },
  {
    slug: "myk-laticrete",
    name: "MYK Laticrete",
    logo: "/img/brands/myk-laticrete.webp",
    accent: "#00A6CE",
    category: "Tile Adhesives & Waterproofing",
    relationship: "Authorised dealer",
    intro: "Authorised dealer of MYK Laticrete tiling and construction chemical products.",
    description:
      "MYK Laticrete offers a range of tile-fixing and construction-chemical solutions. We supply these products to customers who need reliable tiling and waterproofing materials for their projects.",
  },
  {
    slug: "fosroc",
    name: "Fosroc",
    logo: "/img/brands/fosroc.webp",
    accent: "#E1251B",
    category: "Construction Chemicals",
    relationship: "Authorised dealer",
    intro: "Authorised dealer of Fosroc construction chemical products.",
    description:
      "Fosroc specialises in construction chemicals used for repair, protection, and waterproofing. We stock select Fosroc products for customers working on both new construction and renovation projects.",
  },
  {
    slug: "araldite",
    name: "Araldite",
    logo: "/img/brands/araldite.webp",
    accent: "#1F3A93",
    category: "Adhesives",
    relationship: "Authorised dealer",
    intro: "Authorised dealer of Araldite adhesive products.",
    description:
      "Araldite adhesives are a trusted choice for bonding and repair work across construction and general-purpose applications. We keep these in stock as part of our everyday hardware supplies.",
  },
  {
    slug: "dr-fixit",
    name: "Dr Fixit",
    logo: "/img/brands/dr-fixit.webp",
    accent: "#F7C600",
    category: "Waterproofing Solutions",
    relationship: "Authorised dealer",
    intro: "Authorised dealer of Dr Fixit waterproofing products.",
    description:
      "Dr Fixit is a well-known name in waterproofing. We supply Dr Fixit products to customers looking to protect roofs, walls, and other surfaces from water damage and seepage.",
  },
];

// Other logos already shown in the live site's brand carousel. They have no
// brand page yet — shown as "Also on our shelves" until details are confirmed.
export const alsoStocked = [
  { name: "Roff", logo: "/img/brands/roff.webp" },
  { name: "Sintex", logo: "/img/brands/sintex.webp" },
  { name: "Tenax", logo: "/img/brands/tenax.webp" },
  { name: "Padmashri", logo: "/img/brands/padmashri.webp" },
];

export const brandBySlug = (slug) => brands.find((b) => b.slug === slug);
export default brands;
