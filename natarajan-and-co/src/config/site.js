// Single source of truth for business details, URLs and contact helpers.
// Everything here already existed on the live site (index.html JSON-LD,
// Footer, Contact, ContactDetails) — it is only centralised now.

export const SITE = {
  name: "Natarajan & Co",
  legalName: "Natarajan and Co",
  url: "https://www.natarajanandco.com",
  locale: "en_IN",
  themeColor: "#FFE500",
  ogImage: "/og-image.jpg",
};

export const BUSINESS = {
  streetAddress:
    "14/1 Paruppooranai South, V.O.C Road, Sri Muthu Mariamman Kovil Street",
  locality: "Karaikudi",
  region: "Tamil Nadu",
  postalCode: "630001",
  country: "IN",
  // Coordinates taken from the Google Maps embed already used on the site.
  geo: { latitude: 10.0769136, longitude: 78.7621465 },
  hours: { opens: "08:00", closes: "20:00", label: "Open daily · 8:00 AM – 8:00 PM" },
  email: "karaikudinatarajan@gmail.com",
  instagram:
    "https://www.instagram.com/karaikudinatarajan?igsh=MTluYmZpemRsc3JsMA==",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.2704303470796!2d78.76214647485969!3d10.076913590032438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00675c9dfc161b%3A0x69bc1b0ab7639fa4!2sNATARAJAN%20%26%20CO!5e0!3m2!1sen!2sin!4v1739297700769!5m2!1sen!2sin",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Natarajan+%26+Co+Karaikudi",
};

export const PHONES = {
  // Primary call button (shop landline) and primary WhatsApp line.
  call: { display: "04565-401379", href: "tel:+914565401379", e164: "+914565401379" },
  whatsapp: { display: "96297 89197", number: "919629789197" },
  // Number listed as `telephone` in the existing JSON-LD.
  schema: "+919842611032",
};

export const waLink = (text = "Hello Natarajan & Co, I would like to enquire about your products.") =>
  `https://wa.me/${PHONES.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const mailLink = (subject = "Enquiry", body = "") =>
  `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const absUrl = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
