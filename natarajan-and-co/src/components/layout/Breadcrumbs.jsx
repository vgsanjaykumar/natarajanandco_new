import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function Breadcrumbs({ crumbs, className = "" }) {
  if (!crumbs.length) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-[0.8125rem] text-white/60">
        <li><Link to="/" className="rounded transition hover:text-white">Home</Link></li>
        {crumbs.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1">
            <FiChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            {c.to && i < crumbs.length - 1 ? (
              <Link to={c.to} className="rounded transition hover:text-white">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-white/90">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Slim dark bar (keeps the transparent navbar readable) for pages whose <h1>
// lives in the page body, e.g. product detail.
export function CrumbBar({ crumbs }) {
  return (
    <div className="on-night bg-night pb-4 pt-[92px] md:pt-[100px]">
      <div className="container-x"><Breadcrumbs crumbs={crumbs} /></div>
    </div>
  );
}
