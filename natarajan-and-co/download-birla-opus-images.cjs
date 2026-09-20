const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");
const sharp = require("sharp");

// ======================================================
// CONFIG
// ======================================================

const OUTPUT_DIR = path.join(
  __dirname,
  "public",
  "images",
  "products",
  "birla-opus"
);

const REPORT_FILE = path.join(
  OUTPUT_DIR,
  "download-report.json"
);

const BASE_URL = "https://www.birlaopus.com";

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ======================================================
// AXIOS CLIENT
// ======================================================

const client = axios.create({
  timeout: 30000,

  maxRedirects: 5,

  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153 Safari/537.36",

    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",

    "Accept-Language":
      "en-US,en;q=0.9",

    Connection: "keep-alive",
  },
});

// ======================================================
// BIRLA OPUS PRODUCTS
// ======================================================

const products = [

  // ====================================================
  // INTERIOR
  // ====================================================

  {
    name: "One Pure Elegance",
    slug: "one-pure-elegance",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pure-elegance",
  },

  {
    name: "One Pure Elegance Shine",
    slug: "one-pure-elegance-shine",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pure-elegance-shine",
  },

  {
    name: "One Pure Elegance Matt",
    slug: "one-pure-elegance-matt",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pure-elegance-matt",
  },

  {
    name: "One Pure Legend",
    slug: "one-pure-legend",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pure-legend",
  },

  {
    name: "Calista Ever Clear",
    slug: "calista-ever-clear",
    category: "interiors",
    page: "/shop-wall-paint/interiors/calista-ever-clear",
  },

  {
    name: "Calista Ever Clear Matt",
    slug: "calista-ever-clear-matt",
    category: "interiors",
    page: "/shop-wall-paint/interiors/calista-ever-clear-matt",
  },

  {
    name: "Calista Ever Stay",
    slug: "calista-ever-stay",
    category: "interiors",
    page: "/shop-wall-paint/interiors/calista-ever-stay",
  },

  {
    name: "Calista Ever Wash",
    slug: "calista-ever-wash",
    category: "interiors",
    page: "/shop-wall-paint/interiors/calista-ever-wash",
  },

  {
    name: "Calista Ever Wash Shine",
    slug: "calista-ever-wash-shine",
    category: "interiors",
    page: "/shop-wall-paint/interiors/calista-ever-wash-shine",
  },

  {
    name: "Calista Alpha Ever Wash",
    slug: "alpha-ever-wash",
    category: "interiors",
    page: "/shop-wall-paint/interiors/alpha-ever-wash",
  },

  {
    name: "Style Color Smart",
    slug: "style-color-smart",
    category: "interiors",
    page: "/shop-wall-paint/interiors/style-color-smart",
  },

  {
    name: "Style Color Smart Shine",
    slug: "style-color-smart-shine",
    category: "interiors",
    page: "/shop-wall-paint/interiors/style-color-smart-shine",
  },

  {
    name: "Style Color Fresh",
    slug: "style-color-fresh",
    category: "interiors",
    page: "/shop-wall-paint/interiors/style-color-fresh",
  },

  {
    name: "Style Super Smooth",
    slug: "style-super-smooth",
    category: "interiors",
    page: "/shop-wall-paint/interiors/style-super-smooth",
  },

  {
    name: "Style Super Bright",
    slug: "style-super-bright",
    category: "interiors",
    page: "/shop-wall-paint/interiors/style-super-bright",
  },

  // ====================================================
  // EXTERIOR
  // ====================================================

  {
    name: "One True Vision",
    slug: "one-true-vision",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/one-true-vision",
  },

  {
    name: "One True Look",
    slug: "one-true-look",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/one-true-look",
  },

  {
    name: "One True Life",
    slug: "one-true-life",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/one-true-life",
  },

  {
    name: "One True Flex",
    slug: "one-true-flex",
    category: "exteriors",
    page: "/paint-products/exterior-wall-paint/one-true-flex",
  },

  {
    name: "Calista Neo Star",
    slug: "calista-neo-star",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/calista-neo-star",
  },

  {
    name: "Calista Neo Star Shine",
    slug: "calista-neo-star-shine",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/calista-neo-star-shine",
  },

  {
    name: "Style Power Bright",
    slug: "style-power-bright",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/style-power-bright",
  },

  {
    name: "Style Power Bright Shine",
    slug: "style-power-bright-shine",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/style-power-bright-shine",
  },

  {
    name: "Style Power Fit",
    slug: "style-power-fit",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/style-power-fit",
  },

  // ====================================================
  // PRIMERS / PUTTY
  // ====================================================

  {
    name: "One Pro Smooth Primer",
    slug: "one-pro-smooth-primer",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pro-smooth-primer",
  },

  {
    name: "One Pro White Smooth Primer",
    slug: "one-pro-white-smooth-primer",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pro-white-smooth-primer",
  },

  {
    name: "One Pro Smooth Putty",
    slug: "one-pro-smooth-putty",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pro-smooth-putty",
  },

  {
    name: "One Pro Putty+Primer",
    slug: "one-pro-putty-primer",
    category: "interiors",
    page: "/shop-wall-paint/interiors/one-pro-putty-primer",
  },

  {
    name: "Calista Pro White Primer",
    slug: "calista-pro-white-primer",
    category: "interiors",
    page: "/shop-wall-paint/interiors/calista-pro-white-primer",
  },

  {
    name: "Calista Perfect Choice Primer",
    slug: "calista-perfect-choice-primer",
    category: "exteriors",
    page: "/shop-wall-paint/exteriors/calista-perfect-choice-primer",
  },

  {
    name: "Calista Pro White Cement ST Primer",
    slug: "calista-pro-white-cement-st-primer",
    category: "enamels",
    page: "/paint-products/enamels-paints/calista-pro-white-cement-st-primer",
  },

  {
    name: "Style Pro Hide Primer",
    slug: "style-pro-hide-primer",
    category: "interiors",
    page: "/shop-wall-paint/interiors/style-pro-hide-primer",
  },

  {
    name: "Style Pro Hide Cement ST Primer",
    slug: "style-pro-hide-cement-st-primer",
    category: "enamels",
    page: "/paint-products/enamels-paints/style-pro-hide-cement-st-primer",
  },

  {
    name: "Calista Sparkle Red Oxide Primer",
    slug: "calista-sparkle-red-oxide-primer",
    category: "enamels",
    page: "/shop-wall-paint/enamels/calista-sparkle-red-oxide-primer",
  },

  {
    name: "Calista Sparkle Yellow Metal Primer",
    slug: "calista-sparkle-yellow-metal-primer",
    category: "enamels",
    page: "/shop-wall-paint/enamels/calista-sparkle-yellow-metal-primer",
  },

  // ====================================================
  // ENAMELS
  // ====================================================

  {
    name: "Calista Sparkle Gloss",
    slug: "calista-sparkle-gloss",
    category: "enamels",
    page: "/shop-wall-paint/enamels/calista-sparkle-gloss",
  },

  {
    name: "Calista Sparkle PU",
    slug: "calista-sparkle-pu",
    category: "enamels",
    page: "/shop-wall-paint/enamels/calista-sparkle-pu",
  },

  {
    name: "Style Cover Max",
    slug: "style-cover-max",
    category: "enamels",
    page: "/shop-wall-paint/enamels/style-cover-max",
  },

  // ====================================================
  // WATERPROOFING
  // ====================================================

  {
    name: "Alldry Wall Fix 4",
    slug: "alldry-wall-fix-4",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-wall-fix-4",
  },

  {
    name: "Alldry Wall n Roof 10",
    slug: "alldry-wall-n-roof-10",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-wall-n-roof-10",
  },

  {
    name: "Alldry Wall n Roof 12",
    slug: "alldry-wall-n-roof-12",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-wall-n-roof-12",
  },

  {
    name: "Alldry Salt Seal",
    slug: "alldry-salt-seal",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-salt-seal",
  },

  {
    name: "Alldry Total 2K",
    slug: "alldry-total-2k",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-total-2k",
  },

  {
    name: "Alldry Total 2K Flex",
    slug: "alldry-total-2k-flex",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-total-2k-flex",
  },

  {
    name: "Alldry Repair Master",
    slug: "alldry-repair-master",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-repair-master",
  },

  {
    name: "Alldry Crack Master Paste",
    slug: "alldry-crack-master-paste",
    category: "waterproofing",
    page: "/shop-wall-paint/waterproofing/alldry-crack-master-paste",
  },

  // ====================================================
  // WOOD FINISHES
  // ====================================================

  {
    name: "Allwood PU Interior",
    slug: "allwood-pu-interior",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-pu-interior",
  },

  {
    name: "Allwood PU Exterior",
    slug: "allwood-pu-exterior",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-pu-exterior",
  },

  {
    name: "Allwood Italian PU",
    slug: "allwood-italian-pu",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-italian-pu",
  },

  {
    name: "Allwood Melamine",
    slug: "allwood-melamine",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-melamine",
  },

  {
    name: "Allwood Melamine Ultra Clear",
    slug: "allwood-melamine-ultra-clear",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-melamine-ultra-clear",
  },

  {
    name: "Allwood SoftTouch",
    slug: "allwood-softtouch",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-softtouch",
  },

  {
    name: "Allwood Wood Stain",
    slug: "allwood-wood-stain",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-wood-stain",
  },

  {
    name: "Allwood Wood Filler",
    slug: "allwood-wood-filler",
    category: "wood",
    page: "/paint-products/wood-finishes/allwood-wood-filler",
  },

  // ====================================================
  // TEXTURES
  // ====================================================

  {
    name: "Interior Texture Dream Collection",
    slug: "interior-texture-dream-collection",
    category: "textures",
    page: null,
  },

  {
    name: "Interior Texture Timeless Collection",
    slug: "interior-texture-timeless-collection",
    category: "textures",
    page: null,
  },

  // ====================================================
  // OTHER CATALOGUE PRODUCTS
  // ====================================================

  {
    name: "UltraTech Cement",
    slug: "ultratech-cement",
    category: "cement",
    page: null,
    baseUrl: "https://www.ultratechcement.com",
    domains: ["ultratechcement.com"],
    searchQuery: "UltraTech Cement product"
  },

  {
    name: "UltraTech Building Solutions",
    slug: "ultratech-building-solutions",
    category: "building-solutions",
    page: null,
    baseUrl: "https://www.ultratechcement.com",
    domains: ["ultratechcement.com"],
    searchQuery: "UltraTech Building Solutions"
  },

  {
    name: "Birla White Cement",
    slug: "birla-white-cement",
    category: "white-cement",
    page: null,
    baseUrl: "https://www.birlawhite.com",
    domains: ["birlawhite.com"],
    searchQuery: "Birla White Cement"
  },

  {
    name: "Birla White Wallcare Putty",
    slug: "birla-wallcare-putty",
    category: "wall-putty",
    page: null,
    baseUrl: "https://www.birlawhite.com",
    domains: ["birlawhite.com"],
    searchQuery: "Birla White Wallcare Putty"
  },

  {
    name: "MYK Laticrete Tile Adhesive",
    slug: "myk-laticrete-tile-adhesive",
    category: "tile-adhesives",
    page: null,
    baseUrl: "https://myklaticrete.com",
    domains: ["myklaticrete.com"],
    searchQuery: "MYK Laticrete Tile Adhesive"
  },

  {
    name: "Fosroc Construction Chemicals",
    slug: "fosroc-construction-chemicals",
    category: "construction-chemicals",
    page: null,
    baseUrl: "https://www.fosroc.com",
    domains: ["fosroc.com"],
    searchQuery: "Fosroc construction chemicals products"
  },

  {
    name: "Araldite Adhesive",
    slug: "araldite-adhesive",
    category: "adhesives",
    page: null,
    baseUrl: "https://www.pidilite.com",
    domains: ["pidilite.com"],
    searchQuery: "Araldite adhesive Pidilite"
  },

  {
    name: "Dr Fixit Waterproofing",
    slug: "dr-fixit-waterproofing",
    category: "waterproofing",
    page: "/",
    baseUrl: "https://www.drfixit.co.in",
    domains: ["drfixit.co.in"],
    searchQuery: "Dr Fixit waterproofing products"
  },

];

