import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { COUNTIES, type County } from "@/lib/counties";
import { countyFaqs, buildFaqSchema } from "@/lib/faq-schema";

export function generateStaticParams() {
  return COUNTIES.map((county) => ({ county: county.slug }));
}

function getCounty(slug: string): County | undefined {
  return COUNTIES.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string }>;
}): Promise<Metadata> {
  const { county: slug } = await params;
  const county = getCounty(slug);
  if (!county) return {};

  const title = `HVAC Service in ${county.name}, FL | AAA Airwaves, Inc.`;
  const description = `Residential and commercial HVAC repair, installation, and 24-hour emergency service throughout ${county.name}, including ${county.cities.join(", ")}. Licensed & insured.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/service-area/${county.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/service-area/${county.slug}`,
      siteName: "AAA Airwaves, Inc.",
      images: ["/images/fleet-vans.jpg"],
      locale: "en_US",
      type: "website",
    },
  };
}

const services = [
  { title: "AC Repair & Installation", desc: "Fast diagnostics and repair for every make and model, plus full system installs." },
  { title: "Heating Repair & Installation", desc: "Furnace and heat pump service to keep your home comfortable year-round." },
  { title: "Commercial Rooftop Units", desc: "Crane-lift installs and service for packaged rooftop HVAC systems." },
  { title: "24-Hour Emergency Service", desc: "Downtime costs money. We answer around the clock, every day of the year." },
];

export default async function CountyPage({
  params,
}: {
  params: Promise<{ county: string }>;
}) {
  const { county: slug } = await params;
  const county = getCounty(slug);
  if (!county) notFound();

  const faqs = countyFaqs(county);
  const faqSchema = buildFaqSchema(faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phonePrimary,
    url: `https://aaa-airwaves.com/service-area/${county.slug}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: county.name,
    },
  };

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
          eyebrow={`Service Area · ${county.name}, FL`}
          title={`HVAC Service in`}
          accent={`${county.name}.`}
          intro={`Residential and commercial HVAC repair, installation, and 24-hour emergency service throughout ${county.name}, including ${county.cities.join(", ")}.`}
          image="/images/fleet-vans.jpg"
          imageAlt="AAA Airwaves branded service vans and trucks"
        />

        <section className="py-24 lg:py-32" style={{ background: "var(--navy-deep)" }}>
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <span className="section-label">What We Do</span>
              <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl lg:text-5xl mt-3">
                HVAC Services in <span className="duo-text">{county.name}.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
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
        <FAQ heading={`${county.name}`} accentWord="HVAC FAQs." faqs={faqs} />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
