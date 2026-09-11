import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { COUNTIES } from "@/lib/counties";

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
            {COUNTIES.map((county) => (
              <Link
                key={county.slug}
                href={`/service-area/${county.slug}`}
                className="glass-card rounded-xl p-4 flex gap-3 transition-transform hover:-translate-y-1"
              >
                <MapPin size={18} className="ice-text shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    {county.name}
                    <ArrowRight size={13} className="ice-text" />
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {county.cities.join(", ")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
