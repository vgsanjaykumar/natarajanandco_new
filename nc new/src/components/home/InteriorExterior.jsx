import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SceneArt from "../art/SceneArt.jsx";
import Reveal from "../ui/Reveal.jsx";
import Btn from "../ui/Btn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import categories from "../../data/categories.js";
import { productsByCategory } from "../../data/products.js";
import { displayName, productPath } from "../../data/helpers.js";

const PANELS = [
  {
    slug: "interior-paints", art: "interior", tone: "#E4572E", title: "Interior Paints",
    text: "Create beautiful and comfortable interiors with paint solutions designed for different rooms, surfaces and finish requirements.",
    cta: "Explore Interior Paints",
  },
  {
    slug: "exterior-paints", art: "exterior", tone: "#2E86AB", title: "Exterior Paints",
    text: "Protect and enhance exterior walls with solutions designed for outdoor exposure and long-lasting surface appearance.",
    cta: "Explore Exterior Paints",
  },
];

export default function InteriorExterior() {
  return (
    <section className="section" aria-labelledby="in-out-heading">
      <div className="container-x">
        <SectionHeading id="in-out-heading" eyebrow="Inside &amp; out" title="Interior and Exterior Paints" align="center" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {PANELS.map((p, i) => {
            const cat = categories.find((c) => c.slug === p.slug);
            const items = productsByCategory(p.slug).slice(0, 4);
            return (
              <Reveal key={p.slug} delay={i * 90}>
                <article className="card flex h-full flex-col overflow-hidden">
                  <div className="aspect-[16/8] overflow-hidden">
                    <SceneArt name={p.art} tone={p.tone} />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="t-h2 !text-[1.75rem]">{p.title}</h3>
                    <p className="t-body mt-3">{p.text}</p>
                    <p className="t-meta mt-6">In this range</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {items.map((x) => (
                        <li key={x.slug}><Link to={productPath(x)} className="chip hover:border-ink/40 hover:text-ink">{displayName(x)}</Link></li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                      <Btn to={`/categories/${cat.slug}`} variant="dark">{p.cta} <FiArrowRight aria-hidden="true" /></Btn>
                      <span className="t-caption">{productsByCategory(p.slug).length} products listed</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
