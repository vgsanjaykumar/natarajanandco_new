import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FloatingActions from "./FloatingActions.jsx";

const PageFallback = () => (
  <div className="flex min-h-[70vh] items-center justify-center bg-night" role="status" aria-label="Loading page">
    <span className="h-1 w-28 overflow-hidden rounded-full bg-white/15">
      <span className="block h-full w-1/2 animate-pulse rounded-full bg-brand" />
    </span>
  </div>
);

export default function MainLayout() {
  const { pathname, hash } = useLocation();
  const mainRef = useRef(null);
  const first = useRef(true);

  // New route: back to the top and move keyboard/screen-reader focus to the page.
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (first.current) { first.current = false; return; }
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded-lg bg-brand px-4 py-2 font-bold text-neutral-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
