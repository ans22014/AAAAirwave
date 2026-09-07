import Image from "next/image";
import { Award, ShieldCheck, Clock, DollarSign } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const points = [
  { icon: Award, title: `${BUSINESS.yearsExperience} Years Experience`, desc: "Two decades of HVAC expertise serving the Tampa Bay area." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: `Florida license ${BUSINESS.license} — fully insured for your protection.` },
  { icon: Clock, title: "24-Hour Service", desc: "Emergencies don't wait for business hours, and neither do we." },
  { icon: DollarSign, title: "Lowest Rates in the Area", desc: "Honest, upfront pricing with no hidden fees." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="section-label">Why Choose Us</span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3 mb-8">
            Real Technicians. <span className="duo-text">Real Results.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((p) => (
              <div key={p.title}>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "rgba(63,182,232,0.12)" }}
                >
                  <p.icon size={22} className="ice-text" />
                </div>
                <h3 className="font-semibold text-white text-base mb-1.5">{p.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/technician-rooftop.jpg"
            alt="AAA Airwaves technician servicing a Trane rooftop HVAC unit"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(0deg, rgba(6,14,46,0.5) 0%, transparent 40%)" }}
          />
        </div>
      </div>
    </section>
  );
}
