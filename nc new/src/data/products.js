// Product catalogue.
//
// • Existing products (first eight) keep their original slugs and copy.
// • Birla Opus products are limited to items named on the official
//   birlaopus.com site (paint-products, texture and brand pages). Descriptions
//   paraphrase what Birla Opus itself says; no prices, coverage figures,
//   warranties, ratings or certifications are stated.
// • `source` holds the official page a Birla Opus entry was verified against.

const OPUS = "https://www.birlaopus.com";
const OPUS_ROOT = { brandSlug: "birla-opus", brand: "Birla Opus" };

const p = (o) => ({ id: o.slug, features: [], suitableFor: [], ...o });
const opus = (o) => p({ ...OPUS_ROOT, ...o, source: `${OPUS}${o.source}` });

const products = [
  // ───────────── Existing products (unchanged slugs) ─────────────
  p({
    slug: "ultratech-cement", name: "UltraTech Cement", brandSlug: "ultratech", brand: "UltraTech",
    category: "cement",
    shortDescription: "India's No.1 cement brand, stocked for everyday residential and commercial construction.",
    description:
      "UltraTech Cement is the product we've supplied longest as an authorised UltraTech dealer in Karaikudi. It's used across a wide range of construction work, from foundations to finishing, and is a dependable choice for builders, contractors, and homeowners in our region.",
    features: [
      "Suitable for general residential and commercial construction",
      "Available through our authorised UltraTech dealership",
      "Consistent local availability in Karaikudi",
    ],
    suitableFor: ["Structural work", "Cement surfaces"],
    application: "Residential home construction, small and mid-scale commercial buildings, general masonry and structural work.",
    tags: ["cement", "construction", "opc", "building material"],
    image: "/images/products/birla-opus/ultratech-cement.webp",
  }),
  p({
    slug: "ultratech-building-solutions", name: "UltraTech Building Solutions", brandSlug: "ultratech", brand: "UltraTech",
    category: "building-solutions",
    image: "/images/products/birla-opus/ultratech-building-solutions.png", imageKind: "photo",
    shortDescription: "The broader range of UltraTech building-solution products we stock alongside cement.",
    description:
      "Beyond core cement, UltraTech offers a wider building-solutions range designed to support different stages of construction. As part of our dealership, we help customers identify the right UltraTech products for their specific project needs.",
    features: [
      "Complements UltraTech cement for complete building needs",
      "Guidance available from our team on product selection",
    ],
    suitableFor: ["Structural work", "Repair & bonding"],
    application: "New construction projects, renovation and repair work.",
    tags: ["building solutions", "construction", "ultratech"],
  }),
  p({
    slug: "birla-white-cement", name: "Birla White Cement", brandSlug: "birla-white", brand: "Birla White",
    category: "white-cement",
    shortDescription: "White cement suited for decorative and finishing applications.",
    description:
      "Birla White cement is commonly chosen for decorative work and finishing tasks where a clean, white base is preferred. We stock it as part of our Birla product range for customers with specific finishing requirements.",
    features: ["Fine white cement", "Suitable for decorative finishing work"],
    suitableFor: ["Cement surfaces", "Interior walls"],
    application: "Decorative wall and surface finishing, architectural detailing.",
    tags: ["white cement", "finishing", "decorative"],
    image: "/img/brands/birla-white.webp",
  }),
  p({
    slug: "birla-wallcare-putty", name: "Birla White Wallcare Putty", brandSlug: "birla-white", brand: "Birla White",
    category: "wall-putty", subCategory: "Cement-based",
    shortDescription: "White-cement-based wall putty used to prepare smooth, paint-ready surfaces.",
    description:
      "Wallcare putty is applied before painting to help achieve a smoother wall surface. It's a regularly requested product from customers preparing walls for interior or exterior painting.",
    features: ["White cement based putty", "Used before painting for a smoother finish", "Available in the quantities our customers commonly need"],
    suitableFor: ["Interior walls", "Exterior walls"],
    application: "Interior and exterior wall preparation before painting.",
    tags: ["putty", "wall care", "wallcare", "birla white", "smooth wall"],
    image: "/img/brands/birla-white-wallcare.webp",
  }),
  p({
    slug: "myk-laticrete-tile-adhesive", name: "MYK Laticrete Tile Adhesive", brandSlug: "myk-laticrete", brand: "MYK Laticrete",
    category: "tile-adhesives",
    shortDescription: "Tile-fixing adhesive from the MYK Laticrete range.",
    description:
      "For customers working on tiling projects, we stock MYK Laticrete tile adhesives as part of our construction-chemicals range. Our team can help you understand which product fits your tiling job.",
    features: ["Part of the MYK Laticrete tiling range", "Stocked for residential and small commercial tiling"],
    suitableFor: ["Tiling"],
    application: "Floor and wall tiling, renovation tiling work.",
    tags: ["tile adhesive", "tiling", "myk", "laticrete", "waterproofing"],
    image: "/img/brands/myk-laticrete.webp",
  }),
  p({
    slug: "fosroc-construction-chemicals", name: "Fosroc Construction Chemicals", brandSlug: "fosroc", brand: "Fosroc",
    category: "construction-chemicals",
    shortDescription: "Construction chemical products for repair, protection and waterproofing work.",
    description:
      "Fosroc's construction chemical range covers repair, protection, and waterproofing needs. We keep select products available for customers handling renovation or protective-treatment work.",
    features: ["Construction chemical solutions", "Selected products stocked based on customer demand"],
    suitableFor: ["Repair & bonding", "Roof & terrace"],
    application: "Repair work, surface protection and treatment.",
    tags: ["fosroc", "waterproofing", "repair", "construction chemicals"],
    image: "/img/brands/fosroc.webp",
  }),
  p({
    slug: "araldite-adhesive", name: "Araldite Adhesive", brandSlug: "araldite", brand: "Araldite",
    category: "adhesives",
    shortDescription: "General-purpose adhesive for bonding and repair tasks.",
    description:
      "Araldite is a widely recognised adhesive brand that we stock for everyday bonding and repair needs, useful for both construction-related tasks and general household repairs.",
    features: ["General-purpose bonding adhesive", "Commonly used for repair work"],
    suitableFor: ["Repair & bonding"],
    application: "Household and construction repairs, general bonding tasks.",
    tags: ["araldite", "adhesive", "epoxy", "repair"],
    image: "/img/brands/araldite.webp",
  }),
  p({
    slug: "dr-fixit-waterproofing", name: "Dr Fixit Waterproofing", brandSlug: "dr-fixit", brand: "Dr Fixit",
    category: "waterproofing", subCategory: "Roof & wall",
    shortDescription: "Waterproofing products to help protect roofs and walls.",
    description:
      "Dr Fixit products are a common choice for customers looking to address water seepage or protect surfaces from moisture. We stock these as part of our waterproofing product range.",
    features: ["Waterproofing product range", "Stocked for roof and wall treatment needs"],
    suitableFor: ["Roof & terrace", "Interior walls", "Exterior walls"],
    application: "Roof waterproofing and wall seepage treatment.",
    tags: ["dr fixit", "waterproofing", "roof", "seepage", "terrace"],
    image: "/img/brands/dr-fixit.webp",
  }),

  // ───────────── Birla Opus · Interior paints ─────────────
  opus({
    slug: "birla-opus-one-pure-elegance", name: "One Pure Elegance", category: "interior-paints", subCategory: "Luxury",
    image: "/images/products/birla-opus/one-pure-elegance.webp",
    source: "/paint-products/interior-wall-paint/one-pure-elegance", finish: "Matt", tier: "Luxury",
    shortDescription: "Luxury matt interior emulsion from the One range with germ protection and scuff and stain resistance.",
    description:
      "One Pure Elegance is the luxury interior emulsion in Birla Opus's One range. Birla Opus positions it for a refined matt look, with germ protection and strong scuff and stain resistance to keep walls looking elegant.",
    features: ["Luxury matt finish", "Scuff and stain resistance", "Germ protection as described by Birla Opus"],
    suitableFor: ["Interior walls"],
    application:
      "Clean and dry the surface, fill cracks, then apply One Pro Smooth Primer, One Pro Smooth Putty and One Pro White Smooth Primer. Dilute 1 litre of emulsion with 400–500 ml of water and apply 2–3 coats.",
    tags: ["emulsion", "luxury", "matt", "one", "interior paint"],
  }),
  opus({
    slug: "birla-opus-calista-ever-clear", name: "Calista Ever Clear", category: "interior-paints", subCategory: "Premium",
    source: "/paint-products/interior-wall-paint/calista-ever-clear", tier: "Premium",
    shortDescription: "Premium interior emulsion from the Calista range, positioned for washability.",
    description:
      "Calista Ever Clear is a premium interior emulsion in the Calista range, which Birla Opus positions for performance and superior washability across repeated cleaning.",
    features: ["Premium interior emulsion", "Calista range highlights washability"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "washable", "calista", "premium", "interior paint"],
    image: "/images/products/birla-opus/calista-ever-clear.webp",
  }),
  opus({
    slug: "birla-opus-calista-ever-stay", name: "Calista Ever Stay", category: "interior-paints", subCategory: "Premium",
    source: "/shop-wall-paint/interiors/calista-ever-stay", tier: "Premium",
    shortDescription: "Premium emulsion for smooth, beautiful walls with excellent peel protection.",
    description:
      "Calista Ever Stay is a premium emulsion from Birla Opus designed to give smooth, beautiful walls with excellent peel protection.",
    features: ["Smooth wall finish", "Peel protection"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "calista", "premium", "interior paint", "peel"],
    image: "/images/products/birla-opus/calista-ever-stay.webp",
  }),
  opus({
    slug: "birla-opus-style-color-smart", name: "Style Color Smart", category: "interior-paints", subCategory: "Economy",
    source: "/paint-products/interior-wall-paint/style-color-smart", tier: "Economy",
    shortDescription: "Economy interior wall paint from the Style range with good coverage and a long-lasting finish.",
    description:
      "Style Color Smart is an interior wall paint in Birla Opus's economy Style range, offered for coverage and a long-lasting finish at good value.",
    features: ["Economy interior wall paint", "Coverage and long-lasting finish highlighted by Birla Opus"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "style", "economy", "budget", "interior paint"],
    image: "/images/products/birla-opus/style-color-smart.webp",
  }),
  opus({
    slug: "birla-opus-style-super-bright", name: "Style Super Bright", category: "interior-paints", subCategory: "Economy",
    source: "/paint-products/interior-wall-paint/style-super-bright", tier: "Economy",
    shortDescription: "Economy acrylic distemper focused on brightness and coverage.",
    description:
      "Style Super Bright is an acrylic distemper from the Style range, described by Birla Opus as offering brightness and exceptional coverage for living spaces.",
    features: ["Acrylic distemper", "Brightness and coverage"],
    suitableFor: ["Interior walls"],
    tags: ["distemper", "style", "economy", "budget", "interior paint"],
    image: "/images/products/birla-opus/style-super-bright.webp",
  }),
    opus({
    slug: "birla-opus-one-pure-elegance-shine",
    name: "One Pure Elegance Shine",
    category: "interior-paints",
    subCategory: "Luxury",
    source: "/shop-wall-paint/interiors/one-pure-elegance",
    finish: "Shine",
    tier: "Luxury",
    shortDescription: "Luxury interior emulsion with a refined shine finish from the One range.",
    description:
      "One Pure Elegance Shine is a luxury interior emulsion from Birla Opus's One range, designed for interiors where a rich and refined shine finish is preferred.",
    features: ["Luxury interior emulsion", "Shine finish", "Premium One range"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "luxury", "shine", "one", "interior paint"],
    image: "/images/products/birla-opus/one-pure-elegance-shine.webp",
  }),

  opus({
    slug: "birla-opus-one-pure-elegance-matt",
    name: "One Pure Elegance Matt",
    category: "interior-paints",
    subCategory: "Luxury",
    source: "/shop-wall-paint/interiors/one-pure-elegance",
    finish: "Matt",
    tier: "Luxury",
    shortDescription: "Luxury interior emulsion with a smooth matt finish from the One range.",
    description:
      "One Pure Elegance Matt is a luxury interior emulsion from Birla Opus's One range, designed to provide an elegant smooth matt appearance on interior walls.",
    features: ["Luxury interior emulsion", "Matt finish", "Smooth elegant appearance"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "luxury", "matt", "one", "interior paint"],
    image: "/images/products/birla-opus/one-pure-elegance-matt.webp",
  }),

  opus({
    slug: "birla-opus-one-pure-legend",
    name: "One Pure Legend",
    category: "interior-paints",
    subCategory: "Luxury",
    source: "/paint-products/interior-wall-paint/one-pure-legend",
    tier: "Luxury",
    shortDescription: "Luxury interior wall paint from the One range for premium residential interiors.",
    description:
      "One Pure Legend is part of Birla Opus's One range of premium interior paints, positioned for customers looking for a refined and premium interior wall finish.",
    features: ["Luxury interior paint", "Premium One range", "Refined wall finish"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "luxury", "one", "interior paint", "premium"],
    image: "/images/products/birla-opus/one-pure-legend.webp",
  }),

  opus({
    slug: "birla-opus-calista-ever-clear-matt",
    name: "Calista Ever Clear Matt",
    category: "interior-paints",
    subCategory: "Premium",
    source: "/shop-wall-paint/interiors/calista-ever-clear",
    finish: "Matt",
    tier: "Premium",
    shortDescription: "Premium interior emulsion with a smooth matt finish from the Calista range.",
    description:
      "Calista Ever Clear Matt is a premium interior emulsion from the Calista range, designed for interiors that require a smooth and elegant matt appearance.",
    features: ["Premium interior emulsion", "Matt finish", "Calista range"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "matt", "calista", "premium", "interior paint"],
    image: "/images/products/birla-opus/calista-ever-clear-matt.webp",
  }),

  opus({
    slug: "birla-opus-calista-ever-wash",
    name: "Calista Ever Wash",
    category: "interior-paints",
    subCategory: "Premium",
    source: "/shop-wall-paint/interiors/calista-ever-wash",
    tier: "Premium",
    shortDescription: "Premium washable interior emulsion from the Calista range.",
    description:
      "Calista Ever Wash is a premium interior emulsion from Birla Opus's Calista range, designed for walls where regular cleaning and washability are important.",
    features: ["Premium interior emulsion", "Washable finish", "Calista range"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "washable", "calista", "premium", "interior paint"],
    image: "/images/products/birla-opus/calista-ever-wash.webp",
  }),

  opus({
    slug: "birla-opus-calista-ever-wash-shine",
    name: "Calista Ever Wash Shine",
    category: "interior-paints",
    subCategory: "Premium",
    source: "/shop-wall-paint/interiors/calista-ever-wash",
    finish: "Shine",
    tier: "Premium",
    shortDescription: "Premium washable interior emulsion with a shine finish from the Calista range.",
    description:
      "Calista Ever Wash Shine combines the washable interior-paint positioning of the Calista Ever Wash range with a shine finish for a brighter interior appearance.",
    features: ["Premium washable emulsion", "Shine finish", "Calista range"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "washable", "shine", "calista", "premium"],
    image: "/images/products/birla-opus/calista-ever-wash-shine.webp",
  }),

  opus({
    slug: "birla-opus-calista-alpha-ever-wash",
    name: "Calista Alpha Ever Wash",
    category: "interior-paints",
    subCategory: "Premium",
    source: "/shop-wall-paint/interiors/alpha-ever-wash",
    tier: "Premium",
    shortDescription: "Premium washable interior emulsion from the Calista Alpha range.",
    description:
      "Calista Alpha Ever Wash is a washable interior paint from Birla Opus's Calista range, intended for interior walls where durability and regular cleaning are important.",
    features: ["Washable interior emulsion", "Premium Calista range", "Interior wall protection"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "washable", "calista", "alpha", "premium"],
    image: "/images/products/birla-opus/alpha-ever-wash.webp",
  }),

  opus({
    slug: "birla-opus-style-color-smart-shine",
    name: "Style Color Smart Shine",
    category: "interior-paints",
    subCategory: "Economy",
    source: "/shop-wall-paint/interiors/style-color-smart-shine",
    finish: "Shine",
    tier: "Economy",
    shortDescription: "Economy interior wall paint with a shine finish from the Style range.",
    description:
      "Style Color Smart Shine is an economy interior wall paint from Birla Opus's Style range, designed for customers looking for a brighter shine finish.",
    features: ["Economy interior paint", "Shine finish", "Style range"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "style", "economy", "shine", "interior paint"],
    image: "/images/products/birla-opus/style-color-smart-shine.webp",
  }),

  opus({
    slug: "birla-opus-style-color-fresh",
    name: "Style Color Fresh",
    category: "interior-paints",
    subCategory: "Economy",
    source: "/shop-wall-paint/interiors/style-color-fresh",
    tier: "Economy",
    shortDescription: "Economy interior wall paint from the Style range for fresh-looking interiors.",
    description:
      "Style Color Fresh is an economy interior wall paint from Birla Opus's Style range, suitable for customers looking for a fresh and practical wall finish.",
    features: ["Economy interior paint", "Fresh wall finish", "Style range"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "style", "economy", "fresh", "interior paint"],
    image: "/images/products/birla-opus/style-color-fresh.webp",
  }),

  opus({
    slug: "birla-opus-style-super-smooth",
    name: "Style Super Smooth",
    category: "interior-paints",
    subCategory: "Economy",
    source: "/shop-wall-paint/interiors/style-super-smooth",
    tier: "Economy",
    shortDescription: "Economy interior emulsion from the Style range for a smooth wall finish.",
    description:
      "Style Super Smooth is an interior paint from Birla Opus's Style range, positioned for customers looking for a smooth finish at an economy price point.",
    features: ["Economy interior emulsion", "Smooth finish", "Style range"],
    suitableFor: ["Interior walls"],
    tags: ["emulsion", "style", "economy", "smooth", "interior paint"],
    image: "/images/products/birla-opus/style-super-smooth.webp",
  }),

  // ───────────── Birla Opus · Exterior paints ─────────────
  opus({
    slug: "birla-opus-one-true-vision", name: "One True Vision", category: "exterior-paints", subCategory: "Luxury",
    source: "/paint-products/exterior-wall-paint/one-true-vision", tier: "Luxury",
    shortDescription: "Luxury exterior emulsion with UV-resistant pigments and binders and algae and fungal resistance.",
    description:
      "One True Vision is the luxury exterior emulsion in Birla Opus's One range. UV-resistant pigments and binders help reduce fading from sunlight, and special additives help prevent algal and fungal growth.",
    features: ["UV-resistant pigments and binders to reduce fading", "Additives against algal and fungal growth", "Luxury exterior emulsion"],
    suitableFor: ["Exterior walls"],
    application:
      "Prime the surface (Birla Opus suggests Calista Perfect Choice Primer or an Alldry waterproof coating), dilute 1 litre of paint with 300–400 ml of water and apply 2–3 coats.",
    tags: ["exterior", "emulsion", "luxury", "one", "uv", "weather"],
    image: "/images/products/birla-opus/one-true-vision.webp",
  }),
    opus({
    slug: "birla-opus-one-true-life",
    name: "One True Life",
    category: "exterior-paints",
    subCategory: "Luxury",
    source: "/paint-products/exterior-wall-paint/one-true-life",
    tier: "Luxury",
    shortDescription: "Luxury exterior wall paint from the One range for durable outdoor finishes.",
    description:
      "One True Life is a luxury exterior paint from Birla Opus's One range, designed for exterior walls requiring a premium and durable finish.",
    features: ["Luxury exterior paint", "One range", "Exterior wall protection"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "emulsion", "luxury", "one", "weather"],
    image: "/images/products/birla-opus/one-true-life.webp",
  }),

  opus({
    slug: "birla-opus-one-true-flex",
    name: "One True Flex",
    category: "exterior-paints",
    subCategory: "Luxury",
    source: "/paint-products/exterior-wall-paint/one-true-flex",
    tier: "Luxury",
    shortDescription: "Flexible exterior wall coating from the One range for demanding outdoor surfaces.",
    description:
      "One True Flex is an exterior product from Birla Opus's One range, designed for exterior walls where flexibility and durable surface protection are important.",
    features: ["Luxury exterior coating", "Flexible protection", "One range"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "one", "luxury", "flex", "weather"],
    image: "/images/products/birla-opus/one-true-flex.webp",
  }),

  opus({
    slug: "birla-opus-style-power-bright-shine",
    name: "Style Power Bright Shine",
    category: "exterior-paints",
    subCategory: "Economy",
    source: "/paint-products/exterior-wall-paint/style-power-bright-shine",
    finish: "Shine",
    tier: "Economy",
    shortDescription: "Economy exterior emulsion with a bright shine finish from the Style range.",
    description:
      "Style Power Bright Shine is an economy exterior emulsion from Birla Opus's Style range, designed for exterior walls requiring a bright shine appearance.",
    features: ["Economy exterior emulsion", "Shine finish", "Style range"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "emulsion", "style", "economy", "shine"],
    image: "/images/products/birla-opus/style-power-bright-shine.webp",
  }),
  opus({
    slug: "birla-opus-one-true-look", name: "One True Look", category: "exterior-paints", subCategory: "Luxury",
    source: "/shop-wall-paint/exteriors/one-true-look", tier: "Luxury",
    shortDescription: "Luxury exterior emulsion with dust and algae resistance and strong film integrity.",
    description:
      "One True Look is a luxury exterior emulsion from Birla Opus for curb appeal. It is described as having superior dust and algae resistance for a low-maintenance clean finish, with excellent film integrity to guard against cracking and peeling.",
    features: ["Dust and algae resistance", "Film integrity against cracking and peeling", "Low-maintenance clean finish"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "emulsion", "luxury", "one", "dust", "algae"],
    image: "/images/products/birla-opus/one-true-look.webp",
  }),
  opus({
    slug: "birla-opus-calista-neo-star", name: "Calista Neo Star", category: "exterior-paints", subCategory: "Premium",
    source: "/paint-products/exterior-wall-paint/calista-neo-star", tier: "Premium",
    shortDescription: "Premium exterior emulsion with superior dust resistance to keep walls looking freshly painted.",
    description:
      "Calista Neo Star is a premium exterior emulsion from Birla Opus, designed to preserve a newly painted look with superior dust resistance.",
    features: ["Superior dust resistance", "Premium exterior emulsion"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "emulsion", "calista", "premium", "dust"],
    image: "/images/products/birla-opus/calista-neo-star.webp",
  }),
  opus({
    slug: "birla-opus-calista-neo-star-shine", name: "Calista Neo Star Shine", category: "exterior-paints", subCategory: "Premium",
    source: "/paint-products/exterior-wall-paint/calista-neo-star-shine", tier: "Premium", finish: "Shine",
    shortDescription: "Premium exterior emulsion with dust resistance and an extra-shine finish.",
    description:
      "Calista Neo Star Shine adds an extra-shine finish to the Neo Star exterior emulsion, along with the superior dust resistance that helps a newly painted look last.",
    features: ["Extra shine", "Superior dust resistance"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "emulsion", "calista", "premium", "shine"],
    image: "/images/products/birla-opus/calista-neo-star-shine.webp",
  }),
  opus({
    slug: "birla-opus-style-power-bright", name: "Style Power Bright", category: "exterior-paints", subCategory: "Economy",
    source: "/paint-products/exterior-wall-paint/style-power-bright", tier: "Economy", finish: "Shine",
    shortDescription: "Economy exterior emulsion with dust resistance and extra shine.",
    description:
      "Style Power Bright is an economy exterior emulsion from Birla Opus that offers dust resistance and extra shine to keep a newly painted look.",
    features: ["Dust resistance", "Extra shine", "Economy exterior emulsion"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "emulsion", "style", "economy", "shine"],
    image: "/images/products/birla-opus/style-power-bright.webp",
  }),
  opus({
    slug: "birla-opus-style-power-fit", name: "Style Power Fit", category: "exterior-paints", subCategory: "Economy",
    source: "/paint-products/exterior-wall-paint/style-power-fit", tier: "Economy",
    shortDescription: "Economy exterior emulsion paint from the Style range.",
    description:
      "Style Power Fit is an exterior emulsion paint in Birla Opus's economy Style range, for customers who want a dependable exterior finish at good value.",
    features: ["Economy exterior emulsion", "Part of the Style range"],
    suitableFor: ["Exterior walls"],
    tags: ["exterior", "emulsion", "style", "economy", "budget"],
    image: "/images/products/birla-opus/style-power-fit.webp",
  }),

  // ───────────── Birla Opus · Primers ─────────────
  opus({
    slug: "birla-opus-one-pro-smooth-primer", name: "One Pro Smooth Primer", category: "primers", subCategory: "Interior primer",
    source: "/paint-products/interior-wall-paint/one-pro-smooth-primer", tier: "Luxury",
    shortDescription: "Interior wall primer from the One range, applied as the first coat in the One system.",
    description:
      "One Pro Smooth Primer is the interior primer of the One range. In Birla Opus's recommended system it goes on first, before One Pro Smooth Putty and the finishing coats.",
    features: ["Interior primer", "First coat in the One system"],
    suitableFor: ["Interior walls"],
    tags: ["primer", "interior", "one", "base coat"],
    image: "/images/products/birla-opus/one-pro-smooth-primer.webp",
  }),
    opus({
    slug: "birla-opus-one-pro-putty-primer",
    name: "One Pro Putty+Primer",
    category: "primers",
    subCategory: "Interior primer & putty",
    source: "/shop-wall-paint/interiors/one-pro-putty-primer",
    tier: "Luxury",
    shortDescription: "Combined putty and primer solution from the One range for interior wall preparation.",
    description:
      "One Pro Putty+Primer is a combined wall-preparation solution from Birla Opus's One range, designed to simplify the preparation stage before applying interior paint.",
    features: ["Putty and primer system", "Interior wall preparation", "One range"],
    suitableFor: ["Interior walls"],
    tags: ["primer", "putty", "one", "interior", "wall preparation"],
    image: "/images/products/birla-opus/one-pro-putty-primer.webp",
  }),

  opus({
    slug: "birla-opus-calista-pro-white-primer",
    name: "Calista Pro White Primer",
    category: "primers",
    subCategory: "Interior primer",
    source: "/shop-wall-paint/interiors/calista-pro-white-primer",
    tier: "Premium",
    shortDescription: "Premium white primer from the Calista range for interior wall preparation.",
    description:
      "Calista Pro White Primer is a white primer from Birla Opus's Calista range, used as part of the surface-preparation system before the finishing paint.",
    features: ["White primer", "Premium Calista range", "Interior surface preparation"],
    suitableFor: ["Interior walls"],
    tags: ["primer", "white primer", "calista", "premium", "interior"],
    image: "/images/products/birla-opus/calista-pro-white-primer.webp",
  }),

  opus({
    slug: "birla-opus-style-pro-hide-primer",
    name: "Style Pro Hide Primer",
    category: "primers",
    subCategory: "Interior primer",
    source: "/shop-wall-paint/interiors/style-pro-hide-primer",
    tier: "Economy",
    shortDescription: "Economy interior primer from the Style range for wall preparation.",
    description:
      "Style Pro Hide Primer is an economy primer from Birla Opus's Style range, intended for preparing interior wall surfaces before the finishing coat.",
    features: ["Economy interior primer", "Wall preparation", "Style range"],
    suitableFor: ["Interior walls"],
    tags: ["primer", "interior", "style", "economy", "base coat"],
    image: "/images/products/birla-opus/style-pro-hide-primer.webp",
  }),
  opus({
    slug: "birla-opus-one-pro-white-smooth-primer", name: "One Pro White Smooth Primer", category: "primers", subCategory: "Interior primer",
    source: "/paint-products/interior-wall-paint/one-pure-elegance", tier: "Luxury",
    shortDescription: "White interior primer applied over One Pro Smooth Putty before the emulsion.",
    description:
      "One Pro White Smooth Primer is the white primer that Birla Opus's One system applies over the putty, just before the emulsion coats.",
    features: ["White interior primer", "Applied after putty in the One system"],
    suitableFor: ["Interior walls"],
    tags: ["primer", "interior", "one", "white primer"],
    image: "/images/products/birla-opus/one-pro-white-smooth-primer.webp",
  }),
  opus({
    slug: "birla-opus-calista-perfect-choice-primer", name: "Calista Perfect Choice Primer", category: "primers", subCategory: "Exterior primer",
    source: "/paint-products/exterior-wall-paint/one-true-vision", tier: "Premium",
    shortDescription: "Primer suggested by Birla Opus for exterior wall systems.",
    description:
      "Calista Perfect Choice Primer is named by Birla Opus as a base coat option when preparing exterior walls for its exterior emulsions.",
    features: ["Exterior wall primer", "Suggested base for Birla Opus exterior emulsions"],
    suitableFor: ["Exterior walls"],
    tags: ["primer", "exterior", "calista", "base coat"],
    image: "/images/products/birla-opus/calista-perfect-choice-primer.webp",
  }),
  opus({
    slug: "birla-opus-calista-pro-white-cement-st-primer", name: "Calista Pro White Cement ST Primer", category: "primers", subCategory: "Cement primer",
    source: "/paint-products", tier: "Premium",
    shortDescription: "Cement primer from the Calista range, noted by Birla Opus for excellent whiteness.",
    description:
      "Calista Pro White Cement ST Primer is a specialised cement primer in the Calista range that Birla Opus highlights for excellent whiteness.",
    features: ["Cement primer", "Excellent whiteness as described by Birla Opus"],
    suitableFor: ["Cement surfaces"],
    tags: ["primer", "cement primer", "calista", "white"],
    image: "/images/products/birla-opus/calista-pro-white-cement-st-primer.webp",
  }),
  opus({
    slug: "birla-opus-style-pro-hide-cement-st-primer", name: "Style Pro Hide Cement ST Primer", category: "primers", subCategory: "Cement primer",
    source: "/paint-products", tier: "Economy",
    shortDescription: "Economy cement primer from the Style range, noted for strong adhesion.",
    description:
      "Style Pro Hide Cement ST Primer is a specialised cement primer in the economy Style range that Birla Opus highlights for strong adhesion.",
    features: ["Cement primer", "Strong adhesion as described by Birla Opus"],
    suitableFor: ["Cement surfaces"],
    tags: ["primer", "cement primer", "style", "economy"],
    image: "/images/products/birla-opus/style-pro-hide-cement-st-primer.webp",
  }),
  opus({
    slug: "birla-opus-calista-sparkle-red-oxide-primer", name: "Calista Sparkle Red Oxide Primer", category: "primers", subCategory: "Metal primer",
    source: "/shop-wall-paint/enamels/calista-sparkle-red-oxide-primer", tier: "Premium",
    shortDescription: "Red oxide primer that protects the integrity of metal surfaces before enamel.",
    description:
      "Calista Sparkle Red Oxide Primer is a metal primer from Birla Opus for enhanced surface protection, used ahead of Sparkle enamel finishes.",
    features: ["Metal primer", "Surface protection for metal"],
    suitableFor: ["Metal"],
    tags: ["primer", "metal primer", "red oxide", "anti-rust", "calista", "sparkle"],
    image: "/images/products/birla-opus/calista-sparkle-red-oxide-primer.webp",
  }),
  opus({
    slug: "birla-opus-calista-sparkle-yellow-metal-primer", name: "Calista Sparkle Yellow Metal Primer", category: "primers", subCategory: "Metal primer",
    source: "/paint-products", tier: "Premium",
    shortDescription: "Metal primer with excellent rust resistance, from the Calista Sparkle range.",
    description:
      "Calista Sparkle Yellow Metal Primer is a specialised metal primer from Birla Opus, noted for excellent rust resistance.",
    features: ["Metal primer", "Rust resistance"],
    suitableFor: ["Metal"],
    tags: ["primer", "metal primer", "yellow primer", "anti-rust", "calista", "sparkle"],
    image: "/images/products/birla-opus/calista-sparkle-yellow-metal-primer.webp",
  }),

  // ───────────── Birla Opus · Wall putty ─────────────
  opus({
    slug: "birla-opus-one-pro-smooth-putty", name: "One Pro Smooth Putty", category: "wall-putty", subCategory: "Acrylic",
    source: "/paint-products/interior-wall-paint/one-pro-smooth-putty", tier: "Luxury",
    shortDescription: "Interior acrylic wall putty from the One range for smooth, even walls before painting.",
    description:
      "One Pro Smooth Putty is the interior acrylic putty in Birla Opus's One range. It is applied over the primer, in two to three coats, to smooth the wall before the finishing primer and emulsion.",
    features: ["Interior acrylic putty", "Applied in 2–3 coats in the One system"],
    suitableFor: ["Interior walls"],
    tags: ["putty", "acrylic putty", "one", "smooth wall"],
    image: "/images/products/birla-opus/one-pro-smooth-putty.webp",
  }),

  // ───────────── Birla Opus · Enamels ─────────────
  opus({
    slug: "birla-opus-calista-sparkle-gloss", name: "Calista Sparkle Gloss", category: "enamels", subCategory: "Gloss enamel",
    source: "/paint-products/enamels-paints/calista-sparkle-gloss", finish: "Gloss", tier: "Premium",
    shortDescription: "Gloss enamel for metal surfaces, with coverage and a rich finish.",
    description:
      "Calista Sparkle Gloss is a premium gloss enamel from Birla Opus that gives coverage and a rich finish to metal surfaces.",
    features: ["Gloss finish", "Rich finish on metal surfaces"],
    suitableFor: ["Metal", "Wood"],
    tags: ["enamel", "gloss", "metal", "calista", "sparkle", "doors"],
    image: "/images/products/birla-opus/calista-sparkle-gloss.webp",
  }),
  opus({
    slug: "birla-opus-calista-sparkle-pu", name: "Calista Sparkle PU", category: "enamels", subCategory: "PU enamel",
    source: "/paint-products/enamels-paints/calista-sparkle-pu", finish: "PU", tier: "Premium",
    shortDescription: "PU enamel from the Calista Sparkle range with superior resistance.",
    description:
      "Calista Sparkle PU is a polyurethane enamel from Birla Opus, positioned for superior resistance on surfaces such as doors and metal.",
    features: ["PU enamel", "Superior resistance"],
    suitableFor: ["Metal", "Wood"],
    tags: ["enamel", "pu", "polyurethane", "calista", "sparkle"],
    image: "/images/products/birla-opus/calista-sparkle-pu.webp",
  }),
  opus({
    slug: "birla-opus-style-cover-max", name: "Style Cover Max", category: "enamels", subCategory: "Economy enamel",
    source: "/paint-products", tier: "Economy",
    shortDescription: "Economy enamel with strong hiding power at an affordable price.",
    description:
      "Style Cover Max is an enamel in Birla Opus's economy Style range, described as offering excellent hiding power at an affordable price.",
    features: ["Economy enamel", "Hiding power"],
    suitableFor: ["Metal", "Wood"],
    tags: ["enamel", "style", "economy", "budget"],
    image: "/images/products/birla-opus/birla-opus-style-cover-max.webp",
  }),

  // ───────────── Birla Opus · Waterproofing ─────────────
  opus({
    slug: "birla-opus-alldry-wall-fix-4", name: "Alldry Wall Fix 4", category: "waterproofing", subCategory: "Wall",
    source: "/paint-products/waterproofing/alldry-wall-fix-4",
    shortDescription: "Crack-proof waterproofing primer for walls.",
    description:
      "Alldry Wall Fix 4 is a crack-proof waterproofing primer from Birla Opus's Alldry range, used to upgrade walls before painting.",
    features: ["Waterproofing primer", "Crack-proof wall protection"],
    suitableFor: ["Interior walls", "Exterior walls"],
    tags: ["waterproofing", "wall", "primer", "alldry", "crack"],
    image: "/images/products/birla-opus/alldry-wall-fix-4.webp",
  }),
    opus({
    slug: "birla-opus-alldry-total-2k-flex",
    name: "Alldry Total 2K Flex",
    category: "waterproofing",
    subCategory: "Flexible waterproof coating",
    source: "/shop-wall-paint/waterproofing/alldry-total-2k-flex",
    shortDescription: "Flexible two-component waterproofing system from the Alldry range.",
    description:
      "Alldry Total 2K Flex is a two-component waterproofing product from Birla Opus's Alldry range, designed for surfaces where flexible waterproof protection is required.",
    features: ["Two-component waterproofing system", "Flexible waterproof protection", "Alldry range"],
    suitableFor: ["Roof & terrace", "Exterior walls"],
    tags: ["waterproofing", "2k", "flex", "alldry", "terrace", "roof"],
    image: "/images/products/birla-opus/alldry-total-2k-flex.webp",
  }),
  opus({
    slug: "birla-opus-alldry-wall-n-roof-10", name: "Alldry Wall n Roof 10", category: "waterproofing", subCategory: "Roof & wall",
    source: "/paint-products/waterproofing/alldry-wall-n-roof-10",
    shortDescription: "All-round waterproofing protection for walls and roofs.",
    description:
      "Alldry Wall n Roof 10 is a waterproofing product from Birla Opus that offers all-round protection for both walls and roofs.",
    features: ["Wall and roof waterproofing", "Part of the Alldry range"],
    suitableFor: ["Roof & terrace", "Exterior walls"],
    tags: ["waterproofing", "roof", "terrace", "wall", "alldry"],
    image: "/images/products/birla-opus/alldry-wall-n-roof-10.webp",
  }),
  opus({
    slug: "birla-opus-alldry-wall-n-roof-12", name: "Alldry Wall n Roof 12", category: "waterproofing", subCategory: "Roof & wall",
    source: "/shop-wall-paint/waterproofing/alldry-wall-n-roof-12",
    shortDescription: "Higher-tier all-round waterproofing for walls and roofs.",
    description:
      "Alldry Wall n Roof 12 is the higher-tier Wall n Roof waterproofing product in the Alldry range, giving all-round protection to walls and roofs.",
    features: ["Wall and roof waterproofing", "Higher tier than Wall n Roof 10"],
    suitableFor: ["Roof & terrace", "Exterior walls"],
    tags: ["waterproofing", "roof", "terrace", "wall", "alldry"],
    image: "/images/products/birla-opus/alldry-wall-n-roof-12.webp",
  }),
  opus({
    slug: "birla-opus-alldry-salt-seal", name: "Alldry Salt Seal", category: "waterproofing", subCategory: "Damp & salt protection",
    source: "/paint-products/waterproofing/alldry-salt-seal",
    shortDescription: "Waterproofing primer that protects against efflorescence (salt deposits).",
    description:
      "Alldry Salt Seal is a waterproofing primer from Birla Opus that protects against efflorescence — the white salt deposits that appear on damp walls.",
    features: ["Waterproofing primer", "Protection against efflorescence"],
    suitableFor: ["Interior walls", "Exterior walls"],
    tags: ["waterproofing", "damp", "efflorescence", "salt", "alldry", "primer"],
    image: "/images/products/birla-opus/alldry-salt-seal.webp",
  }),
  opus({
    slug: "birla-opus-alldry-total-2k", name: "Alldry Total 2K", category: "waterproofing", subCategory: "Waterproof coating",
    source: "/paint-products/waterproofing/alldry-total-2k",
    shortDescription: "Two-component waterproof coating for tough moisture protection.",
    description:
      "Alldry Total 2K is a two-component waterproof coating from Birla Opus, offered for tough moisture protection.",
    features: ["Two-component (2K) waterproof coating", "Tough moisture protection"],
    suitableFor: ["Roof & terrace", "Exterior walls"],
    tags: ["waterproofing", "coating", "2k", "alldry", "terrace"],
    image: "/images/products/birla-opus/alldry-total-2k.webp",
  }),
  opus({
    slug: "birla-opus-alldry-repair-master", name: "Alldry Repair Master", category: "waterproofing", subCategory: "Repair",
    source: "/paint-products",
    shortDescription: "Multipurpose pre-painting repair solution.",
    description:
      "Alldry Repair Master is a multipurpose repair solution from Birla Opus, used to fix wall defects before painting.",
    features: ["Multipurpose repair product", "Used before painting"],
    suitableFor: ["Interior walls", "Exterior walls", "Repair & bonding"],
    tags: ["repair", "alldry", "wall repair", "pre-painting"],
    image: "/images/products/birla-opus/alldry-repair-master.webp",
  }),
  opus({
    slug: "birla-opus-alldry-crack-master-paste", name: "Alldry Crack Master Paste", category: "waterproofing", subCategory: "Crack treatment",
    source: "/paint-products",
    shortDescription: "Waterproof crack-filling paste for crack-free walls before painting.",
    description:
      "Alldry Crack Master Paste is a waterproof paste from Birla Opus that helps deliver crack-free walls for better paint performance.",
    features: ["Waterproof crack paste", "Supports paint performance"],
    suitableFor: ["Interior walls", "Exterior walls"],
    tags: ["crack", "waterproofing", "alldry", "paste", "wall repair"],
    image: "/images/products/birla-opus/alldry-crack-master-paste.webp",
  }),

  // ───────────── Birla Opus · Wood finishes ─────────────
  opus({
    slug: "birla-opus-allwood-pu-interior", name: "Allwood PU Interior", category: "wood-finishes", subCategory: "PU finish",
    source: "/paint-products/wood-paint/allwood-pu-interior", finish: "PU",
    shortDescription: "High-performance, long-lasting PU finish for interior wooden surfaces.",
    description:
      "Allwood PU Interior is a polyurethane wood finish from Birla Opus for interior wooden surfaces, offering a high-performance, long-lasting finish.",
    features: ["PU finish for interior wood", "Long-lasting finish"],
    suitableFor: ["Wood"],
    tags: ["pu", "wood", "furniture", "allwood", "polish"],
    image: "/images/products/birla-opus/allwood-pu-interior.webp",
  }),
  opus({
    slug: "birla-opus-allwood-pu-exterior", name: "Allwood PU Exterior", category: "wood-finishes", subCategory: "PU finish",
    source: "/paint-products/wood-paint/allwood-pu-exterior", finish: "PU",
    shortDescription: "Luxurious PU finish for exterior wooden surfaces.",
    description:
      "Allwood PU Exterior is a polyurethane finish from Birla Opus for exterior wooden surfaces, giving them a luxurious look.",
    features: ["PU finish for exterior wood", "Luxurious finish"],
    suitableFor: ["Wood"],
    tags: ["pu", "wood", "exterior", "allwood", "doors"],
    image: "/images/products/birla-opus/allwood-pu-exterior.webp",
  }),
  opus({
    slug: "birla-opus-allwood-italian-pu", name: "Allwood Italian PU", category: "wood-finishes", subCategory: "PU finish",
    source: "/paint-products/wood-paint/allwood-italian-pu", finish: "PU",
    shortDescription: "Premium Italian PU wood paint with an ultra-rich finish.",
    description:
      "Allwood Italian PU is the premium PU wood paint in the Allwood range, described by Birla Opus as offering ultra-rich finishes.",
    features: ["Premium Italian PU", "Ultra-rich finish"],
    suitableFor: ["Wood"],
    tags: ["pu", "italian pu", "wood", "allwood", "furniture"],
    image: "/images/products/birla-opus/allwood-italian-pu.webp",
  }),
  opus({
    slug: "birla-opus-allwood-melamine", name: "Allwood Melamine", category: "wood-finishes", subCategory: "Melamine",
    source: "/paint-products/wood-paint/allwood-melamine", finish: "Clear", variants: ["Ultra Clear"],
    shortDescription: "Interior wood melamine polish, including a non-yellowing Ultra Clear variant.",
    description:
      "Allwood Melamine is an interior wood melamine polish range from Birla Opus. The Allwood Melamine Ultra Clear variant is described as a non-yellowing premium finish.",
    features: ["Melamine polish for interior wood", "Ultra Clear variant is non-yellowing"],
    suitableFor: ["Wood"],
    tags: ["melamine", "polish", "wood", "allwood", "clear"],
    image: "/images/products/birla-opus/allwood-melamine.webp",
  }),
  opus({
    slug: "birla-opus-allwood-softtouch", name: "Allwood SoftTouch", category: "wood-finishes", subCategory: "Soft finish",
    source: "/paint-products/wood-paint/allwood-softtouch",
    shortDescription: "Interior and exterior wood paint from the Allwood range.",
    description:
      "Allwood SoftTouch is a wood paint from Birla Opus that can be used on both interior and exterior wooden surfaces.",
    features: ["For interior and exterior wood", "Part of the Allwood range"],
    suitableFor: ["Wood"],
    tags: ["wood paint", "softtouch", "allwood"],
    image: "/images/products/birla-opus/allwood-softtouch.webp",
  }),
  opus({
    slug: "birla-opus-allwood-wood-stain", name: "Allwood Wood Stain", category: "wood-finishes", subCategory: "Wood stain",
    source: "/paint-products",
    shortDescription: "Translucent wood stain shades that let the grain show.",
    description:
      "Allwood Wood Stain from Birla Opus offers translucent shades for wooden surfaces so the natural grain remains visible.",
    features: ["Translucent shades", "Highlights natural wood grain"],
    suitableFor: ["Wood"],
    tags: ["wood stain", "stain", "wood", "allwood", "grain"],
    image: "/images/products/birla-opus/allwood-wood-stain.webp",
  }),
  opus({
    slug: "birla-opus-allwood-wood-filler", name: "Allwood Wood Filler", category: "wood-finishes", subCategory: "Wood filler",
    source: "/paint-products",
    shortDescription: "Wood filler that plugs dents, holes and scratches for a smooth, level surface.",
    description:
      "Allwood Wood Filler from Birla Opus is designed to plug dents, holes and scratches in wood, leaving a level, smooth surface ready for the finish coat.",
    features: ["Fills dents, holes and scratches", "Creates a level, smooth surface"],
    suitableFor: ["Wood"],
    tags: ["wood filler", "filler", "wood", "allwood", "repair"],
    image: "/images/products/birla-opus/allwood-wood-filler.webp",
  }),

 
];

export const productBySlug = (slug) => products.find((x) => x.slug === slug);
export const productsByBrand = (brandSlug) => products.filter((x) => x.brandSlug === brandSlug);
export const productsByCategory = (categorySlug) => products.filter((x) => x.category === categorySlug);
export default products;
