import { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Mentions légales - GL MOTORS',
  description: 'Mentions légales et informations légales de GL MOTORS, garage automobile au Loroux-Bottereau.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Mentions légales</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Informations légales et réglementaires
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow space-y-8">
          {/* Identification de l'entreprise */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Identification de l'entreprise
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Raison sociale :</strong> {siteConfig.name}
              </p>
              <p>
                <strong>Forme juridique :</strong> Entreprise individuelle
              </p>
              <p>
                <strong>Adresse du siège social :</strong>
                <br />
                {siteConfig.contact.address.street}
                <br />
                {siteConfig.contact.address.zip} {siteConfig.contact.address.city}
                <br />
                {siteConfig.contact.address.country}
              </p>
              <p>
                <strong>Téléphone :</strong>{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-red-600 hover:text-red-700">
                  {siteConfig.contact.phoneFormatted}
                </a>
              </p>
              <p>
                <strong>Email :</strong>{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-red-600 hover:text-red-700">
                  {siteConfig.contact.email}
                </a>
              </p>
              {/* TODO: Replace placeholders with actual business registration numbers */}
              <p>
                <strong>Numéro SIRET :</strong> [À compléter]
              </p>
              <p>
                <strong>Numéro RCS :</strong> [À compléter]
              </p>
              <p>
                <strong>Numéro de TVA intracommunautaire :</strong> [À compléter]
              </p>
            </div>
          </section>

          {/* Directeur de publication */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Directeur de publication
            </h2>
            <p className="text-gray-700">
              Le directeur de la publication du site est le gérant de {siteConfig.name}.
            </p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Hébergement du site
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
              <p>
                <strong>Site web :</strong>{' '}
                <a 
                  href="https://vercel.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Propriété intellectuelle
            </h2>
            <p className="text-gray-700">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-gray-700 mt-4">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Protection des données personnelles
            </h2>
            <p className="text-gray-700">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="text-gray-700 mt-4">
              Pour exercer ces droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
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
              <li>Par courrier : {siteConfig.contact.address.street}, {siteConfig.contact.address.zip} {siteConfig.contact.address.city}</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Pour en savoir plus sur la gestion de vos données personnelles, consultez notre{' '}
              <a href="/politique-confidentialite" className="text-red-600 hover:text-red-700 underline">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-700">
              Ce site utilise des cookies pour améliorer votre expérience de navigation. 
              Vous pouvez à tout moment modifier vos préférences en matière de cookies en cliquant sur "Gestion des cookies" 
              en bas de page ou en consultant notre{' '}
              <a href="/politique-confidentialite" className="text-red-600 hover:text-red-700 underline">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          {/* Crédits */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Crédits
            </h2>
            <p className="text-gray-700">
              Site web développé avec Next.js et hébergé sur Vercel.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Droit applicable et juridiction compétente
            </h2>
            <p className="text-gray-700">
              Les présentes mentions légales sont soumises au droit français. 
              En cas de litige, et à défaut d'accord amiable, le tribunal compétent sera celui du ressort du siège social de l'entreprise.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
}
