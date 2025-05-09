import HeroSection from "@/app/components/HeroSection";
import RealisationsSection from "@/app/components/RealisationsSection";
import ServicesSection from "@/app/components/ServicesSection";
import CTASection from "@/app/components/CTASection";
import AboutSection from "@/app/components/AboutSection";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "OverCode – Création de sites & applis web dans l’Ouest",
    description:
        "Développement sur mesure de sites vitrines, e-commerce et apps mobiles à Nantes, Rennes et dans tout l’Ouest de la France.",
    metadataBase: new URL("https://www.overcode.fr"),
    openGraph: {
        title: "OverCode – Création de sites & applis web dans l’Ouest",
        description:
            "Développement sur mesure de sites vitrines, e-commerce et apps mobiles à Nantes, Rennes et dans tout l’Ouest de la France.",
        url: "https://www.overcode.fr/",
        siteName: "OverCode",
        images: [
            {
                url: "https://www.overcode.fr/images/og_home.webp",
                width: 1200,
                height: 630,
                alt: "OverCode - Développement web & mobile",
            },
        ],
        type: "website",
    },
}

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
