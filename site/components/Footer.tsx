import Image from "next/image";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-[1240px] mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="AAA Airwaves logo" width={36} height={36} className="rounded-full w-9 h-9" />
          <div>
            <div className="text-sm font-semibold text-white">{BUSINESS.name}</div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>
              License {BUSINESS.license} &middot; {BUSINESS.streetAddress}, {BUSINESS.city}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-secondary)" }}>
          <a href={BUSINESS.phonePrimaryHref} className="hover:text-white">{BUSINESS.phonePrimary}</a>
          <a href={BUSINESS.emailHref} className="hover:text-white">{BUSINESS.email}</a>
        </div>

        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} {BUSINESS.name} All rights reserved.
        </span>
      </div>
    </footer>
  );
}
