import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SceneArt from "../art/SceneArt.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import { PROJECT_FINDER } from "../../data/home.js";

export default function ProjectFinder() {
  return (
    <section className="section" aria-labelledby="finder-heading">
      <div className="container-x">
        <SectionHeading
          id="finder-heading"
          eyebrow="Product discovery"
          title="Find the Right Solution for Your Project"
          text="Tell us what stage your project is at — each card leads straight to the products that belong there."
          align="center"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {PROJECT_FINDER.map((f, i) => (
            <li key={f.key} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <article className="card card-hover group flex h-full flex-col overflow-hidden sm:flex-row lg:flex-col">
                  <div className={`aspect-[16/9] shrink-0 overflow-hidden sm:aspect-auto sm:w-[38%] ${i < 3 ? "lg:aspect-[16/8]" : "lg:aspect-[16/5]"} lg:w-auto`}>
                    <SceneArt name={f.art} className="transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="t-product !text-lg">{f.title}</h3>
                    <p className="t-small mt-1.5">{f.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {f.links.map(([slug, label]) => (
                        <li key={slug}>
                          <Link to={`/categories/${slug}`} className="chip inline-flex hover:border-ink/40 hover:text-ink">
                            {label} <FiArrowRight className="h-3 w-3" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
