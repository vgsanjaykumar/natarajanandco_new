import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Logo from "../art/Logo.jsx";
import Btn from "../ui/Btn.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { PHONES, waLink } from "../../config/site.js";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/brands", label: "Brands" },
  { to: "/products", label: "Products" },
  { to: "/dealership", label: "Dealership" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll and support Esc while the menu is open.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
        solid ? "border-b border-line bg-bg/90 text-ink shadow-nav backdrop-blur-xl" : "border-b border-transparent bg-transparent text-white"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-4">
        <Link to="/" aria-label="Natarajan & Co — home" className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative rounded-lg px-3.5 py-2 text-[0.9rem] font-semibold transition ${
                      isActive ? "" : "opacity-80 hover:opacity-100"
                    } ${solid ? "hover:bg-ink/5" : "hover:bg-white/10"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span className={`absolute inset-x-3.5 -bottom-0.5 h-[3px] rounded-full bg-brand transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href={PHONES.call.href}
            aria-label={`Call ${PHONES.call.display}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-current/10 sm:hidden"
          >
            <FiPhone className="h-[18px] w-[18px]" />
          </a>
          <Btn to="/contact" size="sm" className="ml-1 hidden sm:inline-flex">Enquire Now</Btn>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-current/10 lg:hidden"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="animate-menu-in border-t border-line bg-bg text-ink lg:hidden">
          <nav aria-label="Mobile" className="container-x max-h-[calc(100dvh-68px)] overflow-y-auto pb-6 pt-2">
            <ul>
              {LINKS.map((l) => (
                <li key={l.to} className="border-b border-line/70 last:border-0">
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `flex min-h-[52px] items-center justify-between text-lg font-bold ${isActive ? "text-brandtext" : ""}`
                    }
                  >
                    {l.label}
                    <span aria-hidden="true" className="text-mute">→</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Btn href={PHONES.call.href} variant="outline" size="lg"><FiPhone /> Call</Btn>
              <Btn href={waLink()} external variant="wa" size="lg"><FaWhatsapp className="text-lg" /> WhatsApp</Btn>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
