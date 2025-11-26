import { Check } from "lucide-react"

interface CompanyCardProps {
  name: string
  logo: string
  logoStyle: string
  description: string
  skills: string[]
  isGoogle?: boolean
  isText?: boolean
  viewAll?: boolean
  viewAllCount?: number
}

export function CompanyCard({
  name,
  logo,
  logoStyle,
  description,
  skills,
  isGoogle,
  isText,
  viewAll,
  viewAllCount,
}: CompanyCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
      {/* Logo and Name */}
      <div className="flex items-center gap-3 mb-3">
        {isGoogle ? (
          <div className="w-8 h-8 flex items-center justify-center">
            <span className="text-2xl font-bold">
              <span className="text-[#4285F4]">G</span>
            </span>
          </div>
        ) : isText ? (
          <span className={logoStyle}>{logo}</span>
        ) : (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${logoStyle}`}>
            {logo}
          </div>
        )}
        <span className="font-semibold text-[#1a1a2e]">{name}</span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-5">{description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span key={skill} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <Check className="w-3 h-3 text-green-500" />
            {skill}
          </span>
        ))}
      </div>

      {/* View All Link */}
      {viewAll && (
        <div className="mb-4">
          <a href="#" className="text-xs text-[#FF6B5B] font-medium">
            View all ({viewAllCount})
          </a>
          <p className="text-[10px] text-gray-400">all company links were provided last</p>
        </div>
      )}

      {/* CTA Button */}
      <button className="w-full py-2.5 text-sm font-medium text-[#1a1a2e] border border-[#1a1a2e] rounded-lg hover:bg-[#1a1a2e] hover:text-white transition-colors">
        Schedule Interview now
      </button>
    </div>
  )
}
