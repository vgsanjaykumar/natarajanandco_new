import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { waLink } from "../../config/site.js";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-3 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink shadow-card transition duration-300 hover:-translate-y-0.5 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        tabIndex={showTop ? 0 : -1}
      >
        <FiArrowUp />
      </button>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Natarajan & Co on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF5A] text-[1.75rem] text-white shadow-lift transition duration-200 hover:scale-105 active:scale-95"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
