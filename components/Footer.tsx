'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';

export default function Footer() {
  const openCookieSettings = () => {
    // Dispatch custom event to reopen cookie banner
    const event = new CustomEvent('openCookieSettings');
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-red-600">{siteConfig.brand.prefix}</span> {siteConfig.brand.suffix}
            </h3>
            <p className="text-gray-400">
              {siteConfig.description}
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
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-red-600 transition-colors">
                  📞 {siteConfig.contact.phoneFormatted}
                </a>
              </li>
              <li>{siteConfig.contact.address.street}</li>
              <li>{siteConfig.contact.address.zip} {siteConfig.contact.address.city}</li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-red-600 transition-colors">
                  ✉️ {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-red-600 transition-colors">
              Mentions légales
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/politique-confidentialite" className="text-gray-400 hover:text-red-600 transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-gray-600">|</span>
            <button
              onClick={openCookieSettings}
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              Gestion des cookies
            </button>
          </div>
          
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
