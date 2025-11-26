import type React from "react"
interface CompanyLogoProps {
  name: string
  logo: string
}

export function CompanyLogo({ name, logo }: CompanyLogoProps) {
  const logoStyles: Record<string, React.ReactNode> = {
    tcs: <img src="/imageslogos/tcs-logo.png" alt="TCS" className="h-6 m-1 ml-10 w-auto" />,
    infosys: <img src="/imageslogos/infosys-logo.png" alt="INFOSYS" className="h-6 m-1 w-auto" />,
    accenture: <img src="/imageslogos/accenture-logo.png" alt="ACCENTURE" className="h-8 m-1 w-auto" />,
    wipro: <img src="/imageslogos/wipro-logo.png" alt="WIPRO" className="h-8 w-auto m-1 ml-20" />,
    birlasoft: <img src="/imageslogos/birlasoft-1.png" alt="BIRLASOFT" className="h-6 m-1 w-auto" />,
    groww: <img src="/imageslogos/Groww_app_logo 2.png" alt="GROWW" className="h-6 ml-11 m-1 w-auto" />,
    zomato: <img src="/imageslogos/zomato-logo 2.png" alt="ZOMATO" className="h-6 w-auto m-1" />,
    flipkart: <img src="/imageslogos/flipkart-logo.png" alt="FLIPKART" className="h-10 ml-9 m-1 w-auto" />,
    swiggy: <img src="/imageslogos/swiggy-logo.png" alt="SWIGGY" className="h-8 w-auto m-1" />,
    meta: <img src="/imageslogos/Meta-logo.png" alt="META" className="h-6 ml-4 w-auto m-1" />,
    apple: <img src="/imageslogos/Apple-Logo 2.png" alt="APPLE" className="h-6 w-auto m-1" />,
    amazon: <img src="/imageslogos/Amazon_logo 2.png" alt="AMAZON" className="h-6 w-auto m-1" />,
    netflix: <img src="/imageslogos/Netflix_2015_logo 2.png" alt="NETFLIX" className="h-6 ml-15 w-auto " />,
    google: <img src="/imageslogos/Google-logo.png" alt="GOOGLE" className="h-6 w-auto " />,
  }

  return (
    <div className="flex items-center">{logoStyles[logo] || <span className="text-sm text-gray-600">{name}</span>}</div>
  )
}
