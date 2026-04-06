"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-16 px-[8%] bg-[#eef5ef] overflow-hidden">
      {/* subtle texture (same as hero) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d6d2c8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* soft blur accents */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#dceadf] blur-3xl opacity-50 rounded-full" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#dceadf] blur-3xl opacity-40 rounded-full" />

      <div className="absolute left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 top-10 md:top-10 z-20 pointer-events-none">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="w-8 md:w-10 h-[1px] bg-[#5a7a4a]/40"></div>

          <p className="font-cormorant text-[12px] md:text-[14px] tracking-[0.4em] md:tracking-[0.5em] text-[#5a7a4a] uppercase whitespace-nowrap">
            About
          </p>

          <div className="w-8 md:w-10 h-[1px] bg-[#5a7a4a]/40"></div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-20 pt-12">
        {/* LEFT — IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-[320px] md:w-[420px]">
            {/* soft blur background accents */}
            <div className="absolute -top-10 right-10 w-32 h-32 bg-[#cfe3d4] blur-2xl opacity-50 " />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#dceadf] blur-3xl opacity-40 " />

            {/* decorative border frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#d6e5d9] " />

            {/* background layer (depth) */}
            <div className="absolute w-full h-full  top-6 left-6 bg-gradient-to-br from-[#dceadf] to-[#eef5ef]" />

            {/* MAIN IMAGE */}
            <img
              src="/about3.png"
              alt="Ayurveda"
              className="relative h-[420px] md:h-[260px] w-full object-cover shadow-[0_25px_60px_rgba(0,0,0,0.08)] z-10"
            />

            {/* SMALL OVERLAP IMAGE (key element) */}
            <img
              src="/about-small3.png"
              alt="Product detail"
              className="absolute -bottom-6 -right-6 w-20 h-20 md:w-38 md:h-25 object-cover shadow-lg z-20 "
            />
          </div>
        </motion.div>

        {/* RIGHT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:w-1/2 max-w-[480px]"
        >
          {/* micro label */}
          <p className="font-jost text-[12px] tracking-[0.25em] uppercase text-[#5a7a4a] mb-4">
            Aumveda Wellness
          </p>

          {/* accent line */}
          <div className="w-12 h-[2px] bg-[#5a7a4a] mb-6" />

          {/* heading */}
          <h2 className="font-cormorant text-[38px] md:text-[54px] leading-[1.2] text-[#3d2f2f]">
            Rooted in Nature, <br />
            <span className="italic text-[#5a7a4a]">
              Designed for Conscious Living
            </span>
          </h2>

          {/* editorial text (IMPORTANT CHANGE) */}
          <div className="mt-8 space-y-4 font-jost text-[15px] leading-7 text-[#5f5f5f]">
            {/* Point 1 */}
            <div className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-1 text-[#5a7a4a] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>

              <p>
                We connect you with
                <span>
                  {" "}
                  <span className="text-[#5a7a4a] font-medium">
                    authentic Ayurvedic
                  </span>{" "}
                  and{" "}
                  <span className="text-[#5a7a4a] font-medium">
                    natural products
                  </span>{" "}
                </span>
                carefully sourced from trusted producers across India.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-1 text-[#5a7a4a] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>

              <p>
                Every product is selected for its
                <span className="text-[#5a7a4a] font-medium">
                  {" "}
                  purity
                </span>,{" "}
                <span className="text-[#5a7a4a] font-medium">
                  {" "}
                  transparency
                </span>
                , and{" "}
                <span className="text-[#5a7a4a] font-medium">
                  {" "}
                  effectiveness
                </span>
                — so you know exactly what you’re using.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-1 text-[#5a7a4a] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12l5 5L20 7"
                />
              </svg>

              <p>
                Rooted in
                <span className="text-[#5a7a4a] font-medium">
                  {" "}
                  tradition
                </span>{" "}
                and adapted for{" "}
                <span className="text-[#5a7a4a] font-medium">
                  {" "}
                  modern lifestyles
                </span>
                , making conscious living simple and accessible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* bottom accent line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-12 flex items-center gap-6"
      >
        <div className="flex-1 h-[1px] bg-[#d6e5d9]" />

        <p className="font-cormorant italic text-[#5a7a4a] text-[14px] tracking-wide">
          Pure • Trusted • Sustainable
        </p>

        <div className="flex-1 h-[1px] bg-[#d6e5d9]" />
      </motion.div>
    </section>
  );
}

//   <div className="absolute top-0 left-0 opacity-[0.3] pointer-events-none">
//   <img
//     src="/leaf_transparent.png"
//     className="w-[300px] md:w-[900px] -translate-x-1/3 -translate-y-1/4 rotate-[120deg]"
//   />
// </div>
