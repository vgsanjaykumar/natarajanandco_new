import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SceneArt from "../art/SceneArt.jsx";
import SmartImage from "../ui/SmartImage.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import categories from "../../data/categories.js";
import { BUILDING_CATEGORY_SLUGS } from "../../data/home.js";
import brands from "../../data/brands.js";
import { productsByCategory } from "../../data/products.js";

const list = BUILDING_CATEGORY_SLUGS.map((s) => categories.find((c) => c.slug === s));
// tint each illustration with the accent colour of the brand that supplies the category
const toneOf = (slug) => brands.find((b) => b.slug === productsByCategory(slug)[0]?.brandSlug)?.accent;
const brandsIn = (slug) => [...new Set(productsByCategory(slug).map((p) => p.brand))].join(" · ");

export default function BuildingMaterials() {
  return (
    <section className="section" aria-labelledby="bm-heading">
      <div className="container-x">
        <SectionHeading
          id="bm-heading"
          eyebrow="Building materials"
          title="Complete Building Material Solutions"
          text="Natarajan & Co began as a cement and building-materials dealer, and that is still the backbone of the shop — the products a build needs before the first coat of paint."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-6">
          <Reveal className="relative overflow-hidden rounded-3xl bg-night lg:min-h-full">
            <SmartImage
              src="/img/store-night-1000.webp"
              srcSet="/img/store-night-640.webp 640w, /img/store-night-1000.webp 1000w, /img/store-night-1360.webp 1360w"
              sizes="(min-width:1024px) 42vw, 92vw"
              alt="Natarajan & Co store at night, lit with UltraTech Building Solutions signage"
              width={1000}
              height={750}
              className="h-full w-full lg:absolute lg:inset-0"
              imgClassName="min-h-[18rem]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-24 text-white">
              <p className="text-lg font-bold">UltraTech Building Solutions, Karaikudi</p>
              <p className="mt-1 text-sm text-white/70">Cement and building products, stocked locally.</p>
            </div>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {list.map((c, i) => (
              <li key={c.slug}>
                <Reveal delay={(i % 2) * 60} className="h-full">
                  <Link to={`/categories/${c.slug}`} className="card card-hover group flex h-full items-center gap-4 p-3 pr-4">
                    <span className="h-20 w-24 shrink-0 overflow-hidden rounded-xl"><SceneArt name={c.art} tone={toneOf(c.slug)} /></span>
                    <span className="min-w-0 flex-1">
                      <span className="t-product block">{c.name}</span>
                      <span className="mt-0.5 block truncate text-xs text-mute">{brandsIn(c.slug)}</span>
                    </span>
                    <FiArrowRight className="shrink-0 text-mute transition group-hover:translate-x-1 group-hover:text-ink" aria-hidden="true" />
                  </Link>
                </Reveal>
              </li>
            ))}
            <li className="sm:col-span-2">
              <Reveal delay={120}>
                <Link to="/categories/waterproofing" className="group flex items-center justify-between gap-4 rounded-2xl bg-ink px-6 py-5 text-bg transition hover:opacity-90">
                  <span>
                    <span className="block text-base font-bold">Waterproofing, paints &amp; wall care</span>
                    <span className="mt-0.5 block text-sm opacity-70">Also part of the everyday building range</span>
                  </span>
                  <FiArrowRight className="shrink-0 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Reveal>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
