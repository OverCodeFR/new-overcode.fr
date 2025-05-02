import HeroSection from "@/app/components/HeroSection";
import RealisationsSection from "@/app/components/RealisationsSection";
import ServicesSection from "@/app/components/ServicesSection";
import CTASection from "@/app/components/CTASection";
import AboutSection from "@/app/components/AboutSection";

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection/>
        <CTASection/>
        <ServicesSection/>
        <RealisationsSection/>
    </>
  );
}
