import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-red-600">GL</span> MOTORS
            </h3>
            <p className="text-gray-400">
              Votre garage de confiance pour l'entretien et la réparation de tous types de véhicules.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/showroom" className="text-gray-400 hover:text-red-600 transition-colors">
                  Showroom
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+33123456789" className="hover:text-red-600 transition-colors">
                  📞 +33 1 23 45 67 89
                </a>
              </li>
              <li>123 Rue de l'Automobile</li>
              <li>75001 Paris</li>
              <li>
                <a href="mailto:contact@glmotors.fr" className="hover:text-red-600 transition-colors">
                  ✉️ contact@glmotors.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GL MOTORS. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
