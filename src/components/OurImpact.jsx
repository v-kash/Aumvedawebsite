"use client";

export default function OurImpactSplit() {
  return (
    <section className="relative min-h-[80vh] bg-[#eef5ef] overflow-hidden ">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Jost:wght@300;400;500&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="relative w-full min-h-[80vh] flex">

        {/* LEFT 25% (DESIGN PANEL) */}
        <div className="w-[25%] relative bg-[#eef5ef] overflow-hidden">
          <img
            src="/ourstory2.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply pointer-events-none scale-x-[-1]"
          />

          {/* Optional soft text */}
          <p className="absolute top-1/2 -translate-y-1/2 left-[-40px] rotate-[-90deg] font-cormorant text-[70px] text-[#9dcaa3] opacity-10 whitespace-nowrap">
            Impact
          </p>
        </div>

        {/* RIGHT 75% (CONTENT) */}
        <div className="w-[75%] px-[8%] pl-20 flex items-center pt-10">
          <div className="max-w-[760px] w-full">

            {/* Label */}
            <p className="font-jost text-[11px] tracking-[0.22em] uppercase mb-4 text-[#5a7a4a]">
              Our Impact
            </p>

            {/* Heading */}
            <h2 className="font-cormorant text-[48px] leading-[1.15] text-[#2f2a25] mb-8">
              Creating Impact
              <br />
              <span className="italic text-[#5a7a4a]">
                Beyond Products
              </span>
            </h2>

            {/* Intro */}
            <p className="font-jost text-[16px] leading-8 text-[#6b6b6b] mb-10 font-light max-w-[620px]">
              Every purchase you make contributes to something bigger.
              At Aumveda, we are building a system where wellness supports
              not just individuals, but entire communities and ecosystems.
            </p>

            {/* GRID POINTS (KEY CHANGE 🔥) */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-8">

              <div className="flex items-start gap-3">
                <img src="/icons8-leaf-60.png" className="w-6 h-6 mt-1" />
                <p className="font-jost text-[#5f5f5f] text-sm leading-6 font-light">
                  Supporting rural communities and small producers
                </p>
              </div>

              <div className="flex items-start gap-3">
                <img src="/icons8-leaf-60.png" className="w-6 h-6 mt-1 opacity-80" />
                <p className="font-jost text-[#5f5f5f] text-sm leading-6 font-light">
                  Encouraging sustainable and ethical production
                </p>
              </div>

              <div className="flex items-start gap-3">
                <img src="/icons8-leaf-60.png" className="w-6 h-6 mt-1 opacity-70" />
                <p className="font-jost text-[#5f5f5f] text-sm leading-6 font-light">
                  Promoting awareness of natural living
                </p>
              </div>

              <div className="flex items-start gap-3">
                <img src="/icons8-leaf-60.png" className="w-6 h-6 mt-1 opacity-60" />
                <p className="font-jost text-[#5f5f5f] text-sm leading-6 font-light">
                  Creating a conscious and mindful lifestyle ecosystem
                </p>
              </div>

            </div>

            {/* Divider (VERY IMPORTANT FOR STRUCTURE) */}
            <div className="w-12 h-[1px] bg-[#5a7a4a] mb-6 opacity-40"></div>

            {/* Closing Statement */}
            <p className="font-cormorant text-[22px] italic text-[#3d2f2f] leading-relaxed ">
              We are not just a marketplace — we are building a movement
              toward conscious living.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}