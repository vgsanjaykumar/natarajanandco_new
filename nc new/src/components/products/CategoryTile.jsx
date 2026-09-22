import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SceneArt from "../art/SceneArt.jsx";
import { productsByCategory } from "../../data/products.js";
import { categoryPath } from "../../data/helpers.js";

// Category card with an illustrated scene, description and product count.
export default function CategoryTile({ category, headingLevel: H = "h3", tone, showCount = true }) {
  const count = productsByCategory(category.slug).length;
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <SceneArt name={category.art} tone={tone} className="transition duration-500 group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <H className="t-product text-ink">
          <Link to={categoryPath(category)} className="after:absolute after:inset-0 after:content-['']">{category.name}</Link>
        </H>
        <p className="t-small mt-1.5 line-clamp-3 max-[519px]:hidden">{category.short}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          {showCount ? <span className="t-meta">{count} {count === 1 ? "product" : "products"}</span> : <span />}
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink transition group-hover:gap-2.5">
            Explore <FiArrowRight aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}
