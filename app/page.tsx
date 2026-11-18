import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import AreaSection from "@/components/AreaSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <ProcessSection />
      <TrustSection />
      <AreaSection />
      <CTASection />
      <FAQSection />
      <BlogPreviewSection />
      <MapSection />
      <Footer />
    </>
  );
}
