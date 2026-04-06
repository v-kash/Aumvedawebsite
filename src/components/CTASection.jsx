"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-16 px-[8%] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/CTA.png')", // replace with your image
        }}
      />

      {/* 🌫️ Overlay (important for readability) */}
      <div className="absolute inset-0 bg-[#000000]/60 " />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-[Cormorant_Garamond] text-[clamp(38px,5vw,56px)] font-light text-[#cfb8b0] leading-tight"
        >
          Reconnect With Nature’s Wisdom
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-[#a49898] text-md max-w-[520px] mx-auto leading-relaxed"
        >
          From sourcing to delivery, every step reflects care, integrity,
          and a commitment to natural living.
        </motion.p>

        {/* BUTTONS */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          {/* PRIMARY BUTTON */}
          <motion.button
  onClick={() => {
    const section = document.getElementById("categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="group relative px-8 py-3 text-sm overflow-hidden border border-[#a0c78c] text-[#a0c78c]"
>
  <span className="relative z-10 transition-all duration-300 group-hover:text-white">
    Our caregories
  </span>

  {/* Slide background */}
  <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[#618350]" />
</motion.button>

  {/* SECONDARY BUTTON */}
 <motion.button
  onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="group relative px-8 py-3 text-sm overflow-hidden border border-[#d8b3b3] text-[#d8b3b3]"
>
  <span className="relative z-10 transition-all duration-300 group-hover:text-white">
    Talk to Us
  </span>

  <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[#ae8080]" />
</motion.button>
        </div>
      </div>
    </section>
  );
}