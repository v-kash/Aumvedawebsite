"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[65vh] sm:h-[80vh] overflow-hidden bg-[#f5f3ef]">
      {/* Background Image */}
      <img
        src="/about-hero2.png"
        alt="Aumveda"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex items-end sm:items-center justify-center sm:justify-end px-4 sm:px-0 pb-6 sm:pb-0">
        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="
            w-full 
            max-w-[100%] 
            sm:max-w-[600px] 
            p-5 sm:p-8
            mt-5
            backdrop-blur-md 
            bg-white/10 
            border border-white/20
          "
        >
          {/* Heading */}
          <h1 className="font-cormorant text-[26px] sm:text-[36px] leading-[1.2] text-white mb-3 sm:mb-4">
            Aumveda
            <br />
            <span className="italic text-[#d6e5d9]">
              “Nature, in Its Purest Form”
            </span>
          </h1>

          {/* Text */}
          <p className="font-jost text-[13px] sm:text-sm leading-5 sm:leading-6 text-white/80 mb-5 sm:mb-6">
            Rooted in ancient wisdom, we bring authentic Ayurvedic and organic
            wellness closer to your everyday life — naturally, ethically, and
            consciously.
          </p>

          {/* CTA */}
          <motion.button
            onClick={() => {
              const section = document.getElementById("ourstory");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="relative overflow-hidden font-jost px-5 sm:px-6 py-2 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase bg-[#5a7a4a] text-white"
          >
            <span className="relative z-10">Our Story</span>

            <motion.span
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}