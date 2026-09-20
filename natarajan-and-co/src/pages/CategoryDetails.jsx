import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import Catalogue from "../components/products/Catalogue.jsx";
import NotFound from "./NotFound.jsx";
import categories from "../data/categories.js";
import { metaForPath } from "../seo/routes.js";

export default function CategoryDetails() {
  const { categorySlug } = useParams();
  const category = categories.find((c) => c.slug === categorySlug);
  const meta = useMemo(() => (category ? metaForPath(`/categories/${category.slug}`) : null), [category]);
  if (!category) return <NotFound />;

  const siblings = categories.filter((c) => c.group === category.group && c.slug !== category.slug);

  return (
    <>
      <Seo meta={meta} />
      <PageHeader
        compact
        eyebrow={category.group === "paints" ? "Paints & coatings" : "Building materials"}
        title={category.name}
        description={category.description}
        crumbs={[{ label: "Products", to: "/products" }, { label: category.name }]}
      />
      <Catalogue lockedCategory={category.slug} />
      <section className="pb-4" aria-label="Other categories">
        <div className="container-x">
          <p className="t-meta">More {category.group === "paints" ? "paint" : "building-material"} categories</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {siblings.map((c) => (
              <li key={c.slug}><Link to={`/categories/${c.slug}`} className="chip hover:border-ink/40 hover:text-ink">{c.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <EnquiryCta />
    </>
  );
}
