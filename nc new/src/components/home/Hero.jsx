import { FiArrowRight, FiClock, FiMapPin, FiShield } from "react-icons/fi";
import Btn from "../ui/Btn.jsx";
import SmartImage from "../ui/SmartImage.jsx";
import brands from "../../data/brands.js";
import { BUSINESS } from "../../config/site.js";

const authorised = brands.filter((b) => b.relationship === "Authorised dealer").length;

const FACTS = [
  { icon: FiShield, text: `Authorised dealer for ${authorised} brands` },
  { icon: FiMapPin, text: "V.O.C Road, Karaikudi" },
  { icon: FiClock, text: BUSINESS.hours.label },
];

export default function Hero() {
  return (
    <section className="on-night relative isolate overflow-hidden bg-night text-white" aria-labelledby="hero-heading">
      <div className="bg-grid-night absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]" aria-hidden="true" />
      <div className="absolute -left-40 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />

      <div className="container-x grid items-center gap-12 pb-14 pt-[112px] lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-20 lg:pt-[140px]">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" /> Natarajan &amp; Co · Karaikudi
          </p>
          <h1 id="hero-heading" className="mt-6 text-[clamp(2.25rem,5.2vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight">
            Quality Building Materials &amp;{" "}
            <span className="relative whitespace-nowrap text-brand">Paint Solutions</span>{" "}
            Under One Roof
          </h1>
          <p className="t-lead mt-6 max-w-xl !text-white/75">
            Trusted construction materials, paints, waterproofing and surface solutions — from UltraTech cement to the newly added Birla Opus paint range — all from one dealer in Karaikudi.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Btn to="/products" size="lg">Explore Products <FiArrowRight aria-hidden="true" /></Btn>
            <Btn to="/brands" variant="glass" size="lg">Explore Brands</Btn>
            <Btn to="/contact" variant="ghost" size="lg" className="!text-white hover:!bg-white/10">Contact Us</Btn>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl animate-fade-in lg:max-w-none">
          <div className="absolute -inset-2.5 rotate-[1.6deg] rounded-[1.9rem] bg-brand" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.6rem] ring-1 ring-black/40">
            <SmartImage
              src="/img/store-day-1000.webp"
              srcSet="/img/store-day-640.webp 640w, /img/store-day-1000.webp 1000w, /img/store-day-1360.webp 1360w"
              sizes="(min-width:1024px) 46vw, 92vw"
              alt="Natarajan & Co store front in Karaikudi with UltraTech Building Solutions and Dr Fixit Waterproofing Centre signage"
              width={1000}
              height={750}
              priority
              className="w-full"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-16">
              <p className="text-sm font-bold">Our store · V.O.C Road, Karaikudi</p>
              <p className="text-xs text-white/70">UltraTech Building Solutions · Dr Fixit Waterproofing Centre</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <ul className="container-x grid gap-x-8 gap-y-3 py-5 sm:grid-cols-3">
          {FACTS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm font-semibold text-white/85">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand text-neutral-900"><Icon aria-hidden="true" /></span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
