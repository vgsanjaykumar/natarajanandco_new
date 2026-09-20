import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import NotFound from "./NotFound.jsx";
import services from "../data/services.js";
import { metaForPath } from "../seo/routes.js";

export default function ServiceDetails() {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.slug === serviceSlug);
  const meta = useMemo(() => (service ? metaForPath(`/services/${service.slug}`) : null), [service]);
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo meta={meta} />
      <PageHeader
        compact
        eyebrow="Service"
        title={service.name}
        description={service.intro}
        crumbs={[{ label: "Services", to: "/services" }, { label: service.name }]}
      />

      <section className="section-tight">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-14">
          <div>
            <h2 className="t-h2">How it works</h2>
            <p className="t-body mt-4">{service.description}</p>

            <ol className="mt-8 grid gap-4">
              {service.process.map((p, i) => (
                <li key={p.step}>
                  <Reveal delay={i * 60}>
                    <div className="card flex gap-4 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-sm font-extrabold text-bg" aria-hidden="true">{i + 1}</span>
                      <div>
                        <h3 className="t-product">{p.step}</h3>
                        <p className="t-small mt-1">{p.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid h-fit gap-5">
            <div className="card p-6">
              <h2 className="t-product">What you get</h2>
              <ul className="mt-4 grid gap-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-6 text-soft">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-neutral-900"><FiCheck className="h-3 w-3" strokeWidth={3} aria-hidden="true" /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h2 className="t-product">Suitable for</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.suitableFor.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-line" aria-label="Other services">
        <div className="container-x">
          <p className="t-meta">Other services</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="chip hover:border-ink/40 hover:text-ink">{s.name}</Link></li>)}
          </ul>
        </div>
      </section>
      <EnquiryCta />
    </>
  );
}
