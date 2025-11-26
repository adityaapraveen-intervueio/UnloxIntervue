export function LogoBanner() {
  const logos = [
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4cb57cbb9e3d2d470e08_image%2080.png", alt: "Logo 1" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4d132ffcafcbe48cac95_image%2081.png", alt: "Logo 2" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e5594c84f21ccbc5bcf_Siemens-logo%201.svg", alt: "Siemens" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4fff9e6470e9caa4e159_image%20(3).png", alt: "Logo 4" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/673ac9654e601b552029de93_image%2083.png", alt: "Logo 5" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4ea7569bf012ae877e15_images%20(6)%201.png", alt: "Logo 6" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e29690ab92c606429b3_General_Mills_logo.svg%201.svg", alt: "General Mills" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e30fbc455f4376f9f02_M2P.svg", alt: "M2P" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56c4b4324f210c2d30ff4_NSE-vector.webp", alt: "NSE" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56d475cf0a3641c6d7b57_kreditbee.webp", alt: "KreditBee" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56dd2a947a58eff028c0e_randomtrees.webp", alt: "Random Trees" },
    { src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56e1a86c286861170825f_recro.webp", alt: "Recro" },
  ];

  const renderLogos = (prefix = "") =>
    logos.map((logo, i) => (
      <div key={`${prefix}${i}`} className="px-4">
        <img
          src={logo.src}
          alt={logo.alt}
          className="logo-pill bg-white/95 rounded-full px-4 py-2 shadow-sm border border-white/40"
        />
      </div>
    ));

  return (
    <div className="bg-gradient-to-r from-[#ff6b5b] to-[#ff836d] py-4">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-center text-white/90 text-sm">
          <span className="font-semibold">Visionaries grow with Intervue</span>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-white/10 border border-white/20 backdrop-blur">
          <div className="relative flex gap-8 py-3">
            <div className="marquee-track">{renderLogos()}</div>
            <div className="marquee-track marquee-track--2">{renderLogos("dup-")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
