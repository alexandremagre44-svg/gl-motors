import { generatePageMetadata } from "@/lib/seo-config";
import { siteConfig } from "@/lib/site.config";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Garage Le Loroux-Bottereau 44430 - GL Motors Entretien Auto",
  description:
    "Garage automobile à Le Loroux-Bottereau (44430). Expert mécanique, diagnostic, entretien. Route de Barbechat. Devis gratuit ☎ 06 74 46 50 08",
  path: "/garage-le-loroux-bottereau",
  keywords: [
    "garage route de Barbechat",
    "réparation voiture 44430",
    "garage Vallet",
    "garage La Chapelle-Heulin",
  ],
});

export default function GarageLeLoroux() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Garage Automobile Le Loroux-Bottereau
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Votre garage de confiance au cœur du Vignoble Nantais - Route de
            Barbechat
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              📞 06 74 46 50 08
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              GL Motors : Votre Garage Professionnel à Le Loroux-Bottereau
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Situé au <strong>17 Route de Barbechat à Le Loroux-Bottereau
                (44430)</strong>, GL Motors est votre partenaire automobile de
                confiance dans le vignoble nantais. Nous intervenons sur tous
                types de véhicules, toutes marques, avec un savoir-faire reconnu
                et des équipements de diagnostic dernière génération.
              </p>
              <p>
                Que vous habitiez Le Loroux-Bottereau, Vallet, La
                Chapelle-Heulin, Mouzillon, Divatte-sur-Loire ou les communes
                environnantes dans un rayon de 25 km, notre garage vous accueille
                du lundi au vendredi de 8h30 à 18h00 pour tous vos besoins en{" "}
                <strong>mécanique automobile</strong>.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos Services de Garage à Le Loroux-Bottereau
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  🔧 Entretien et Révision
                </h3>
                <p className="text-gray-700">
                  Vidange moteur, remplacement des filtres (huile, air,
                  habitacle, carburant), contrôles de sécurité complets selon le
                  carnet constructeur. Nous utilisons des pièces de qualité
                  équivalente ou d'origine pour préserver votre garantie
                  constructeur.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  💻 Diagnostic Électronique Professionnel
                </h3>
                <p className="text-gray-700">
                  <strong>Voyant moteur allumé ?</strong> Perte de puissance ?
                  Nous disposons d'une valise de diagnostic multimarques
                  professionnelle pour identifier rapidement l'origine de la
                  panne : calculateur moteur, ABS, airbag, injection, FAP, EGR.
                  Diagnostic approfondi avec rapport détaillé.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  ⚡ Reprogrammation Moteur Stage 1 & Stage 2
                </h3>
                <p className="text-gray-700">
                  Optimisation des performances de votre véhicule essence ou
                  diesel. Le Stage 1 améliore couple et puissance sans
                  modification mécanique. Idéal pour un usage quotidien plus
                  agréable et économique. Service réalisé sur banc avec garantie.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  🛑 Système de Freinage
                </h3>
                <p className="text-gray-700">
                  Votre sécurité est notre priorité. Contrôle et remplacement de
                  plaquettes, disques, étriers, liquide de frein. Diagnostic
                  complet du circuit de freinage. Intervention rapide pour assurer
                  votre tranquillité sur les routes du Loroux-Bottereau et ses
                  alentours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  ⚙️ Distribution et Embrayage
                </h3>
                <p className="text-gray-700">
                  Remplacement de courroie ou chaîne de distribution, kit
                  complet incluant pompe à eau et galets tendeurs. Changement
                  d'embrayage (disque, mécanisme, butée). Interventions selon
                  les préconisations constructeur pour éviter la casse moteur.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  🔋 Batterie et Démarrage
                </h3>
                <p className="text-gray-700">
                  <strong>Batterie HS ?</strong> Problème de démarrage ? Test de
                  batterie gratuit, remplacement avec batterie adaptée à votre
                  véhicule. Diagnostic alternateur et démarreur. Intervention
                  rapide pour vous remettre sur la route.
                </p>
              </div>
            </div>
          </section>

          {/* Local Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Notre Garage à Le Loroux-Bottereau ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ✓ Proximité et Disponibilité
                </h3>
                <p className="text-gray-700">
                  Idéalement situé sur la Route de Barbechat, accessible depuis
                  Vallet, La Chapelle-Heulin, Maisdon-sur-Sèvre, et tout le
                  secteur sud Loire. Parking disponible.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ✓ Expertise Reconnue
                </h3>
                <p className="text-gray-700">
                  Plus de 15 ans d'expérience en mécanique automobile.
                  Compétences en diagnostic électronique et reprogrammation
                  moteur. Formation continue sur les nouvelles technologies.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ✓ Équipements Professionnels
                </h3>
                <p className="text-gray-700">
                  Valise diagnostic multimarques, pont élévateur, équipement
                  géométrie, outils spécifiques constructeurs. Matériel
                  professionnel pour interventions de qualité.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ✓ Tarifs Transparents
                </h3>
                <p className="text-gray-700">
                  Devis détaillé gratuit avant intervention. Pas de surprise sur
                  la facture. Rapport qualité-prix compétitif. Garantie sur les
                  pièces et main d'œuvre.
                </p>
              </div>
            </div>
          </section>

          {/* Problems We Solve */}
          <section className="mb-16 bg-red-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Problèmes Automobiles Fréquents à Le Loroux-Bottereau
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Voyant moteur allumé ?</strong> Ce témoin peut indiquer
                de nombreux problèmes : sonde lambda défectueuse, vanne EGR
                encrassée, FAP bouché, injecteurs défaillants. Notre diagnostic
                électronique identifie précisément la panne.
              </p>
              <p>
                <strong>Panne de FAP (Filtre à Particules) ?</strong> Le FAP
                colmaté est un problème fréquent sur les diesels, surtout en
                usage urbain. Symptômes : perte de puissance, voyant FAP,
                surconsommation. Nous proposons nettoyage ou remplacement selon
                l'état.
              </p>
              <p>
                <strong>Contrôle technique refusé ?</strong> Défauts identifiés
                lors du CT ? Nous réalisons les réparations nécessaires pour la
                contre-visite : freinage, direction, éclairage, pollution. Devis
                gratuit pour remise en conformité.
              </p>
              <p>
                <strong>Batterie qui ne tient plus la charge ?</strong> Problème
                courant en hiver. Test gratuit pour vérifier batterie et circuit
                de charge (alternateur). Remplacement rapide si nécessaire.
              </p>
            </div>
          </section>

          {/* Zone Coverage */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Zone d'Intervention : Le Loroux-Bottereau et Alentours
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Notre garage intervient dans un rayon de 25 km autour du
                Loroux-Bottereau, couvrant notamment :
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="space-y-2">
                  <li>✓ Le Loroux-Bottereau (44430)</li>
                  <li>✓ Vallet</li>
                  <li>✓ La Chapelle-Heulin</li>
                  <li>✓ Mouzillon</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Maisdon-sur-Sèvre</li>
                  <li>✓ Divatte-sur-Loire</li>
                  <li>✓ Saint-Julien-de-Concelles</li>
                  <li>✓ Barbechat</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Haute-Goulaine</li>
                  <li>✓ Clisson</li>
                  <li>✓ Vertou</li>
                  <li>✓ Et communes voisines</li>
                </ul>
              </div>
              <p className="mt-4">
                Vous habitez dans le secteur ? Vous cherchez un{" "}
                <strong>"garage près de moi"</strong> ? GL Motors est votre
                solution locale de confiance pour tous travaux de mécanique et
                entretien automobile.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Contactez Votre Garage à Le Loroux-Bottereau
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-300">
                    17 Route de Barbechat
                    <br />
                    44430 Le Loroux-Bottereau
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 text-2xl mr-4">📞</span>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-red-400 hover:text-red-300"
                  >
                    06 74 46 50 08
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 text-2xl mr-4">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-red-400 hover:text-red-300"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 text-2xl mr-4">🕒</span>
                <div>
                  <p className="font-semibold">Horaires d'ouverture</p>
                  <p className="text-gray-300">
                    Lundi - Vendredi : 8h30 - 18h00
                    <br />
                    Samedi - Dimanche : Fermé
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Demander un devis gratuit
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Appeler maintenant
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
