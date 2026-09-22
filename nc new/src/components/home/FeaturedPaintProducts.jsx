import { FEATURED_PAINT_SLUGS } from "../../data/home.js";
import { productBySlug } from "../../data/products.js";
import ProductGrid from "../products/ProductGrid.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Btn from "../ui/Btn.jsx";

const list = FEATURED_PAINT_SLUGS.map(productBySlug).filter(Boolean);

export default function FeaturedPaintProducts() {
  return (
    <section className="section bg-sunken" aria-labelledby="featured-paint-heading">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="featured-paint-heading"
            eyebrow="Primary paint products"
            title="Featured Paint Products"
            text="One product from each stage of a paint job — interior finish, exterior finish, wall preparation and waterproofing — drawn from the brands on our shelves."
          />
          <Btn to="/categories/interior-paints" variant="outline">Browse paints</Btn>
        </div>
        <ProductGrid products={list} className="mt-10" />
      </div>
    </section>
  );
}
