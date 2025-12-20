import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata = generatePageMetadata({
  title: "GL Motors - Garage Automobile Le Loroux-Bottereau 44430",
  description:
    "Garage auto Le Loroux-Bottereau. Mécanique, diagnostic, entretien, reprogrammation. Service toutes marques. ☎ 06 74 46 50 08",
  path: "/",
});

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
            Nos Services Automobiles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Garage professionnel à Le Loroux-Bottereau (44430) - Service complet
            pour l'entretien et la réparation de votre véhicule toutes marques
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

      {/* Local SEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
              Votre Garage Automobile au Cœur du Vignoble Nantais
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-center mb-8">
                <strong>GL Motors</strong> est votre{" "}
                <strong>garage automobile de confiance</strong> situé à{" "}
                <strong>Le Loroux-Bottereau</strong> (44430), sur la Route de
                Barbechat. Nous intervenons pour tous vos besoins en mécanique,
                entretien, diagnostic et réparation automobile.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">📍</div>
                  <h3 className="font-semibold text-lg mb-2">
                    Garage Local Le Loroux-Bottereau
                  </h3>
                  <p className="text-sm">
                    17 Route de Barbechat, 44430. Accessible depuis Vallet, La
                    Chapelle-Heulin, Clisson, Vertou et environs.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-semibold text-lg mb-2">
                    Mécanicien Expert
                  </h3>
                  <p className="text-sm">
                    Plus de 5 ans d'expérience. Diagnostic électronique,
                    reprogrammation moteur, mécanique toutes marques.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-semibold text-lg mb-2">
                    Service Rapide
                  </h3>
                  <p className="text-sm">
                    Prise en charge rapide, devis gratuit, intervention selon vos
                    disponibilités. Du lundi au vendredi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Pourquoi Choisir Notre Garage au Loroux-Bottereau ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un service professionnel, de proximité et de confiance depuis plus de
            5 ans
          </p>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg text-gray-700"
                >
                  <span className="text-red-600 mr-4 text-2xl">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Garage Automobile : Zone d'Intervention 25km
            </h2>
            <p className="text-gray-700 mb-8">
              Vous cherchez un{" "}
              <strong>"garage près de moi"</strong> dans le 44 ? GL Motors
              intervient sur Le Loroux-Bottereau et les communes environnantes :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Le Loroux-Bottereau</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Vallet</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">La Chapelle-Heulin</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Clisson</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Vertou</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Divatte-sur-Loire</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Mouzillon</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-semibold">Et environs...</p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/garage-le-loroux-bottereau"
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                En savoir plus sur notre garage →
              </Link>
            </div>
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