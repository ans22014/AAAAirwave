import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicePageHero from "@/components/ServicePageHero";
import CommercialWork from "@/components/CommercialWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Financing from "@/components/Financing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/business";
import { commercialHvacFaqs, buildFaqSchema } from "@/lib/faq-schema";

const faqSchema = buildFaqSchema(commercialHvacFaqs);

const title = "Commercial HVAC & Rooftop Units | AAA Airwaves, Inc. | Tampa, FL";
const description =
  "Commercial rooftop HVAC installation, multi-unit and retail HVAC service, and 24-hour emergency response for Tampa-area businesses. Crane-lift rooftop installs handled with precision.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/commercial-hvac",
  },
  openGraph: {
    title,
    description,
    url: "/commercial-hvac",
    siteName: "AAA Airwaves, Inc.",
    images: ["/images/commercial-crane-1.jpg"],
    locale: "en_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial HVAC & Rooftop Unit Installation",
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

const commercialServices = [
  {
    title: "Commercial Rooftop Units",
    desc: "Crane-lift installs and service for packaged rooftop HVAC systems.",
  },
  {
    title: "Multi-Unit & Retail HVAC",
    desc: "Reliable climate control for offices, retail spaces, and multi-tenant properties.",
  },
  {
    title: "24-Hour Emergency Service",
    desc: "Downtime costs money. We answer around the clock, every day of the year.",
  },
];

export default function CommercialHvac() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <ServicePageHero
          eyebrow="Commercial HVAC · Tampa, FL"
          title="Commercial HVAC,"
          accent="Built for Uptime."
          intro="Rooftop unit installs, multi-tenant retail HVAC, and 24-hour emergency service for Tampa-area businesses — because downtime costs money."
          image="/images/commercial-crane-1.jpg"
          imageAlt="Crane lifting a commercial rooftop HVAC unit into place"
        />

        <section className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="section-label">What We Do</span>
              <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
                Commercial <span className="duo-text">HVAC Services.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {commercialServices.map((item) => (
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

        <CommercialWork showPageLink={false} />
        <WhyChooseUs />
        <Financing />
        <Testimonials />
        <FAQ heading="Commercial HVAC" accentWord="FAQs." faqs={commercialHvacFaqs} />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
