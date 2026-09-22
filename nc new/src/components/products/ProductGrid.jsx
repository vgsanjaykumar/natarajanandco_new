import ProductCard from "./ProductCard.jsx";

// 1 column on small phones, 2 on large phones/tablets, then `cols` (3 → 4 by default).
export default function ProductGrid({ products, cols = "lg:grid-cols-3 xl:grid-cols-4", priorityCount = 0, className = "" }) {
  return (
    <ul className={`grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 ${cols} ${className}`}>
      {products.map((p, i) => (
        <li key={p.slug} className="min-w-0">
          <ProductCard product={p} priority={i < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
