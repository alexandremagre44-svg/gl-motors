import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export default function Home() {
  const services = [
    {
      icon: "🔧",
      title: "Entretien & Révision",
      description: "Entretien régulier et révisions complètes selon le carnet constructeur.",
    },
    {
      icon: "🛑",
      title: "Freinage",
      description: "Contrôle et remplacement de vos systèmes de freinage pour votre sécurité.",
    },
    {
      icon: "💻",
      title: "Diagnostic Électronique",
      description: "Diagnostic complet de vos systèmes électroniques avec équipement dernière génération.",
    },
    {
      icon: "🚗",
      title: "Pneumatiques",
      description: "Montage, équilibrage et vente de pneus toutes marques.",
    },
    {
      icon: "⚙️",
      title: "Distribution / Embrayage",
      description: "Remplacement de kit de distribution et embrayage pour tous véhicules.",
    },
  ];

  const trustPoints = [
    "Une expertise construite au fil des années",
    "Équipe de mécaniciens qualifiés",
    "Équipements modernes et performants",
    "Garantie sur toutes nos interventions",
    "Tarifs transparents",
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={siteConfig.title}
        subtitle={siteConfig.slogan}
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Nos Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un service complet pour l'entretien et la réparation de votre véhicule
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Votre satisfaction et votre sécurité sont nos priorités
          </p>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-center text-lg text-gray-700">
                  <span className="text-red-600 mr-4 text-2xl">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Besoin d'un entretien ou d'une réparation ou d'un diagnostic ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous dès maintenant pour un rendez-vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              📞 Appeler maintenant
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
