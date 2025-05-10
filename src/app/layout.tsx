import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import FooterSection from "@/app/components/FooterSection";

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} antialiased`}>
      <body
        className={``}
      >
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}
