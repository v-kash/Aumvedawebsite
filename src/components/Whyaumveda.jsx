"use client";

import { motion } from "framer-motion";
import PremiumTreatments from "./TreatmentCards";

export default function WhyAumveda() {
  return (
    <section className="relative py-16 px-[8%] bg-[#f8f4ef] overflow-hidden">
      {/* texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d6d2c8_1px,transparent_1px)] bg-[length:28px_28px]" />

      {/* blur accents */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#dceadf] blur-3xl opacity-40 rounded-full" />
      <div className="absolute bottom-10 left-10 w-52 h-52 bg-[#e8ddd0] blur-3xl opacity-40 rounded-full" />

      {/* 🔥 SAME TOP LABEL */}
      <div className="absolute left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 mt- md:mt-0 top-10 z-10 pointer-events-none">
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="w-6 md:w-10 h-[1px] bg-[#5a7a4a]/40" />

          <p className="font-cormorant text-[12px] md:text-[14px] tracking-[0.2em] md:tracking-[0.5em] text-[#5a7a4a] uppercase whitespace-nowrap text-center">

            Why Us
          </p>
          <div className="w-10 h-[1px] bg-[#5a7a4a]/40" />
        </div>
      </div>
      <div className="absolute top-0 left-0 opacity-[0.3] pointer-events-none">
        <img
          src="/leaf_transparent.png"
          className="w-[300px] md:w-[950px] -translate-x-1/3 -translate-y-1/4 rotate-[120deg]"
        />
      </div>

      <div className="absolute bottom-0 right-0 opacity-[0.3] pointer-events-none">
        <img
          src="/leaf_transparent.png"
          className="w-[300px] md:w-[950px] translate-x-1/3 translate-y-1/4 rotate-[300deg]"
          alt=""
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* HEADER — CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[700px] mb-12"
        >
          {/* accent line */}

          {/* heading */}
          <h2 className="font-cormorant text-[38px] mt-6 md:mt-0 md:text-[54px] leading-[1.2] text-[#3d2f2f]">
            Why Aumveda{" "}
          </h2>

          {/* paragraph */}
          <div className="mt-6 font-jost text-[15px] leading-8 text-[#5f5f5f]">
            <p>
              Built to solve the trust gap in wellness — connecting people with
              authentic Ayurvedic products and transparent sourcing.
            </p>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch ">
          <PremiumTreatments
            label="AUTHENTIC SOURCING"
            text="We partner directly with traditional Ayurvedic artisans to preserve purity, origin, and time-tested practices."
          />

          <PremiumTreatments
            label="TRANSPARENCY & TRUST"
            text="Every ingredient and process is clearly shared — no hidden claims, only honest wellness practices."
          />

          <PremiumTreatments
            label="EMPOWERING PRODUCERS"
            text="We help skilled creators reach modern audiences while sustaining their heritage and livelihoods."
          />
        </div>

        {/* BOTTOM DIVIDER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex items-center gap-6 w-full max-w-6xl"
        >
          <div className="flex-1 h-[1px] bg-[#ebe5de]" />

          <p className="font-cormorant italic text-[#8a7d6a] text-[14px] tracking-wide">
            Nature Led • People Trusted
          </p>

          <div className="flex-1 h-[1px] bg-[#ebe5de]" />
        </motion.div>
      </div>
    </section>
  );
}
