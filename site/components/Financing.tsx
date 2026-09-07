import { CreditCard, ShieldCheck, Zap, CalendarClock } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "No Credit Score Impact", desc: "Check your rate with a soft pull — no surprises, no obligation." },
  { icon: Zap, title: "Approval in Minutes", desc: "Get a decision fast, right from your phone, before we even arrive." },
  { icon: CalendarClock, title: "Fixed Monthly Payments", desc: "Predictable payments with no hidden fees or balloon charges." },
];

export default function Financing() {
  return (
    <section id="financing" className="py-24 lg:py-32" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="section-label">Financing</span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
            0% Financing, <span className="duo-text">So Comfort Can&rsquo;t Wait.</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
            A broken system shouldn&rsquo;t mean an impossible bill. Through our partnership with
            Wisetack, qualified customers get 0% financing on repairs and new installs.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
          <div className="glass-card rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-5 mb-8">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(232,84,31,0.14)" }}
              >
                <CreditCard size={30} className="ember-text" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-white text-2xl mb-1">
                  Powered by Wisetack
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Trusted financing for home services, built into your service call.
                </p>
              </div>
            </div>
            <a href="#contact" className="btn-ember px-8 py-4 rounded-md text-base text-center">
              Ask About Financing
            </a>
          </div>

          <div className="grid gap-5">
            {points.map((p) => (
              <div key={p.title} className="glass-card rounded-xl p-6 flex gap-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(63,182,232,0.12)" }}
                >
                  <p.icon size={22} className="ice-text" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base mb-1">{p.title}</h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
