import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import ProductGrid from "../components/products/ProductGrid.jsx";
import BrandLogo from "../components/ui/BrandLogo.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Btn from "../components/ui/Btn.jsx";
import NotFound from "./NotFound.jsx";
import brands from "../data/brands.js";
import { productsByBrand } from "../data/products.js";
import { OPUS_RANGES, rangeOf } from "../data/helpers.js";
import { metaForPath } from "../seo/routes.js";

const slugify = (s) => s.toLowerCase();

export default function BrandDetails() {
  const { brandSlug } = useParams();
  const brand = brands.find((b) => b.slug === brandSlug);
  const meta = useMemo(() => (brand ? metaForPath(`/brands/${brand.slug}`) : null), [brand]);
  if (!brand) return <NotFound />;

  const products = productsByBrand(brand.slug);
  const groups = brand.ranges
    ? [...OPUS_RANGES, "Textures"]
        .map((r) => ({ range: r, items: products.filter((p) => rangeOf(p) === r) }))
        .filter((g) => g.items.length)
    : null;
  const rangeInfo = (r) => brand.ranges?.find((x) => x.name === r);
  const others = brands.filter((b) => b.slug !== brand.slug);

  return (
    <>
      <Seo meta={meta} />
      <PageHeader
        compact
        eyebrow={brand.relationship}
        title={brand.name}
        description={brand.intro}
        crumbs={[{ label: "Brands", to: "/brands" }, { label: brand.name }]}
        aside={<BrandLogo brand={brand} className="h-24 w-48 !rounded-2xl" pad="p-4" />}
      />

      <section className="section-tight" aria-labelledby="about-brand">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:gap-14">
          <div>
            <h2 id="about-brand" className="t-h2">About {brand.name}</h2>
            <p className="t-body mt-4">{brand.description}</p>
            {brand.isNew && (
              <p className="t-body mt-4">
                Ask our team for current availability, pack sizes and shade options. We can also help you match the right primer, putty and finish to your surface.
              </p>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn to={`/products?brand=${brand.slug}`}>Browse {products.length} {products.length === 1 ? "product" : "products"} <FiArrowRight aria-hidden="true" /></Btn>
              <Btn to="/contact" variant="outline">Enquire about {brand.name}</Btn>
            </div>
          </div>
          <aside className="card h-fit p-6" aria-label={`${brand.name} at a glance`}>
            <dl className="divide-y divide-line">
              <div className="py-3 first:pt-0"><dt className="t-meta">Category</dt><dd className="mt-1 text-sm font-semibold">{brand.category}</dd></div>
              <div className="py-3"><dt className="t-meta">With us</dt><dd className="mt-1 text-sm font-semibold">{brand.relationship}</dd></div>
              <div className="py-3 last:pb-0"><dt className="t-meta">Products listed</dt><dd className="mt-1 text-sm font-semibold">{products.length}</dd></div>
            </dl>
            {brand.officialUrl && (
              <a href={brand.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink underline decoration-brand decoration-2 underline-offset-4">
                Official website <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </aside>
        </div>
      </section>

      {brand.ranges && (
        <section className="section-tight bg-sunken" aria-labelledby="ranges-heading">
          <div className="container-x">
            <SectionHeading id="ranges-heading" eyebrow="Product ranges" title={`The ${brand.name} ranges`} text="Each range has its own job — pick by tier for paints, or by need for waterproofing and wood care." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {brand.ranges.map((r, i) => (
                <li key={r.name}>
                  <Reveal delay={i * 50} className="h-full">
                    <a href={`#range-${slugify(r.name)}`} className="card card-hover flex h-full flex-col p-5">
                      <span className="badge self-start">{r.tier}</span>
                      <span className="t-h3 mt-3">{r.name}</span>
                      <span className="t-small mt-2">{r.text}</span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section-tight" aria-label={`${brand.name} products`}>
        <div className="container-x">
          {groups ? (
            <div className="grid gap-14">
              {groups.map((g) => (
                <div key={g.range} id={`range-${slugify(g.range)}`} className="scroll-mt-28">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="t-h2 !text-[1.75rem]">{g.range === "Textures" ? "Birla Opus Textures" : `${brand.name} ${g.range}`}</h2>
                    <p className="t-small">{rangeInfo(g.range)?.tier ?? "Decorative"} · {g.items.length} {g.items.length === 1 ? "product" : "products"}</p>
                  </div>
                  <ProductGrid products={g.items} className="mt-6" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <h2 className="t-h2">Products from {brand.name}</h2>
              <ProductGrid products={products} className="mt-8" />
            </>
          )}
        </div>
      </section>

      <section className="section-tight border-t border-line" aria-label="Other brands">
        <div className="container-x">
          <p className="t-meta">Other brands at Natarajan &amp; Co</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((b) => <li key={b.slug}><Link to={`/brands/${b.slug}`} className="chip hover:border-ink/40 hover:text-ink">{b.name}</Link></li>)}
          </ul>
        </div>
      </section>
      <EnquiryCta title={`Need help choosing ${brand.name} products?`} />
    </>
  );
}
