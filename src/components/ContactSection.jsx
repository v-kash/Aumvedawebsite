"use client";

export default function ContactSection() {
  return (
    <section id="contact"
      className="relative pt-16 pb-16 md:pb-0 px-4 md:px-16 overflow-hidden"
      style={{ background: "#eef5ef", fontFamily: "'Jost', sans-serif" }}
    >
      <div className="absolute inset-0 opacity-[0.00] pointer-events-none">
        <img src="/bg-pattern2.png" className="w-full h-full object-cover" />
      </div>
      
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        {/* LEFT */}
        <div className="md:sticky md:top-28">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(34px, 4vw, 48px)",
              fontWeight: 300,
              color: "#3d2f2f",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Let’s Start a <br />
            <em>Meaningful Conversation</em>
          </h2>

          <p className="text-sm text-[#5f5f5f] leading-relaxed max-w-xs mb-10">
            Whether you have a question, need guidance, or want to collaborate —
            we’re here to listen and help you move forward with clarity.
          </p>

          {/* 🤝 HANDSHAKE (STATIC) */}
          <div className="relative h-[200px] md:h-[320px]">
            <img
              src="/handshake3.png"
              /* left-1/2 -translate-x-1/2: Centers the image on mobile
                 md:left-0 md:translate-x-0: Resets it to your original left alignment for web 
              */
              className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-full max-w-[280px] md:max-w-[560px] opacity-40 pointer-events-none select-none"
            />

            <div className="absolute bottom-0 left-0 w-[260px] h-[140px] bg-gradient-to-t from-[#eef5ef] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="flex flex-col gap-8 border border-[#dfe8dc] p-6 md:p-10 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] bg-white/10 md:bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
              />
            </div>
          </div>

          <div className="relative">
            <input
              type="tel"
              placeholder="Phone Number"
              className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Subject"
              className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
            />
          </div>

          <div className="relative">
            <textarea
              rows="4"
              placeholder="Your Message"
              className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all resize-none"
            />
          </div>

          <div className="pt-4">
            <button className="group relative w-full md:w-auto px-10 py-3 text-sm overflow-hidden border border-[#5a7a4a] text-[#5a7a4a]">
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                Send Message
              </span>
              <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[#5a7a4a]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}