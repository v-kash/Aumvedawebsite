"use client";

import { useState, useEffect, useRef } from "react";
import {
  Leaf,
  ShieldCheck,
  Recycle,
  LayoutGrid,
  Users,
  Truck,
} from "lucide-react";

const points = [
  {
    title: "Direct Sourcing from Producers",
    desc: "We work closely with traditional artisans and verified manufacturers, cutting out intermediaries for genuine products.",
    Icon: Leaf,
  },
  {
    title: "Rigorous Product Verification",
    desc: "Every product is carefully checked for quality, authenticity, and sourcing before it reaches you.",
    Icon: ShieldCheck,
  },
  {
    title: "Sustainable & Ethical Supply Chain",
    desc: "Supporting environmentally responsible production and fair trade practices at every step.",
    Icon: Recycle,
  },
  {
    title: "Wide Range of Natural Products",
    desc: "Everything from food to lifestyle — all natural, all verified, all in one trusted platform.",
    Icon: LayoutGrid,
  },
  {
    title: "Empowering Rural Communities",
    desc: "Supporting local livelihoods while preserving traditional knowledge and craft for generations.",
    Icon: Users,
  },
  {
    title: "Nationwide Access & Delivery",
    desc: "Bringing authentic wellness products to every corner of the country, reliably and on time.",
    Icon: Truck,
  },
];

export default function WhyTrust() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      refs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.55) {
          setActive(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="py-12 px-12 max-md:px-5 max-md:py-10"
      style={{ background: "#eef5ef", fontFamily: "'Jost', sans-serif" }}
    >
      <div className="flex items-center gap-3 mb-6 max-w-[260px] max-md:mx-auto max-md:mb-8">
        <div className="flex-1 h-[1px] bg-[#5a7a4a]/40" />

        <span
          className="text-[14px] tracking-[0.45em] uppercase text-[#5a7a4a] whitespace-nowrap max-md:text-[12px]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Why Trust Us
        </span>

        <div className="flex-1 h-[1px] bg-[#5a7a4a]/40" />
      </div>

      <div className="px-8 grid md:grid-cols-2 gap-16 items-start max-md:grid-cols-1 max-md:px-0 max-md:gap-10">

        {/* LEFT — STICKY */}
        <div className="md:sticky md:top-28 max-md:text-center">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 4vw, 46px)",
              fontWeight: 300,
              color: "#3d2f2f",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Built on
            <br />
            <em>Transparency</em>
            <br />& Authenticity
          </h2>

          <p className="text-sm text-[#5f5f5f] leading-relaxed max-w-xs mb-10 max-md:max-w-full max-md:mx-auto max-md:mb-6">
            We work with verified producers, uphold ethical practices, and bring
            authentic wellness to every doorstep.
          </p>

          {/* PROGRESS */}
          <div className="flex gap-2 mt-8 max-md:justify-center">
            {points.map((_, i) => (
              <div
                key={i}
                className="h-[3px] rounded-full transition-all duration-300"
                style={{
                  width: active === i ? 28 : 10,
                  background: active >= i ? "#5a7a4a" : "rgba(197,217,190,0.6)",
                }}
              />
            ))}
          </div>

          {/* PREMIUM CARD */}
          <div className="mt-12 p-8 relative overflow-hidden bg-[#0c1e03] rounded-[2px] max-md:p-6 max-md:mt-8">

            <div className="text-[60px] text-[#5a7a4a]/20 -mt-4 -mb-4">"</div>

            <p
              className="text-white/85 mb-6 max-md:text-[14px]"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "16px",
                fontStyle: "italic",
                lineHeight: 1.7,
              }}
            >
              Trust is not claimed — it is built through every product we
              deliver, every partner we support, and every promise we keep.
            </p>

            <div className="w-8 h-[2px] bg-[#5a7a4a] mb-4" />

            <p className="text-xs uppercase tracking-[0.15em] text-white/40 max-md:text-center">
              Our Commitment
            </p>
          </div>
        </div>

        {/* RIGHT — STACKED LIST */}
        <div className="flex flex-col divide-y divide-[#c5d9be]">
          {points.map((item, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className="group py-8 first:pt-0 last:pb-0 max-md:py-6"
              >
                <div className="flex items-start gap-5 max-md:gap-4">

                  {/* ICON */}
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center transition-all duration-300 max-md:w-9 max-md:h-9"
                    style={{
                      background: isActive ? "#5a7a4a" : "#fff",
                      border: "1px solid rgba(197,217,190,0.7)",
                    }}
                  >
                    <item.Icon
                      size={18}
                      color={isActive ? "#fff" : "#5a7a4a"}
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <h3
                      className="transition-colors duration-300 mb-2 max-md:text-[15px]"
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: isActive ? "#5a7a4a" : "#3d2f2f",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="max-md:text-[13px]"
                      style={{
                        fontSize: "13.5px",
                        color: "#5f5050",
                        lineHeight: 1.8,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}