// ======================================================
// HELPERS
// ======================================================

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function absoluteUrl(url, baseUrl = BASE_URL) {
  if (!url) return null;

  url = String(url).trim();

  if (!url) return null;

  if (url.startsWith("//")) {
    return "https:" + url;
  }

  if (url.startsWith("/")) {
    return baseUrl + url;
  }

  if (url.startsWith("http://")) {
    return url.replace("http://", "https://");
  }

  return url;
}

// ======================================================
// URL VALIDATION
// ======================================================

function isAllowedOfficialUrl(url, product = {}) {
  if (!url) return false;

  const value = String(url).toLowerCase();

  if (Array.isArray(product.domains) && product.domains.length) {
    return product.domains.some((domain) =>
      value.includes(String(domain).toLowerCase())
    );
  }

  return (
    value.includes("birlaopus.com") ||
    value.includes("assets.birlaopus.com") ||
    value.includes("scene7.com")
  );
}

// ======================================================
// PAGE FETCH
// ======================================================

async function fetchPage(url) {
  const response = await client.get(url, {
    validateStatus: (status) =>
      status >= 200 && status < 400,
  });

  return response.data;
}

// ======================================================
// FIND PRODUCT PAGE
// ======================================================

async function findProductPage(product) {
  console.log("");

  // ----------------------------------------------------
  // 1. Exact known URL
  // ----------------------------------------------------

  if (product.page) {
    const exactUrl = BASE_URL + product.page;

    try {
      console.log(`  Exact page: ${exactUrl}`);

      const html = await fetchPage(exactUrl);
      const $ = cheerio.load(html);

      const pageTitle = cleanText(
        $("h1").first().text()
      );

      const bodyText = cleanText(
        $("body").text()
      );

      const targetName = cleanText(
        product.name
      );

      if (
        pageTitle.includes(targetName) ||
        bodyText.includes(targetName)
      ) {
        console.log("  ✓ Exact product page verified");

        return exactUrl;
      }

      console.log(
        "  ⚠ Page opened but product name not clearly verified"
      );
    } catch (error) {
      console.log(
        `  ⚠ Exact URL failed: ${error.message}`
      );
    }
  }

  // ----------------------------------------------------
  // 2. Official listing pages
  // ----------------------------------------------------

  const listingPages = [
    `${BASE_URL}/shop-wall-paint/interiors`,
    `${BASE_URL}/shop-wall-paint/exteriors`,
    `${BASE_URL}/shop-wall-paint/enamels`,
    `${BASE_URL}/shop-wall-paint/waterproofing`,
    `${BASE_URL}/paint-products`,
    `${BASE_URL}/architects-and-interior-designers/explore-products`,
  ];

  const targetName = cleanText(
    product.name
  );

  for (const listingUrl of listingPages) {
    try {
      console.log(
        `  Searching listing: ${listingUrl}`
      );

      const html = await fetchPage(listingUrl);
      const $ = cheerio.load(html);

      let bestMatch = null;
      let bestScore = 0;

      $("a[href]").each((_, element) => {
        const href = $(element).attr("href");

        if (!href) return;

        const text = cleanText(
          $(element).text()
        );

        const fullHref = absoluteUrl(href);

        if (!isBirlaOfficialUrl(fullHref)) {
          return;
        }

        let score = 0;

        if (text === targetName) {
          score += 100;
        }

        if (text.includes(targetName)) {
          score += 80;
        }

        if (
          fullHref
            .toLowerCase()
            .includes(product.slug)
        ) {
          score += 70;
        }

        if (
          text.includes(
            cleanText(
              product.name
                .replace("Alldry ", "")
                .replace("Allwood ", "")
            )
          )
        ) {
          score += 20;
        }

        if (score > bestScore) {
          bestScore = score;
          bestMatch = fullHref;
        }
      });

      if (bestMatch && bestScore >= 70) {
        console.log(
          `  ✓ Product page found [score ${bestScore}]`
        );

        return bestMatch;
      }
    } catch (error) {
      console.log(
        `  ⚠ Listing failed: ${error.message}`
      );
    }
  }

  // ----------------------------------------------------
  // 3. Official-domain web search for non-Opus products
  // ----------------------------------------------------

  if (product.searchQuery && Array.isArray(product.domains)) {
    try {
      const query =
        `site:${product.domains[0]} ${product.searchQuery}`;

      console.log(`  Searching official domain: ${query}`);

      const searchUrl =
        "https://html.duckduckgo.com/html/?q=" +
        encodeURIComponent(query);

      const html = await fetchPage(searchUrl);
      const $ = cheerio.load(html);

      let bestMatch = null;
      let bestScore = 0;
      const targetName = cleanText(product.name);

      $("a.result__a, a[href]").each((_, element) => {
        const href = $(element).attr("href");
        if (!href) return;

        const fullHref = absoluteUrl(href, product.baseUrl);
        if (!isAllowedOfficialUrl(fullHref, product)) return;

        const text = cleanText($(element).text());
        let score = 0;

        if (text === targetName) score += 100;
        if (text.includes(targetName)) score += 80;
        if (fullHref.toLowerCase().includes(product.slug)) score += 70;

        if (score > bestScore) {
          bestScore = score;
          bestMatch = fullHref;
        }
      });

      if (bestMatch) {
        console.log(`  ✓ Official page found [score ${bestScore}]`);
        return bestMatch;
      }
    } catch (error) {
      console.log(
        `  ⚠ Official-domain search failed: ${error.message}`
      );
    }
  }

  return null;
}

