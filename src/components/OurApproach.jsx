"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const approach = [
  {
    num: "01",
    title: ["Curated", "Selection"],
    desc: "Every product is carefully chosen from trusted producers to ensure authenticity and quality.",
    sub: "Focused on purity, sourcing integrity, and alignment with natural living.",
    image: "/veda4.jpg",
  },
  {
    num: "02",
    title: ["Verified", "Transparency"],
    desc: "Clear ingredient details and sourcing information help you make informed decisions.",
    sub: "No hidden processes — just honest, traceable practices you can trust.",
    image: "/veda2.jpg",
  },
  {
    num: "03",
    title: ["Direct", "Partnerships"],
    desc: "We collaborate closely with artisans and small-scale producers.",
    sub: "Preserving tradition while ensuring fair practices and long-term sustainability.",
    image: "/veda3.jpg",
  },
];

export default function OurApproach() {
  const [active, setActive] = useState(1);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        opacity: i === active ? 1 : 0.6,
        y: i === active ? 0 : 10,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, [active]);

  return (
    <section className="relative bg-[#f5f0ea] font-[Jost] pb-16 overflow-hidden">

      {/* TOP LABEL */}
      <div className="absolute left-4 md:left-16 top-10 z-10 pointer-events-none max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-6">
        <div className="flex items-center gap-4 max-md:gap-2">
          <div className="w-10 h-[1px] bg-[#5a7a4a]/40 max-md:w-6" />
          <p className="font-cormorant text-[14px] tracking-[0.5em] text-[#5a7a4a] uppercase max-md:text-[12px] max-md:tracking-[0.3em]">
            Our Approach
          </p>
          <div className="w-10 h-[1px] bg-[#5a7a4a]/40 max-md:w-6" />
        </div>
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-[8%] text-center pt-20 max-md:pt-16 max-md:px-5"
      >
        <h2 className="font-cormorant text-[38px] md:text-[54px] leading-[1.2] text-[#3d2f2f] max-md:text-[30px]">
          Our Approach
        </h2>

        <p className="mt-6 text-[15px] font-jost text-[#7a7060] max-w-[420px] mx-auto leading-8 max-md:text-[14px] max-md:leading-6 max-md:max-w-full">
          Designed to bring clarity and trust into wellness — through honest
          sourcing and thoughtful selection.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="mt-14 px-[8%] max-md:px-5 max-md:mt-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-[1054px] mx-auto flex flex-col md:flex-row gap-4 max-md:gap-3"
        >
          {approach.map((item, i) => {
            const isActive = i === active;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`
                  relative cursor-pointer
                  transition-all duration-500
                  rounded-[5px] overflow-hidden
                  flex flex-col
                  h-[240px] md:h-[280px]
                  ${isActive ? "md:flex-[2.2]" : "md:flex-1"}
                  flex-1
                  max-md:h-[220px]
                `}
              >
                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENT */}
                <div className="relative z-10 p-6 flex flex-col h-full max-md:p-4">

                  {/* NUMBER */}
                  <div className="flex justify-end">
                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center
                        text-[11px] tracking-[0.1em]
                        text-[#a48477] backdrop-blur-md bg-black/20
                        ${isActive ? "scale-110 bg-white/10 text-[13px]" : ""}
                      `}
                    >
                      {item.num}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="font-cormorant text-[22px] md:text-[28px] text-[#eedbd3] leading-tight mb-6 max-md:text-[20px] max-md:mb-4">
                    {item.title[0]} <br />
                    {item.title[1]}
                  </h3>

                  {/* TEXT */}
                  <div
                    ref={(el) => (contentRefs.current[i] = el)}
                    className="text-[15px] leading-relaxed text-[#eee5d7] max-md:text-[13px]"
                  >
                    <p className={`${isActive ? "" : "line-clamp-2"}`}>
                      {item.desc}
                    </p>

                    <p
                      className={`
                        text-[#e4d8c6] mt-2 transition-all duration-500
                        ${isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 h-0 overflow-hidden"
                        }
                      `}
                    >
                      {item.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* DIVIDER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 flex items-center gap-6 w-full max-w-6xl mx-auto max-md:px-5 max-md:gap-3 max-md:mt-10"
      >
        <div className="flex-1 h-[1px] bg-[#ebe5de]" />

        <p className="font-cormorant italic text-[#8a7d6a] text-[14px] tracking-wide max-md:text-[12px] text-center">
          Rooted in Process • Designed for Trust
        </p>

        <div className="flex-1 h-[1px] bg-[#ebe5de]" />
      </motion.div>
    </section>
  );
}