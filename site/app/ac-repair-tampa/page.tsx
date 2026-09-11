import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageHero from "@/components/ServicePageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Financing from "@/components/Financing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/business";

const title = "AC & Heating Repair in Tampa, FL | AAA Airwaves, Inc.";
const description =
  "Residential AC repair, installation, heating repair, and maintenance plans in Tampa, FL. 24-hour emergency service, licensed & insured, 0% financing available.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/ac-repair-tampa",
  },
  openGraph: {
    title,
    description,
    url: "/ac-repair-tampa",
    siteName: "AAA Airwaves, Inc.",
    images: ["/images/technician-rooftop.jpg"],
    locale: "en_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Residential AC & Heating Repair",
  provider: {
    "@type": "HVACBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phonePrimary,
    url: "https://aaa-airwaves.com",
  },
  areaServed: BUSINESS.serviceCounties.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  description,
};

const residentialServices = [
  {
    title: "AC Repair & Installation",
    desc: "Fast diagnostics and repair for every make and model, plus full system installs.",
  },
  {
    title: "Heating Repair & Installation",
    desc: "Furnace and heat pump service to keep your home comfortable year-round.",
  },
  {
    title: "Maintenance Plans",
    desc: "Seasonal tune-ups that catch small problems before they become expensive ones.",
  },
];

export default function AcRepairTampa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <ServicePageHero
          eyebrow="Residential HVAC · Tampa, FL"
          title="AC & Heating Repair,"
          accent="Done Right."
          intro="Fast, reliable AC repair, installation, heating service, and maintenance plans for Tampa-area homeowners — with technicians who actually pick up the phone."
          image="/images/technician-rooftop.jpg"
          imageAlt="AAA Airwaves technician servicing a residential HVAC unit"
        />

        <section className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="section-label">What We Do</span>
              <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
                Residential <span className="duo-text">Comfort Services.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {residentialServices.map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Financing />
        <Testimonials />
        <FAQ />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