// ======================================================
// IMAGE CANDIDATE
// ======================================================

function addCandidate(
  candidates,
  url,
  score,
  reason,
  product
) {
  const absolute = absoluteUrl(
    url,
    product?.baseUrl || BASE_URL
  );

  if (!absolute) return;

  if (!isAllowedOfficialUrl(absolute, product)) {
    return;
  }

  candidates.push({
    url: absolute,
    score,
    reason,
  });
}

// ======================================================
// EXTRACT PRODUCT IMAGE
// ======================================================

async function extractProductImage(
  productUrl,
  product
) {
  const html = await fetchPage(productUrl);

  const $ = cheerio.load(html);

  const candidates = [];

  const productName = cleanText(
    product.name
  );

  const productSlug = slugify(
    product.name
  );

  // ====================================================
  // 1. HTML IMG - PRODUCT SNAPSHOT / PACKSHOT
  // ====================================================

  $("img").each((_, element) => {
    const src =
      $(element).attr("src") ||
      $(element).attr("data-src") ||
      $(element).attr("data-lazy-src") ||
      $(element).attr("data-original") ||
      $(element).attr("data-image");

    if (!src) return;

    const alt = cleanText(
      $(element).attr("alt")
    );

    const title = cleanText(
      $(element).attr("title")
    );

    const className = cleanText(
      $(element).attr("class")
    );

    const parentText = cleanText(
      $(element).parent().text()
    );

    const combined = `
      ${alt}
      ${title}
      ${className}
      ${parentText}
      ${src}
    `.toLowerCase();

    let score = 0;
    let reason = "";

    // -----------------------------------------------
    // PRODUCT SNAPSHOT
    // -----------------------------------------------

    if (
      combined.includes(
        "product snapshot"
      )
    ) {
      score += 200;
      reason = "Product Snapshot";
    }

    // -----------------------------------------------
    // PACKSHOT
    // -----------------------------------------------

    if (
      combined.includes("packshot")
    ) {
      score += 180;

      if (!reason) {
        reason = "Product Packshot";
      }
    }

    // -----------------------------------------------
    // PRODUCT IMAGE
    // -----------------------------------------------

    if (
      combined.includes(
        "product image"
      )
    ) {
      score += 150;

      if (!reason) {
        reason = "Product Image";
      }
    }

    // -----------------------------------------------
    // EXACT PRODUCT NAME
    // -----------------------------------------------

    if (
      combined.includes(productName)
    ) {
      score += 140;

      if (!reason) {
        reason = "Exact Product Name";
      }
    }

    // -----------------------------------------------
    // PRODUCT SLUG
    // -----------------------------------------------

    if (
      combined.includes(productSlug)
    ) {
      score += 120;

      if (!reason) {
        reason = "Product Slug";
      }
    }

    // -----------------------------------------------
    // OFFICIAL ASSET
    // -----------------------------------------------

    if (
      /assets\.birlaopus\.com/i.test(src)
    ) {
      score += 60;
    }

    if (
      /scene7\.com/i.test(src)
    ) {
      score += 50;
    }

    // -----------------------------------------------
    // ICON / LOGO PENALTY
    // -----------------------------------------------

    if (
      combined.includes("logo") ||
      combined.includes("icon") ||
      combined.includes("arrow") ||
      combined.includes("close") ||
      combined.includes("facebook") ||
      combined.includes("instagram")
    ) {
      score -= 200;
    }

    // -----------------------------------------------
    // SMALL UI IMAGE PENALTY
    // -----------------------------------------------

    if (
      combined.includes("thumbnail") ||
      combined.includes("thumb")
    ) {
      score -= 50;
    }

    if (score > 0) {
      addCandidate(
        candidates,
        src,
        score,
        reason || "Official Image",
      product
      );
    }
  });

  // ====================================================
  // 2. JSON-LD
  // ====================================================

  $(
    'script[type="application/ld+json"]'
  ).each((_, element) => {
    try {
      const raw = $(element).html();

      if (!raw) return;

      const json = JSON.parse(raw);

      function inspect(obj) {
        if (!obj) return;

        // ---------------------------------------------
        // Product name matching
        // ---------------------------------------------

        const objectName = cleanText(
          obj.name
        );

        let nameScore = 0;

        if (
          objectName === productName
        ) {
          nameScore = 40;
        } else if (
          objectName.includes(productName)
        ) {
          nameScore = 30;
        }

        // ---------------------------------------------
        // IMAGE
        // ---------------------------------------------

        if (typeof obj.image === "string") {
          addCandidate(
            candidates,
            obj.image,
            80 + nameScore,
            "JSON-LD Product Image",
      product
          );
        }

        if (Array.isArray(obj.image)) {
          obj.image.forEach((image) => {
            if (
              typeof image === "string"
            ) {
              addCandidate(
                candidates,
                image,
                80 + nameScore,
                "JSON-LD Product Image",
      product
              );
            }
          });
        }

        if (
          obj.image &&
          typeof obj.image === "object" &&
          obj.image.url
        ) {
          addCandidate(
            candidates,
            obj.image.url,
            80 + nameScore,
            "JSON-LD Product Image",
      product
          );
        }
      }

      if (Array.isArray(json)) {
        json.forEach(inspect);
      } else {
        inspect(json);
      }
    } catch {
      // Ignore invalid JSON-LD
    }
  });

  // ====================================================
  // 3. SCENE7 / BIRLA OPUS ASSET IMAGES
  // ====================================================

  $("img").each((_, element) => {
    const src =
      $(element).attr("src") ||
      $(element).attr("data-src") ||
      $(element).attr("data-lazy-src");

    if (!src) return;

    if (
      /assets\.birlaopus\.com/i.test(src) ||
      /scene7\.com/i.test(src)
    ) {
      const alt = cleanText(
        $(element).attr("alt")
      );

      let score = 50;

      if (
        alt.includes(productName)
      ) {
        score += 80;
      }

      addCandidate(
        candidates,
        src,
        score,
        "Official Birla Opus Asset",
      product
      );
    }
  });

  // ====================================================
  // 4. META OG IMAGE
  // LOW PRIORITY
  // ====================================================

  $(
    'meta[property="og:image"]'
  ).each((_, element) => {
    const url = $(element).attr(
      "content"
    );

    if (url) {
      addCandidate(
        candidates,
        url,
        15,
        "Open Graph Image",
      product
      );
    }
  });

  // ====================================================
  // 5. TWITTER IMAGE
  // LOWEST
  // ====================================================

  $(
    'meta[name="twitter:image"]'
  ).each((_, element) => {
    const url = $(element).attr(
      "content"
    );

    if (url) {
      addCandidate(
        candidates,
        url,
        5,
        "Twitter Image",
      product
      );
    }
  });

  // ====================================================
  // REMOVE DUPLICATES
  // ====================================================

  const map = new Map();

  for (const candidate of candidates) {
    const key = candidate.url
      .split("?")[0]
      .toLowerCase();

    if (!map.has(key)) {
      map.set(key, candidate);
    } else {
      const existing = map.get(key);

      if (
        candidate.score >
        existing.score
      ) {
        map.set(key, candidate);
      }
    }
  }

  const unique = Array.from(
    map.values()
  );

  // ====================================================
  // SORT
  // ====================================================

  unique.sort(
    (a, b) =>
      b.score - a.score
  );

  // ====================================================
  // DEBUG
  // ====================================================

  console.log("");
  console.log(
    "  Image candidates:"
  );

  unique
    .slice(0, 8)
    .forEach((item, index) => {
      console.log(
        `    ${index + 1}. [${item.score}] ${item.reason}`
      );

      console.log(
        `       ${item.url}`
      );
    });

  // ====================================================
  // RETURN BEST
  // ====================================================

  if (!unique.length) {
    return null;
  }

  return unique[0];
}

