import { fontFamily } from "tailwindcss/defaultTheme";

// Colours are CSS variables (see src/index.css) so light/dark themes and
// opacity modifiers (bg-ink/10) work from one set of tokens.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', ...fontFamily.sans],
      },
      colors: {
        bg: token("bg"),
        card: token("card"),
        sunken: token("sunken"),
        ink: token("ink"),
        soft: token("soft"),
        mute: token("mute"),
        line: token("line"),
        night: token("night"),
        brandtext: token("brandtext"),
        brand: { DEFAULT: "#FFE500", dark: "#F0D400", soft: "#FFF6B0" },
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 17 21 / .05), 0 10px 28px -14px rgb(15 17 21 / .16)",
        lift: "0 2px 4px rgb(15 17 21 / .06), 0 22px 44px -18px rgb(15 17 21 / .32)",
        nav: "0 8px 30px -12px rgb(0 0 0 / .35)",
      },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem" },
      maxWidth: { page: "80rem" },
      keyframes: {
        "fade-up": { from: { opacity: 0, transform: "translateY(14px)" }, to: { opacity: 1, transform: "none" } },
        "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
        "menu-in": { from: { opacity: 0, transform: "translateY(-6px)" }, to: { opacity: 1, transform: "none" } },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.2,.7,.2,1) both",
        "fade-in": "fade-in .5s ease-out both",
        "menu-in": "menu-in .25s ease-out both",
      },
    },
  },
  plugins: [],
};
