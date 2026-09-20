// Product taxonomy. Only categories that are actually supported by the brands
// and products Natarajan & Co lists are included.
//   group: "paints" | "building"
//   art:   key used by <SceneArt/> / <ProductArt/> for the illustration

const categories = [
  {
    slug: "interior-paints", name: "Interior Paints", group: "paints", art: "interior",
    short: "Emulsions and distempers for walls and ceilings across luxury, premium and economy tiers.",
    description: "Interior wall paints available through Natarajan & Co, from luxury and premium emulsions to economy distempers, with the primers and putty that prepare the wall.",
    seoTitle: "Interior Paints in Karaikudi",
    seoDescription: "Interior emulsion and distemper paints from Birla Opus at Natarajan & Co, Karaikudi. Ask us about luxury, premium and economy interior ranges.",
  },
  {
    slug: "exterior-paints", name: "Exterior Paints", group: "paints", art: "exterior",
    short: "Weather-facing exterior emulsions with dust, algae and UV resistance features.",
    description: "Exterior emulsions from Birla Opus for facades and outdoor walls, chosen for dust resistance, algae resistance and long-lasting colour.",
    seoTitle: "Exterior Paints in Karaikudi",
    seoDescription: "Exterior wall paints from Birla Opus at Natarajan & Co, Karaikudi — emulsions built for sun, rain and dust.",
  },
  {
    slug: "primers", name: "Primers", group: "paints", art: "primer",
    short: "Interior, exterior, cement and metal primers that prepare surfaces before painting.",
    description: "Primers for interior walls, exterior walls, cement surfaces and metal — the base coat that helps the finish coat adhere and look even.",
    seoTitle: "Wall & Metal Primers in Karaikudi",
    seoDescription: "Interior, exterior, cement and metal primers from Birla Opus at Natarajan & Co, Karaikudi.",
  },
  {
    slug: "wall-putty", name: "Wall Putty", group: "paints", art: "putty",
    short: "Cement-based and acrylic putty for smooth, paint-ready walls.",
    description: "Wall putty used to level and smooth walls before painting — Birla White Wallcare (white cement based) and Birla Opus One Pro Smooth (interior acrylic).",
    seoTitle: "Wall Putty in Karaikudi",
    seoDescription: "Birla White Wallcare putty and Birla Opus acrylic putty at Natarajan & Co, Karaikudi — smooth, paint-ready walls.",
  },
  {
    slug: "enamels", name: "Enamels", group: "paints", art: "enamel",
    short: "Gloss and PU enamels for metal, doors and trims.",
    description: "Enamel paints for doors, trims and metal surfaces, from gloss and PU enamels to an economy option.",
    seoTitle: "Enamel Paints in Karaikudi",
    seoDescription: "Birla Opus Calista Sparkle and Style enamels for metal and wood at Natarajan & Co, Karaikudi.",
  },
  {
    slug: "wood-finishes", name: "Wood Finishes", group: "paints", art: "wood",
    short: "PU, melamine, stain and filler for furniture, doors and wood surfaces.",
    description: "The Birla Opus Allwood range: PU finishes, melamine polish, wood stain and wood filler for interior and exterior wood.",
    seoTitle: "Wood Finishes & PU Polish in Karaikudi",
    seoDescription: "Birla Opus Allwood PU, melamine, wood stain and wood filler at Natarajan & Co, Karaikudi.",
  },
  {
    slug: "waterproofing", name: "Waterproofing", group: "paints", art: "waterproof",
    short: "Wall, roof and crack solutions against seepage, dampness and efflorescence.",
    description: "Waterproofing for walls, roofs and terraces plus crack repair and damp protection — Birla Opus Alldry and Dr Fixit, with Fosroc and MYK Laticrete chemicals also stocked.",
    seoTitle: "Waterproofing Products in Karaikudi",
    seoDescription: "Birla Opus Alldry and Dr Fixit waterproofing for roofs, terraces and walls at Natarajan & Co, Karaikudi.",
  },
  {
    slug: "specialty-coatings", name: "Specialty Coatings", group: "paints", art: "texture",
    short: "Decorative interior textures for feature walls.",
    description: "Decorative texture finishes from Birla Opus for feature walls and designer interiors.",
    seoTitle: "Decorative Wall Textures in Karaikudi",
    seoDescription: "Birla Opus interior textures — Nature's Paradise and Earthen Elegance collections — at Natarajan & Co, Karaikudi.",
  },
  {
    slug: "cement", name: "Cement", group: "building", art: "cement",
    short: "UltraTech cement for residential and commercial construction.",
    description: "UltraTech cement, supplied by an authorised UltraTech dealer in Karaikudi.",
    seoTitle: "UltraTech Cement in Karaikudi",
    seoDescription: "Buy UltraTech cement from Natarajan & Co, authorised UltraTech dealer in Karaikudi.",
  },
  {
    slug: "white-cement", name: "White Cement", group: "building", art: "cement",
    short: "Birla White cement for decorative and finishing work.",
    description: "Birla White cement for decorative surfaces and finishing applications.",
    seoTitle: "Birla White Cement in Karaikudi",
    seoDescription: "Birla White cement at Natarajan & Co, Karaikudi — for decorative and finishing work.",
  },
  {
    slug: "tile-adhesives", name: "Tile Adhesives", group: "building", art: "tile",
    short: "MYK Laticrete tile-fixing adhesives for floors and walls.",
    description: "Tile-fixing adhesives from the MYK Laticrete range for floor and wall tiling.",
    seoTitle: "Tile Adhesives in Karaikudi",
    seoDescription: "MYK Laticrete tile adhesives at Natarajan & Co, Karaikudi.",
  },
  {
    slug: "construction-chemicals", name: "Construction Chemicals", group: "building", art: "chemical",
    short: "Fosroc repair, protection and waterproofing chemicals.",
    description: "Fosroc construction chemicals for repair, protection and waterproofing work.",
    seoTitle: "Construction Chemicals in Karaikudi",
    seoDescription: "Fosroc construction chemicals at Natarajan & Co, Karaikudi — repair, protection and waterproofing.",
  },
  {
    slug: "adhesives", name: "Adhesives", group: "building", art: "adhesive",
    short: "Araldite adhesives for bonding and repair.",
    description: "Araldite adhesives for everyday bonding and repair work.",
    seoTitle: "Araldite Adhesives in Karaikudi",
    seoDescription: "Araldite adhesives at Natarajan & Co, Karaikudi — bonding and repair.",
  },
  {
    slug: "building-solutions", name: "Building Solutions", group: "building", art: "building",
    short: "The wider UltraTech Building Solutions range beyond cement.",
    description: "UltraTech Building Solutions products stocked alongside cement.",
    seoTitle: "UltraTech Building Solutions in Karaikudi",
    seoDescription: "UltraTech Building Solutions products at Natarajan & Co, Karaikudi.",
  },
];

export const categoryBySlug = (slug) => categories.find((c) => c.slug === slug);
export default categories;
