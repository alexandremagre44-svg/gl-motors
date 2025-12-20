import { generatePageMetadata } from "@/lib/seo-config";
import { siteConfig } from "@/lib/site.config";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Mécanicien Le Loroux-Bottereau 44430 - Expert Auto GL Motors",
  description:
    "Mécanicien professionnel Le Loroux-Bottereau. Expert mécanique auto, réparation, entretien. Intervention rapide ☎ 06 74 46 50 08",
  path: "/mecanicien-le-loroux-bottereau",
  keywords: [
    "mécanicien automobile 44430",
    "expert mécanique Le Loroux-Bottereau",
    "réparateur auto Vallet",
    "dépannage voiture",
  ],
});

export default function MecanicienLeLoroux() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-800 via-red-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mécanicien Professionnel Le Loroux-Bottereau
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Expert en mécanique automobile - Diagnostic, réparation et entretien
            toutes marques
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              📞 Contacter le mécanicien : 06 74 46 50 08
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Prendre rendez-vous
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
              Votre Mécanicien de Confiance à Le Loroux-Bottereau
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Vous recherchez un <strong>mécanicien compétent et fiable</strong>{" "}
                à Le Loroux-Bottereau ou dans les environs (Vallet, La
                Chapelle-Heulin, Clisson, Vertou) ? GL Motors met à votre
                disposition son expertise en mécanique automobile avec{" "}
                <strong>plus de 15 ans d'expérience</strong> dans la réparation
                et l'entretien de véhicules.
              </p>
              <p>
                Notre mécanicien professionnel intervient sur{" "}
                <strong>tous types de véhicules et toutes marques</strong> :
                essence, diesel, hybride. Grâce à une formation continue et des
                équipements de diagnostic dernière génération, nous sommes en
                mesure de résoudre efficacement tout problème mécanique, de la
                simple révision à la panne complexe.
              </p>
              <p>
                Situé <strong>17 Route de Barbechat à Le Loroux-Bottereau</strong>,
                notre atelier est facilement accessible et dispose de tout
                l'outillage nécessaire pour des interventions de qualité
                professionnelle. Nous privilégions une relation de proximité et de
                transparence avec nos clients.
              </p>
            </div>
          </section>

          {/* Expertise */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Compétences et Expertises du Mécanicien
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Mécanique Générale
                </h3>
                <p className="text-gray-700 mb-3">
                  Intervention sur l'ensemble des organes mécaniques du véhicule :
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Moteur : distribution, embrayage, joint de culasse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Transmission : boîte de vitesses, cardans, différentiel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Suspension : amortisseurs, ressorts, silent-blocs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Direction : crémaillère, rotules, géométrie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Freinage : disques, plaquettes, étriers, circuit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Échappement : ligne complète, catalyseur, FAP</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Diagnostic Électronique
                </h3>
                <p className="text-gray-700">
                  Maîtrise des systèmes électroniques embarqués avec valise de
                  diagnostic multimarques professionnelle. Lecture et analyse des
                  codes défauts sur tous calculateurs : moteur, ABS, ESP, airbag,
                  climatisation, boîte automatique. Identification rapide et
                  précise de la panne pour une réparation efficace.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Entretien Préventif
                </h3>
                <p className="text-gray-700">
                  Réalisation des révisions selon préconisations constructeur :
                  vidange avec huile adaptée, remplacement des filtres, contrôle
                  des organes de sécurité, mise à niveau des liquides. Conseil
                  personnalisé sur l'état du véhicule et planification des
                  interventions futures.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Reprogrammation Moteur
                </h3>
                <p className="text-gray-700">
                  Spécialisation en optimisation électronique moteur (Stage 1 et
                  Stage 2). Amélioration des performances, couple et agrément de
                  conduite. Réalisé sur banc avec fichiers optimisés et garantie.
                  Conseil technique pour adapter la prestation à votre usage.
                </p>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Méthode de Travail du Mécanicien
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-red-600 p-6 rounded-lg">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. Diagnostic Précis
                </h3>
                <p className="text-gray-700">
                  Écoute attentive du problème rencontré. Essai du véhicule si
                  nécessaire. Diagnostic électronique complet. Identification
                  claire de la panne et de son origine.
                </p>
              </div>

              <div className="bg-white border-2 border-red-600 p-6 rounded-lg">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. Explication et Devis
                </h3>
                <p className="text-gray-700">
                  Explication claire et pédagogique de la panne. Devis détaillé
                  gratuit sans engagement. Présentation des différentes options
                  (pièces origine/qualité équivalente).
                </p>
              </div>

              <div className="bg-white border-2 border-red-600 p-6 rounded-lg">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. Réparation Professionnelle
                </h3>
                <p className="text-gray-700">
                  Intervention méthodique et soignée. Utilisation d'outillage
                  adapté et professionnel. Respect des procédures techniques
                  constructeur. Contrôle qualité systématique.
                </p>
              </div>

              <div className="bg-white border-2 border-red-600 p-6 rounded-lg">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4. Essai et Garantie
                </h3>
                <p className="text-gray-700">
                  Essai routier après réparation. Vérification du bon
                  fonctionnement. Garantie sur pièces et main d'œuvre. Conseil
                  d'entretien pour éviter les pannes futures.
                </p>
              </div>
            </div>
          </section>

          {/* Common Interventions */}
          <section className="mb-16 bg-red-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interventions Mécaniques Fréquentes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Remplacement de Distribution
                </h3>
                <p className="text-gray-700">
                  Intervention préventive cruciale pour éviter la casse moteur.
                  Selon le type de moteur : kit courroie de distribution avec
                  galets tendeurs et pompe à eau, ou chaîne de distribution avec
                  pignons et tendeurs. Respect des préconisations kilométriques
                  constructeur (généralement tous les 80 000 à 160 000 km selon
                  moteur). Calage précis de la distribution avec outils
                  spécifiques. Cette intervention est une spécialité de notre
                  mécanicien.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Changement d'Embrayage
                </h3>
                <p className="text-gray-700">
                  Remplacement du kit embrayage complet : disque, mécanisme, butée
                  de débrayage. Symptômes : patinage, difficulté à passer les
                  vitesses, bruit, vibration pédale. Intervention réalisée avec
                  démontage boîte de vitesses. Contrôle systématique du volant
                  moteur (bi-masse si équipé). Devis selon modèle véhicule.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Réparation Système de Freinage
                </h3>
                <p className="text-gray-700">
                  Le freinage est un élément de sécurité prioritaire. Notre
                  mécanicien contrôle l'usure des plaquettes et disques,
                  l'étanchéité du circuit hydraulique, le bon fonctionnement des
                  étriers. Remplacement selon l'état avec pièces de qualité.
                  Purge du circuit si nécessaire. Rodage des freins neufs obligatoire.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Diagnostic et Réparation Pannes Électroniques
                </h3>
                <p className="text-gray-700">
                  <strong>Voyant moteur, ABS, airbag, ESP allumé ?</strong> Notre
                  mécanicien utilise une valise diagnostic professionnelle pour
                  lire les codes défauts mémorisés dans les calculateurs. Analyse
                  des paramètres en temps réel. Identification de la panne :
                  capteur défectueux, problème de câblage, défaut calculateur.
                  Réparation ciblée avec essai et effacement défaut après correction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Remplacement Amortisseurs et Suspension
                </h3>
                <p className="text-gray-700">
                  Amortisseurs usés = inconfort, mauvaise tenue de route, distance
                  de freinage allongée. Contrôle sur pont élévateur. Remplacement
                  par paire (train avant ou arrière). Changement simultané des
                  coupelles de suspension si nécessaire. Contrôle géométrie
                  recommandé après intervention.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Problème FAP (Filtre à Particules) Diesel
                </h3>
                <p className="text-gray-700">
                  Le FAP colmaté est une panne fréquente sur diesel en usage
                  urbain. Symptômes : voyant FAP allumé, perte de puissance, mode
                  dégradé, surconsommation. Notre mécanicien effectue un
                  diagnostic précis : niveau de colmatage, pression différentielle.
                  Solutions : régénération forcée avec valise, nettoyage
                  professionnel, ou remplacement si trop encrassé.
                </p>
              </div>
            </div>
          </section>

          {/* Why This Mechanic */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi Faire Confiance à Notre Mécanicien ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Formation Continue
                </h3>
                <p className="text-gray-700">
                  Notre mécanicien se forme régulièrement aux nouvelles
                  technologies automobiles : hybride, électrique, diagnostic
                  avancé, reprogrammation.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Expérience Terrain
                </h3>
                <p className="text-gray-700">
                  Plus de 15 ans d'expérience en mécanique automobile sur tous
                  types de véhicules. Expertise reconnue en diagnostic et
                  réparations complexes.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">💯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Travail Soigné
                </h3>
                <p className="text-gray-700">
                  Méthode de travail rigoureuse. Respect des procédures.
                  Utilisation d'outillage professionnel adapté. Satisfaction
                  client prioritaire.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Conseil Personnalisé
                </h3>
                <p className="text-gray-700">
                  Explication claire de la panne et des interventions nécessaires.
                  Conseil sur l'entretien du véhicule. Relation de confiance et
                  proximité.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Réactivité
                </h3>
                <p className="text-gray-700">
                  Prise de rendez-vous rapide. Intervention d'urgence selon
                  disponibilité. Délai d'intervention respecté. Communication
                  régulière.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Garantie
                </h3>
                <p className="text-gray-700">
                  Garantie sur toutes interventions (pièces et main d'œuvre).
                  Pièces de qualité. Engagement de résultat. Suivi après
                  intervention.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Vehicles */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Véhicules Pris en Charge
            </h2>
            <p className="text-gray-700 mb-6">
              Notre mécanicien intervient sur <strong>tous types de véhicules</strong>{" "}
              et <strong>toutes marques</strong>, qu'il s'agisse de véhicules
              particuliers, utilitaires légers ou véhicules professionnels :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">
                  Marques françaises
                </h3>
                <p className="text-gray-700">
                  Renault, Peugeot, Citroën, Dacia. Connaissance approfondie des
                  spécificités techniques et des pannes récurrentes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">
                  Marques allemandes
                </h3>
                <p className="text-gray-700">
                  Volkswagen, Audi, BMW, Mercedes, Opel, Skoda, Seat. Maîtrise des
                  systèmes électroniques complexes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">
                  Marques asiatiques
                </h3>
                <p className="text-gray-700">
                  Toyota, Nissan, Honda, Hyundai, Kia, Suzuki, Mazda. Expertise en
                  technologie hybride.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-3">
                  Autres marques
                </h3>
                <p className="text-gray-700">
                  Ford, Fiat, Alfa Romeo, Volvo, et toutes autres marques.
                  Diagnostic multimarques universel.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              <strong>Essence, diesel, hybride</strong> : notre mécanicien maîtrise
              toutes les motorisations actuelles et dispose des outils de
              diagnostic spécifiques.
            </p>
          </section>

          {/* Local Service */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mécanicien de Proximité dans le 44430
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Vous habitez <strong>Le Loroux-Bottereau</strong> ou les communes
                environnantes ? Vous recherchez un{" "}
                <strong>mécanicien près de chez vous</strong> pour l'entretien ou
                la réparation de votre véhicule ? GL Motors est votre solution
                locale de confiance.
              </p>
              <p>
                Notre atelier situé <strong>Route de Barbechat</strong> est
                facilement accessible depuis :
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white p-4 border border-gray-200 rounded">
                  <p className="font-semibold mb-2">Zone Le Loroux-Bottereau</p>
                  <ul className="text-sm space-y-1">
                    <li>• Le Loroux-Bottereau</li>
                    <li>• Barbechat</li>
                    <li>• La Chapelle-Heulin</li>
                    <li>• Maisdon-sur-Sèvre</li>
                  </ul>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded">
                  <p className="font-semibold mb-2">Zone Vallet / Clisson</p>
                  <ul className="text-sm space-y-1">
                    <li>• Vallet</li>
                    <li>• Mouzillon</li>
                    <li>• Clisson</li>
                    <li>• Gorges</li>
                  </ul>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded">
                  <p className="font-semibold mb-2">Zone Nantes Sud</p>
                  <ul className="text-sm space-y-1">
                    <li>• Vertou</li>
                    <li>• Haute-Goulaine</li>
                    <li>• Divatte-sur-Loire</li>
                    <li>• Saint-Julien-de-Concelles</li>
                  </ul>
                </div>
              </div>
              <p>
                En choisissant un mécanicien local, vous bénéficiez d'un{" "}
                <strong>service personnalisé</strong>, d'une{" "}
                <strong>proximité rassurante</strong> et d'une{" "}
                <strong>relation de confiance</strong> dans la durée. Nous
                connaissons les besoins des habitants du secteur et nous adaptons
                à vos contraintes.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Contactez Votre Mécanicien Le Loroux-Bottereau
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">GL Motors</h3>
                <div className="space-y-3">
                  <p>
                    <span className="text-red-400">📍</span> 17 Route de Barbechat
                    <br />
                    44430 Le Loroux-Bottereau
                  </p>
                  <p>
                    <span className="text-red-400">📞</span>{" "}
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xl font-semibold hover:text-red-400"
                    >
                      06 74 46 50 08
                    </a>
                  </p>
                  <p>
                    <span className="text-red-400">📧</span>{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-red-400"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Horaires d'ouverture
                </h3>
                <div className="space-y-2">
                  <p className="text-lg">
                    <strong>Lundi - Vendredi</strong>
                    <br />
                    8h30 - 18h00
                  </p>
                  <p className="text-lg">
                    <strong>Samedi - Dimanche</strong>
                    <br />
                    Fermé
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    ⚠️ Rendez-vous conseillé pour garantir la disponibilité
                    <br />
                    Dépannage selon urgence et disponibilité
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-300 mb-6">
                <strong>Besoin d'un mécanicien ?</strong> Contactez-nous par
                téléphone ou via notre formulaire en ligne. Nous vous répondons
                rapidement pour convenir d'un rendez-vous adapté à votre
                disponibilité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  📞 Appeler le mécanicien
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
