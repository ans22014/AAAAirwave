import Image from "next/image";
import { MapPin } from "lucide-react";

const counties = [
  { name: "Pasco County", cities: "Hudson, New Port Richey, Land O' Lakes" },
  { name: "Pinellas County", cities: "Clearwater, St. Petersburg, Largo" },
  { name: "Hillsborough County", cities: "Tampa, Brandon, Riverview" },
  { name: "Sarasota County", cities: "Sarasota, Venice, North Port" },
];

export default function Fleet() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--navy)" }}>
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/fleet-vans.jpg"
            alt="AAA Airwaves branded service vans and trucks"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="section-label">Service Area</span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3 mb-6">
            Proudly Serving <span className="duo-text">Four Florida Counties.</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
            Our branded vans and trucks are stocked and staged across the Gulf Coast corridor, so
            when you call, help is already close by.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {counties.map((county) => (
              <div key={county.name} className="glass-card rounded-xl p-4 flex gap-3">
                <MapPin size={18} className="ice-text shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">{county.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {county.cities}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
