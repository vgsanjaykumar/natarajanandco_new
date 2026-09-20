import { brandLogo } from "../../lib/images.js";

// White logo tile. Brands without a logo file (Birla Opus, until the official
// logo is dropped into src/assets/brands/) get a typographic wordmark.
export default function BrandLogo({ brand, className = "h-16 w-full", pad = "p-3" }) {
  const src = brandLogo(brand);
  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-black/5 ${pad} ${className}`}>
      {src ? (
        <img src={src} alt={`${brand.name} logo`} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="flex flex-col items-center leading-none text-neutral-900">
          <span className="text-[1.25em] font-extrabold tracking-tight">{brand.name}</span>
          <span className="mt-1.5 flex gap-1" aria-hidden="true">
            {["#E4572E", "#F2A900", "#17A398", "#4C5BD4"].map((c) => (
              <i key={c} className="h-1 w-3 rounded-full" style={{ background: c }} />
            ))}
          </span>
        </span>
      )}
    </div>
  );
}
