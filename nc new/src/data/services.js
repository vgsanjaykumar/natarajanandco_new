// Services offered by Natarajan and Co. Content is original and based on
// how the business actually operates as a building-materials dealership.

const services = [
  {
    slug: "building-material-supply",
    name: "Building Material Supply",
    icon: "package",
    shortDescription:
      "Reliable local supply of paints, cement, wall care, tiling, waterproofing, and adhesive products.",
    intro:
      "We supply a wide range of building materials from our authorised brand partners, so customers across Karaikudi can source what they need from a single, trusted dealer.",
    description:
      "As an authorised dealer for UltraTech, Birla White, Myk Laticrete, Fosroc, Araldite, and Dr Fixit, we stock the core materials most construction and renovation projects require. Whether you're building a new home or handling a small repair, our shop is set up to supply materials for jobs of different sizes.",
    benefits: [
      "One dealer for multiple trusted brands",
      "Local stock availability in Karaikudi",
      "Materials suited to both new construction and renovation work",
    ],
    process: [
      { step: "Tell us what you need", detail: "Share your project details or product requirement with our team, in person or by phone." },
      { step: "We check availability", detail: "We confirm stock and quantities for the products you're looking for." },
      { step: "Collect or arrange pickup", detail: "Visit our store in Karaikudi to collect your materials." },
    ],
    suitableFor: ["Homeowners", "Contractors", "Small construction businesses"],
  },
  {
    slug: "product-consultation",
    name: "Product Consultation",
    icon: "chat",
    shortDescription:
      "Guidance on choosing the right cement, adhesive, or waterproofing product for your project.",
    intro:
      "With years of experience dealing in building materials, we help customers understand which products from our brand range best suit their specific project.",
    description:
      "Not every project needs the same materials. Our team draws on years of dealership experience to help you compare options across the brands we carry — whether you're deciding between cement types, tile adhesives, or waterproofing products — so you can make an informed choice.",
    benefits: [
      "Practical advice based on real dealership experience",
      "Helps avoid buying the wrong product for the job",
      "No-obligation product guidance",
    ],
    process: [
      { step: "Describe your project", detail: "Let us know what you're working on and any specific concerns." },
      { step: "We discuss suitable options", detail: "We walk you through the relevant products from our brand range." },
      { step: "You choose with confidence", detail: "Make your purchase knowing it fits your project." },
    ],
    suitableFor: ["First-time builders", "Homeowners doing renovation work", "Anyone unsure which product to choose"],
  },
  {
    slug: "bulk-and-dealership-orders",
    name: "Bulk & Dealership Orders",
    icon: "truck",
    shortDescription: "Support for contractors and businesses needing larger quantities of materials.",
    intro:
      "For contractors and businesses that need materials in larger quantities, we help plan and fulfil bulk orders from our available brand range.",
    description:
      "Larger projects often need materials ordered ahead of time and in bulk. We work with contractors and businesses to plan these orders, based on the stock and brands we carry, so projects can stay on schedule.",
    benefits: [
      "Dedicated support for larger orders",
      "Access to our full range of authorised brands",
      "Planning support so materials are ready when needed",
    ],
    process: [
      { step: "Share your requirement", detail: "Let us know the products, quantities, and timeline for your project." },
      { step: "We plan availability", detail: "We check stock and coordinate the order accordingly." },
      { step: "Order fulfilment", detail: "Collect your bulk order from our Karaikudi store." },
    ],
    suitableFor: ["Contractors", "Builders", "Businesses with ongoing material needs"],
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    icon: "headset",
    shortDescription: "Ongoing support by phone or in person for questions before and after purchase.",
    intro:
      "We're available by phone and in person to answer questions, whether you're deciding what to buy or need help after your purchase.",
    description:
      "Good service doesn't stop at the sale. Our team remains available to answer follow-up questions, help with product-related queries, and support customers who've bought materials from us.",
    benefits: [
      "Multiple phone lines for easy contact",
      "In-person support at our Karaikudi store",
      "Continued assistance after your purchase",
    ],
    process: [
      { step: "Reach out", detail: "Call us or visit the store with your question." },
      { step: "We assist", detail: "Our team addresses your query or concern directly." },
    ],
    suitableFor: ["All customers", "Repeat and long-term customers"],
  },
];

export default services;
