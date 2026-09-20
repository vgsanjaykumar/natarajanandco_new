import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiBox, FiCheckCircle, FiMapPin, FiMessageCircle, FiLayers } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import Btn from "../ui/Btn.jsx";
import awards from "../../data/awards.js";

// Every line below is supported by what the business already states about
// itself (brand list, services, dealer recognitions). No counts, ratings or
// certifications are invented.
const REASONS = [
  { icon: FiCheckCircle, title: "Trusted product brands", text: "Authorised dealer for UltraTech, Birla White, MYK Laticrete, Fosroc, Araldite and Dr Fixit, with Birla Opus paints now available." },
  { icon: FiBox, title: "Wide product selection", text: "Cement, paints, primers, putty, waterproofing, tile adhesives, construction chemicals and adhesives — sourced from one place." },
  { icon: FiLayers, title: "Building-material expertise", text: "Over two decades supplying builders, contractors and homeowners around Karaikudi." },
  { icon: FiAward, title: "Paint & surface solutions", text: "From wall preparation to finish coats, waterproofing and wood polish, matched to the surface you are working on." },
  { icon: FiMessageCircle, title: "Customer-focused service", text: "Product guidance by phone or in person, before you buy and after." },
  { icon: FiMapPin, title: "Local availability", text: "Stocked in Karaikudi for walk-in purchase, with support for bulk and dealership orders." },
];

const SHOWN = awards.slice(0, 3);

export default function WhyUs() {
  return (
    <section className="section bg-sunken" aria-labelledby="why-heading">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="why-heading"
              eyebrow="Why Natarajan & Co"
              title="Why Choose Natarajan & Co?"
              text="Our aim is to match the right product to the job — genuine materials from authorised brands, with honest advice from the team."
            />
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <Btn to="/about" variant="dark">About us <FiArrowRight aria-hidden="true" /></Btn>
              <Btn to="/dealership" variant="outline">Our dealership</Btn>
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={(i % 2) * 70} className="h-full">
                  <div className="card h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-neutral-900"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <h3 className="t-product mt-4">{title}</h3>
                    <p className="t-small mt-2">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Recognitions — real photographs of the awards on display in the shop */}
        <Reveal className="mt-14 rounded-3xl border border-line bg-card p-6 shadow-card sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Recognised by our brand partners</p>
              <h3 className="t-h3 mt-2">Dealer awards, photographed in our shop</h3>
            </div>
            <Link to="/about#recognition" className="inline-flex items-center gap-1.5 text-sm font-bold text-ink underline decoration-brand decoration-2 underline-offset-4">
              See all recognitions <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className="no-scrollbar -mx-6 mt-6 flex snap-x gap-3 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0">
            {SHOWN.map((a) => (
              <li key={a.id} className="w-[62%] shrink-0 snap-start sm:w-auto">
                <figure>
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-sunken">
                    <img src={a.image} alt={`${a.title}: ${a.caption}`} loading="lazy" decoding="async" width="720" height="960" className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-2.5">
                    <span className="block text-[0.8125rem] font-bold leading-tight text-ink">{a.title}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-mute">{a.caption}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
