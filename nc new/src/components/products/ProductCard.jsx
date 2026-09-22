import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import ProductVisual from "./ProductVisual.jsx";
import { displayName, categoryName, productPath } from "../../data/helpers.js";
import { waLink } from "../../config/site.js";

// Reusable product card — used by the catalogue, category pages, brand pages,
// related products and the Home page.
export default function ProductCard({ product, priority = false, headingLevel: H = "h3", label }) {
  const name = displayName(product);
  const keyFeature = product.features?.[0];

  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      <div className="relative">
        <ProductVisual product={product} priority={priority} />
        <span className="absolute left-3 top-3 rounded-md bg-night/90 px-2 py-1 text-[0.625rem] font-bold uppercase tracking-[0.1em] text-white">
          {product.brand}
        </span>
        {product.brandSlug === "birla-opus" && product.tier && (
          <span className="absolute right-3 top-3 badge">{product.tier}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="t-meta">{label ?? categoryName(product.category)}{product.subCategory ? ` · ${product.subCategory}` : ""}</p>
        <H className="t-product mt-1.5 text-ink">
          {/* the stretched link makes the whole card clickable without nesting links */}
          <Link to={productPath(product)} className="after:absolute after:inset-0 after:content-[''] focus-visible:after:rounded-2xl">
            {name}
          </Link>
        </H>
        <p className="t-small mt-2 line-clamp-2">{product.shortDescription}</p>
        {keyFeature && (
          <p className="mt-3 flex items-start gap-2 text-[0.8125rem] font-medium leading-5 text-ink">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-1 ring-black/20" aria-hidden="true" />
            <span className="line-clamp-2">{keyFeature}</span>
          </p>
        )}

        <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink transition group-hover:gap-2.5">
            View details <FiArrowRight aria-hidden="true" />
          </span>
          <a
            href={waLink(`Hello Natarajan & Co, I would like to enquire about ${name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${name} on WhatsApp`}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-line bg-card px-3 text-[0.8125rem] font-bold text-ink transition hover:border-[#1FAF5A] hover:text-[#188a49]"
          >
            <FaWhatsapp className="text-[#1FAF5A]" aria-hidden="true" /> Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
