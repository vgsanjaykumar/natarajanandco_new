import categories from "../../data/categories.js";
import { PAINT_CATEGORY_SLUGS } from "../../data/home.js";
import CategoryTile from "../products/CategoryTile.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import Btn from "../ui/Btn.jsx";

const list = PAINT_CATEGORY_SLUGS.map((s) => categories.find((c) => c.slug === s));

export default function PaintCategories() {
  return (
    <section className="section" aria-labelledby="paints-heading">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="paints-heading"
            eyebrow="Paint categories"
            title="Paints for Every Space"
            text="From primer and putty to finish coats, waterproofing and wood polish — everything a wall, roof or door needs, organised the way a project actually runs."
          />
          <Btn to="/products" variant="outline">View all products</Btn>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {list.map((c, i) => (
            <li key={c.slug}><Reveal delay={(i % 4) * 60} className="h-full"><CategoryTile category={c} /></Reveal></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
