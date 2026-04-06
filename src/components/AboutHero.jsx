"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden bg-[#f5f3ef]">
      {/* Background Image */}
      <img
        src="/about-hero2.png" // use your herbal / product image
        alt="Aumveda"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex items-center pt-7 justify-end ">
        {/* GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-[600px] p-8 backdrop-blur-md bg-white/10 border border-white/20"
        >
          {/* Heading */}
          <h1 className="font-cormorant text-[36px] leading-[1.2] text-white mb-4">
            Aumveda
            <br />
            <span className="italic text-[#d6e5d9]">
              “Nature, in Its Purest Form”
            </span>
          </h1>

          {/* Text */}
          <p className="font-jost text-sm leading-6 text-white/80 mb-6">
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
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="relative overflow-hidden font-jost px-6 py-2 text-[11px] tracking-[0.14em] uppercase bg-[#5a7a4a] text-white"
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

      {/* Optional subtle texture */}
    </section>
  );
}