// ======================================================
// DOWNLOAD IMAGE
// ======================================================

async function downloadImage(
  product,
  imageCandidate
) {
  const outputFile = path.join(
    OUTPUT_DIR,
    `${product.slug}.webp`
  );

  const response =
    await client.get(
      imageCandidate.url,
      {
        responseType:
          "arraybuffer",

        timeout: 30000,

        headers: {
          Referer: BASE_URL,

          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
      }
    );

  if (
    !response.data ||
    response.data.length < 100
  ) {
    throw new Error(
      "Downloaded image data is empty or too small"
    );
  }

  await sharp(response.data)
    .rotate()
    .webp({
      quality: 90,
      effort: 5,
    })
    .toFile(outputFile);

  return outputFile;
}

// ======================================================
// CHECK IMAGE FILE
// ======================================================

async function verifyImage(
  outputFile
) {
  const metadata =
    await sharp(outputFile).metadata();

  return {
    width: metadata.width || null,
    height: metadata.height || null,
    format: metadata.format || null,
    size:
      fs.statSync(outputFile).size,
  };
}

// ======================================================
// MAIN
// ======================================================

async function main() {
  console.log("");
  console.log(
    "================================================"
  );

  console.log(
    " Full Product Image Downloader"
  );

  console.log(
    "================================================"
  );

  console.log("");

  console.log(
    `Products: ${products.length}`
  );

  console.log(
    `Output: ${OUTPUT_DIR}`
  );

  console.log("");

  const results = [];

  for (
    const product of products
  ) {
    console.log(
      "------------------------------------------------"
    );

    console.log(
      `PRODUCT: ${product.name}`
    );

    console.log(
      `FILE: ${product.slug}.webp`
    );

    try {

      // ================================================
      // TEXTURES
      // ================================================

      if (
        product.category ===
        "textures"
      ) {
        console.log(
          "⚠ Texture collection detected"
        );

        console.log(
          "⚠ No fake image will be assigned."
        );

        results.push({
          ...product,

          status:
            "SKIPPED_COLLECTION",

          reason:
            "Collection does not have a single verified product snapshot",
        });

        continue;
      }

      // ================================================
      // PRODUCT PAGE
      // ================================================

      const productPage =
        await findProductPage(
          product
        );

      if (!productPage) {
        console.log(
          "✗ Official product page not found"
        );

        results.push({
          ...product,

          status:
            "PAGE_NOT_FOUND",
        });

        continue;
      }

      console.log(
        `✓ Product page: ${productPage}`
      );

      // ================================================
      // IMAGE
      // ================================================

      const imageCandidate =
        await extractProductImage(
          productPage,
          product
        );

      if (!imageCandidate) {
        console.log(
          "✗ Official product image not found"
        );

        results.push({
          ...product,

          productPage,

          status:
            "IMAGE_NOT_FOUND",
        });

        continue;
      }

      console.log("");

      console.log(
        `✓ Selected image:`
      );

      console.log(
        `  ${imageCandidate.url}`
      );

      console.log(
        `✓ Selection reason: ${imageCandidate.reason}`
      );

      console.log(
        `✓ Selection score: ${imageCandidate.score}`
      );

      // ================================================
      // DOWNLOAD
      // ================================================

      const outputFile =
        await downloadImage(
          product,
          imageCandidate
        );

      // ================================================
      // VERIFY
      // ================================================

      const imageInfo =
        await verifyImage(
          outputFile
        );

      console.log("");

      console.log(
        `✓ WEBP saved: ${outputFile}`
      );

      console.log(
        `✓ Size: ${imageInfo.width}x${imageInfo.height}`
      );

      console.log(
        `✓ Format: ${imageInfo.format}`
      );

      console.log(
        `✓ File size: ${imageInfo.size} bytes`
      );

      // ================================================
      // RESULT
      // ================================================

      results.push({
        ...product,

        productPage,

        imageUrl:
          imageCandidate.url,

        imageReason:
          imageCandidate.reason,

        imageScore:
          imageCandidate.score,

        outputFile,

        width:
          imageInfo.width,

        height:
          imageInfo.height,

        format:
          imageInfo.format,

        fileSize:
          imageInfo.size,

        status:
          "SUCCESS",
      });

    } catch (error) {

      console.log(
        `✗ FAILED: ${error.message}`
      );

      results.push({
        ...product,

        status:
          "FAILED",

        error:
          error.message,
      });
    }
  }

  // ======================================================
  // REPORT
  // ======================================================

  fs.writeFileSync(
    REPORT_FILE,
    JSON.stringify(
      results,
      null,
      2
    ),
    "utf8"
  );

  // ======================================================
  // SUMMARY
  // ======================================================

  const success =
    results.filter(
      (item) =>
        item.status ===
        "SUCCESS"
    ).length;

  const failed =
    results.filter(
      (item) =>
        item.status !==
        "SUCCESS"
    ).length;

  const duplicateUrls =
    results
      .filter(
        (item) =>
          item.status ===
            "SUCCESS" &&
          item.imageUrl
      )
      .map(
        (item) =>
          item.imageUrl
            .split("?")[0]
            .toLowerCase()
      );

  const duplicateSet =
    new Set(duplicateUrls);

  console.log("");

  console.log(
    "================================================"
  );

  console.log(
    " FINISHED"
  );

  console.log(
    "================================================"
  );

  console.log("");

  console.log(
    `✓ Successfully downloaded: ${success}`
  );

  console.log(
    `✗ Not downloaded: ${failed}`
  );

  console.log(
    `✓ Unique image URLs: ${duplicateSet.size}`
  );

  console.log(
    `✓ Total successful images: ${duplicateUrls.length}`
  );

  if (
    duplicateSet.size !==
    duplicateUrls.length
  ) {
    console.log(
      "⚠ Duplicate image URLs detected."
    );
  } else {
    console.log(
      "✓ No duplicate image URLs detected."
    );
  }

  console.log("");

  console.log(
    `Images: ${OUTPUT_DIR}`
  );

  console.log(
    `Report: ${REPORT_FILE}`
  );

  console.log("");
}

// ======================================================
// RUN
// ======================================================

main().catch((error) => {
  console.error("");
  console.error(
    "FATAL ERROR:"
  );
  console.error(
    error
  );

  process.exit(1);
});