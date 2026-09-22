import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import Catalogue from "../components/products/Catalogue.jsx";
import { metaForPath } from "../seo/routes.js";

const META = metaForPath("/products");

export default function Products() {
  return (
    <>
      <Seo meta={META} />
      <PageHeader
        compact
        eyebrow="Product catalogue"
        title="Paints, Cement & Building Materials"
        description="Search and filter the paints, primers, putty, waterproofing, cement and construction chemicals available at Natarajan & Co, Karaikudi."
        crumbs={[{ label: "Products" }]}
      />
      <Catalogue />
      <EnquiryCta />
    </>
  );
}
