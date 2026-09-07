import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const reviews = [
  {
    name: "Marci Thomas",
    text: "Tom did an amazing job putting in a mini split for my sun room. I am very pleased with the work and the price.",
  },
  {
    name: "Matthew Parker",
    text: "AC went off unexpectedly, they answered the call personally. Very fast response, had a service tech on site the same day.",
  },
  {
    name: "Nichole Burkett",
    text: "If you are looking for a reliable, trustworthy, and professional HVAC company, AAA Airwaves is who you call.",
  },
  {
    name: "Matthew Radd",
    text: "These guys are amazing — my house was actually cleaner after they installed 3 HVACs than before they started.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Reviews</span>
            <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
              Trusted by <span className="duo-text">Tampa Homeowners.</span>
            </h2>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="#f5a623" color="#f5a623" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">4.4</span>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                on Google (32 reviews)
              </span>
            </div>
          </div>

          <a href={BUSINESS.googleReviewHref} target="_blank" rel="noopener noreferrer" className="btn-ice px-6 py-3 rounded-md text-sm font-semibold whitespace-nowrap">
            Leave Us a Google Review
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="glass-card rounded-xl p-6 flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#f5a623" color="#f5a623" />
                ))}
              </div>
              <p className="text-sm flex-1" style={{ color: "var(--off-white)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <span className="text-sm font-semibold text-white mt-4">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
