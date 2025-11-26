export function LogoBanner() {
  return (
    <div className="bg-[#FF6B5B] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 md:gap-16 text-white">
          <span className="text-sm text-white/80">Visionaries grow with Intervue</span>
          <div className="flex items-center gap-8 md:gap-12">
            {/* ISRO Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#FF6B5B] text-xs font-bold">ISRO</span>
              </div>
              <span className="font-semibold text-sm hidden sm:block">ISRO</span>
            </div>
            {/* Coinswitch */}
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
              <span className="font-semibold text-sm hidden sm:block">coinswitch</span>
            </div>
            {/* Rakuten */}
            <span className="font-bold text-lg">Rakuten</span>
            {/* zazz */}
            <span className="font-semibold italic text-lg">zazz</span>
          </div>
        </div>
      </div>
    </div>
  )
}
