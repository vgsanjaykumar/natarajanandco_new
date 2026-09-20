// Vector recreation of the existing Natarajan & Co "TN" monogram
// (traced from the original logo files), so it stays sharp on any screen.

export function LogoMark({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 100 100" className={`shrink-0 rounded-[22%] ${className}`} aria-hidden="true" focusable="false">
      <rect width="100" height="100" rx="22" fill="#0E0F12" />
      <g transform="translate(16.13 17.95) scale(0.1305)">
        <path fill="#fff" d="M94 31v67l129 1v139l66 66 1-205 135-1V31zM223 326v134h67v-68z" />
        <path fill="#FFE500" d="M94 147v313h66V213zM359 139l-1 247 67 67V139z" />
      </g>
    </svg>
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
