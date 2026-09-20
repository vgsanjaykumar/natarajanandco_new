import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "../art/Logo.jsx";
import brands from "../../data/brands.js";
import categories from "../../data/categories.js";
import contactDetails from "../../data/contactDetails.js";
import { BUSINESS, PHONES, waLink } from "../../config/site.js";

const COMPANY = [
  ["/", "Home"], ["/about", "About Us"], ["/dealership", "Dealership"],
  ["/services", "Services"], ["/products", "All Products"], ["/contact", "Contact"],
];

const FooterLink = ({ to, children }) => (
  <Link to={to} className="inline-block rounded py-1 text-sm text-white/65 transition hover:text-brand">{children}</Link>
);
const Col = ({ title, children }) => (
  <div>
    <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand">{title}</h2>
    {children}
  </div>
);

export default function Footer() {
  const paints = categories.filter((c) => c.group === "paints");
  const building = categories.filter((c) => c.group === "building");

  return (
    <footer className="on-night bg-night text-white">
      <div className="container-x grid gap-12 py-14 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo markClass="h-11 w-11" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Paints, cement and building materials in Karaikudi — authorised UltraTech dealer, with Birla Opus, Birla White,
            MYK Laticrete, Fosroc, Araldite and Dr Fixit under one roof.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/75">
            <li className="flex gap-3"><FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><span>{BUSINESS.streetAddress}, {BUSINESS.locality}, {BUSINESS.region} – {BUSINESS.postalCode}</span></li>
            <li className="flex gap-3"><FiClock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><span>{BUSINESS.hours.label}</span></li>
            <li className="flex gap-3"><FiMail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-brand">{BUSINESS.email}</a></li>
          </ul>
          <div className="mt-6 flex gap-2.5">
            {[
              [waLink(), "WhatsApp", FaWhatsapp],
              [BUSINESS.instagram, "Instagram", FaInstagram],
              [PHONES.call.href, "Call the shop", FiPhone],
            ].map(([href, label, Icon]) => (
              <a key={label} href={href} aria-label={label} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/8 text-lg transition hover:bg-brand hover:text-neutral-900">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8">
          <Col title="Paints">
            <ul>{paints.map((c) => <li key={c.slug}><FooterLink to={`/categories/${c.slug}`}>{c.name}</FooterLink></li>)}</ul>
          </Col>
          <Col title="Building materials">
            <ul>{building.map((c) => <li key={c.slug}><FooterLink to={`/categories/${c.slug}`}>{c.name}</FooterLink></li>)}</ul>
          </Col>
          <Col title="Brands">
            <ul>{brands.map((b) => <li key={b.slug}><FooterLink to={`/brands/${b.slug}`}>{b.name}</FooterLink></li>)}</ul>
          </Col>
          <Col title="Company">
            <ul>{COMPANY.map(([to, l]) => <li key={to}><FooterLink to={to}>{l}</FooterLink></li>)}</ul>
          </Col>
          <div className="col-span-2 sm:col-span-2">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand">Call our team</h2>
            <ul className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              {contactDetails.map((c) => (
                <li key={c.id}>
                  <span className="block text-white/55">{c.name}</span>
                  {c.phones.map((p) => (
                    <a key={p.href} href={`tel:${p.href}`} className="block py-0.5 font-semibold tabular-nums text-white/90 hover:text-brand">{p.number}</a>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Natarajan and Co, Karaikudi. All rights reserved.</p>
          <p>Brand names and logos belong to their respective owners. Product availability and pack sizes vary — please enquire.</p>
        </div>
      </div>
    </footer>
  );
}
