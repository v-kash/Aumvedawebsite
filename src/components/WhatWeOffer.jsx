"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offerings = [
  {
    tag: "Ayurvedic & Herbal",
    title: "Ayurvedic & Herbal Wellness",
    desc: "Traditional wellness solutions crafted using Ayurvedic and herbal knowledge, designed to support natural healing and overall well-being.",
    image: "/organic.jpg",
    bullets: [
      "Classical Ayurvedic formulations & herbal remedies",
      "Single herbs and blended wellness supplements",
      "Supports immunity, digestion & holistic balance",
      "Sourced from trusted practitioners and producers",
    ],
    accent: "#5a7a4a",
    accentLight: "#eef5ef",
  },
  {
    tag: "Traditional Medicine",
    title: "Herbal & Traditional Healing",
    desc: "Authentic wellness solutions inspired by Ayurveda, Herbal, Unani, and Siddha systems, rooted in centuries of natural healing wisdom.",
    image: "/ayurvedic-wellness.jpg",
    bullets: [
      "Ayurvedic classical formulations & herbal remedies",
      "Unani & Siddha traditional medicine systems",
      "Natural supplements for immunity & overall wellness",
      "Sourced from verified traditional practitioners",
    ],
    accent: "#8a6040",
    accentLight: "#f5efe8",
  },
  {
    tag: "Natural Care",
    title: "Natural Skincare & Personal Care",
    desc: "Plant-based skincare and personal care products crafted using safe, effective, and traditionally trusted ingredients.",
    image: "/skincare.jpg",
    bullets: [
      "Free from parabens, SLS & synthetic chemicals",
      "Botanical ingredients for skin & hair care",
      "Gentle formulations for all skin types",
      "Eco-conscious packaging & cruelty-free products",
    ],
    accent: "#7a5a80",
    accentLight: "#f3eff5",
  },
  {
    tag: "Eco Living",
    title: "Eco Friendly Lifestyle",
    desc: "Thoughtfully designed products including clothing, furniture, and jewellery that promote sustainability and conscious living.",
    image: "/eco-lifestyle.jpg",
    bullets: [
      "Organic clothing made from natural fibres",
      "Sustainable furniture crafted by artisans",
      "Eco-friendly jewellery with ethical sourcing",
      "Zero-waste and biodegradable lifestyle products",
    ],
    accent: "#4a7a70",
    accentLight: "#ebf5f3",
  },
  {
    tag: "Guidance",
    title: "Wellness Guidance & Support",
    desc: "Personalized support and expert guidance to help you choose the right products for your health and lifestyle journey.",
    image: "/wellness-guidance.jpg",
    bullets: [
      "Personalized wellness consultations",
      "Curated product recommendations",
      "Educational resources & usage guidance",
      "Continuous support from wellness experts",
    ],
    accent: "#7a6a3a",
    accentLight: "#f5f1e8",
  },
];

