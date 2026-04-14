"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

// Leaf divider
function LeafDivider({ side = "left" }) {
  const flip = side === "right" ? "scaleX(-1)" : "none";
  return (
    <svg
      width="48"
      height="12"
      viewBox="0 0 48 12"
      fill="none"
      style={{ transform: flip, display: "block" }}
    >
      <line x1="0" y1="6" x2="36" y2="6" stroke="#7a9e6a" strokeWidth="0.6" />
      <path
        d="M28 6 C30 3, 36 3, 38 6 C36 9, 30 9, 28 6Z"
        fill="#7a9e6a"
        opacity="0.55"
      />
      <path
        d="M18 6 C19.5 4.2, 23 4.2, 24 6 C23 7.8, 19.5 7.8, 18 6Z"
        fill="#7a9e6a"
        opacity="0.35"
      />
      <circle cx="40" cy="6" r="1.2" fill="#7a9e6a" opacity="0.7" />
    </svg>
  );
}

export default function NavbarVeda() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false); // always false on server
  const isAboutPage = pathname === "/about";

  useEffect(() => {
    // Check scroll position immediately after mount
    setScrolled(window.scrollY > 30);

    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .veda-nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #3f5f3f;
          text-decoration: none;
          position: relative;
        }

        .veda-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: #5a7a4a;
          transition: width 0.3s ease;
        }

        .veda-nav-link:hover::after,
        .veda-nav-link.active::after {
          width: 100%;
        }

        .veda-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          letter-spacing: 0.35em;
          color: #1f2f1f;
          text-transform: uppercase;
          text-decoration: none;
          line-height: 1;
        }

        .veda-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.3s ease;
        }

        .veda-header.scrolled {
          position: fixed;
          background: rgba(245, 243, 239, 0.9);
          backdrop-filter: blur(10px);
        }
      `}</style>

      <header
        className={`veda-header ${scrolled || isAboutPage ? " scrolled" : ""}`}
      >
        {" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            padding: "2px 6%",
          }}
        >
          {/* LEFT */}
          <Link
            href="/"
            className={`veda-nav-link${pathname === "/" ? " active" : ""}`}
          >
            Home
          </Link>

          <LeafDivider side="right" />

          <Link href="/" className="veda-brand flex items-center justify-center">
  <Image
    src="/logo2.png"
    alt="Aumveda Wellness"
    width={140}
    height={40}
    className="h-[28px] lg:h-[70px] w-auto object-contain"
    priority
  />
</Link>

          <LeafDivider side="left" />

          {/* RIGHT */}
          <Link
            href="/about"
            className={`veda-nav-link${pathname === "/about" ? " active" : ""}`}
          >
            About
          </Link>
        </div>
        {/* Bottom line */}
        <div
          style={{
            height: 1,
            margin: "0 6%",
            background:
              "linear-gradient(to right, transparent, #b5cca8 25%, #b5cca8 75%, transparent)",
          }}
        />
      </header>
    </>
  );
}
