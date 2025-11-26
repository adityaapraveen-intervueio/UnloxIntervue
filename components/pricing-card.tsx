import { Check } from "lucide-react"
import { CompanyLogo } from "./company-logo"

interface PricingCardProps {
  title: string
  price: number
  originalPrice: number
  discount: string
  companies: { name: string; logo: string }[]
  features: string[]
  popular: boolean
}

export function PricingCard({ title, price, originalPrice, discount, companies, features, popular }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border ${popular ? "border-gray-200 shadow-lg" : "border-gray-200"} bg-white overflow-hidden`}
    >
      {/* Most Popular Badge */}
      {popular && (
        <div className="bg-[#1a1a2e] text-white text-xs font-semibold py-2 px-4 text-center tracking-wider">
          MOST POPULAR
        </div>
      )}

      <div className="p-6">
        {/* Title */}
        <h3 className="text-gray-800 font-medium mb-4">{title}</h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-4xl font-bold text-gray-900">₹{price}</span>
          <span className="text-green-500 font-semibold text-sm">{discount}</span>
        </div>
        <div className="text-gray-400 text-sm line-through mb-6">₹{originalPrice}</div>

        {/* Company Logos */}
        <div className="flex flex-wrap gap-4 items-center mb-6 min-h-[60px]">
          {companies.map((company, index) => (
            <CompanyLogo key={index} name={company.name} logo={company.logo} />
          ))}
        </div>

        {/* Book a Demo Button */}
        <button className="w-full bg-[#1a1a2e] text-white py-3 rounded-lg font-medium hover:bg-[#2a2a3e] transition-colors mb-6">
          Book a Demo
        </button>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Features :</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
