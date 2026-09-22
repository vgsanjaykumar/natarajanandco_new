import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import gallery from "../../data/gallery.js";

// Grid of shop photos with a click-to-enlarge lightbox (arrow keys / buttons
// to move between photos, Escape or backdrop click to close).
export default function Gallery() {
  const [index, setIndex] = useState(-1); // -1 = closed
  const open = index >= 0;
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const show = (i) => {
    triggerRef.current = document.activeElement;
    setIndex(i);
  };
  const close = () => {
    setIndex(-1);
    triggerRef.current?.focus?.();
  };
  const step = (dir) => setIndex((i) => (i + dir + gallery.length) % gallery.length);

  useEffect(() => {
    if (!open) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const photo = open ? gallery[index] : null;

  return (
    <section className="section" aria-labelledby="gallery-heading">
      <div className="container-x">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Gallery"
          title="Around the Shop"
          text="A look at our shelves, stock and storefront in Karaikudi."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {gallery.map((g, i) => (
            <li key={g.id}>
              <Reveal delay={(i % 10) * 40}>
                <button
                  type="button"
                  onClick={() => show(i)}
                  className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-sunken ring-1 ring-black/5"
                  aria-label={`Open photo: ${g.alt}`}
                >
                  <img
                    src={g.thumb}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={640}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/25 group-hover:opacity-100">
                    <FiZoomIn className="h-6 w-6 text-white drop-shadow" aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label={photo.alt}>
          <button type="button" aria-label="Close" className="absolute inset-0 animate-fade-in bg-black/85" onClick={close} tabIndex={-1} />
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="relative flex h-full flex-col items-center justify-center px-4 py-[max(1rem,env(safe-area-inset-top))] outline-none sm:px-16"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close photo"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>

            <img
              src={photo.full}
              alt={photo.alt}
              className="max-h-[78vh] max-w-full animate-fade-in rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-4 max-w-lg text-center text-sm text-white/70">{photo.alt}</p>
            <p className="mt-1 text-xs tabular-nums text-white/40">{index + 1} / {gallery.length}</p>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-4"
            >
              <FiChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4"
            >
              <FiChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
