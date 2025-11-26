import { PricingCard } from "./pricing-card"

const pricingPlans = [
  {
    title: "IT Services Companies",
    price: 1400,
    originalPrice: 2800,
    discount: "50% OFF",
    companies: [
      { name: "TCS", logo: "tcs" },
      { name: "Infosys", logo: "infosys" },
      { name: "Accenture", logo: "accenture" },
      { name: "Wipro", logo: "wipro" },
      { name: "Birlasoft", logo: "birlasoft" },
    ],
    features: [
      "Fully responsive Webflow template",
      "UX-optimized page layouts",
      "CMS + Figma file included",
      "SEO-ready structure",
      "Email support included",
    ],
    popular: false,
  },
  {
    title: "HyperGrowth Companies",
    price: 1700,
    originalPrice: 3400,
    discount: "50% OFF",
    companies: [
      { name: "Groww", logo: "groww" },
      { name: "Zomato", logo: "zomato" },
      { name: "Flipkart", logo: "flipkart" },
      { name: "Swiggy", logo: "swiggy" },
    ],
    features: [
      "Fully responsive Webflow template",
      "UX-optimized page layouts",
      "CMS + Figma file included",
      "SEO-ready structure",
      "Email support included",
    ],
    popular: false,
  },
  {
    title: "FAANG Companies",
    price: 2400,
    originalPrice: 4800,
    discount: "50% OFF",
    companies: [
      { name: "Meta", logo: "meta" },
      { name: "Apple", logo: "apple" },
      { name: "Amazon", logo: "amazon" },
      { name: "Netflix", logo: "netflix" },
      { name: "Google", logo: "google" },
    ],
    features: [
      "Fully responsive Webflow template",
      "UX-optimized page layouts",
      "CMS + Figma file included",
      "SEO-ready structure",
      "Email support included",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section
      className="relative py-16 px-6"
      style={{
        backgroundImage: "url('/imageslogos/background-grids.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
