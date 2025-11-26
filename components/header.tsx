import Image from "next/image"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <Image
          src="/imageslogos/intervue-logo.png"
          alt="Intervue"
          width={120}
          height={32}
          priority
        />
      </div>
      <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
        Login
      </button>
    </header>
  )
}
