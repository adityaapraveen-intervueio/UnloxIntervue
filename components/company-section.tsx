import { CompanyCard } from "./company-card"

interface Company {
  name: string
  logo: string
  logoStyle: string
  logoSrc?: string
  description: string
  skills: string[]
  isGoogle?: boolean
  isText?: boolean
  viewAll?: boolean
  viewAllCount?: number
}

interface CompanySectionProps {
  title: string
  companies: Company[]
}

export function CompanySection({ title, companies }: CompanySectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold text-[#1a1a2e] mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company) => (
          <CompanyCard key={company.name} {...company} />
        ))}
      </div>
    </div>
  )
}
