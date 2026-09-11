import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommercialWork({ showPageLink = true }: { showPageLink?: boolean }) {
  return (
    <section id="commercial" className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="section-label">Commercial Capability</span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
            Rooftop Installs, <span className="duo-text">Handled With Precision.</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
            From crane-lift rooftop unit swaps to multi-ton commercial systems, our crew has the
            equipment and experience to get it done safely and on schedule.
          </p>
          {showPageLink && (
            <Link
              href="/commercial-hvac"
              className="inline-flex items-center gap-2 text-sm font-semibold mt-5 ember-text"
            >
              View commercial HVAC services
              <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src="/images/commercial-crane-1.jpg"
              alt="Crane lifting a commercial rooftop HVAC unit into place"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Caption text="Rooftop unit crane installation" />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src="/images/commercial-crane-2.jpg"
              alt="AAA Airwaves technicians guiding a rooftop HVAC unit during installation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Caption text="Precision unit placement" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Caption({ text }: { text: string }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 px-5 py-4"
      style={{ background: "linear-gradient(0deg, rgba(6,14,46,0.9) 0%, transparent 100%)" }}
    >
      <span className="text-sm font-medium text-white">{text}</span>
    </div>
  );
}
