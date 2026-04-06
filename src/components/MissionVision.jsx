"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative py-16 px-[8%]  overflow-hidden">
      
      {/* 🌿 Background Image */}
      <div
        className="absolute inset-0  pointer-events-none"
        style={{
          backgroundImage: "url('/mission.png')", // replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* <div className="absolute inset-0 bg-black/40 pointer-events-none" /> */}

      {/* Heading */}
      <div className="text-center mb-8 relative z-10">
        <p className="font-jost text-left text-[11px] tracking-[0.22em] uppercase text-[#2e541b]">
          Our Purpose
        </p>

        <h2 className="font-cormorant text-[42px] text-[#2f2a25] leading-tight">
          Mission & Vision
        </h2>
      </div>

      {/* 🌿 Rectangle Container */}
      <div className="relative z-10 max-w-5xl mx-auto">
        
        <div className="relative bg-white/60 backdrop-blur-md border border-[#e6e1d8] rounded-[8px] px-16 py-14 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
           <div className="absolute inset-4 border border-[#e0dbd2]  pointer-events-none" />
          {/* Divider */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[1px] bg-[#e0dbd2]" />

          <div className="grid grid-cols-2 gap-16">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pr-10"
            >
              <h3 className="font-cormorant text-[26px] mb-4 text-[#3d2f2f]">
                Our Mission
              </h3>

              <p className="font-jost text-[15px] leading-7 text-[#6b6b6b] font-light">
                To make authentic natural wellness accessible to everyone. We aim to
                simplify conscious living by offering carefully curated organic,
                herbal, and eco-friendly products through a seamless digital
                experience.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="pl-10"
            >
              <h3 className="font-cormorant text-[26px] mb-4 text-[#3d2f2f]">
                Our Vision
              </h3>

              <p className="font-jost text-[15px] leading-7 text-[#6b6b6b] font-light">
                To build a global ecosystem for natural living. We envision a future
                where sustainable choices are effortless, and traditional producers
                are empowered through digital access and fair opportunities.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom subtle line text */}
      <p className="text-center mt-8 font-jost text-[12px] tracking-[0.2em] text-[#544141] uppercase relative z-10">
        Built on trust, transparency & tradition
      </p>
    </section>
  );
}