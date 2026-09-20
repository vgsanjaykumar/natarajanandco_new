import { FiX } from "react-icons/fi";
import categories from "../../data/categories.js";
import brands from "../../data/brands.js";
import { facetCounts } from "../../lib/catalog.js";

// A single-select facet rendered as a list of pressable rows with counts.
function FacetList({ legend, options, value, onChange, allLabel }) {
  return (
    <fieldset className="min-w-0">
      <legend className="t-meta mb-2.5">{legend}</legend>
      <div className="flex flex-col gap-0.5">
        {[{ value: "", label: allLabel }, ...options].map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value || "all"}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(active && o.value ? "" : o.value)}
              className={`flex min-h-[38px] items-center justify-between gap-3 rounded-lg px-3 py-1.5 text-left text-sm transition ${
                active ? "bg-ink font-bold text-bg" : "text-soft hover:bg-ink/5 hover:text-ink"
              }`}
            >
              <span className="truncate">{o.label}</span>
              {o.count != null && <span className={`text-xs tabular-nums ${active ? "opacity-80" : "text-mute"}`}>{o.count}</span>}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

// A multi-value facet rendered as wrapping chips (finish, surface).
function FacetChips({ legend, options, value, onChange }) {
  if (!options.length) return null;
  return (
    <fieldset className="min-w-0">
      <legend className="t-meta mb-2.5">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(active ? "" : o.value)}
              className={`chip min-h-[34px] ${active ? "!border-ink !bg-ink !text-bg" : "hover:border-ink/40 hover:text-ink"}`}
            >
              {o.label} <span className="tabular-nums opacity-60">{o.count}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

const toOptions = (counts, label) =>
  [...counts.entries()].map(([value, count]) => ({ value, label: label(value), count }));

export default function ProductFilters({ filters, setFilter, lockedCategory, onClear, activeCount }) {
  const catOptions = toOptions(facetCounts(filters, "category"), (v) => categories.find((c) => c.slug === v)?.name ?? v)
    .sort((a, b) => categories.findIndex((c) => c.slug === a.value) - categories.findIndex((c) => c.slug === b.value));
  const brandOptions = toOptions(facetCounts(filters, "brand"), (v) => brands.find((b) => b.slug === v)?.name ?? v)
    .sort((a, b) => b.count - a.count);
  const subOptions = filters.category ? toOptions(facetCounts(filters, "sub"), (v) => v).sort((a, b) => a.label.localeCompare(b.label)) : [];
  const finishOptions = toOptions(facetCounts(filters, "finish"), (v) => v);
  const surfaceOptions = toOptions(facetCounts(filters, "surface"), (v) => v).sort((a, b) => b.count - a.count);

  return (
    <div className="flex flex-col gap-7">
      {activeCount > 0 && (
        <button type="button" onClick={onClear} className="inline-flex items-center gap-1.5 self-start rounded-lg text-sm font-bold text-ink underline decoration-brand decoration-2 underline-offset-4">
          <FiX aria-hidden="true" /> Clear all filters
        </button>
      )}
      {!lockedCategory && (
        <FacetList legend="Category" allLabel="All categories" options={catOptions} value={filters.category} onChange={(v) => setFilter("category", v)} />
      )}
      <FacetList legend="Brand" allLabel="All brands" options={brandOptions} value={filters.brand} onChange={(v) => setFilter("brand", v)} />
      {subOptions.length > 1 && (
        <FacetChips legend="Type" options={subOptions} value={filters.sub} onChange={(v) => setFilter("sub", v)} />
      )}
      <FacetChips legend="Finish" options={finishOptions} value={filters.finish} onChange={(v) => setFilter("finish", v)} />
      <FacetChips legend="Suitable for" options={surfaceOptions} value={filters.surface} onChange={(v) => setFilter("surface", v)} />
    </div>
  );
}
