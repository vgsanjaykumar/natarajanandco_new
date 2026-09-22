// Curated content for the Home page. Everything references real slugs from
// products.js / categories.js — no free-standing product claims.

// "Featured Paint Products": one real product from several brands.
export const FEATURED_PAINT_SLUGS = [
  "birla-opus-one-pure-elegance",
  "birla-opus-one-true-look",
  "birla-wallcare-putty",
  "dr-fixit-waterproofing",
];

// "Featured Products": new Birla Opus first, then important existing lines.
export const FEATURED_PRODUCT_SLUGS = [
  "birla-opus-one-true-vision",
  "birla-opus-calista-ever-clear",
  "birla-opus-alldry-wall-n-roof-12",
  "birla-opus-allwood-italian-pu",
  "ultratech-cement",
  "birla-wallcare-putty",
  "myk-laticrete-tile-adhesive",
  "dr-fixit-waterproofing",
];

export const PAINT_CATEGORY_SLUGS = [
  "interior-paints", "exterior-paints", "primers", "wall-putty",
  "enamels", "waterproofing", "wood-finishes", "specialty-coatings",
];

export const BUILDING_CATEGORY_SLUGS = [
  "cement", "white-cement", "tile-adhesives", "construction-chemicals",
  "adhesives", "building-solutions",
];

export const WATERPROOFING_SOLUTIONS = [
  { label: "Wall waterproofing", detail: "Crack-proof primers and wall protection", slug: "birla-opus-alldry-wall-fix-4" },
  { label: "Roof & terrace", detail: "Wall n Roof systems and Dr Fixit roof products", slug: "birla-opus-alldry-wall-n-roof-12" },
  { label: "Crack treatment", detail: "Crack pastes and pre-paint repair", slug: "birla-opus-alldry-crack-master-paste" },
  { label: "Damp & salt protection", detail: "Efflorescence-blocking waterproof primer", slug: "birla-opus-alldry-salt-seal" },
];

export const PROJECT_FINDER = [
  {
    key: "new-construction", title: "For New Construction", art: "building",
    text: "Cement, white cement and building-solution products to start a build.",
    links: [["cement", "Cement"], ["building-solutions", "Building solutions"], ["white-cement", "White cement"]],
  },
  {
    key: "interior", title: "For Interior Painting", art: "interior",
    text: "Primer, putty and interior emulsions for smooth, finished walls.",
    links: [["interior-paints", "Interior paints"], ["primers", "Primers"], ["wall-putty", "Wall putty"]],
  },
  {
    key: "exterior", title: "For Exterior Painting", art: "exterior",
    text: "Weather-facing exterior emulsions and the primers that go under them.",
    links: [["exterior-paints", "Exterior paints"], ["primers", "Primers"], ["enamels", "Enamels"]],
  },
  {
    key: "waterproofing", title: "For Waterproofing", art: "waterproof",
    text: "Roof, terrace and wall protection against seepage and dampness.",
    links: [["waterproofing", "Waterproofing"], ["construction-chemicals", "Chemicals"]],
  },
  {
    key: "renovation", title: "For Renovation", art: "tile",
    text: "Repair, re-tiling, re-polishing and fresh paint for an existing home.",
    links: [["tile-adhesives", "Tile adhesives"], ["wood-finishes", "Wood finishes"], ["adhesives", "Adhesives"]],
  },
];
