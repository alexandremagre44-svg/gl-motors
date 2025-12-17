import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/garage.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            <span className="text-red-600">{siteConfig.brand.prefix}</span> {siteConfig.brand.suffix}
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              📞 Appeler
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
