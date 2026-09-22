import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/plus-jakarta-sans";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hand over from the static logo splash in index.html once React has painted.
// The splash shows for ~0.9 s on the first visit of a session (long enough for
// the logo animation, short enough not to get in the way) and never again in
// that session. Reduced-motion users skip the wait.
const splash = document.getElementById("splash");
if (splash) {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wait = reduce ? 0 : Math.max(0, 900 - performance.now());
  const hide = () => {
    splash.classList.add("is-hidden");
    try { sessionStorage.setItem("splash-seen", "1"); } catch { /* storage unavailable */ }
    setTimeout(() => splash.remove(), 700);
  };
  if (document.documentElement.classList.contains("no-splash")) splash.remove();
  else requestAnimationFrame(() => setTimeout(hide, wait));
}
