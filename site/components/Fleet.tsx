import Image from "next/image";
import { MapPin } from "lucide-react";

const areas = [
  "Tampa",
  "Brandon",
  "Town 'N' Country",
  "Carrollwood",
  "Westchase",
  "Riverview",
  "Valrico",
  "Land O' Lakes",
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
            A Fleet Ready to <span className="duo-text">Roll, Tampa-Wide.</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
            Our branded vans and trucks are stocked and staged across the Tampa Bay area, so when
            you call, help is already close by.
          </p>

          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium glass-card"
                style={{ color: "var(--off-white)" }}
              >
                <MapPin size={14} className="ice-text" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
