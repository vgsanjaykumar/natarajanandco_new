import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../lib/theme.js";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-current/10 ${className}`}
    >
      {dark ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />}
    </button>
  );
}
