import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function ServicePageHero({
  eyebrow,
  title,
  accent,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex items-end overflow-hidden pt-40 pb-20" style={{ background: "var(--navy-deep)" }}>
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,14,46,0.65) 0%, rgba(6,14,46,0.45) 40%, rgba(6,14,46,0.94) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6">
        <span className="section-label">{eyebrow}</span>
        <h1 className="font-[family-name:var(--font-oswald)] font-bold text-white leading-[1.05] text-4xl sm:text-5xl lg:text-6xl max-w-3xl mt-3">
          {title} <span className="duo-text">{accent}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg" style={{ color: "var(--off-white)" }}>
          {intro}
        </p>

        <div className="flex flex-wrap gap-4 mt-9">
          <a
            href={BUSINESS.phonePrimaryHref}
            className="btn-ember px-8 py-4 rounded-md text-base flex items-center gap-2"
          >
            <Phone size={18} />
            Call {BUSINESS.phonePrimary}
          </a>
          <Link href="/#contact" className="btn-ice px-8 py-4 rounded-md text-base font-semibold">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
