"use client";

import { motion } from "framer-motion";

const visions = [
  {
    title: "Expanding Horizons",
    subtitle: "Growth",
    year: "01",
    text: "adding more natural products and working with trusted partners.",
  },
  {
    title: "Personalized Wellness",
    subtitle: "Experience",
    year: "02",
    text: "aim to give you wellness recommendations that suit your lifestyle.",
  },
  {
    title: "Global Vision",
    subtitle: "Reach",
    year: "03",
    text: "bring authentic Ayurveda from India to people around the world.",
  },
  {
    title: "Conscious Ecosystem",
    subtitle: "Future",
    year: "04",
    text: "building a system that supports mindful and sustainable living.",
  },
];

export default function FutureVision() {
  return (
    <section className="py-12 sm:py-16 px-5 sm:px-[8%] bg-[#f8f4ef]">

      {/* Heading */}
      <div className="mb-8 sm:mb-12 text-center sm:text-left">
        <p className="font-jost text-[10px] mb-3 md:mb-0 lg:mb-0 sm:text-[11px] tracking-[0.18em] uppercase text-[#6f8a6a]">
          Future Vision
        </p>

        <h2 className="font-cormorant text-[28px] lg:text-center sm:text-[42px]  text-[#2f2a25]">
          Looking Ahead
        </h2>
      </div> 

      {/* GRID (same layout, just responsive columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {visions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-5 sm:p-6 "
          >

            {/* 🔹 Top Right Corner (smaller on mobile) */}
            <span
              className="
              absolute top-2 right-2 
              w-14 h-8 sm:w-24 sm:h-12
              border-t border-r border-[#e6e1d8]
              transition-all duration-500 ease-out
              group-hover:w-[calc(100%-1rem)] 
              group-hover:h-[calc(100%-1rem)]
              pointer-events-none
            "
            ></span>

            {/* 🔹 Bottom Left Corner */}
            <span
              className="
              absolute bottom-2 left-2 
              w-14 h-8 sm:w-24 sm:h-12
              border-b border-l border-[#e6e1d8]
              transition-all duration-500 ease-out
              group-hover:w-[calc(100%-1rem)] 
              group-hover:h-[calc(100%-1rem)]
              pointer-events-none
            "
            ></span>

            {/* Title */}
            <h3 className="font-cormorant text-[17px] sm:text-[19px] text-[#2f2a25] mb-1">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-[12px] tracking-[0.15em] text-[#9a9a9a] mb-3 sm:mb-4 uppercase">
              {item.subtitle}
            </p>

            {/* Number */}
            <div className="flex items-center mb-3 sm:mb-4">
              <span className="text-[#5a7a4a] text-[10px] sm:text-[11px] px-2 py-1 border border-[#e6e1d8]">
                {item.year}
              </span>
            </div>

            {/* Text */}
            <p className="text-[13px] sm:text-[14px] text-[#6b6b6b] leading-6 font-light">
              {item.text}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}