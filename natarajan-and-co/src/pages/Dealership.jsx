import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import BrandLogo from "../components/ui/BrandLogo.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Btn from "../components/ui/Btn.jsx";
import brands from "../data/brands.js";
import { metaForPath } from "../seo/routes.js";

const META = metaForPath("/dealership");
const authorised = brands.filter((b) => b.relationship === "Authorised dealer");

export default function Dealership() {
  return (
    <>
      <Seo meta={META} />
      <PageHeader
        compact
        eyebrow="Dealership"
        title="Our dealership partners"
        description="The brands we are authorised to represent, and how our dealership supports customers across Karaikudi."
        crumbs={[{ label: "Dealership" }]}
      />

      <section className="section-tight" aria-labelledby="auth-heading">
        <div className="container-x">
          <SectionHeading
            id="auth-heading"
            eyebrow="Authorised dealer"
            title={`Authorised dealer for ${authorised.length} brands`}
            text="Buying through an authorised dealer means the product reaches you through the brand's own channels."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {authorised.map((b, i) => (
              <li key={b.slug}>
                <Reveal delay={(i % 3) * 60} className="h-full">
                  <article className={`group relative flex h-full flex-col rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6 ${b.highlight ? "border-brand bg-brand text-neutral-900" : "border-line bg-card"}`}>
                    <BrandLogo brand={b} className="h-16 w-36" pad="p-2" />
                    <h2 className="t-h3 mt-5">
                      <Link to={`/brands/${b.slug}`} className="after:absolute after:inset-0 after:content-['']">{b.name}</Link>
                    </h2>
                    <p className={`t-small mt-2 ${b.highlight ? "!text-neutral-800" : ""}`}>{b.intro}</p>
                    <p className={`mt-4 flex items-center gap-1.5 text-xs font-semibold ${b.highlight ? "text-neutral-800" : "text-mute"}`}>
                      <FiMapPin aria-hidden="true" /> Karaikudi, Tamil Nadu
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold transition group-hover:gap-2.5">
                      View brand <FiArrowRight aria-hidden="true" />
                    </span>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-tight bg-sunken" aria-labelledby="opus-added">
        <div className="container-x">
          <Reveal className="card flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Newly added</p>
              <h2 id="opus-added" className="t-h2 mt-3">Birla Opus paints</h2>
              <p className="t-body mt-3">
                We have added Birla Opus, the Aditya Birla Group's paint brand, to our range — interior and exterior paints, primers, putty, waterproofing and wood finishes. Ask our team about availability.
              </p>
            </div>
            <Btn to="/brands/birla-opus" variant="dark" size="lg">Explore Birla Opus <FiArrowRight aria-hidden="true" /></Btn>
          </Reveal>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="support-heading">
        <div className="container-x">
          <SectionHeading id="support-heading" eyebrow="What a dealership gives you" title="Support beyond the shelf" />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Genuine products", "Authorised-dealer status with each of our core brands, so what you buy comes through official channels."],
              ["Local availability", "Everyday stock held in Karaikudi, with bulk and dealership orders planned ahead where needed."],
              ["Honest guidance", "Advice on which product fits the job, from a team you can call or visit."],
            ].map(([t, d], i) => (
              <li key={t}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="card h-full p-6">
                    <h3 className="t-product">{t}</h3>
                    <p className="t-small mt-2">{d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn to="/brands" variant="dark">View all brands</Btn>
            <Btn to="/products" variant="outline">Browse products</Btn>
            <Btn to="/contact" variant="outline">Contact us</Btn>
          </div>
        </div>
      </section>
      <EnquiryCta />
    </>
  );
}
