import { useCallback, useEffect, useState } from "react";

const read = () => document.documentElement.getAttribute("data-theme") || "light";

// Light / dark theme. The initial value is applied by an inline script in
// index.html (no flash); this hook only reads and toggles it.
export function useTheme() {
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      // Follow the OS only while the user has not chosen a theme explicitly.
      if (!localStorage.getItem("theme")) {
        const next = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        setTheme(next);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = read() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
