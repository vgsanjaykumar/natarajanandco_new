// The Natarajan & Co "N" building mark, on a white tile so it stays legible
// over both the transparent-dark and scrolled-light navbar states.
// Source: public/logo/icon.png (square, pre-padded — see that folder's README
// for how to swap in an updated version).

export function LogoMark({ className = "h-10 w-10" }) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden rounded-[22%] bg-white shadow-sm ring-1 ring-black/10 ${className}`}>
      <img
        src="/logo/icon.png"
        alt=""
        width={512}
        height={512}
        className="absolute inset-[10%] h-[80%] w-[80%] object-contain"
      />
    </span>
  );
}

export default function Logo({ className = "", markClass = "h-10 w-10", subtitle = true }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className={`${markClass} ring-1 ring-white/10`} />
      <span className="leading-none">
        <span className="block text-[1.0625rem] font-extrabold tracking-tight">Natarajan &amp; Co</span>
        {subtitle && (
          <span className="mt-1 hidden text-[0.625rem] font-semibold uppercase tracking-[0.16em] opacity-70 sm:block">
            UltraTech Building Solutions
          </span>
        )}
      </span>
    </span>
  );
}
