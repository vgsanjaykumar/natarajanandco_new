import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import BrandLogo from "../ui/BrandLogo.jsx";
import { productsByBrand } from "../../data/products.js";
import { brandPath } from "../../data/helpers.js";

// Brand tile: logo, what the brand is for, how much of it we list, and a CTA.
export default function BrandCard({ brand, headingLevel: H = "h3" }) {
  const count = productsByBrand(brand.slug).length;
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      <span className="h-1.5 w-full" style={{ background: brand.accent }} aria-hidden="true" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <BrandLogo brand={brand} className="h-[68px] w-full" />
        <p className="t-meta mt-5">{brand.category}</p>
        <H className="t-h3 mt-1.5 flex flex-wrap items-center gap-2 text-ink">
          <Link to={brandPath(brand)} className="after:absolute after:inset-0 after:content-['']">{brand.name}</Link>
          {brand.isNew && <span className="badge">New</span>}
        </H>
        <p className="t-small mt-2">{brand.intro}</p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="chip">{count} {count === 1 ? "product" : "products"} listed</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink transition group-hover:gap-2.5">
            Explore <FiArrowRight aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}
