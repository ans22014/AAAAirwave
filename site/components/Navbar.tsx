"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { COUNTIES } from "@/lib/counties";

const beforeServiceArea = [{ label: "Services", hash: "#services" }, { label: "Commercial Work", hash: "#commercial" }];
const afterServiceArea = [
  { label: "Reviews", hash: "#reviews" },
  { label: "Financing", hash: "#financing" },
  { label: "FAQ", hash: "#faq" },
  { label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceAreaOpen, setServiceAreaOpen] = useState(false);
  const [mobileServiceAreaOpen, setMobileServiceAreaOpen] = useState(false);
  const serviceAreaRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const onHomepage = pathname === "/";

  const toHref = (hash: string) => (onHomepage ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!serviceAreaOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (serviceAreaRef.current && !serviceAreaRef.current.contains(e.target as Node)) {
        setServiceAreaOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [serviceAreaOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,14,46,0.94)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="AAA Airwaves logo"
            width={44}
            height={44}
            className="rounded-full w-11 h-11"
          />
          <span className="font-[family-name:var(--font-oswald)] font-bold text-lg text-white tracking-tight hidden sm:inline">
            AAA AIRWAVES
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {beforeServiceArea.map((l) => (
            <a
              key={l.hash}
              href={toHref(l.hash)}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l.label}
            </a>
          ))}

          <div className="relative" ref={serviceAreaRef}>
            <button
              onClick={() => setServiceAreaOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              aria-expanded={serviceAreaOpen}
            >
              Service Area
              <ChevronDown
                size={14}
                style={{ transform: serviceAreaOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              />
            </button>
            {serviceAreaOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl p-2 glass-card"
                style={{ background: "rgba(6,14,46,0.98)" }}
              >
                {COUNTIES.map((county) => (
                  <Link
                    key={county.slug}
                    href={`/service-area/${county.slug}`}
                    onClick={() => setServiceAreaOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:text-white"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {county.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {afterServiceArea.map((l) => (
            <a
              key={l.hash}
              href={toHref(l.hash)}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS.phonePrimaryHref}
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone size={16} className="ice-text" />
            {BUSINESS.phonePrimary}
          </a>
          <a href={BUSINESS.phonePrimaryHref} className="btn-ember px-5 py-2.5 rounded-md text-sm">
            Call Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-2"
          style={{ background: "rgba(6,14,46,0.98)", borderTop: "1px solid var(--border)" }}
        >
          {beforeServiceArea.map((l) => (
            <a
              key={l.hash}
              href={toHref(l.hash)}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium"
              style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border-subtle)" }}
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => setMobileServiceAreaOpen((v) => !v)}
            className="w-full flex items-center justify-between py-3 text-base font-medium"
            style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border-subtle)" }}
            aria-expanded={mobileServiceAreaOpen}
          >
            Service Area
            <ChevronDown
              size={18}
              style={{ transform: mobileServiceAreaOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
            />
          </button>
          {mobileServiceAreaOpen && (
            <div className="pl-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              {COUNTIES.map((county) => (
                <Link
                  key={county.slug}
                  href={`/service-area/${county.slug}`}
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileServiceAreaOpen(false);
                  }}
                  className="block py-2.5 text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {county.name}
                </Link>
              ))}
            </div>
          )}

          {afterServiceArea.map((l) => (
            <a
              key={l.hash}
              href={toHref(l.hash)}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-medium"
              style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border-subtle)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={BUSINESS.phonePrimaryHref}
            onClick={() => setMenuOpen(false)}
            className="btn-ember block text-center mt-4 py-3.5 rounded-md text-base"
          >
            Call {BUSINESS.phonePrimary}
          </a>
        </div>
      )}
    </nav>
  );
}
