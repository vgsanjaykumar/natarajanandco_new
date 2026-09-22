import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "../products/ProductCard.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Btn from "../ui/Btn.jsx";
import { FEATURED_PRODUCT_SLUGS } from "../../data/home.js";
import { productBySlug } from "../../data/products.js";

const list = FEATURED_PRODUCT_SLUGS.map(productBySlug).filter(Boolean);

// Scroll-snap carousel: swipe on phones/tablets, arrow buttons on larger
// screens. 4 cards on desktop, 2 on tablet, 1 (+ a peek of the next) on mobile.
export default function FeaturedProducts() {
  const track = useRef(null);
  const page = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section className="section bg-sunken" aria-labelledby="featured-heading">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="featured-heading"
            eyebrow="Featured products"
            title="Featured products"
            text="New Birla Opus arrivals alongside the cement, putty, tile adhesive and waterproofing lines we stock."
          />
          <div className="flex items-center gap-3">
            <div className="hidden gap-2 sm:flex">
              <button type="button" onClick={() => page(-1)} aria-label="Previous products" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-ink"><FiChevronLeft /></button>
              <button type="button" onClick={() => page(1)} aria-label="Next products" className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink transition hover:border-ink"><FiChevronRight /></button>
            </div>
            <Btn to="/products" variant="dark">All products</Btn>
          </div>
        </div>
      </div>

      <div className="container-x">
        <ul
          ref={track}
          className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
          aria-label="Featured products"
          tabIndex={0}
        >
          {list.map((p) => (
            <li key={p.slug} className="w-[78%] shrink-0 snap-start min-[520px]:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
