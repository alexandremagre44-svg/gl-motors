import { generatePageMetadata } from "@/lib/seo-config";
import { siteConfig } from "@/lib/site.config";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Garage Auto Le Loroux-Bottereau - GL Motors Réparation Toutes Marques",
  description:
    "Garage auto professionnel Le Loroux-Bottereau 44430. Réparation, entretien toutes marques. Panne, révision, diagnostic. Devis gratuit ☎ 06 74 46 50 08",
  path: "/garage-auto-le-loroux-bottereau",
  keywords: [
    "réparation automobile 44430",
    "panne voiture Le Loroux-Bottereau",
    "garage toutes marques",
    "entretien auto Vallet",
  ],
});

export default function GarageAutoLeLoroux() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-900 via-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Garage Auto Le Loroux-Bottereau - Toutes Marques
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Réparation et entretien automobile professionnel dans le 44430 -
            Service rapide et devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              📞 Appel Direct : 06 74 46 50 08
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
            >
              Devis en ligne gratuit
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Garage Auto Professionnel à Le Loroux-Bottereau
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>GL Motors</strong> est votre{" "}
                <strong>garage automobile de référence à Le Loroux-Bottereau</strong>.
                Spécialisés dans la réparation et l'entretien de véhicules{" "}
                <strong>toutes marques</strong> (Renault, Peugeot, Citroën,
                Volkswagen, Audi, BMW, Mercedes, Ford, Opel, Toyota, etc.), nous
                mettons notre expertise au service des particuliers et
                professionnels du secteur.
              </p>
              <p>
                Notre atelier situé <strong>Route de Barbechat</strong> dispose
                d'équipements modernes pour intervenir sur tous types de pannes :
                mécanique, électronique, électricité, climatisation. Qu'il
                s'agisse d'une simple révision ou d'une panne complexe, nous
                diagnostiquons et réparons votre véhicule rapidement et
                efficacement.
              </p>
              <p>
                Vous cherchez un <strong>"garage auto près de moi"</strong> dans
                le 44430 ? GL Motors intervient sur Le Loroux-Bottereau et toute
                la zone : Vallet, Clisson, Vertou, La Chapelle-Heulin,
                Divatte-sur-Loire, Maisdon-sur-Sèvre et communes voisines.
              </p>
            </div>
          </section>

          {/* Services Detailed */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Toutes les Prestations de Votre Garage Auto
            </h2>

            <div className="space-y-8">
              {/* Entretien */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Entretien Automobile Régulier
                </h3>
                <p className="text-gray-700 mb-4">
                  L'entretien régulier de votre véhicule est essentiel pour
                  éviter les pannes et prolonger sa durée de vie. Nous réalisons
                  les révisions selon le carnet d'entretien constructeur :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vidange huile moteur avec filtre adapté à votre véhicule</li>
                  <li>
                    • Remplacement des filtres : air, habitacle, carburant (diesel)
                  </li>
                  <li>• Contrôle des niveaux : liquide de refroidissement, frein, direction</li>
                  <li>• Vérification freinage, éclairage, pneumatiques</li>
                  <li>• Contrôle échappement et système antipollution</li>
                  <li>• Rapport détaillé avec préconisations</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Prix transparents</strong> et utilisation de pièces
                  qualité équivalente ou origine pour préserver votre garantie.
                </p>
              </div>

              {/* Diagnostic */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Diagnostic Auto et Résolution de Pannes
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Votre voiture a un problème ?</strong> Notre garage
                  dispose d'une valise de diagnostic multimarques professionnelle
                  pour identifier rapidement toute défaillance électronique :
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Voyant moteur allumé</strong> : diagnostic calculateur,
                    lecture codes défauts, identification panne précise
                  </li>
                  <li>
                    • <strong>Perte de puissance</strong> : analyse injection,
                    turbo, admission, échappement
                  </li>
                  <li>
                    • <strong>Problème de démarrage</strong> : test batterie,
                    démarreur, alternateur, circuit électrique
                  </li>
                  <li>
                    • <strong>Voyants ABS/ESP/Airbag</strong> : diagnostic systèmes
                    de sécurité
                  </li>
                  <li>
                    • <strong>Problèmes FAP/EGR</strong> : diagnostic pollution,
                    nettoyage ou remplacement
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Nous établissons un diagnostic complet avec explication claire
                  et devis détaillé avant toute intervention.
                </p>
              </div>

              {/* Réparation */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Réparations Mécaniques Toutes Marques
                </h3>
                <p className="text-gray-700 mb-4">
                  Notre équipe intervient sur tous types de réparations
                  automobiles :
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Moteur & Transmission</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Distribution (courroie/chaîne)</li>
                      <li>• Embrayage complet</li>
                      <li>• Joint de culasse</li>
                      <li>• Turbo</li>
                      <li>• Injecteurs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Freinage & Sécurité</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Plaquettes et disques</li>
                      <li>• Étriers de frein</li>
                      <li>• Maître-cylindre</li>
                      <li>• Liquide de frein</li>
                      <li>• Freins tambour arrière</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Suspension & Direction</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Amortisseurs</li>
                      <li>• Rotules de direction</li>
                      <li>• Silent-blocs</li>
                      <li>• Crémaillère</li>
                      <li>• Géométrie</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Échappement & Pollution</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Ligne d'échappement</li>
                      <li>• Catalyseur</li>
                      <li>• FAP (nettoyage/remplacement)</li>
                      <li>• Sonde lambda</li>
                      <li>• Vanne EGR</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pneumatiques */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Pneumatiques et Géométrie
                </h3>
                <p className="text-gray-700">
                  Vente et montage de pneus toutes marques (Michelin, Continental,
                  Bridgestone, etc.) été, hiver, 4 saisons. Équilibrage de
                  précision, permutation, contrôle géométrie et parallélisme pour
                  une usure optimale.
                </p>
              </div>

              {/* Reprogrammation */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Reprogrammation Moteur (Stage 1 / Stage 2)
                </h3>
                <p className="text-gray-700">
                  Optimisation des performances de votre véhicule essence ou
                  diesel. Amélioration couple, puissance, agrément de conduite.
                  Réalisé sur banc avec fichiers optimisés. Stage 1 : sans
                  modification mécanique, usage quotidien. Stage 2 : avec
                  modifications (admission, échappement).
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16 bg-red-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir Notre Garage Auto ?
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Garage Toutes Marques</p>
                  <p>
                    Nous intervenons sur tous véhicules : Renault, Peugeot,
                    Citroën, Volkswagen, Audi, BMW, Mercedes, Ford, Opel, Toyota,
                    Nissan, Honda, Fiat, Seat, Skoda, etc.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Expertise Technique</p>
                  <p>
                    Plus de 15 ans d'expérience, formation continue sur les
                    nouvelles technologies automobiles (hybride, électrique,
                    électronique embarquée).
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Équipements Professionnels</p>
                  <p>
                    Valise diagnostic multimarques, pont élévateur 4 colonnes,
                    géométrie laser, équipement climatisation, outillage
                    spécifique constructeurs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Devis Gratuit et Transparent</p>
                  <p>
                    Établissement de devis détaillé gratuit sans engagement. Pas
                    de frais cachés. Explication claire des interventions
                    nécessaires.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Garantie sur Interventions</p>
                  <p>
                    Toutes nos réparations sont garanties (pièces et main
                    d'œuvre). Pièces de qualité équivalente ou d'origine selon
                    votre choix.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Proximité et Réactivité</p>
                  <p>
                    Garage local à Le Loroux-Bottereau. Prise de rendez-vous
                    rapide. Intervention d'urgence si nécessaire. Contact direct
                    et relation de confiance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Problems */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pannes Auto Fréquentes : Nos Solutions
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Ma voiture ne démarre plus
                </h3>
                <p className="text-gray-700">
                  <strong>Causes possibles :</strong> batterie déchargée ou HS,
                  démarreur défectueux, alternateur qui ne charge pas, problème
                  de neiman ou antidémarrage.
                  <br />
                  <strong>Notre solution :</strong> Test complet du circuit de
                  démarrage et charge. Remplacement batterie si nécessaire,
                  réparation démarreur/alternateur. Intervention rapide pour vous
                  remettre sur route.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Voyant moteur allumé - Perte de puissance
                </h3>
                <p className="text-gray-700">
                  <strong>Causes possibles :</strong> FAP colmaté, vanne EGR
                  encrassée, turbo défaillant, injecteurs, capteurs (débit air,
                  pression turbo), catalyseur.
                  <br />
                  <strong>Notre solution :</strong> Diagnostic électronique
                  complet avec valise multimarques. Identification précise de la
                  panne. Nettoyage ou remplacement pièces défectueuses. Essai
                  routier après réparation.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Contrôle technique refusé
                </h3>
                <p className="text-gray-700">
                  <strong>Défauts courants :</strong> freinage insuffisant,
                  pollution excessive, éclairage défectueux, fuite liquide,
                  corrosion.
                  <br />
                  <strong>Notre solution :</strong> Pré-contrôle technique
                  gratuit pour identifier les points à corriger. Réparations pour
                  remise aux normes. Assistance pour la contre-visite.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Bruit anormal ou vibration
                </h3>
                <p className="text-gray-700">
                  <strong>Origine possible :</strong> roulement de roue,
                  amortisseurs usés, rotules, silent-blocs, échappement percé,
                  problème de transmission.
                  <br />
                  <strong>Notre solution :</strong> Contrôle sur pont, essai
                  routier pour localiser l'origine du bruit. Remplacement des
                  pièces d'usure. Garantie sur intervention.
                </p>
              </div>
            </div>
          </section>

          {/* Coverage Area */}
          <section className="mb-16 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Votre Garage Auto dans le 44430 et Alentours
            </h2>
            <p className="text-gray-700 mb-6">
              GL Motors est idéalement situé pour servir toute la zone du
              vignoble nantais et sud Loire. Nous intervenons pour les
              particuliers et professionnels de :
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-gray-700">
              <div>
                <p className="font-semibold mb-2">Secteur Le Loroux-Bottereau</p>
                <ul className="text-sm space-y-1">
                  <li>• Le Loroux-Bottereau</li>
                  <li>• Barbechat</li>
                  <li>• La Chapelle-Heulin</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Secteur Vallet</p>
                <ul className="text-sm space-y-1">
                  <li>• Vallet</li>
                  <li>• Mouzillon</li>
                  <li>• Maisdon-sur-Sèvre</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Secteur Clisson</p>
                <ul className="text-sm space-y-1">
                  <li>• Clisson</li>
                  <li>• Gorges</li>
                  <li>• Saint-Lumine-de-Clisson</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Secteur Nantes Sud</p>
                <ul className="text-sm space-y-1">
                  <li>• Vertou</li>
                  <li>• Haute-Goulaine</li>
                  <li>• Divatte-sur-Loire</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Contactez Votre Garage Auto Le Loroux-Bottereau
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
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
                      className="hover:text-red-400"
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
                <h3 className="text-xl font-semibold mb-4">Horaires</h3>
                <div className="space-y-2">
                  <p>Lundi - Vendredi : 8h30 - 18h00</p>
                  <p>Samedi - Dimanche : Fermé</p>
                  <p className="text-sm text-gray-400 mt-4">
                    Rendez-vous conseillé
                    <br />
                    Intervention urgence selon disponibilité
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                📞 Appeler pour un rendez-vous
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
