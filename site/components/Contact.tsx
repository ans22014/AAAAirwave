import { Phone, Mail, MapPin, Award, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
      <div className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <span className="section-label">Get In Touch</span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3 mb-8">
            Let&rsquo;s Get Your <span className="duo-text">System Fixed.</span>
          </h2>

          <div className="space-y-5">
            <ContactRow icon={<Phone size={20} />} label="Call or Text">
              <a href={BUSINESS.phonePrimaryHref} className="block text-white font-medium hover:ice-text">
                {BUSINESS.phonePrimary}
              </a>
              <a href={BUSINESS.phoneSecondaryHref} className="block text-white font-medium">
                {BUSINESS.phoneSecondary}
              </a>
            </ContactRow>
            <ContactRow icon={<Mail size={20} />} label="Email">
              <a href={BUSINESS.emailHref} className="text-white font-medium">
                {BUSINESS.email}
              </a>
            </ContactRow>
            <ContactRow icon={<MapPin size={20} />} label="Address">
              <span className="text-white font-medium">
                {BUSINESS.streetAddress}, {BUSINESS.addressLocality}, {BUSINESS.addressRegion} {BUSINESS.postalCode}
              </span>
            </ContactRow>
            <ContactRow icon={<MapPin size={20} />} label="Service Area">
              <span className="text-white font-medium">{BUSINESS.serviceArea}</span>
            </ContactRow>
            <ContactRow icon={<Award size={20} />} label="License">
              <span className="text-white font-medium">{BUSINESS.license}</span>
            </ContactRow>
          </div>
        </div>

        <div id="booking" className="glass-card rounded-2xl p-8 lg:p-10 flex flex-col justify-center text-center">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(63,182,232,0.14)" }}
          >
            <CalendarCheck size={30} className="ice-text" />
          </div>
          <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-white text-2xl mb-3">
            Book Your Appointment Online
          </h3>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            Schedule service in a few clicks through our online booking system — pick a time that
            works for you.
          </p>
          <a
            href={BUSINESS.housecallProHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember px-8 py-4 rounded-md text-base mx-auto"
          >
            Book Online via Housecall Pro
          </a>
          <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
            Prefer to talk? Call {BUSINESS.phonePrimary} &mdash; we&rsquo;re available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ice-text"
        style={{ background: "rgba(63,182,232,0.12)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--text-muted)" }}>
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}
