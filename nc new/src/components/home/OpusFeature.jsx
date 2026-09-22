import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SceneArt from "../art/SceneArt.jsx";
import Btn from "../ui/Btn.jsx";
import Reveal from "../ui/Reveal.jsx";
import brands from "../../data/brands.js";
import categories from "../../data/categories.js";
import products from "../../data/products.js";

const opus = brands.find((b) => b.slug === "birla-opus");
const TILES = ["interior-paints", "exterior-paints", "waterproofing", "enamels", "wood-finishes", "primers"];
const SWATCHES = ["#E4572E", "#F2A900", "#17A398", "#4C5BD4", "#EF8FA0", "#7B5EA7"];

export default function OpusFeature() {
  return (
    <section className="on-night relative isolate overflow-hidden bg-night py-16 text-white md:py-24" aria-labelledby="opus-heading">
      <div className="absolute -right-32 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#E4572E]/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 left-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#4C5BD4]/15 blur-3xl" aria-hidden="true" />
      <div className="bg-grid-night absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden="true" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
        <Reveal>
          <p className="flex items-center gap-3">
            <span className="badge">New at Natarajan &amp; Co</span>
            <span className="flex gap-1" aria-hidden="true">
              {SWATCHES.map((c) => <i key={c} className="h-2 w-5 rounded-full" style={{ background: c }} />)}
            </span>
          </p>
          <h2 id="opus-heading" className="t-h1 mt-5">Discover Birla Opus Paints</h2>
          <p className="t-lead mt-5 !text-white/75">
            Bring colour, protection and a refined finish to your spaces with Birla Opus paint solutions for interiors, exteriors, waterproofing, enamels and wood finishes.
          </p>

          <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {opus.ranges.map((r) => (
              <div key={r.name} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-base font-bold">{r.name}</dt>
                <dd className="text-right text-sm text-white/60">{r.tier}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <Btn to="/brands/birla-opus" size="lg">Explore Birla Opus <FiArrowRight aria-hidden="true" /></Btn>
            <Btn to="/products?brand=birla-opus" variant="glass" size="lg">Browse {products.filter((p) => p.brandSlug === "birla-opus").length} products</Btn>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {TILES.map((slug, i) => {
            const c = categories.find((x) => x.slug === slug);
            const n = products.filter((p) => p.brandSlug === "birla-opus" && p.category === slug).length;
            return (
              <li key={slug}>
                <Reveal delay={i * 70} className="h-full">
                  <Link
                    to={`/products?brand=birla-opus&category=${slug}`}
                    className="group relative block aspect-[5/4] overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-brand/60"
                  >
                    <SceneArt name={c.art} className="transition duration-500 group-hover:scale-105" />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-3.5 pb-3.5 pt-14">
                      <span className="block text-[0.9375rem] font-bold leading-tight">{c.name}</span>
                      <span className="mt-0.5 block text-xs text-white/65">{n} {n === 1 ? "product" : "products"}</span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
