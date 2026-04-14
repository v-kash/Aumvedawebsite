"use client";

import { useState, useEffect } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success | error
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      setTimeout(() => setStatus(null), 3000);
    }
  }, [status]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };
  return (
    <section
      id="contact"
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
          {/* ✅ SUCCESS MESSAGE */}
          {status === "success" && (
            <div className="p-4 bg-green-100 text-green-700 border border-green-300 rounded">
              ✅ Your message has been sent successfully!
            </div>
          )}

          {/* ❌ ERROR MESSAGE */}
          {status === "error" && (
            <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                name="name"
                value={form.name}
                type="text"
                placeholder="Your Name"
                className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input
                name="email"
                value={form.email}
                type="email"
                placeholder="Email Address"
                className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative">
            <input
              name="phone"
              value={form.phone}
              type="tel"
              placeholder="Phone Number"
              className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <input
              name="subject"
              value={form.subject}
              type="text"
              placeholder="Subject"
              className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              rows="4"
              placeholder="Your Message"
              className="peer w-full border-b border-[#c5d9be] bg-transparent py-3 text-sm outline-none focus:border-[#5a7a4a] transition-all resize-none"
              onChange={handleChange}
            />
          </div>

          <div className="pt-4">
            <button
              className="group relative w-full md:w-auto px-10 py-3 text-sm overflow-hidden border border-[#5a7a4a] text-[#5a7a4a]"
              onClick={handleSubmit}
              disabled={loading}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-[#5a7a4a]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
