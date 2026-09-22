import { lazy, Suspense } from "react";
import Seo from "../components/layout/Seo.jsx";
import Hero from "../components/home/Hero.jsx";
import BrandShowcase from "../components/home/BrandShowcase.jsx";
import OpusFeature from "../components/home/OpusFeature.jsx";
import PaintCategories from "../components/home/PaintCategories.jsx";
import EnquiryCta from "../components/layout/EnquiryCta.jsx";
import { metaForPath } from "../seo/routes.js";

const META = metaForPath("/");

// Above-the-fold + first sections load immediately; everything further down
// is split into its own chunk so the first paint stays light.
const FeaturedPaintProducts = lazy(() => import("../components/home/FeaturedPaintProducts.jsx"));
const InteriorExterior = lazy(() => import("../components/home/InteriorExterior.jsx"));
const Waterproofing = lazy(() => import("../components/home/Waterproofing.jsx"));
const BuildingMaterials = lazy(() => import("../components/home/BuildingMaterials.jsx"));
const WhyUs = lazy(() => import("../components/home/WhyUs.jsx"));
const ProjectFinder = lazy(() => import("../components/home/ProjectFinder.jsx"));
const FeaturedProducts = lazy(() => import("../components/home/FeaturedProducts.jsx"));

export default function Home() {
  return (
    <>
      <Seo meta={META} />
      <Hero />
      <BrandShowcase />
      <OpusFeature />
      <PaintCategories />
      <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
        <FeaturedPaintProducts />
        <InteriorExterior />
        <Waterproofing />
        <BuildingMaterials />
        <WhyUs />
        <ProjectFinder />
        <FeaturedProducts />
      </Suspense>
      <EnquiryCta />
    </>
  );
}
