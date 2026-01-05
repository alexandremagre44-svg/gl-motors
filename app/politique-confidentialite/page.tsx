import { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - GL MOTORS',
  description: 'Politique de confidentialité et protection des données personnelles de GL MOTORS.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Protection et traitement de vos données personnelles
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700">
              {siteConfig.name} s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, 
              stockons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD) 
              et à la loi Informatique et Libertés.
            </p>
          </section>

          {/* Responsable du traitement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Responsable du traitement des données
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Responsable :</strong> {siteConfig.name}
              </p>
              <p>
                <strong>Adresse :</strong> {siteConfig.contact.address.street}, {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
              </p>
              <p>
                <strong>Email :</strong>{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-red-600 hover:text-red-700">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <strong>Téléphone :</strong>{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-red-600 hover:text-red-700">
                  {siteConfig.contact.phoneFormatted}
                </a>
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Données personnelles collectées
            </h2>
            <p className="text-gray-700 mb-4">
              Nous collectons les données personnelles suivantes lorsque vous utilisez notre site web :
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Formulaire de contact
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Message et contenu de votre demande</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies et données de navigation
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Date et heure de visite</li>
                  <li>Préférences relatives aux cookies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Finalités du traitement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Finalités du traitement des données
            </h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Répondre à vos demandes de contact :</strong> traiter vos questions, 
                demandes de devis et prises de rendez-vous (base légale : consentement et intérêt légitime)
              </li>
              <li>
                <strong>Améliorer notre site web :</strong> analyser l'utilisation du site pour 
                améliorer nos services et l'expérience utilisateur (base légale : intérêt légitime)
              </li>
              <li>
                <strong>Respecter nos obligations légales :</strong> conservation des données 
                comptables et fiscales (base légale : obligation légale)
              </li>
            </ul>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Base légale du traitement
            </h2>
            <p className="text-gray-700">
              Le traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Votre consentement :</strong> pour l'utilisation de cookies non essentiels 
                et pour l'envoi de communications
              </li>
              <li>
                <strong>L'exécution d'un contrat :</strong> pour la gestion de vos demandes de services
              </li>
              <li>
                <strong>Notre intérêt légitime :</strong> pour améliorer nos services et répondre à vos questions
              </li>
              <li>
                <strong>Obligation légale :</strong> pour la conservation des données comptables et fiscales
              </li>
            </ul>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Destinataires des données
            </h2>
            <p className="text-gray-700">
              Vos données personnelles sont destinées aux services internes de {siteConfig.name} 
              et ne sont pas transmises à des tiers, sauf dans les cas suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <strong>Prestataires techniques :</strong> hébergement web (Vercel), 
                stockage de fichiers (Firebase), sous réserve de garanties contractuelles appropriées
              </li>
              <li>
                <strong>Autorités légales :</strong> en cas de réquisition judiciaire ou d'obligation légale
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Nous nous assurons que nos prestataires respectent la réglementation en matière de protection des données.
            </p>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Durée de conservation des données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous conservons vos données personnelles pendant les durées suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Formulaires de contact :</strong> 3 ans à compter du dernier contact
              </li>
              <li>
                <strong>Cookies :</strong> maximum 13 mois
              </li>
              <li>
                <strong>Données de navigation :</strong> 25 mois maximum
              </li>
              <li>
                <strong>Données comptables :</strong> 10 ans conformément aux obligations légales
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              À l'expiration de ces délais, vos données sont supprimées ou anonymisées.
            </p>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Vos droits
            </h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant 
                sont traitées et en obtenir une copie
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> demander la suppression de vos données dans certaines conditions
              </li>
              <li>
                <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes
              </li>
              <li>
                <strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible
              </li>
              <li>
                <strong>Droit de retirer votre consentement :</strong> à tout moment, pour les traitements basés sur le consentement
              </li>
            </ul>

            <div className="mt-6 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Comment exercer vos droits ?
              </h3>
              <p className="text-gray-700 mb-4">
                Pour exercer vos droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Par email :{' '}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-red-600 hover:text-red-700">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  Par téléphone :{' '}
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-red-600 hover:text-red-700">
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </li>
                <li>
                  Par courrier : {siteConfig.contact.address.street}, {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Nous vous répondrons dans un délai maximum d'un mois.
              </p>
            </div>
          </section>

          {/* Réclamation CNIL */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Droit de réclamation auprès de la CNIL
            </h2>
            <p className="text-gray-700">
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit de déposer une plainte 
              auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <div className="mt-4 text-gray-700">
              <p><strong>CNIL</strong></p>
              <p>3 Place de Fontenoy</p>
              <p>TSA 80715</p>
              <p>75334 PARIS CEDEX 07</p>
              <p className="mt-2">
                Site web :{' '}
                <a 
                  href="https://www.cnil.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Sécurité des données
            </h2>
            <p className="text-gray-700">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
              vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, 
              l'altération ou la destruction. Ces mesures incluent :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>Chiffrement des données sensibles (HTTPS)</li>
              <li>Hébergement sécurisé des données</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegardes régulières</li>
              <li>Surveillance des accès</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies essentiels
                </h3>
                <p className="text-gray-700">
                  Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. 
                  Ils incluent les préférences de cookies et les sessions d'authentification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Cookies de performance et analytiques
                </h3>
                <p className="text-gray-700">
                  Ces cookies nous permettent de mesurer l'audience du site et d'améliorer nos services. 
                  Ils nécessitent votre consentement préalable.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mt-4">
              Vous pouvez à tout moment modifier vos préférences en cliquant sur "Gestion des cookies" en bas de page.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Modifications de la politique de confidentialité
            </h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. 
              Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Nous contacter
            </h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, 
              vous pouvez nous contacter :
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>Email :</strong>{' '}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-red-600 hover:text-red-700">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <strong>Téléphone :</strong>{' '}
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-red-600 hover:text-red-700">
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </li>
                <li>
                  <strong>Adresse :</strong> {siteConfig.contact.address.street}, {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
}
