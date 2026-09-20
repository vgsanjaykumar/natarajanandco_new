import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch, FiSliders, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import ProductGrid from "./ProductGrid.jsx";
import ProductFilters from "./ProductFilters.jsx";
import products from "../../data/products.js";
import categories from "../../data/categories.js";
import brands from "../../data/brands.js";
import { EMPTY_FILTERS, filterProducts } from "../../lib/catalog.js";
import { waLink } from "../../config/site.js";

const KEYS = Object.keys(EMPTY_FILTERS);

// Search + faceted filtering over the whole catalogue. Filter state lives in
// the URL (?q=&brand=&category=&sub=&finish=&surface=) so filtered views are
// shareable and links from the Home page can deep-link into them.
export default function Catalogue({ lockedCategory = "" }) {
  const [params, setParams] = useSearchParams();
  const [sheet, setSheet] = useState(false);
  const sheetRef = useRef(null);

  const filters = useMemo(() => {
    const f = { ...EMPTY_FILTERS };
    KEYS.forEach((k) => { f[k] = params.get(k) ?? ""; });
    if (lockedCategory) f.category = lockedCategory;
    return f;
  }, [params, lockedCategory]);

  const setFilter = useCallback(
    (key, value) => {
      const next = new URLSearchParams(params);
      if (value) next.set(key, value); else next.delete(key);
      if (key === "category") next.delete("sub");
      setParams(next, { replace: true });
    },
    [params, setParams],
  );

  const clearAll = () => setParams(new URLSearchParams(), { replace: true });

  const results = useMemo(() => filterProducts(filters), [filters]);

  const activeKeys = KEYS.filter((k) => filters[k] && !(k === "category" && lockedCategory));
  const labelFor = (k, v) =>
    k === "brand" ? brands.find((b) => b.slug === v)?.name ?? v
      : k === "category" ? categories.find((c) => c.slug === v)?.name ?? v
        : k === "q" ? `“${v}”` : v;

  // Mobile filter sheet: lock scroll, close on Escape, move focus in.
  useEffect(() => {
    if (!sheet) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setSheet(false);
    window.addEventListener("keydown", onKey);
    sheetRef.current?.focus();
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [sheet]);

  return (
    <section className="section-tight" aria-label="Product catalogue">
      <div className="container-x">
        {/* Search + mobile filter button */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <label htmlFor="product-search" className="sr-only">Search products</label>
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mute" aria-hidden="true" />
            <input
              id="product-search"
              type="search"
              value={filters.q}
              onChange={(e) => setFilter("q", e.target.value)}
              placeholder="Search paints, primers, cement, waterproofing…"
              autoComplete="off"
              className="input !rounded-2xl !py-3.5 pl-11 pr-11"
            />
            {filters.q && (
              <button type="button" aria-label="Clear search" onClick={() => setFilter("q", "")} className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-mute hover:text-ink">
                <FiX />
              </button>
            )}
          </div>
          <button type="button" onClick={() => setSheet(true)} className="btn btn-outline !rounded-2xl lg:hidden" aria-haspopup="dialog">
            <FiSliders aria-hidden="true" /> Filters{activeKeys.length > 0 && <span className="badge !rounded-full">{activeKeys.length}</span>}
          </button>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[15.5rem_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block" aria-label="Filters">
            <ProductFilters filters={filters} setFilter={setFilter} lockedCategory={lockedCategory} onClear={clearAll} activeCount={activeKeys.length} />
          </aside>

          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-3">
              <p className="text-sm font-semibold text-ink" role="status" aria-live="polite">
                {results.length} {results.length === 1 ? "product" : "products"}
                {results.length !== products.length && !lockedCategory && <span className="font-normal text-mute"> of {products.length}</span>}
              </p>
              {activeKeys.length > 0 && (
                <ul className="flex flex-wrap items-center gap-2" aria-label="Active filters">
                  {activeKeys.map((k) => (
                    <li key={k}>
                      <button type="button" onClick={() => setFilter(k, "")} className="chip !border-ink/25 !text-ink hover:!border-ink" aria-label={`Remove filter ${labelFor(k, filters[k])}`}>
                        {labelFor(k, filters[k])} <FiX aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                  <li><button type="button" onClick={clearAll} className="text-xs font-bold text-mute underline underline-offset-4 hover:text-ink">Clear all</button></li>
                </ul>
              )}
            </div>

            {results.length > 0 ? (
              <ProductGrid products={results} cols="lg:grid-cols-2 xl:grid-cols-3" priorityCount={3} />
            ) : (
              <div className="card flex flex-col items-center px-6 py-14 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/25 text-ink"><FiSearch aria-hidden="true" /></span>
                <h2 className="t-h3 mt-4">No products match these filters</h2>
                <p className="t-small mt-2 max-w-md">Try removing a filter or searching a shorter word. If you are looking for something specific, our team can check what is available.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button type="button" onClick={clearAll} className="btn btn-dark">Clear all filters</button>
                  <a className="btn btn-outline" target="_blank" rel="noopener noreferrer"
                    href={waLink(`Hello Natarajan & Co, I am looking for ${filters.q || "a product"} — do you have it?`)}>
                    <FaWhatsapp className="text-[#1FAF5A]" aria-hidden="true" /> Ask on WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      {sheet && (
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Filter products">
          <button type="button" aria-label="Close filters" className="absolute inset-0 animate-fade-in bg-black/55" onClick={() => setSheet(false)} tabIndex={-1} />
          <div ref={sheetRef} tabIndex={-1} className="absolute inset-x-0 bottom-0 flex max-h-[88vh] animate-fade-up flex-col rounded-t-3xl bg-bg outline-none">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="t-h3">Filters</h2>
              <button type="button" onClick={() => setSheet(false)} aria-label="Close filters" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-ink/5"><FiX /></button>
            </div>
            <div className="overflow-y-auto px-5 py-5">
              <ProductFilters filters={filters} setFilter={setFilter} lockedCategory={lockedCategory} onClear={clearAll} activeCount={activeKeys.length} />
            </div>
            <div className="border-t border-line p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <button type="button" onClick={() => setSheet(false)} className="btn btn-primary btn-lg w-full">Show {results.length} {results.length === 1 ? "product" : "products"}</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
