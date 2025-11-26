export function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-blue-50/50 to-white overflow-hidden"
      style={{
        backgroundImage: "url('/imageslogos/background-grids.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "70px",
      }}
    >
      {/* Grid Pattern Background */}
      {/* <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      /> */}

      {/* Diagonal lines in background */}
      <div className="absolute left-0 top-0 w-full h-full opacity-10">
        {/* <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="400" y2="600" stroke="#3B82F6" strokeWidth="2" />
          <line x1="100" y1="0" x2="500" y2="600" stroke="#3B82F6" strokeWidth="2" />
        </svg> */}

      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Partnership Badge */}
        <div className="flex justify-center mb-8">
          <div
            className="rounded-full p-[2.5px]"
            style={{
              background: "linear-gradient(90deg, #000000 0%, #ffffffff 45%, #ffffffff 50%, #ffffffff 55%, #1e90ff 100%)",
            }}
          >
            <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-4">
              {/* <span className="font-semibold text-gray-800">intervue</span> */}
              <img
                src="/imageslogos/intervue-logo.png"
                alt="Unlox popup"
                className="w-37 h-10 object-contain"
              />
              <span className="text-gray-800">X</span>
              <div className="flex items-center gap-1">
                {/* <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center"> */}
                {/* <span className="text-white text-xs font-bold">%</span> */}

                {/* </div> */}
                {/* <span className="font-semibold text-gray-800">UNLOX</span> */}
                <img
                  src="/imageslogos/unlox-logo.png"
                  alt="Unlox popup"
                  className="w-40 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Floating Icons */}
            <div className="absolute top-10  left-2 w-30 h-30 rounded-lg flex items-center justify-center rotate-12 z-10">
              <img
                src="/imageslogos/unlox-popup.png"
                alt="Unlox popup"
                className="w-50 h-50 object-contain"
              />
            </div>
            <div className="absolute top-33 left-88 w-30 h-30 rounded-lg flex items-center justify-center -rotate-20 z-10">
              <img
                src="/imageslogos/intervue-popup.png"
                alt="Unlox popup"
                className="w-50 h-50 object-contain"
              />
            </div>

            <h1 className="text-7.5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              land your dream job with the help
              <br />
              of your future
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-500">colleagues.</span>
                <span className="absolute inset-0 border-2 border-dashed border-blue-400 rounded-lg -m-2"></span>
              </span>
            </h1>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Blue circle background */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-74 h-74 lg:w-80 lg:h-80 bg-blue-500 rounded-full -z-10"></div>
              {/* Woman with laptop image placeholder */}
              <img
                src="/imageslogos/hero-image.png"
                alt="Professional woman with laptop"
                className="relative z-10 h-80 lg:h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
