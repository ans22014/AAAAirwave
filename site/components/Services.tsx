import Link from "next/link";
import { Home, Building2, Snowflake, Flame, Wrench, AlarmClock, ArrowRight } from "lucide-react";

const residential = [
  { icon: Snowflake, title: "AC Repair & Installation", desc: "Fast diagnostics and repair for every make and model, plus full system installs." },
  { icon: Flame, title: "Heating Repair & Installation", desc: "Furnace and heat pump service to keep your home comfortable year-round." },
  { icon: Wrench, title: "Maintenance Plans", desc: "Seasonal tune-ups that catch small problems before they become expensive ones." },
];

const commercial = [
  { icon: Building2, title: "Commercial Rooftop Units", desc: "Crane-lift installs and service for packaged rooftop HVAC systems." },
  { icon: Home, title: "Multi-Unit & Retail HVAC", desc: "Reliable climate control for offices, retail spaces, and multi-tenant properties." },
  { icon: AlarmClock, title: "24-Hour Emergency Service", desc: "Downtime costs money. We answer around the clock, every day of the year." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
            Heating &amp; Cooling, <span className="duo-text">Done Right.</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
            Residential comfort or commercial-scale rooftop units — our licensed technicians
            handle it all.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ServiceGroup
            label="Residential"
            items={residential}
            accent="ice"
            href="/ac-repair-tampa"
            linkLabel="View residential AC & heating services"
          />
          <ServiceGroup
            label="Commercial"
            items={commercial}
            accent="ember"
            href="/commercial-hvac"
            linkLabel="View commercial HVAC services"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceGroup({
  label,
  items,
  accent,
  href,
  linkLabel,
}: {
  label: string;
  items: { icon: React.ElementType; title: string; desc: string }[];
  accent: "ice" | "ember";
  href: string;
  linkLabel: string;
}) {
  const accentColor = accent === "ice" ? "var(--ice)" : "var(--ember)";
  return (
    <div>
      <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-xl text-white mb-5 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full" style={{ background: accentColor }} />
        {label}
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-card rounded-xl p-6 flex gap-4 transition-transform hover:-translate-y-1"
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${accentColor}1a` }}
            >
              <item.icon size={22} style={{ color: accentColor }} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base mb-1">{item.title}</h4>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold mt-5 transition-colors"
        style={{ color: accentColor }}
      >
        {linkLabel}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
