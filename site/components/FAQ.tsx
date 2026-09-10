"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq-schema";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="section-label">FAQ</span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
            Questions <span className="duo-text">Tampa Homeowners Ask.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold text-white text-base lg:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className="ice-text shrink-0 transition-transform duration-200"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-5 text-sm lg:text-base" style={{ color: "var(--text-secondary)" }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
