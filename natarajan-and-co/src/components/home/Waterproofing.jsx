import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SceneArt from "../art/SceneArt.jsx";
import Reveal from "../ui/Reveal.jsx";
import Btn from "../ui/Btn.jsx";
import { WATERPROOFING_SOLUTIONS } from "../../data/home.js";
import { productBySlug } from "../../data/products.js";
import { displayName, productPath } from "../../data/helpers.js";

const BRANDS = [
  ["dr-fixit", "Dr Fixit"], ["birla-opus", "Birla Opus Alldry"], ["fosroc", "Fosroc"], ["myk-laticrete", "MYK Laticrete"],
];

export default function Waterproofing() {
  return (
    <section className="on-night relative isolate overflow-hidden bg-night py-16 text-white md:py-24" aria-labelledby="wp-heading">
      <div className="absolute -left-24 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#2E86AB]/20 blur-3xl" aria-hidden="true" />
      <div className="container-x grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow !text-brand">Waterproofing</p>
          <h2 id="wp-heading" className="t-h1 mt-3">Protect Your Space from Moisture</h2>
          <p className="t-lead mt-5 !text-white/75">
            Roofs, terraces and walls take the weather every day. Choose waterproofing, crack repair and damp protection from the brands we stock — and get advice on what suits your surface.
          </p>
          <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <SceneArt name="waterproof" tone="#2E86AB" />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Waterproofing brands">
            {BRANDS.map(([slug, name]) => (
              <li key={slug}><Link to={`/brands/${slug}`} className="chip !border-white/20 !bg-white/5 !text-white/85 hover:!border-brand hover:!text-brand">{name}</Link></li>
            ))}
          </ul>
          <div className="mt-8"><Btn to="/categories/waterproofing" size="lg">Explore Waterproofing Solutions</Btn></div>
        </Reveal>

        <ul className="flex flex-col gap-3 self-center sm:gap-4">
          {WATERPROOFING_SOLUTIONS.map((s, i) => {
            const p = productBySlug(s.slug);
            return (
              <li key={s.label}>
                <Reveal delay={i * 70}>
                  <Link to={productPath(p)} className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:border-brand/50 hover:bg-white/[.07] sm:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-base font-extrabold text-neutral-900" aria-hidden="true">{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-bold">{s.label}</span>
                      <span className="mt-0.5 block text-sm text-white/65">{s.detail}</span>
                      <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.08em] text-brand">{displayName(p)}</span>
                    </span>
                    <FiArrowUpRight className="h-5 w-5 shrink-0 text-white/50 transition group-hover:text-brand" aria-hidden="true" />
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
