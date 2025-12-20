import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/lib/site.config";

export const metadata = {
  title: `Nos Services - ${siteConfig.name}`,
  description:
    "Découvrez tous nos services automobiles : entretien, réparation, diagnostic et plus encore.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: "🔧",
      title: "Entretien & Révision",
      description:
        "Entretien régulier selon le carnet constructeur. Vidange, filtres, contrôles de sécurité. Révisions complètes avec rapport détaillé.",
    },
    {
      icon: "🛑",
      title: "Système de Freinage",
      description:
        "Contrôle et remplacement de plaquettes, disques, liquide de frein. Diagnostic complet du système de freinage pour votre sécurité.",
    },
    {
      icon: "💻",
      title: "Diagnostic Électronique",
      description:
        "Diagnostic complet avec valise dernière génération. Lecture et effacement de codes défauts. Analyse moteur, ABS, airbag et plus.",
    },
    {
      icon: "🚗",
      title: "Pneumatiques",
      description:
        "Vente de pneus toutes marques. Montage, équilibrage, permutation. Contrôle de géométrie et parallélisme.",
    },
    {
      icon: "⚙️",
      title: "Distribution / Embrayage",
      description:
        "Remplacement de kit de distribution courroie ou chaîne. Changement d'embrayage complet. Intervention selon préconisations constructeur.",
    },
    {
      icon: "🔋",
      title: "Batterie & Électricité",
      description:
        "Test et remplacement de batterie. Diagnostic système électrique. Réparation alternateur et démarreur.",
    },
    {
      icon: "⚡🚗",
      title: "Reprogrammation moteur – Stage 1 & Stage 2",
      description: `Le Stage 1 s’effectue sans modification mécanique et reste adapté à un usage quotidien.
Le Stage 2 offre des performances supérieures et nécessite des évolutions mécaniques (admission, échappement, échangeur…).`,
    },
    {
      icon: "🔍",
      title: "Contrôle Technique",
      description:
        "Pré-contrôle technique gratuit. Préparation et accompagnement. Réparation des contre-visites.",
    },
    {
      icon: "⚡",
      title: "Échappement",
      description:
        "Diagnostic système d'échappement. Remplacement de silencieux, catalyseur, FAP. Soudure et réparation.",
    },
    {
      icon: "🛠️",
      title: "Suspension & Amortisseurs",
      description:
        "Contrôle et remplacement d'amortisseurs. Réparation de suspension. Remplacement de silent-blocs et rotules.",
    },
    {
      icon: "🧠⚡",
      title: "Suppression FAP / AdBlue / EGR",
      description:
        "Intervention visant à supprimer les systèmes FAP, AdBlue et EGR afin d’éliminer les pannes récurrentes, voyants moteur et pertes de performance. Améliore la fiabilité, la souplesse moteur et réduit les coûts d’entretien liés à ces dispositifs.",
    },
    {
      icon: "🔧",
      title: "Mécanique Générale",
      description:
        "Réparation moteur et boîte de vitesses. Entretien transmission. Diagnostic et réparation toutes pannes mécaniques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un service complet et professionnel pour l'entretien et la réparation
            de tous types de véhicules
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
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

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Besoin d'un rendez-vous ?
          </h2>
          <p className="text-gray-600 mb-8">
            Contactez-nous pour prendre rendez-vous ou obtenir un devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              📞 {siteConfig.contact.phoneFormatted}
            </a>
            <a
              href="/contact"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Formulaire de contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
