import { CreditCard } from "lucide-react";

export default function Financing() {
  return (
    <section id="financing" className="py-16" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="glass-card rounded-2xl p-8 lg:p-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(232,84,31,0.14)" }}
            >
              <CreditCard size={26} className="ember-text" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-white text-xl mb-1">
                0% Financing Available Through Wisetack
              </h3>
              <p className="text-sm max-w-lg" style={{ color: "var(--text-secondary)" }}>
                Don&rsquo;t let cost delay your comfort. Get pre-qualified in minutes with no
                impact to your credit score.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn-ember px-7 py-3.5 rounded-md text-sm whitespace-nowrap">
            Ask About Financing
          </a>
        </div>
      </div>
    </section>
  );
}
