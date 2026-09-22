import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCheck, FiChevronDown, FiExternalLink, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Seo from "../components/layout/Seo.jsx";
import { CrumbBar } from "../components/layout/Breadcrumbs.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import ProductVisual from "../components/products/ProductVisual.jsx";
import RelatedProducts from "../components/products/RelatedProducts.jsx";
import BrandLogo from "../components/ui/BrandLogo.jsx";
import Btn from "../components/ui/Btn.jsx";
import NotFound from "./NotFound.jsx";
import { productBySlug } from "../data/products.js";
import { brandOf, categoryName, displayName, rangeOf } from "../data/helpers.js";
import { hasRealProductImage } from "../lib/images.js";
import { metaForPath } from "../seo/routes.js";
import { PHONES, waLink } from "../config/site.js";

const faqFor = (product, brand) => [
  {
    q: "Is this product genuine?",
    a: brand?.relationship === "Authorised dealer"
      ? `Yes. Natarajan & Co is an authorised ${brand.name} dealer, and we source this product through the brand's official channels.`
      : `We list this product from the official ${product.brand} range. Contact us to confirm the exact pack, availability and how we supply it.`,
  },
  {
    q: "Is it in stock right now?",
    a: "Stock can vary by season and demand. Call us, message us on WhatsApp or visit the Karaikudi store to confirm current availability.",
  },
  {
    q: "Can you help me choose the right quantity or variant?",
    a: "Yes. Tell us about your project — surface, area and finish you want — and our team will guide you before you order.",
  },
];

function Fact({ label, children }) {
  return (
    <div className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="t-meta pt-0.5">{label}</dt>
      <dd className="text-sm font-medium leading-6 text-ink">{children}</dd>
    </div>
  );
}

export default function ProductDetails() {
  const { productSlug } = useParams();
  const product = productBySlug(productSlug);
  const meta = useMemo(() => (product ? metaForPath(`/products/${product.slug}`) : null), [product]);
  if (!product) return <NotFound />;

  const brand = brandOf(product);
  const name = displayName(product);
  const range = rangeOf(product);
  const real = hasRealProductImage(product);
  const faq = faqFor(product, brand);

  return (
    <>
      <Seo meta={meta} />
      <CrumbBar crumbs={[
        { label: "Products", to: "/products" },
        { label: categoryName(product.category), to: `/categories/${product.category}` },
        { label: name },
      ]} />

      <section className="section-tight" aria-labelledby="product-title">
        <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div>
            <div className="card overflow-hidden !rounded-3xl">
              <ProductVisual product={product} priority sizes="(min-width:1024px) 52vw, 94vw" />
            </div>
            {!real && (
              <p className="t-caption mt-3">Illustrative image. Ask us for the exact pack sizes and shade options available.</p>
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              {brand && (
                <Link to={`/brands/${brand.slug}`} className="inline-flex" aria-label={`More from ${brand.name}`}>
                  <BrandLogo brand={brand} className="h-12 w-28" pad="p-1.5" />
                </Link>
              )}
              {product.tier && <span className="badge">{product.tier}</span>}
              {brand?.isNew && <span className="badge">New</span>}
            </div>
            <p className="t-meta mt-5">
              <Link to={`/categories/${product.category}`} className="hover:text-ink">{categoryName(product.category)}</Link>
              {product.subCategory ? ` · ${product.subCategory}` : ""}
            </p>
            <h1 id="product-title" className="t-h1 mt-2">{name}</h1>
            <p className="t-lead mt-4">{product.shortDescription}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Btn to={`/contact?product=${product.slug}`} size="lg">Enquire Now</Btn>
              <Btn href={PHONES.call.href} variant="outline" size="lg"><FiPhone aria-hidden="true" /> Call</Btn>
              <Btn href={waLink(`Hello Natarajan & Co, I would like to enquire about ${name}.`)} external variant="wa" size="lg">
                <FaWhatsapp aria-hidden="true" /> WhatsApp
              </Btn>
            </div>

            <dl className="mt-8 divide-y divide-line border-y border-line">
              <Fact label="Brand">{product.brand}{range && ` · ${range} range`}</Fact>
              <Fact label="Category">{categoryName(product.category)}</Fact>
              {product.finish && <Fact label="Finish">{product.finish}</Fact>}
              {product.suitableFor?.length > 0 && (
                <Fact label="Suitable for">
                  <span className="flex flex-wrap gap-1.5">
                    {product.suitableFor.map((s) => <span key={s} className="chip !py-1">{s}</span>)}
                  </span>
                </Fact>
              )}
              {product.application && <Fact label="Application">{product.application}</Fact>}
              {product.variants?.length > 0 && (
                <Fact label="Designs">
                  <span className="flex flex-wrap gap-1.5">
                    {product.variants.map((v) => <span key={v} className="chip !py-1">{v}</span>)}
                  </span>
                </Fact>
              )}
            </dl>

            {product.source && (
              <p className="t-caption mt-4">
                Product information based on the brand's own website.{" "}
                <a href={product.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-ink underline underline-offset-4">
                  View on birlaopus.com <FiExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section-tight bg-sunken" aria-label="Product information">
        <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div>
            <h2 className="t-h3">About this product</h2>
            <p className="t-body mt-3">{product.description}</p>
            {product.features?.length > 0 && (
              <>
                <h3 className="t-product mt-8">Key features</h3>
                <ul className="mt-3 grid gap-2.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.9375rem] leading-6 text-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-neutral-900"><FiCheck className="h-3 w-3" strokeWidth={3} aria-hidden="true" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            <h2 className="t-h3">Frequently asked questions</h2>
            <div className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
              {faq.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-3.5 text-sm font-bold text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <FiChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="t-small px-5 pb-4">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
      <EnquiryCta title={`Interested in ${name}?`} text="Tell us about your project and we will confirm availability, pack sizes and the right product for the surface." />
    </>
  );
}
