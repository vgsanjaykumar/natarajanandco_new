import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Btn from "../ui/Btn.jsx";
import Reveal from "../ui/Reveal.jsx";
import { PHONES, waLink } from "../../config/site.js";

// Closing call-to-action band (Home + inner pages). Brand-yellow, like the shop signage.
export default function EnquiryCta({
  title = "Looking for the Right Product?",
  text = "Explore our range of paints, building materials and surface solutions or get in touch with our team for product enquiries.",
}) {
  return (
    <section className="section-tight" aria-labelledby="cta-heading">
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-[1.75rem] bg-brand px-6 py-12 text-neutral-900 sm:px-12 md:py-16">
          <div className="absolute inset-0 -z-10 opacity-[.14] [background-image:repeating-linear-gradient(135deg,#000_0_2px,transparent_2px_18px)]" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-16 -z-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" aria-hidden="true" />
          <div className="max-w-2xl">
            <h2 id="cta-heading" className="t-h2">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-800 md:text-lg">{text}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn to="/products" variant="dark" size="lg">Explore Products</Btn>
            <Btn to="/contact" size="lg" className="bg-white text-neutral-900 hover:bg-white/85">Contact Us</Btn>
            <Btn href={PHONES.call.href} size="lg" className="border border-neutral-900/25 text-neutral-900 hover:bg-black/5">
              <FiPhone aria-hidden="true" /> Call Now
            </Btn>
            <Btn href={waLink()} external variant="wa" size="lg">
              <FaWhatsapp aria-hidden="true" /> WhatsApp
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
