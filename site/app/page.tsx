import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CommercialWork from "@/components/CommercialWork";
import Fleet from "@/components/Fleet";
import Testimonials from "@/components/Testimonials";
import Financing from "@/components/Financing";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <CommercialWork />
        <Fleet />
        <Testimonials />
        <Financing />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
