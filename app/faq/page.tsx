import { generatePageMetadata, generateFAQSchema } from "@/lib/seo-config";
import { siteConfig } from "@/lib/site.config";
import Link from "next/link";

const faqs = [
  {
    question: "Pourquoi mon voyant moteur est-il allumé ?",
    answer:
      "Le voyant moteur peut s'allumer pour de nombreuses raisons : problème d'injection (injecteurs, pompe haute pression), dysfonctionnement FAP (filtre à particules), vanne EGR encrassée, sonde lambda défectueuse, catalyseur HS, turbo défaillant, ou capteurs divers. Il est essentiel de faire un diagnostic électronique rapidement pour identifier la panne précise. Chez GL Motors au Loroux-Bottereau, nous utilisons une valise diagnostic multimarques pour lire les codes défauts et intervenir efficacement. Ignorer ce voyant peut entraîner des dommages plus importants et coûteux.",
  },
  {
    question: "Mon FAP est colmaté, que faire ?",
    answer:
      "Le FAP (Filtre à Particules) colmaté est une panne fréquente sur les diesels, surtout en usage urbain avec petits trajets. Symptômes : voyant FAP allumé, perte de puissance, mode dégradé, surconsommation. Solutions : 1) Régénération forcée avec valise diagnostic si FAP pas trop encrassé, 2) Nettoyage professionnel du FAP, 3) Remplacement si trop colmaté. Notre garage au Loroux-Bottereau dispose de l'équipement nécessaire pour diagnostiquer le taux de colmatage et proposer la meilleure solution. Prévention : faire régulièrement des trajets longs (autoroute) pour permettre la régénération naturelle.",
  },
  {
    question: "Ma batterie ne tient plus la charge, pourquoi ?",
    answer:
      "Une batterie qui ne tient plus la charge peut avoir plusieurs causes : batterie en fin de vie (durée moyenne 4-5 ans), alternateur défaillant qui ne recharge pas correctement, consommation électrique excessive (consommateurs laissés allumés, système audio), sulfatation des plaques, corrosion des bornes. En hiver, le problème s'aggrave car le froid réduit la capacité de la batterie. Notre mécanicien au Loroux-Bottereau effectue un test complet : test de batterie, contrôle tension alternateur, vérification circuit de charge. Remplacement batterie si nécessaire avec batterie adaptée à votre véhicule.",
  },
  {
    question: "Contrôle technique refusé : que faire ?",
    answer:
      "Un contrôle technique refusé nécessite des réparations pour la contre-visite. Défauts courants : freinage insuffisant (plaquettes/disques usés), pollution excessive (FAP, catalyseur, sonde lambda), éclairage défectueux, essuie-glaces HS, fuite liquide, corrosion châssis, pneumatiques usés. Notre garage à Le Loroux-Bottereau réalise un pré-contrôle technique gratuit pour identifier les points à corriger avant le CT. Après réparation, nous vous accompagnons pour la contre-visite. Devis gratuit pour remise en conformité. N'attendez pas le dernier moment, anticipez votre CT.",
  },
  {
    question: "Quand faire la révision de ma voiture ?",
    answer:
      "La révision doit être effectuée selon le carnet d'entretien constructeur, généralement tous les 15 000 à 30 000 km ou tous les ans (selon premier terme atteint). Une révision comprend : vidange huile moteur, remplacement filtre à huile, filtre à air, filtre habitacle, contrôles de sécurité (freins, pneumatiques, éclairage), niveaux liquides (refroidissement, frein, direction). Sur diesel, le filtre à carburant doit être remplacé régulièrement. Respecter les révisions permet d'éviter pannes et d'optimiser la durée de vie du véhicule. Notre garage au Loroux-Bottereau utilise des pièces qualité équivalente ou origine.",
  },
  {
    question: "Quand changer la courroie de distribution ?",
    answer:
      "La courroie de distribution doit être changée selon préconisations constructeur, généralement entre 80 000 et 160 000 km selon les moteurs, ou tous les 5-10 ans. Rupture de courroie = casse moteur (soupapes, pistons) = réparation très coûteuse. Il est donc crucial de respecter les échéances. Le kit de distribution comprend : courroie, galets tendeurs, et souvent pompe à eau. Sur certains moteurs, c'est une chaîne de distribution (durée de vie plus longue mais pas éternelle). Notre mécanicien vérifie le kilométrage et l'historique d'entretien pour vous conseiller. Intervention réalisée avec outillage spécifique pour calage correct.",
  },
  {
    question: "Combien coûte un diagnostic automobile ?",
    answer:
      "Chez GL Motors au Loroux-Bottereau, le diagnostic électronique de base avec lecture codes défauts est proposé à partir de 50€. Ce diagnostic permet d'identifier la panne (calculateur moteur, ABS, airbag, etc.). Pour un diagnostic approfondi avec tests paramétriques et essai routier, comptez 80-120€ selon complexité. Ce coût est déduit si vous effectuez la réparation chez nous. Le diagnostic est essentiel pour ne pas remplacer des pièces inutilement et cibler précisément le problème. Devis gratuit après diagnostic pour la réparation.",
  },
  {
    question: "Puis-je faire entretenir ma voiture sous garantie dans votre garage ?",
    answer:
      "Oui, absolument ! Depuis 2002, vous n'êtes plus obligé de faire entretenir votre véhicule sous garantie chez le concessionnaire de la marque. Vous pouvez choisir un garage indépendant comme GL Motors, à condition que les révisions soient effectuées selon le carnet d'entretien constructeur et que des pièces de qualité équivalente (ou d'origine) soient utilisées. Nous respectons scrupuleusement les préconisations constructeur et fournissons les factures détaillées pour conserver votre garantie. C'est souvent plus économique qu'un passage en concession, avec la même qualité de service.",
  },
  {
    question: "Que comprend une révision complète ?",
    answer:
      "Une révision complète chez GL Motors comprend : vidange moteur avec huile adaptée à votre véhicule, remplacement filtre à huile, filtre à air, filtre habitacle, filtre à carburant (diesel), contrôle et mise à niveau de tous liquides (refroidissement, frein, direction assistée, lave-glace), contrôle système de freinage (plaquettes, disques, liquide), contrôle pneumatiques et pression, contrôle éclairage et signalisation, contrôle échappement et antipollution, contrôle batterie et alternateur, contrôle suspension et direction, essai routier, remise à zéro du témoin de révision. Rapport d'intervention détaillé avec préconisations pour entretiens futurs.",
  },
  {
    question: "Combien de temps dure une révision ?",
    answer:
      "Une révision standard prend généralement 1h30 à 2h selon le véhicule et les contrôles à effectuer. Une révision avec interventions supplémentaires (freins, amortisseurs, etc.) peut prendre une demi-journée. Nous essayons de respecter les délais annoncés. Si vous avez une contrainte horaire, nous pouvons vous prêter un véhicule de courtoisie (selon disponibilité) ou organiser votre planning pour minimiser l'immobilisation. Possibilité de déposer le véhicule le matin et le récupérer le soir. Prise de rendez-vous recommandée pour optimiser le délai.",
  },
  {
    question: "Qu'est-ce que la reprogrammation moteur Stage 1 ?",
    answer:
      "La reprogrammation moteur Stage 1 est une optimisation électronique du calculateur moteur, sans modification mécanique. Elle permet d'améliorer les performances : +20 à 40% de couple, +15 à 30% de puissance selon véhicule. Avantages : meilleure reprise, agrément de conduite amélioré, consommation souvent réduite (moteur moins sollicité), utilisation quotidienne possible. Réalisé sur banc avec fichiers optimisés spécifiques à votre moteur. Compatible avec un usage quotidien et fiabilité préservée. Très populaire sur diesel pour améliorer le couple à bas régime. Garantie sur l'intervention. Devis gratuit selon modèle.",
  },
  {
    question: "Mon voyant ABS s'allume, est-ce grave ?",
    answer:
      "Le voyant ABS allumé indique un dysfonctionnement du système antiblocage des roues. Votre véhicule conserve un freinage normal mais sans l'assistance ABS (risque de blocage roues au freinage d'urgence). Causes possibles : capteur ABS défectueux (très fréquent), câblage endommagé, calculateur ABS, bloc hydraulique. C'est un défaut majeur au contrôle technique. Notre diagnostic électronique identifie le capteur ou composant défaillant. Remplacement selon diagnostic. Important : ne pas négliger ce voyant, l'ABS est un élément de sécurité essentiel, surtout en condition difficile (pluie, urgence).",
  },
  {
    question: "Garage près de moi : couvrez-vous ma commune ?",
    answer:
      "GL Motors est situé Route de Barbechat au Loroux-Bottereau (44430) et intervient dans un rayon de 25 km. Nous couvrons notamment : Le Loroux-Bottereau, Vallet, La Chapelle-Heulin, Mouzillon, Maisdon-sur-Sèvre, Barbechat, Divatte-sur-Loire, Saint-Julien-de-Concelles, Haute-Goulaine, Clisson, Vertou, Gorges et communes environnantes du vignoble nantais et sud Loire. Si vous cherchez un garage automobile près de chez vous dans le 44, contactez-nous pour confirmer. Proximité, disponibilité et relation de confiance sont nos priorités.",
  },
  {
    question: "Proposez-vous un véhicule de courtoisie ?",
    answer:
      "Oui, nous disposons d'un véhicule de courtoisie que nous mettons à disposition selon disponibilité et durée d'immobilisation de votre véhicule (interventions longues : distribution, embrayage, etc.). Réservation à prévoir lors de la prise de rendez-vous. Le véhicule de courtoisie est couvert par notre assurance. Vous devez avoir le permis de conduire valide. Alternative : nous pouvons vous déposer/récupérer dans les environs proches du Loroux-Bottereau selon nos disponibilités, ou vous pouvez déposer votre véhicule et utiliser vos propres moyens de transport.",
  },
  {
    question: "Faites-vous les réparations de carrosserie et peinture ?",
    answer:
      "Non, nous sommes spécialisés en mécanique, entretien et diagnostic automobile. Nous n'effectuons pas de travaux de carrosserie, débosselage, peinture ou pare-brise. En revanche, nous pouvons vous recommander des carrossiers de confiance dans le secteur du Loroux-Bottereau. Notre expertise porte sur tout ce qui concerne la partie mécanique et électronique du véhicule : moteur, transmission, freinage, suspension, diagnostic, reprogrammation, entretien courant et réparations mécaniques.",
  },
  {
    question: "Acceptez-vous les paiements en plusieurs fois ?",
    answer:
      "Pour les interventions importantes (distribution, embrayage, réparations coûteuses), nous pouvons étudier des solutions de paiement échelonné. Contactez-nous pour en discuter lors de l'établissement du devis. Nous acceptons les paiements par carte bancaire, espèces, chèque, et virement. Notre objectif est de vous permettre d'effectuer les réparations nécessaires à la sécurité et bon fonctionnement de votre véhicule, en trouvant ensemble une solution adaptée à votre budget.",
  },
  {
    question: "Proposez-vous un devis gratuit ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Après diagnostic de la panne (lecture codes défauts, contrôle), nous établissons un devis détaillé avec : pièces nécessaires (références, marques), main d'œuvre, TVA. Vous pouvez choisir entre pièces d'origine ou qualité équivalente selon votre budget. Le devis est valable 3 mois. Aucune intervention n'est réalisée sans votre accord. Nous prenons le temps de vous expliquer la panne et les réparations nécessaires, en toute transparence. Pas de frais cachés.",
  },
  {
    question: "Intervenez-vous sur tous types de véhicules ?",
    answer:
      "Nous intervenons sur tous véhicules légers (voitures particulières et utilitaires légers jusqu'à 3.5T), toutes marques : Renault, Peugeot, Citroën, Volkswagen, Audi, BMW, Mercedes, Ford, Opel, Toyota, Nissan, Honda, Fiat, Seat, Skoda, Dacia, Hyundai, Kia, Mazda, Suzuki, Volvo, etc. Notre valise de diagnostic est multimarques. Nous maîtrisons les motorisations essence, diesel et hybride. Formation continue sur les nouvelles technologies. En revanche, nous n'intervenons pas sur poids lourds, motos, quads, ou véhicules agricoles.",
  },
  {
    question: "Comment prendre rendez-vous à votre garage ?",
    answer:
      "Prise de rendez-vous simple et rapide : 1) Par téléphone au 06 74 46 50 08 (du lundi au vendredi 8h30-18h00), 2) Par email à glmotors49@gmail.com, 3) Via notre formulaire de contact en ligne. Indiquez : vos coordonnées, le modèle de votre véhicule, la nature du problème ou intervention souhaitée (révision, panne, diagnostic), vos disponibilités. Nous vous confirmons le rendez-vous rapidement. En cas de panne urgente, contactez-nous par téléphone pour une intervention selon nos disponibilités.",
  },
  {
    question: "Que faire en cas de panne sur la route ?",
    answer:
      "En cas de panne : 1) Sécurisez le véhicule (triangle, gilet jaune, feux détresse), 2) Sortez du véhicule côté sécurité si sur voie rapide, 3) Appelez votre assistance (assurance, carte bancaire, etc.), 4) Si dans le secteur Le Loroux-Bottereau, vous pouvez nous contacter au 06 74 46 50 08 pour conseil téléphonique, 5) Une fois véhicule rapatrié à notre garage, nous effectuons le diagnostic et la réparation. Pour pannes récurrentes (voyant moteur, perte puissance), mieux vaut éviter de rouler et faire remorquer le véhicule pour éviter dommages supplémentaires.",
  },
];

