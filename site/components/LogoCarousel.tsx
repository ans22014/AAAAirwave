import Image from "next/image";

const logos = [
  { src: "/images/logos/trane.png", name: "Trane", chip: false, w: 130, h: 44 },
  { src: "/images/logos/carrier.png", name: "Carrier", chip: false, w: 130, h: 52 },
  { src: "/images/logos/rheem.png", name: "Rheem", chip: false, w: 72, h: 72 },
  { src: "/images/logos/goodman.png", name: "Goodman", chip: false, w: 120, h: 40 },
  { src: "/images/logos/lennox.png", name: "Lennox", chip: true, w: 110, h: 34 },
  { src: "/images/logos/tempstar.png", name: "Tempstar", chip: true, w: 110, h: 30 },
  { src: "/images/logos/american-standard.png", name: "American Standard", chip: true, w: 120, h: 90 },
  { src: "/images/logos/grandaire.png", name: "GrandAire", chip: true, w: 120, h: 35 },
];

const track = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <section className="py-12 border-y" style={{ background: "var(--navy)", borderColor: "var(--border-subtle)" }}>
      <div className="max-w-[1240px] mx-auto px-6 mb-6 text-center">
        <span className="section-label">We Install &amp; Service</span>
      </div>

      <div className="relative overflow-hidden logo-marquee-mask">
        <div className="flex items-center gap-12 w-max logo-marquee-track">
          {track.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoItem({
  src,
  name,
  chip,
  w,
  h,
}: {
  src: string;
  name: string;
  chip: boolean;
  w: number;
  h: number;
}) {
  const img = (
    <Image
      src={src}
      alt={`${name} logo`}
      width={w}
      height={h}
      className="object-contain"
      style={{ width: "auto", height: chip ? h * 0.7 : h }}
    />
  );

  if (!chip) return <div className="shrink-0 opacity-90">{img}</div>;

  return (
    <div className="shrink-0 bg-white rounded-lg px-5 py-3 flex items-center justify-center shadow-sm">
      {img}
    </div>
  );
}
