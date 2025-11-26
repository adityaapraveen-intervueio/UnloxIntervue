export function LogoBanner() {
  const logos = [
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4cb57cbb9e3d2d470e08_image%2080.png",
      alt: "Logo 1",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4d132ffcafcbe48cac95_image%2081.png",
      alt: "Logo 2",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e5594c84f21ccbc5bcf_Siemens-logo%201.svg",
      alt: "Siemens",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4fff9e6470e9caa4e159_image%20(3).png",
      alt: "Logo 4",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/673ac9654e601b552029de93_image%2083.png",
      alt: "Logo 5",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4ea7569bf012ae877e15_images%20(6)%201.png",
      alt: "Logo 6",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e29690ab92c606429b3_General_Mills_logo.svg%201.svg",
      alt: "General Mills",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e30fbc455f4376f9f02_M2P.svg",
      alt: "M2P",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56c4b4324f210c2d30ff4_NSE-vector.webp",
      alt: "NSE",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56d475cf0a3641c6d7b57_kreditbee.webp",
      alt: "KreditBee",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56dd2a947a58eff028c0e_randomtrees.webp",
      alt: "Random Trees",
    },
    {
      src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56e1a86c286861170825f_recro.webp",
      alt: "Recro",
    },
  ];

  return (
    <div className="bg-[#FF6B5B] py-4">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        {/* top text row (your original content) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <span className="text-sm text-white/80">
            Visionaries grow with Intervue
          </span>

          
        </div>

        {/* marquee strip */}
        <div className="overflow-hidden">
          <div className="relative flex gap-8">
            {/* track 1 */}
            <div className="marquee-track">
              {logos.map((logo, i) => (
                <img
                  key={`track1-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-pill"
                />
              ))}
            </div>

            {/* track 2 (duplicate for infinite scroll) */}
            <div className="marquee-track marquee-track--2">
              {logos.map((logo, i) => (
                <img
                  key={`track2-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-pill"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
