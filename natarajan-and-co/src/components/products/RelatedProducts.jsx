import ProductGrid from "./ProductGrid.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { relatedTo } from "../../lib/catalog.js";

export default function RelatedProducts({ product }) {
  const list = relatedTo(product);
  if (!list.length) return null;
  return (
    <section className="section-tight">
      <div className="container-x">
        <SectionHeading eyebrow="Keep exploring" title="Related products" as="h2" />
        <ProductGrid products={list} className="mt-8" />
      </div>
    </section>
  );
}
