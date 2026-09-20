import { useEffect, useRef, useState } from "react";

// Image with reserved aspect ratio (no layout shift), lazy loading by default,
// a neutral placeholder and a soft fade-in. `priority` = above-the-fold.
export default function SmartImage({
  src, srcSet, sizes, alt, width, height, priority = false, fit = "cover",
  className = "", imgClassName = "", position,
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-sunken ${className}`} style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}>
      <img
        ref={ref}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        // React 18 only forwards the lower-case attribute name
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={priority ? "high" : undefined}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={position ? { objectPosition: position } : undefined}
        className={`h-full w-full transition-opacity duration-500 ${fit === "contain" ? "object-contain" : "object-cover"} ${loaded ? "opacity-100" : "opacity-0"} ${imgClassName}`}
      />
    </div>
  );
}
