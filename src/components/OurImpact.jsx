"use client";

export default function OurImpactSplit() {
  return (
    <section className="relative bg-[#eef5ef] overflow-hidden">

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Jost:wght@300;400;500&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      {/* ================= MOBILE VERSION ================= */}
      <div className="block lg:hidden px-5 py-12 relative">

        {/* Background soft image */}
        <img
          src="/ourstory2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />

        <div className="relative z-10  ">

          <p className="font-jost text-[10px] text-center tracking-[0.22em] uppercase mb-3 text-[#5a7a4a]">
            Our Impact
          </p>

          <h2 className="font-cormorant text-[28px] leading-[1.2] text-center text-[#2f2a25] mb-8">
            Creating Impact <br />
            <span className="italic text-[#5a7a4a]">Beyond Products</span>
          </h2>

          <p className="font-jost text-[14px] leading-7 text-[#6b6b6b] mb-6 font-light">
            Every purchase you make contributes to something bigger —
            supporting communities, sustainability, and conscious living.
          </p>

          {/* Clean list instead of grid */}
          <div className="space-y-4 mb-6">

            {[
              "Supporting rural communities and small producers",
              "Encouraging sustainable and ethical production",
              "Promoting awareness of natural living",
              "Creating a conscious lifestyle ecosystem",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src="/icons8-leaf-60.png" className="w-5 h-5 mt-1 opacity-80" />
                <p className="font-jost text-[13px] text-[#5f5f5f] leading-6 font-light">
                  {text}
                </p>
              </div>
            ))}

          </div>

          <div className="w-10 h-[1px] bg-[#5a7a4a] mb-4 opacity-40"></div>

          <p className="font-cormorant text-[18px] italic text-[#3d2f2f] leading-relaxed">
            A movement toward conscious living.
          </p>

        </div>
      </div>

      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden lg:flex relative w-full min-h-[80vh]">

        {/* LEFT PANEL */}
        <div className="w-[25%] relative bg-[#eef5ef] overflow-hidden">
          <img
            src="/ourstory2.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply pointer-events-none scale-x-[-1]"
          />

          <p className="absolute top-1/2 -translate-y-1/2 left-[-40px] rotate-[-90deg] font-cormorant text-[70px] text-[#9dcaa3] opacity-10 whitespace-nowrap">
            Impact
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[75%] px-[8%] pl-20 flex items-center">
          <div className="max-w-[760px] w-full">

            <p className="font-jost text-[11px] tracking-[0.22em] uppercase mb-4 text-[#5a7a4a]">
              Our Impact
            </p>

            <h2 className="font-cormorant text-[48px] leading-[1.15] text-[#2f2a25] mb-8">
              Creating Impact
              <br />
              <span className="italic text-[#5a7a4a]">Beyond Products</span>
            </h2>

            <p className="font-jost text-[16px] leading-8 text-[#6b6b6b] mb-10 font-light max-w-[620px]">
              Every purchase you make contributes to something bigger.
              At Aumveda, we are building a system where wellness supports
              not just individuals, but entire communities and ecosystems.
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-8">
              {[
                "Supporting rural communities and small producers",
                "Encouraging sustainable and ethical production",
                "Promoting awareness of natural living",
                "Creating a conscious lifestyle ecosystem",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img src="/icons8-leaf-60.png" className="w-6 h-6 mt-1" />
                  <p className="font-jost text-[#5f5f5f] text-sm leading-6 font-light">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-12 h-[1px] bg-[#5a7a4a] mb-6 opacity-40"></div>

            <p className="font-cormorant text-[22px] italic text-[#3d2f2f] leading-relaxed">
              We are not just a marketplace — we are building a movement
              toward conscious living.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}