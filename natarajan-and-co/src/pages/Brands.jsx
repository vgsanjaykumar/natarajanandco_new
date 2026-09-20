import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import BrandCard from "../components/products/BrandCard.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import brands, { alsoStocked } from "../data/brands.js";
import { metaForPath } from "../seo/routes.js";

const META = metaForPath("/brands");

export default function Brands() {
  return (
    <>
      <Seo meta={META} />
      <PageHeader
        compact
        eyebrow="Our brands"
        title="Brands available at Natarajan & Co"
        description="Authorised UltraTech dealer and stockist of Birla White, MYK Laticrete, Fosroc, Araldite and Dr Fixit — with Birla Opus paints now added to the range."
        crumbs={[{ label: "Brands" }]}
      />
      <section className="section-tight" aria-label="All brands">
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {brands.map((b, i) => (
              <li key={b.slug}><Reveal delay={(i % 4) * 60} className="h-full"><BrandCard brand={b} /></Reveal></li>
            ))}
          </ul>

          <Reveal className="card mt-10 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="sm:max-w-xs">
              <p className="t-meta">Also on our shelves</p>
              <p className="t-small mt-2">More names our customers ask for. Ask the team about availability and pack sizes.</p>
            </div>
            <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
              {alsoStocked.map((b) => (
                <li key={b.name} className="flex h-16 items-center justify-center rounded-xl bg-white p-2.5 ring-1 ring-black/5">
                  <img src={b.logo} alt={`${b.name} logo`} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <EnquiryCta />
    </>
  );
}
