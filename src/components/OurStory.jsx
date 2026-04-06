"use client";

import { motion } from "framer-motion";

export default function OurStorySplit() {
  return (
    <section id="ourstory" className="relative min-h-[80vh]  bg-[#eef5ef] overflow-hidden">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Jost:wght@300;400;500&display=swap');
        

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="relative w-full min-h-[80vh] flex">
        {/* LEFT 75% */}
        <div className="w-[75%] px-[8%] pr-20">
          <div className="pt-24 max-w-xl">
            {/* Label */}
            <p className="font-jost text-[11px] tracking-[0.22em] uppercase mb-4 text-[#5a7a4a]">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="font-cormorant text-[44px] leading-[1.15] text-[#2f2a25] mb-6">
              Rooted in Nature,
              <br />
              <span className="italic text-[#5a7a4a]">Guided by Ayurveda</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="font-jost text-[15px] leading-7 text-[#6b6b6b] mb-5 font-light">
              Aumveda was founded to make authentic, natural wellness accessible
              in today’s world. In a space filled with uncertainty, we bring
              clarity through transparent, trusted Ayurvedic products. We work
              closely with traditional producers, farmers, and artisans to
              preserve ancient practices. Blending tradition with modern living,
              we create a seamless everyday wellness experience.
            </p>

            {/* Paragraph 2 */}
            {/* <p className="font-jost text-[15px] leading-7 text-[#7a7a7a] mb-8 font-light">
              By working closely with traditional producers, farmers, and
              artisans, we preserve the essence of ancient practices while
              making them relevant for today’s lifestyle — creating a seamless
              bridge between tradition and everyday living.
            </p> */}

            {/* HIGHLIGHT POINTS */}
            <div className="flex gap-10 pt-3 mb-8">
              {/* Authentic Sourcing */}
              <div className="flex items-start gap-3">
                <img
                  src="/icons8-leaf-60.png"
                  alt="Authentic Sourcing"
                  className="w-8 h-8 object-contain mt-3"
                />
                <div>
                  <h4 className="font-cormorant text-[18px] text-[#3d2f2f]">
                    Authentic Sourcing
                  </h4>
                  <p className="font-jost text-sm text-[#7a7a7a] font-light">
                    Direct partnerships with trusted producers
                  </p>
                </div>
              </div>

              {/* Conscious Living */}
              <div className="flex items-start gap-3">
                <img
                  src="/icons8-leaf-60.png"
                  alt="Conscious Living"
                  className="w-8 h-8 object-contain mt-3 opacity-80"
                />
                <div>
                  <h4 className="font-cormorant text-[18px] text-[#3d2f2f]">
                    Conscious Living
                  </h4>
                  <p className="font-jost text-sm text-[#7a7a7a] font-light">
                    Designed for sustainable, mindful lifestyles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25%] bg-[#eef5ef] absolute right-0 top-0 bottom-0 overflow-hidden">
          {/* DESIGN IMAGE */}
          <img
            src="/ourstory2.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply pointer-events-none"
          />
        </div>

        {/* FLOATING IMAGE (CENTER BORDER) */}
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="absolute top-1/2 -translate-y-1/2 left-[68%] -translate-x-1/2 z-10"
>
  <div className="relative w-[460px] h-[320px] overflow-visible">

    {/* BIG CURSIVE TEXT (left side visible) */}
    <p className="absolute -top-24 -left-24 font-cursive text-[80px] text-[#9dcaa3] opacity-15 whitespace-nowrap pointer-events-none">
      Pure Essence 
    </p>

   

    {/* SMALL TAG (keep this) */}
    <p className="absolute bottom-[-18px] left-4 font-jost text-[11px] tracking-[0.25em] text-[#5e6f55] uppercase">
      Since Tradition
    </p>

    {/* IMAGE */}
    <img
      src="/veda1.jpg"
      alt=""
      className="relative w-full h-full object-cover shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
}
