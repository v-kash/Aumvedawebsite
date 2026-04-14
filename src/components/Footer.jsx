"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const socialIcons = [
    { icon: FaInstagram, link: "#" },
    { icon: FaLinkedinIn, link: "#" },
    { icon: FaFacebookF, link: "#" },
    { icon: FaWhatsapp, link: "https://wa.me/919000006000" },
  ];

  return (
    <footer
      className="relative px-6 md:px-16 pt-10 md:pt-12"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* 🌿 BACKGROUND IMAGE */}
      <Image
        src="/footerbg.png"
        alt="Footer background"
        fill
        className="object-cover object-center z-0"
        quality={90}
      />

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 z-0 backdrop-blur-[3px] bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">
          
          {/* 🌿 BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2
              className="mb-3 md:mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 300,
                color: "#f0ece4",
              }}
            >
              Aumveda Wellness
            </h2>
            <p className="text-sm text-[#c9c4bb] leading-relaxed max-w-xs mx-auto md:mx-0">
              Rooted in tradition, refined for modern living. Bringing authentic
              wellness closer to you with trust and care.
            </p>
          </motion.div>

          {/* 📞 CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4 md:space-y-5 flex flex-col items-center md:items-start"
          >
            <h3 className="text-sm tracking-widest text-[#a8c49a] uppercase">
              Contact
            </h3>

            <div className="flex items-start gap-3 text-sm text-[#d4cfc8] justify-center md:justify-start">
              <Mail size={16} className="mt-[3px] text-[#a8c49a]" />
              <span>aumvedawellness@gmail.com</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#d4cfc8] justify-center md:justify-start">
              <Phone size={16} className="mt-[3px] text-[#a8c49a]" />
              <div className="space-y-1 text-center md:text-left">
                <p>Sumannth: 9000006000</p>
                <p>Srisha: 9704300006</p>
                <p>Srikanth: 8501042547</p>
              </div>
            </div>
          </motion.div>

          {/* 📍 ADDRESS + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start"
          >
            <h3 className="text-sm tracking-widest text-[#a8c49a] uppercase">
              Address
            </h3>

            <a
              href="https://www.google.com/maps?q=1-8-15/2FF8-1+Bhavani+Nagar+Colony+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center md:items-start gap-3 text-sm text-[#d4cfc8] leading-relaxed hover:text-[#a8c49a] transition text-center md:text-left"
            >
              <MapPin size={28} className="text-[#a8c49a]" />
              <p>
                1-8-15/2FF8-1, Bhavani Nagar Colony Main Road, beside ETDC, Near
                Gknilayam, Telangana, Hyderabad, 500062
              </p>
            </a>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-2 md:pt-4 justify-center md:justify-start flex-wrap">
              {socialIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    initial="initial"
                    whileHover="hover"
                    className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center overflow-hidden group cursor-pointer"
                    style={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* FILL LAYER */}
                    <motion.div
                      variants={{
                        initial: { y: "100%" },
                        hover: { y: "0%" },
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 z-0 backdrop-blur-md bg-[#72985f]/40 border border-white/20"
                    />

                    {/* ICON */}
                    <motion.div
                      variants={{
                        initial: { rotate: 0, scale: 1 },
                        hover: { rotate: 1, scale: 1.2 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 text-white"
                    >
                      <Icon size={16} />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 🔻 BOTTOM LINE */}
        <div className="mt-10 md:mt-12 py-5 md:py-6 border-t border-[#ffffff20] text-center text-[11px] md:text-xs text-[#9a9a9a] px-2">
          © {new Date().getFullYear()} Aumveda Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}