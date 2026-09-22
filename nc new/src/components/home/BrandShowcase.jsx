import brands, { alsoStocked } from "../../data/brands.js";
import BrandCard from "../products/BrandCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import Btn from "../ui/Btn.jsx";

export default function BrandShowcase() {
  return (
    <section className="section" aria-labelledby="brands-heading">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our brands"
            id="brands-heading"
            title="Brands you can rely on, under one roof"
            text="Authorised UltraTech dealer and stockist of leading paint, waterproofing and construction-chemical brands — each with its own range on our shelves."
          />
          <Btn to="/brands" variant="outline">All brands</Btn>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {brands.map((b, i) => (
            <li key={b.slug}>
              <Reveal delay={(i % 4) * 60} className="h-full"><BrandCard brand={b} /></Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={180} className="h-full">
              <div className="card flex h-full flex-col border-dashed p-5 sm:p-6">
                <p className="t-meta">Also on our shelves</p>
                <p className="t-small mt-2">More names our customers ask for — ask the team about availability.</p>
                <ul className="mt-5 grid grid-cols-2 gap-2.5">
                  {alsoStocked.map((b) => (
                    <li key={b.name} className="flex h-14 items-center justify-center rounded-lg bg-white p-2 ring-1 ring-black/5">
                      <img src={b.logo} alt={`${b.name} logo`} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}
