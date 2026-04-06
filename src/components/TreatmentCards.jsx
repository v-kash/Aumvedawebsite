"use client";

export default function PremiumTreatments({ label, text }) {
  return (
    <div className="relative w-full max-w-[300px] min-h-[320px] border border-[#c8d8a8] rounded-md bg-white flex flex-col items-center justify-center px-7 py-10 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Inner Border */}
      <div className="absolute inset-2 border border-[#c8d8a8] rounded-sm pointer-events-none" />

      {/* Leaf Decoration */}
      <div className="absolute -bottom-2 -left-2 opacity-70 pointer-events-none">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <path d="M10 80 Q30 40 70 10" stroke="#c8d8a8" strokeWidth="1.5" />
          <path
            d="M10 80 Q25 55 55 25 Q35 30 20 55 Q15 65 10 80Z"
            fill="#c8d8a8"
            opacity="0.5"
          />
          <path
            d="M10 80 Q38 50 70 10 Q45 20 25 50 Q17 63 10 80Z"
            fill="#b0c890"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Icon */}
      <div className="mb-4 z-10">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="26"
              cy="26"
              rx="5"
              ry="10"
              stroke="#7aaa50"
              strokeWidth="1.2"
              transform={`rotate(${angle} 26 26) translate(0 -10)`}
            />
          ))}
          <circle cx="26" cy="26" r="7" stroke="#7aaa50" strokeWidth="1.2" />
          <circle cx="26" cy="26" r="2.5" fill="#7aaa50" />
        </svg>
      </div>

      {/* Label */}
      <p className="text-[11px] tracking-[0.18em] text-gray-500 uppercase mb-4 font-sans z-10">
        {label}
      </p>

      {/* Text */}
      <p className="text-[16px] leading-relaxed text-gray-800 text-center italic z-10 font-serif">
        {text}
      </p>
    </div>
  );
}