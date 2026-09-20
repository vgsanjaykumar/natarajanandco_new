import SmartImage from "../ui/SmartImage.jsx";
import ProductArt from "../art/ProductArt.jsx";
import { productImage } from "../../lib/images.js";
import { displayName } from "../../data/helpers.js";

// The product's picture: a real photo/pack-shot when one exists
// (src/assets/products/<slug>.* or product.image), otherwise the original
// category illustration. Always a fixed 4:3 box, so nothing shifts on load.
export default function ProductVisual({ product, priority = false, sizes = "(min-width:1024px) 300px, 50vw", className = "" }) {
  const src = productImage(product);
  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-sunken ${className}`}>
      {src ? (
        <SmartImage
          src={src}
          alt={`${displayName(product)} — available at Natarajan & Co`}
          width={4}
          height={3}
          sizes={sizes}
          priority={priority}
          fit="contain"
          className="h-full w-full bg-white"
          imgClassName="p-3"
        />
      ) : (
        <ProductArt category={product.category} seed={product.slug} />
      )}
    </div>
  );
}
