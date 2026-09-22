import { FiEye, FiHeart, FiShield, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import SmartImage from "../components/ui/SmartImage.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import awards from "../data/awards.js";
import { metaForPath } from "../seo/routes.js";

const META = metaForPath("/about");

const VALUES = [
  { icon: FiHeart, title: "Trust", text: "Long-standing relationships with both our brand partners and our customers, built over two decades of consistent dealings." },
  { icon: FiShield, title: "Reliability", text: "Being an authorised dealer means customers can count on genuine products and dependable local availability." },
  { icon: FiUsers, title: "Customer focus", text: "Understanding what each customer's project actually needs, rather than a one-size-fits-all approach." },
  { icon: FiTrendingUp, title: "Consistency", text: "The same standard of service, whether it is a small household repair or a larger construction order." },
];

export default function About() {
  return (
    <>
      <Seo meta={META} />
      <PageHeader
        eyebrow="About us"
        title="A Karaikudi building-materials dealer, now with paints too"
        description="Natarajan & Co supplies genuine building materials and paint solutions, backed by honest advice from a team that has served the town for over two decades."
        crumbs={[{ label: "About" }]}
      />

      <section className="section" aria-labelledby="who-heading">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <Reveal className="overflow-hidden rounded-3xl shadow-lift">
            <SmartImage
              src="/img/store-day-1000.webp"
              srcSet="/img/store-day-640.webp 640w, /img/store-day-1000.webp 1000w, /img/store-day-1360.webp 1360w"
              sizes="(min-width:1024px) 45vw, 92vw"
              alt="Natarajan & Co store front, Karaikudi"
              width={1000}
              height={750}
            />
          </Reveal>
          <div>
            <SectionHeading id="who-heading" eyebrow="Who we are" title="Serving Karaikudi as an authorised UltraTech dealer" />
            <Reveal className="mt-5">
              <p className="t-body">
                Natarajan and Co has served Karaikudi for over two decades as an authorised dealer for UltraTech, India's No.1 cement brand. What started as a local building-materials shop has grown into a trusted supplier for homeowners, contractors and small businesses across the region.
              </p>
              <p className="t-body mt-4">
                Alongside UltraTech we represent Birla White, MYK Laticrete, Fosroc, Araldite and Dr Fixit, and we have now added Birla Opus paints — so cement, wall care, tiling, waterproofing, adhesives and paint can all come from one dependable dealer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight bg-sunken" aria-labelledby="journey-heading">
        <div className="container-x">
          <SectionHeading id="journey-heading" eyebrow="Our journey" title="Genuine materials, honest advice" align="center" />
          <Reveal className="mx-auto mt-5 max-w-3xl text-center">
            <p className="t-lead">
              Our business has grown around a simple idea: supply genuine building materials, back it up with honest advice, and be a dealer customers can return to for every project. That approach has kept us rooted in the Karaikudi community and connected with the brands we represent.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              { icon: FiTarget, t: "Our mission", d: "To make quality, genuine building materials easily accessible to every customer in and around Karaikudi, backed by honest guidance and reliable service." },
              { icon: FiEye, t: "Our vision", d: "To remain the building-materials dealer our community trusts first — known for genuine products, fair dealing and dependable local service." },
            ].map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="card h-full p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-bg"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="t-h3 mt-5">{t}</h3>
                  <p className="t-body mt-2">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-heading">
        <div className="container-x">
          <SectionHeading id="values-heading" eyebrow="What we stand for" title="The way we work" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 60} className="h-full">
                  <div className="card h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-neutral-900"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <h3 className="t-product mt-4">{title}</h3>
                    <p className="t-small mt-2">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal className="mt-10 rounded-3xl bg-night p-7 text-white sm:p-10">
            <h3 className="t-h3">Our quality commitment</h3>
            <p className="t-body mt-3 max-w-3xl !text-white/75">
              For every brand we are authorised to represent, the product you buy comes through the brand's official channels — not third-party resellers. That means what you buy from us is what the brand intended you to receive, with the local availability and support of a dealer who knows the products.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="recognition" className="section bg-sunken scroll-mt-20" aria-labelledby="recognition-heading">
        <div className="container-x">
          <SectionHeading
            id="recognition-heading"
            eyebrow="Recognition"
            title="Awards from our brand partners"
            text="Trophies and a certificate from UltraTech and Birla White, photographed in our shop. Captions are as printed on the awards."
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {awards.map((a, i) => (
              <li key={a.id}>
                <Reveal delay={(i % 3) * 60}>
                  <figure className="card overflow-hidden">
                    <div className="aspect-[3/4] bg-sunken">
                      <img src={a.image} alt={`${a.title}: ${a.caption}`} loading="lazy" decoding="async" width="720" height="960" className="h-full w-full object-cover" />
                    </div>
                    <figcaption className="p-4">
                      <span className="block text-sm font-bold text-ink">{a.title}</span>
                      <span className="mt-0.5 block text-[0.8125rem] leading-snug text-mute">{a.caption}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EnquiryCta title="Visit the shop or talk to the team" text="Drop by our Karaikudi store, call, or message us on WhatsApp — we are open every day." />
    </>
  );
}
