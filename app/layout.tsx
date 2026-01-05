import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generatePageMetadata,
} from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata({
  title: "GL Motors - Garage Automobile Le Loroux-Bottereau 44430",
  description:
    "Garage automobile professionnel à Le Loroux-Bottereau. Entretien, mécanique, diagnostic, reprogrammation. Service toutes marques. ☎ 06 74 46 50 08",
  path: "/",
  keywords: [
    "reprogrammation moteur",
    "contrôle technique",
    "révision auto",
    "diagnostic électronique",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="fr">
      <body className="antialiased">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
