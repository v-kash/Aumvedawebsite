"use client";

import { motion } from "framer-motion";

export default function OurStorySplit() {
  return (
    <section
      id="ourstory"
      className="relative min-h-[80vh] bg-[#eef5ef] overflow-hidden"
    >
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
      `}</style>

      <div className="relative w-full flex flex-col lg:flex-row min-h-[80vh]">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[75%] px-5 sm:px-8 md:px-[8%] lg:pr-20">
          <div className="pt-12 sm:pt-18 lg:pt-18 max-w-xl mx-auto lg:mx-0 text-center sm:text-left">
            {/* Label */}
            <p className="font-jost text-[10px]  sm:text-[11px] tracking-[0.22em] uppercase mb-3 text-[#5a7a4a]">
              Our Story
            </p>

            {/* Heading */}
            <h2
              className="font-cormorant 
    text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px]
    leading-[1.2] text-[#2f2a25] mb-8"
            >
              Rooted in Nature,
              <br />
              <span className="italic text-[#5a7a4a]">Guided by Ayurveda</span>
            </h2>

            {/* 🔥 IMAGE (MOVE UP FOR BETTER FLOW ON MOBILE) */}
            <div className="block lg:hidden mb-6">
              <img
                src="/veda1.jpg"
                alt=""
                className="w-full h-[220px] object-cover shadow-lg"
              />
            </div>

            {/* Text */}
            <p
              className="font-jost 
              text-[14px] sm:text-[15px]
              leading-7 text-[#6b6b6b] mb-6 font-light"
            >
              Aumveda was founded to make authentic, natural wellness accessible
              in today’s world. In a space filled with uncertainty, we bring
              clarity through transparent, trusted Ayurvedic products. We work
              closely with traditional producers, farmers, and artisans to
              preserve ancient practices. Blending tradition with modern living,
              we create a seamless everyday wellness experience.
            </p>

            {/* Highlights */}
            {/* Highlights */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-4 mb-10">
              {/* Item 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-3">
                <img
                  src="/icons8-leaf-60.png"
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 mt-2"
                />
                <div>
                  <h4 className="font-cormorant text-[17px] sm:text-[18px] text-[#3d2f2f]">
                    Authentic Sourcing
                  </h4>
                  <p className="font-jost text-[13px] sm:text-sm text-[#7a7a7a] font-light">
                    Direct partnerships with trusted producers
                  </p>
                </div>
              </div>

              {/* Divider (mobile only) */}
              <div className="block sm:hidden w-12 h-[1px] bg-[#dcd6cc] mx-auto" />

              {/* Item 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-3">
                <img
                  src="/icons8-leaf-60.png"
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 mt-2"
                />
                <div>
                  <h4 className="font-cormorant text-[17px] sm:text-[18px] text-[#3d2f2f]">
                    Conscious Living
                  </h4>
                  <p className="font-jost text-[13px] sm:text-sm text-[#7a7a7a] font-light">
                    Designed for sustainable, mindful lifestyles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BACKGROUND (DESKTOP ONLY) */}
        <div className="hidden lg:block w-[25%] bg-[#eef5ef] absolute right-0 top-0 bottom-0 overflow-hidden">
          <img
            src="/ourstory2.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply pointer-events-none"
          />
        </div>

        {/* FLOATING IMAGE (DESKTOP ONLY) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[68%] -translate-x-1/2 z-10"
        >
          <div className="relative w-[420px] xl:w-[460px] h-[300px] xl:h-[320px]">
            <p className="absolute -top-24 -left-20 font-cursive text-[70px] xl:text-[80px] text-[#9dcaa3] opacity-15 whitespace-nowrap pointer-events-none">
              Pure Essence
            </p>

            <p className="absolute bottom-[-18px] left-4 font-jost text-[11px] tracking-[0.25em] text-[#5e6f55] uppercase">
              Since Tradition
            </p>

            <img
              src="/veda1.jpg"
              alt=""
              className="w-full h-full object-cover shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
