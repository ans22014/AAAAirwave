import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Financing from "@/components/Financing";
import CommercialWork from "@/components/CommercialWork";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { faqSchema } from "@/lib/faq-schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <Services />
        <WhyChooseUs />
        <Financing />
        <CommercialWork />
        <Fleet />
        <Testimonials />
        <FAQ />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
