import type React from "react"
interface CompanyLogoProps {
  name: string
  logo: string
}

export function CompanyLogo({ name, logo }: CompanyLogoProps) {
  const logoStyles: Record<string, React.ReactNode> = {
    tcs: <span className="text-sm font-bold text-gray-700">tcs</span>,
    infosys: <span className="text-sm font-bold text-blue-600">Infosys</span>,
    accenture: <span className="text-sm font-bold text-gray-800">accenture</span>,
    wipro: (
      <div className="flex items-center gap-1">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-green-400"></div>
        <span className="text-xs font-medium text-gray-700">wipro</span>
      </div>
    ),
    birlasoft: (
      <div className="flex items-center gap-1">
        <span className="text-blue-500 font-bold text-sm">ஃ</span>
        <span className="text-sm font-medium text-gray-700">Birlasoft</span>
      </div>
    ),
    groww: (
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <span className="text-sm font-medium text-gray-700">Groww</span>
      </div>
    ),
    zomato: <span className="text-sm font-bold text-red-500">zomato</span>,
    flipkart: (
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold text-blue-600">Flipkart</span>
        <span className="text-yellow-400">⚡</span>
      </div>
    ),
    swiggy: (
      <span className="text-sm font-bold text-orange-500">
        <span className="text-orange-400">●</span> SWIGGY
      </span>
    ),
    meta: (
      <div className="flex items-center gap-1">
        <span className="text-blue-500 text-lg">∞</span>
        <span className="text-sm font-medium text-gray-700">Meta</span>
      </div>
    ),
    apple: <span className="text-xl text-gray-800">🍎</span>,
    amazon: <span className="text-sm font-bold text-gray-800">amazon</span>,
    netflix: <span className="text-sm font-bold text-red-600">NETFLIX</span>,
    google: (
      <span className="text-sm font-bold">
        <span className="text-blue-500">G</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </span>
    ),
  }

  return (
    <div className="flex items-center">{logoStyles[logo] || <span className="text-sm text-gray-600">{name}</span>}</div>
  )
}