export default function WhatWeOffer() {
  const [active, setActive] = useState(0);
  const item = offerings[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % offerings.length);
    }, 6000); // change 4000 to however many ms you want per slide

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section id="categories" className="relative py-16 bg-[#eef5ef] overflow-hidden ">
      {/* Dot texture — matches original */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d6d2c8_1px,transparent_1px)] bg-[length:28px_28px]" />

      {/* Blur accents — matches original */}

      <div className="absolute top-20 right-10 w-40 h-40 bg-[#dceadf] blur-3xl opacity-40 rounded-full" />
      <div className="absolute bottom-10 left-10 w-52 h-52 bg-[#e8ddd0] blur-3xl opacity-40 rounded-full" />

      {/* Botanical — top left */}
      <div className="absolute top-7 left-[-40] w-[350px] pointer-events-none opacity-[0.15]">
        <img
          src="/leaf4.png"
          alt=""
          className="w-full h-full object-contain"
          style={{ transform: "rotate(180deg) scaleX(-1)" }}
        />
      </div>

      {/* Botanical — bottom right mirrored */}
      <div className="absolute bottom-4 right-[-40] w-[350px] pointer-events-none opacity-[0.15]">
        <img
          src="/leaf4.png"
          alt=""
          className="w-full h-full object-contain"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      {/* "What We Offer" label — top left, matches original */}
      <div className="absolute left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 top-10 z-10 pointer-events-none">
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="w-6 md:w-10 h-[1px] bg-[#5a7a4a]/40" />

          <p className="font-cormorant text-[12px] md:text-[14px] tracking-[0.2em] md:tracking-[0.5em] text-[#5a7a4a] uppercase whitespace-nowrap text-center">
            What We Offer
          </p>

          <div className="w-6 md:w-10 h-[1px] bg-[#5a7a4a]/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading — centred, matches original */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12 "
        >
          <h2 className="mt-6 md:mt-0 font-cormorant text-[24px] md:text-[54px] leading-[1.2] text-[#3d2f2f] max-w-[700px]">
            Our Categories
          </h2>

        </motion.div>

        {/* Tab bar — centred */}
        <div className="flex justify-center flex-wrap gap-2 mb-10 border-b border-[#c5d9be] pb-0">
          {offerings.map((o, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative pb-3 px-3 text-[15px] tracking-wide transition-colors duration-200"
              style={{
                fontFamily: "'Jost', sans-serif",
                color: active === i ? item.accent : "#8a7a6a",
                fontWeight: active === i ? 500 : 400,
              }}
            >
              {o.tag}
              {active === i && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: item.accent }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content — stagger children */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
              exit: {
                transition: { staggerChildren: 0.04, staggerDirection: -1 },
              },
            }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* Left — image staggered in from left */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -32 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
                exit: { opacity: 0, x: -20, transition: { duration: 0.25 } },
              }}
              className="relative rounded-[3px] overflow-hidden"
              style={{ height: 320 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-[5px]"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    background: item.accent,
                    color: "#ffffff",
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-5 right-5">
                <span
                  className="text-[48px] leading-none font-bold opacity-20 text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            {/* Right — each child staggers up */}
            <div className="flex flex-col justify-start pt-2">
              {/* Title */}
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
                }}
                className="text-[30px] md:text-[38px] leading-[1.2] text-[#3d2f2f] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.title}
              </motion.h3>

              {/* Accent rule — grows in width */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scaleX: 0, originX: 0 },
                  visible: {
                    opacity: 1,
                    scaleX: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                  exit: { opacity: 0, transition: { duration: 0.15 } },
                }}
                className="w-10 h-[2px] rounded-full mb-5"
                style={{ background: item.accent }}
              />

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
                }}
                className="text-[16.5px] leading-[1.85] text-[#5f5050] mb-7"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                {item.desc}
              </motion.p>

              {/* Bullet list — each bullet staggers */}
              <ul className="space-y-3">
                {item.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35, ease: "easeOut" },
                      },
                      exit: { opacity: 0, transition: { duration: 0.15 } },
                    }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-[5px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ background: item.accentLight }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path
                          d="M1 3l2 2 4-4"
                          stroke={item.accent}
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className="text-[14.5px] leading-[1.7] text-[#5a4a4a]"
                      style={{ fontFamily: "'Jost', sans-serif" }}
                    >
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                  exit: { opacity: 0, transition: { duration: 0.15 } },
                }}
                className="mt-8"
              >

              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 flex items-center gap-6 w-full max-w-6xl mx-auto"
      >
        <div className="flex-1 h-[1px] bg-[#d6e5d9]" />
        <p className="font-cormorant italic text-[#5a7a4a] text-[14px] tracking-wide">
          More Than Products • A Way of Living          </p>
        <div className="flex-1 h-[1px] bg-[#d6e5d9]" />
      </motion.div>
    </section>
  );
}
