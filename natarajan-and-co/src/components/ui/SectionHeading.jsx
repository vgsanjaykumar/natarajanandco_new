import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, text, align = "left", tone = "default", as: H = "h2", id, className = "", children }) {
  const center = align === "center";
  const night = tone === "night";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${center ? "justify-center" : ""} ${night ? "!text-brand" : ""}`}>{eyebrow}</p>}
      <H id={id} className={`t-h2 mt-3 ${night ? "text-white" : "text-ink"}`}>{title}</H>
      {text && <p className={`t-lead mt-4 ${night ? "!text-white/70" : ""}`}>{text}</p>}
      {children}
    </Reveal>
  );
}
