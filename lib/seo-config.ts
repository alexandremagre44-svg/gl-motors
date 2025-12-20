import { Metadata } from "next";
import { siteConfig } from "./site.config";

// Geo coordinates for Le Loroux-Bottereau
export const geoCoordinates = {
  latitude: 47.2381,
  longitude: -1.3503,
};

// Local keywords for SEO
export const localKeywords = [
  "garage Le Loroux-Bottereau",
  "garage automobile Le Loroux-Bottereau",
  "mécanicien Le Loroux-Bottereau",
  "garage auto 44430",
  "réparation voiture Le Loroux-Bottereau",
  "diagnostic auto Le Loroux-Bottereau",
  "entretien véhicule 44430",
  "garage près de moi",
  "mécanique Le Loroux-Bottereau",
  "contrôle technique Le Loroux-Bottereau",
];

// Nearby towns (zone de chalandise 15-25km)
export const nearbyTowns = [
  "Barbechat",
  "La Chapelle-Heulin",
  "Vallet",
  "Mouzillon",
  "Maisdon-sur-Sèvre",
  "Saint-Julien-de-Concelles",
  "Divatte-sur-Loire",
  "Haute-Goulaine",
  "Clisson",
  "Vertou",
];

// Generate JSON-LD structured data for LocalBusiness
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    "@id": `https://www.glmotors44.fr/#business`,
    name: "GL Motors - Garage Automobile Le Loroux-Bottereau",
    image: "https://www.glmotors44.fr/logo.png",
    description:
      "Garage automobile professionnel à Le Loroux-Bottereau (44430). Entretien, mécanique, diagnostic, reprogrammation moteur. Service toutes marques pour particuliers et professionnels.",
    url: "https://www.glmotors44.fr",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.zip,
      addressRegion: "Pays de la Loire",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geoCoordinates.latitude,
      longitude: geoCoordinates.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    // NOTE: Update these values with actual Google Business Profile metrics
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Le Loroux-Bottereau",
      },
      ...nearbyTowns.map((town) => ({
        "@type": "City",
        name: town,
      })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services automobiles",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entretien et révision automobile",
            description:
              "Entretien régulier selon carnet constructeur, vidange, filtres, révisions complètes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diagnostic électronique",
            description:
              "Diagnostic complet avec valise dernière génération, lecture codes défauts",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reprogrammation moteur",
            description: "Stage 1 et Stage 2, optimisation performances",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Réparation freinage",
            description:
              "Contrôle et remplacement plaquettes, disques, liquide de frein",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Distribution et embrayage",
            description: "Remplacement kit distribution, changement embrayage",
          },
        },
      ],
    },
    sameAs: [
      siteConfig.social.facebook || "",
      siteConfig.social.instagram || "",
    ].filter(Boolean),
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.glmotors44.fr/#organization",
    name: siteConfig.name,
    url: "https://www.glmotors44.fr",
    logo: "https://www.glmotors44.fr/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: "FR",
    },
  };
}

// Helper function to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `https://www.glmotors44.fr${path}`;
  const fullTitle = title.length <= 60 ? title : title.substring(0, 57) + "...";
  const fullDescription =
    description.length <= 160 ? description : description.substring(0, 157) + "...";

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [...localKeywords, ...keywords].join(", "),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: "https://www.glmotors44.fr/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.slogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: ["https://www.glmotors44.fr/og-image.jpg"],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