export const metadata = generatePageMetadata({
  title: "FAQ Garage Auto Le Loroux-Bottereau - Questions Fréquentes GL Motors",
  description:
    "Réponses à vos questions : voyant moteur, panne FAP, batterie HS, CT refusé, révision auto. Conseils mécanicien Le Loroux-Bottereau ☎ 06 74 46 50 08",
  path: "/faq",
  keywords: [
    "questions garage auto",
    "voyant moteur",
    "panne FAP",
    "batterie déchargée",
    "contrôle technique",
  ],
});

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Questions Fréquentes - FAQ Garage Automobile
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Trouvez les réponses à vos questions sur l'entretien, les pannes et
            les réparations automobiles. Notre mécanicien à Le Loroux-Bottereau
            vous conseille.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Vous avez des questions sur votre véhicule, un problème mécanique,
              une panne ou l'entretien de votre voiture ? Consultez notre FAQ
              pour obtenir des réponses claires et professionnelles. Si vous ne
              trouvez pas la réponse à votre question, n'hésitez pas à contacter
              directement notre garage au <strong>06 74 46 50 08</strong>.
            </p>
          </section>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-600"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Additional Topics */}
          <section className="mt-16 bg-red-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Problèmes Automobiles Courants au Loroux-Bottereau
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Pannes Moteur Fréquentes
                </h3>
                <ul className="space-y-2">
                  <li>• Voyant moteur allumé sans perte de puissance</li>
                  <li>• Surconsommation de carburant anormale</li>
                  <li>• Fumée noire ou bleue à l'échappement</li>
                  <li>• Surchauffe moteur, température élevée</li>
                  <li>• Bruit anormal moteur (claquement, sifflement)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Problèmes Électroniques
                </h3>
                <ul className="space-y-2">
                  <li>• Voyants multiples allumés (ABS, ESP, airbag)</li>
                  <li>• Démarrage difficile ou impossible</li>
                  <li>• Perte de puissance moteur en roulant</li>
                  <li>• Mode dégradé activé</li>
                  <li>• Dysfonctionnement climatisation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Soucis Freinage et Sécurité
                </h3>
                <ul className="space-y-2">
                  <li>• Bruit au freinage (grincement, couinement)</li>
                  <li>• Pédale de frein molle ou dure</li>
                  <li>• Vibrations au freinage</li>
                  <li>• Voyant frein ou ABS allumé</li>
                  <li>• Distance de freinage augmentée</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Problèmes Suspension et Confort
                </h3>
                <ul className="space-y-2">
                  <li>• Amortisseurs fatigués, confort dégradé</li>
                  <li>• Bruit de suspension (clac, grincement)</li>
                  <li>• Véhicule qui tire d'un côté</li>
                  <li>• Usure irrégulière des pneumatiques</li>
                  <li>• Direction dure ou bruits dans la direction</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-gray-700">
              <strong>Vous rencontrez l'un de ces problèmes ?</strong> Notre
              mécanicien au Loroux-Bottereau effectue un diagnostic complet pour
              identifier la cause et vous proposer une solution adaptée. Contactez
              GL Motors pour un rendez-vous rapide.
            </p>
          </section>

          {/* Preventive Maintenance */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conseils d'Entretien Préventif
            </h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Respecter les Révisions
                </h3>
                <p>
                  La meilleure façon d'éviter les pannes est de respecter le
                  planning de révisions selon le carnet d'entretien. Une vidange
                  régulière, le remplacement des filtres et les contrôles de
                  sécurité permettent de détecter l'usure avant qu'elle ne devienne
                  une panne coûteuse.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Surveiller les Témoins
                </h3>
                <p>
                  Ne jamais ignorer un voyant allumé sur le tableau de bord.
                  Même si le véhicule semble fonctionner normalement, un voyant
                  indique toujours un dysfonctionnement. Plus vite vous consultez
                  un professionnel, moins la réparation sera coûteuse.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Contrôles Visuels Réguliers
                </h3>
                <p>
                  Vérifiez régulièrement les niveaux (huile, liquide de
                  refroidissement), l'état des pneumatiques (usure, pression),
                  l'éclairage, et soyez attentif aux bruits inhabituels. Un
                  problème détecté tôt est toujours plus facile à réparer.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Adaptation à l'Usage
                </h3>
                <p>
                  Si vous roulez principalement en ville sur de petits trajets
                  (moteur diesel), prévoyez régulièrement un trajet autoroutier
                  pour permettre la régénération du FAP. Pour un véhicule peu
                  utilisé, roulez au moins 30 minutes toutes les deux semaines
                  pour préserver la batterie.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Une Question Non Résolue ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Notre mécanicien est à votre écoute pour répondre à toutes vos
              questions sur l'entretien et la réparation de votre véhicule.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-400 text-2xl mr-4">📍</span>
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-300">
                    17 Route de Barbechat, 44430 Le Loroux-Bottereau
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 text-2xl mr-4">📞</span>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-red-400 hover:text-red-300 text-lg"
                  >
                    06 74 46 50 08
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-400 text-2xl mr-4">🕒</span>
                <div>
                  <p className="font-semibold">Horaires</p>
                  <p className="text-gray-300">
                    Lundi - Vendredi : 8h30 - 18h00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                📞 Appeler maintenant
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Formulaire de contact
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
