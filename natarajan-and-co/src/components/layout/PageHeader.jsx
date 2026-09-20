import Reveal from "../ui/Reveal.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

// Dark page banner used by every inner page (keeps the transparent navbar
// readable and gives each page a real <h1>).
export default function PageHeader({ eyebrow, title, description, crumbs = [], compact = false, aside, children }) {
  return (
    <section className={`on-night relative isolate overflow-hidden bg-night text-white ${compact ? "pb-10 pt-[104px] md:pb-12 md:pt-[120px]" : "pb-14 pt-[112px] md:pb-20 md:pt-[144px]"}`}>
      <div className="bg-grid-night absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />
      <div className="container-x">
        <Breadcrumbs crumbs={crumbs} className="mb-5" />
        <div className={aside ? "flex flex-wrap items-end justify-between gap-8" : ""}>
          <Reveal className="min-w-0">
            {eyebrow && <p className="eyebrow !text-brand">{eyebrow}</p>}
            <h1 className="t-h1 mt-3 max-w-3xl">{title}</h1>
            {description && <p className="t-lead mt-4 max-w-2xl !text-white/70">{description}</p>}
            {children}
          </Reveal>
          {aside}
        </div>
      </div>
    </section>
  );
}
