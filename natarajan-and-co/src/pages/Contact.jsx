import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Seo from "../components/layout/Seo.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import contactDetails from "../data/contactDetails.js";
import { productBySlug } from "../data/products.js";
import { displayName } from "../data/helpers.js";
import { BUSINESS, PHONES, mailLink, waLink } from "../config/site.js";
import { metaForPath } from "../seo/routes.js";

const META = metaForPath("/contact");
const EMPTY = { name: "", phone: "", topic: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.phone.trim()) e.phone = "Please enter your phone number.";
  else if (!/^[0-9+\-\s()]{7,15}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!v.message.trim()) e.message = "Please tell us what you are looking for.";
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="label">{label}</label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1.5 text-[0.8125rem] font-medium text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const product = productBySlug(params.get("product") ?? "");
  const [form, setForm] = useState({ ...EMPTY, topic: product ? displayName(product) : "" });
  const [errors, setErrors] = useState({});

  const change = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((x) => ({ ...x, [name]: undefined }));
  };

  // No backend exists, so the enquiry is composed and handed to WhatsApp or the
  // visitor's email app — it is never silently dropped.
  const submit = (e) => {
    e.preventDefault();
    const via = e.nativeEvent.submitter?.value ?? "whatsapp";
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    const text = `Hello Natarajan & Co,\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}${form.topic.trim() ? `\nRegarding: ${form.topic.trim()}` : ""}\n\n${form.message.trim()}`;
    if (via === "email") window.location.href = mailLink(form.topic.trim() || "Enquiry from website", text);
    else window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const err = (k) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-err` } : {});

  return (
    <>
      <Seo meta={META} />
      <PageHeader
        compact
        eyebrow="Get in touch"
        title="Contact Natarajan & Co"
        description="Questions about a product or your project? Call, message on WhatsApp or visit the shop — we are open every day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-tight" aria-label="Contact details and enquiry form">
        <div className="container-x grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
          <div className="grid content-start gap-4">
            <Reveal>
              <div className="card p-6">
                <h2 className="t-product">Call the team</h2>
                <ul className="mt-4 divide-y divide-line">
                  {contactDetails.map((c) => (
                    <li key={c.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0">
                      <span className="text-sm font-semibold text-ink">{c.name}{c.role && <span className="font-normal text-mute"> · {c.role}</span>}</span>
                      <span className="flex flex-wrap gap-x-4">
                        {c.phones.map((p) => (
                          <a key={p.href} href={`tel:${p.href}`} className="inline-flex min-h-[32px] items-center gap-1.5 text-sm font-bold tabular-nums text-ink hover:underline">
                            <FiPhone className="h-3.5 w-3.5 text-brandtext" aria-hidden="true" /> {p.number}
                          </a>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-5 w-full"><FaWhatsapp aria-hidden="true" /> Chat on WhatsApp · {PHONES.whatsapp.display}</a>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <div className="card grid gap-5 p-6">
                <div className="flex gap-3.5">
                  <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-brandtext" aria-hidden="true" />
                  <address className="text-sm not-italic leading-6 text-soft">
                    <span className="block font-bold text-ink">Natarajan &amp; Co</span>
                    {BUSINESS.streetAddress}, {BUSINESS.locality}, {BUSINESS.region} – {BUSINESS.postalCode}
                  </address>
                </div>
                <div className="flex gap-3.5"><FiClock className="mt-1 h-5 w-5 shrink-0 text-brandtext" aria-hidden="true" /><p className="text-sm leading-6 text-soft"><span className="block font-bold text-ink">Opening hours</span>{BUSINESS.hours.label}</p></div>
                <div className="flex gap-3.5"><FiMail className="mt-1 h-5 w-5 shrink-0 text-brandtext" aria-hidden="true" /><a href={`mailto:${BUSINESS.email}`} className="break-all text-sm font-semibold text-ink hover:underline">{BUSINESS.email}</a></div>
                <div className="flex gap-3.5"><FaInstagram className="mt-1 h-5 w-5 shrink-0 text-brandtext" aria-hidden="true" /><a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink hover:underline">Follow on Instagram</a></div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <form onSubmit={submit} noValidate className="card p-6 sm:p-8" aria-labelledby="form-heading">
              <h2 id="form-heading" className="t-h3">Send an enquiry</h2>
              <p className="t-small mt-1.5">Fill this in and send it on WhatsApp or by email — it opens ready to send.</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Your name" error={errors.name}>
                  <input id="name" name="name" value={form.name} onChange={change} autoComplete="name" className="input" {...err("name")} />
                </Field>
                <Field id="phone" label="Phone number" error={errors.phone}>
                  <input id="phone" name="phone" type="tel" inputMode="tel" value={form.phone} onChange={change} autoComplete="tel" className="input" {...err("phone")} />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="topic" label="Product or topic (optional)">
                    <input id="topic" name="topic" value={form.topic} onChange={change} placeholder="e.g. Birla Opus One Pure Elegance" className="input" />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field id="message" label="Your message" error={errors.message}>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={change} className="input resize-y" {...err("message")} />
                  </Field>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" value="whatsapp" className="btn btn-wa btn-lg"><FaWhatsapp aria-hidden="true" /> Send on WhatsApp</button>
                <button type="submit" value="email" className="btn btn-outline btn-lg"><FiMail aria-hidden="true" /> Send by email</button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24" aria-label="Map">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-line shadow-card">
            <iframe
              title="Natarajan & Co location on Google Maps"
              src={BUSINESS.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0 md:h-[26rem]"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm"><a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4">Open in Google Maps</a></p>
        </div>
      </section>
    </>
  );
}
