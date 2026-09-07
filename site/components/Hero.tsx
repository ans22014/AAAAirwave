"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ShieldCheck, Clock, Award } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const clips = [
  { src: "/video/hero.webm", poster: "/images/hero-establishing.jpg" },
  { src: "/video/hero-crane.webm", poster: "/images/hero-crane-poster.jpg" },
  { src: "/video/hero-measuring.webm", poster: "/images/hero-measuring-poster.jpg" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const current = videoRefs.current[active];
    if (!current) return;
    current.currentTime = 0;
    current.play().catch(() => {});
  }, [active]);

  const handleEnded = () => {
    setActive((prev) => (prev + 1) % clips.length);
  };

  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${clips[0].poster}')` }}
    >
      {clips.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
          autoPlay={i === active}
          muted
          playsInline
          preload={i === active ? "auto" : "none"}
          poster={clip.poster}
          onEnded={handleEnded}
          data-hero-video
        >
          <source src={clip.src} type="video/webm" />
        </video>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,14,46,0.55) 0%, rgba(6,14,46,0.35) 40%, rgba(6,14,46,0.92) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 pb-20 pt-40">
        <div className="flex items-center gap-2 mb-5">
          <span className="section-label">Tampa, FL &middot; Family-Owned &middot; Est. 20+ Years</span>
        </div>

        <h1 className="font-[family-name:var(--font-oswald)] font-bold text-white leading-[1.02] text-5xl sm:text-6xl lg:text-7xl max-w-4xl">
          Your AC Breaks,
          <br />
          <span className="duo-text">We Answer. 24/7.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg" style={{ color: "var(--off-white)" }}>
          Tampa&rsquo;s trusted heating &amp; cooling experts for residential and commercial
          properties. Fast response, fair pricing, and technicians who actually pick up the phone.
        </p>

        <div className="flex flex-wrap gap-4 mt-9">
          <a
            href={BUSINESS.phonePrimaryHref}
            className="btn-ember px-8 py-4 rounded-md text-base flex items-center gap-2"
          >
            <Phone size={18} />
            Call {BUSINESS.phonePrimary}
          </a>
          <a href="#contact" className="btn-ice px-8 py-4 rounded-md text-base font-semibold">
            Get a Free Quote
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 max-w-3xl pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <Stat icon={<Clock size={20} className="ice-text" />} label="24-Hour Service" />
          <Stat icon={<Award size={20} className="ice-text" />} label={`${BUSINESS.yearsExperience} Years Experience`} />
          <Stat icon={<ShieldCheck size={20} className="ice-text" />} label="Licensed & Insured" />
          <Stat icon={<Phone size={20} className="ice-text" />} label="Lowest Rates in Area" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
  );
}
