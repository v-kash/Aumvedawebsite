"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-[8%] overflow-hidden">

      {/* 🌿 Background Image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/mission.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Heading */}
      <div className="mb-8 relative z-10 text-center sm:text-center">
        <p className="font-jost text-[10px] mb-3 md:mb-0 sm:text-[11px] tracking-[0.22em] uppercase text-[#2e541b] text-center sm:text-left">
          Our Purpose
        </p>
        <h2 className="font-cormorant text-[28px] sm:text-[42px] text-[#2f2a25] leading-tight">
          Mission & Vision
        </h2>
      </div>

      {/* 🌿 Rectangle Container */}
      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="relative bg-white/60 backdrop-blur-md border border-[#e6e1d8] rounded-[8px] px-5 py-6 sm:px-10 sm:py-10 lg:px-16 lg:py-14 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

          {/* Inner decorative border — hidden on mobile */}
          <div className="hidden sm:block absolute inset-4 border border-[#e0dbd2] pointer-events-none" />

          {/* Vertical Divider — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-[#e0dbd2]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pr-10 text-center sm:text-left"
            >
              <h3 className="font-cormorant text-[22px] sm:text-[26px] mb-3 sm:mb-4 text-[#3d2f2f]">
                Our Mission
              </h3>
              <p className="font-jost text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-[#6b6b6b] font-light">
                To make authentic natural wellness accessible to everyone. We aim to
                simplify conscious living by offering carefully curated organic,
                herbal, and eco-friendly products through a seamless digital
                experience.
              </p>
            </motion.div>

            {/* 🔹 Divider for mobile (NOW BETWEEN ITEMS) */}
            <div className="block lg:hidden w-full h-[1px] bg-[#e0dbd2]" />

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-10 text-center sm:text-left"
            >
              <h3 className="font-cormorant text-[22px] sm:text-[26px] mb-3 sm:mb-4 text-[#3d2f2f]">
                Our Vision
              </h3>
              <p className="font-jost text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-[#6b6b6b] font-light">
                To build a global ecosystem for natural living. We envision a future
                where sustainable choices are effortless, and traditional producers
                are empowered through digital access and fair opportunities.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom subtle line text */}
      <p className="text-center mt-6 sm:mt-8 font-jost text-[11px] sm:text-[12px] tracking-[0.2em] text-[#544141] uppercase relative z-10">
        Built on trust, transparency & tradition
      </p>
    </section>
  );
}