"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TreatmentCards from "./TreatmentCards";

const slides = [
  {
    image: "/image-Photoroom4.png",
    offsetY: "0px",
    scale: 1.5,
    label: "Natural Wellness Marketplace",
    heading: ["Rooted in Nature,", "Curated for You"],
    sub: "Discover authentic organic, Ayurvedic, and eco-friendly products sourced from trusted producers across India.",
    cta: "Explore Collection",
    accent: "#5a7a4a",
    dotInactive: "#c5d9bc",
  },
  {
    image: "/image-Photoroom2.png",
    offsetY: "20px",
    scale: 1.5,
    label: "Holistic Living",
    heading: ["Balance Your Life,", "Live Naturally"],
    sub: "From traditional wellness systems to everyday essentials, explore products designed for a healthier, more conscious lifestyle.",
    cta: "Shop Wellness",
    accent: "#7a9e6a",
    dotInactive: "#c5d9bc",
  },
  {
    image: "/image-Photoroom3.png",
    offsetY: "10px",
    scale: 1.5,
    label: "Authentic & Sustainable",
    heading: ["Sourced with Care,", "Backed by Trust"],
    sub: "We connect you with verified producers, artisans, and natural brands committed to quality, sustainability, and transparency.",
    cta: "Our Ingredients",
    accent: "#4d6e58",
    dotInactive: "#c5d9bc",
  },
];

const SLIDE_DURATION = 5000;

// Shared transition — slow, ease-out, calm
const FADE_TRANSITION = {
  duration: 1.2,
  ease: [0.4, 0, 0.2, 1],
};

const TEXT_TRANSITION = (delay = 0) => ({
  duration: 0.9,
  ease: [0.4, 0, 0.2, 1],
  delay,
});

// Image variants — fade + very subtle scale
// Image variants — slides in from LEFT, exits to RIGHT
// Image variants — enters from RIGHT, exits to LEFT
const imageVariants = {
  hidden: { opacity: 0, x: "60vw" }, // starts from right of screen
  visible: { opacity: 1, x: 0 }, // lands in left half
  exit: { opacity: 0, x: "-60vw" }, // exits to left
};
// Text variants — slides in from RIGHT, exits to LEFT
const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function HeroAyurvedaSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (idx === current) return;
    clearInterval(timerRef.current);
    setCurrent(idx);
    startTimer();
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[100vh] overflow-hidden font-sans bg-[#f5f3ef]">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-jost      { font-family: 'Jost', 'Helvetica Neue', sans-serif; }

        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
      <div className="absolute top-[14%] right-[8%] max-w-[260px] pointer-events-none">
        <p
          className="font-cormorant italic text-[14px] leading-6 opacity-90"
          style={{ color: "#5a7a4a" }}
        >
          “In Ayurveda, balance is not something you find — it is something you
          cultivate.”
        </p>
      </div>

      <div className="absolute left-12 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left">
        <p className="font-jost text-[10px] tracking-[0.3em] text-[#5a7a4a] opacity-90 uppercase">
          Ayurveda • Since 5000 Years
        </p>
      </div>

      {/* Dot texture */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#d6d2c8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Faint bg image */}
      <img
        src="/hero.png"
        alt=""
        className="absolute bottom-0 right-0 w-full opacity-25 z-0 pointer-events-none"
      />

      {/* Main layout */}
      <div className="relative z-10 h-full flex items-center justify-center gap-10 px-[8%]">
        {/* LEFT — Image */}
        <div className="w-[45%] relative flex items-center justify-center h-[70%] ">
          <AnimatePresence mode="sync">
            <motion.div
              key={`img-${current}`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={FADE_TRANSITION}
              className="absolute w-[80%] max-w-[500px] h-[400px] flex items-center justify-center"
            >
              <motion.img
                src={slide.image}
                alt="Ayurveda herbs"
                style={{
                  transform: `translateY(${slide.offsetY}) scale(${slide.scale})`,
                }}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — Text */}
        <div className="w-[45%]">
          <AnimatePresence mode="wait">
            <motion.div key={`text-${current}`} className="flex flex-col">
              {/* Label */}
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={TEXT_TRANSITION(0)}
                className="font-jost text-[11px] tracking-[0.18em] uppercase mb-3 font-medium"
                style={{ color: slide.accent }}
              >
                {slide.label}
              </motion.p>

              {/* Heading */}
              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={TEXT_TRANSITION(0.12)}
                className="font-cormorant font-normal leading-[1.2] text-[#3d2f2f] m-0"
                style={{ fontSize: "clamp(38px, 4vw, 60px)" }}
              >
                {slide.heading[0]}
                <br />
                <span style={{ color: slide.accent }} className="italic">
                  {slide.heading[1]}
                </span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={TEXT_TRANSITION(0.24)}
                className="font-jost mt-4 text-sm leading-7 text-[#6b6b6b] max-w-[400px] font-light"
              >
                {slide.sub}
              </motion.p>

              {/* CTA + dots */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={TEXT_TRANSITION(0.36)}
                className="flex items-center gap-6 mt-8"
              >
                <motion.button
                  onClick={() => {
                    const section = document.getElementById("categories");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="font-jost px-7 py-3 rounded-[2px] text-white text-[11px] tracking-[0.14em] uppercase font-medium cursor-pointer border-none"
                  style={{
                    background: slide.accent,
                    boxShadow: `0 4px 16px ${slide.accent}33`,
                  }}
                >
                  {slide.cta}
                </motion.button>

                {/* Pill dots */}
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => goTo(i)}
                      animate={{
                        width: i === current ? 26 : 8,
                        background:
                          i === current ? slide.accent : slide.dotInactive,
                      }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="h-2 rounded-[2px] border-none cursor-pointer p-0"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 w-full max-w-8xl px-[8%]"
      >
        <div className="flex-1 h-[1px] bg-[#d6e5d9]" />

        <p className="font-cormorant italic text-[#5a7a4a] text-[14px] tracking-wide whitespace-nowrap text-center">
          Rooted in Nature • Refined by Ayurveda
        </p>

        <div className="flex-1 h-[1px] bg-[#d6e5d9]" />
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#dde8d8] z-10">
        <div
          key={`progress-${current}`}
          style={{
            height: "100%",
            background: slide.accent,
            animation: `progressFill ${SLIDE_DURATION}ms linear forwards`,
          }}
        />
      </div>
    </section>
  );
}
