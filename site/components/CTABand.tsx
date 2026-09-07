import { Phone, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function CTABand() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: "linear-gradient(120deg, var(--navy-light) 0%, var(--navy-deep) 100%)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        <span className="section-label">24-Hour Emergency Service</span>
        <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3 mb-6 max-w-2xl mx-auto">
          Comfort Can&rsquo;t Wait. <span className="duo-text">Neither Do We.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={BUSINESS.phonePrimaryHref}
            className="btn-ember px-9 py-5 rounded-md text-lg flex items-center gap-3 pulse-ice"
          >
            <Phone size={20} />
            {BUSINESS.phonePrimary}
          </a>
          <a
            href={BUSINESS.housecallProHref}
            className="btn-ice px-9 py-5 rounded-md text-lg font-semibold flex items-center gap-3"
          >
            <CalendarCheck size={20} />
            Book Online
          </a>
        </div>

        <p className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>
          Or call our second line: <a href={BUSINESS.phoneSecondaryHref} className="ice-text font-medium">{BUSINESS.phoneSecondary}</a>
        </p>
      </div>
    </section>
  );
}
