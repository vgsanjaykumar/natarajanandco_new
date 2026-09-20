import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { serviceIcons } from "../components/ui/serviceIcons.js";
import services from "../data/services.js";
import { metaForPath } from "../seo/routes.js";

const META = metaForPath("/services");

export default function Services() {
  return (
    <>
      <Seo meta={META} />
      <PageHeader
        compact
        eyebrow="Services"
        title="Supply, guidance and support"
        description="A dealer is more than a shelf. Here is how we help customers across Karaikudi before, during and after a purchase."
        crumbs={[{ label: "Services" }]}
      />
      <section className="section-tight" aria-label="Our services">
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon] ?? serviceIcons.package;
              return (
                <li key={s.slug}>
                  <Reveal delay={(i % 2) * 70} className="h-full">
                    <article className="card card-hover group relative flex h-full flex-col p-6 sm:p-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-neutral-900"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                      <h2 className="t-h3 mt-5">
                        <Link to={`/services/${s.slug}`} className="after:absolute after:inset-0 after:content-['']">{s.name}</Link>
                      </h2>
                      <p className="t-body mt-2">{s.shortDescription}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-ink transition group-hover:gap-2.5">
                        Learn more <FiArrowRight aria-hidden="true" />
                      </span>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <EnquiryCta />
    </>
  );
}
