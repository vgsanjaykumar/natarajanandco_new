import { Link } from "react-router-dom";
import Seo from "../components/layout/Seo.jsx";
import Btn from "../components/ui/Btn.jsx";
import { NOT_FOUND_META } from "../seo/routes.js";

export default function NotFound() {
  return (
    <>
      <Seo meta={NOT_FOUND_META} />
      <section className="on-night relative isolate flex min-h-[80vh] items-center overflow-hidden bg-night pt-24 text-white">
        <div className="bg-grid-night absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
        <div className="container-x text-center">
          <p className="text-[clamp(5rem,18vw,10rem)] font-extrabold leading-none tracking-tighter text-brand">404</p>
          <h1 className="t-h2 mt-2">This page could not be found</h1>
          <p className="t-lead mx-auto mt-4 max-w-md !text-white/70">The link may be old or mistyped. Try our products or brands instead.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn to="/" size="lg">Back to Home</Btn>
            <Btn to="/products" variant="glass" size="lg">Browse products</Btn>
          </div>
          <p className="mt-8 text-sm text-white/50">Or <Link to="/contact" className="font-semibold text-white underline underline-offset-4">contact the shop</Link>.</p>
        </div>
      </section>
    </>
  );
}
