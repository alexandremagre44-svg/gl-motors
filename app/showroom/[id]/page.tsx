import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { vehicleStore } from '@/lib/vehicles.store';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const vehicle = vehicleStore.getById(parseInt(id));
  
  if (!vehicle) {
    return {
      title: 'Véhicule non trouvé - GL MOTORS',
    };
  }

  return {
    title: `${vehicle.marque} ${vehicle.modele} ${vehicle.annee} - GL MOTORS`,
    description: vehicle.description || `${vehicle.marque} ${vehicle.modele} ${vehicle.annee} - ${vehicle.kilometrage.toLocaleString()} km - ${vehicle.prix.toLocaleString()} €`,
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const vehicle = vehicleStore.getById(parseInt(id));

  if (!vehicle || !vehicle.isActive) {
    notFound();
  }

  const mainImage = vehicle.photos[0] || '/images/placeholder-car.jpg';
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const isNew = new Date(vehicle.createdAt) > thirtyDaysAgo;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <Link href="/showroom" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <span className="mr-2">←</span> Retour au showroom
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Left Column - Gallery and Details */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden mb-4 md:mb-6">
              <Image
                src={mainImage}
                alt={`${vehicle.marque} ${vehicle.modele}`}
                fill
                className="object-cover object-center"
                unoptimized={mainImage.includes('cloudinary')}
                priority
              />
              {/* Status Badge */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-2">
                {vehicle.statut === 'vendu' && (
                  <div className="bg-red-600 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg">
                    VENDU
                  </div>
                )}
                {vehicle.statut === 'reserve' && (
                  <div className="bg-orange-600 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg">
                    RÉSERVÉ
                  </div>
                )}
                {isNew && vehicle.statut === 'disponible' && (
                  <div className="bg-green-600 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-lg shadow-lg">
                    NOUVEAU
                  </div>
                )}
              </div>
            </div>

            {/* Image Gallery */}
            {vehicle.photos.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-8">
                {vehicle.photos.map((photo, index) => (
                  <div key={index} className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={photo}
                      alt={`${vehicle.marque} ${vehicle.modele} - Photo ${index + 1} sur ${vehicle.photos.length}`}
                      fill
                      className="object-cover"
                      unoptimized={photo.includes('cloudinary')}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Vehicle Title */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                {vehicle.marque} {vehicle.modele}
              </h1>
              <div className="text-3xl md:text-5xl font-bold text-red-600 mb-2 md:mb-6">
                {vehicle.prix.toLocaleString('fr-FR')} €
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Caractéristiques Techniques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-start">
                  <span className="text-2xl md:text-3xl mr-3 md:mr-4">📅</span>
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">Année</div>
                    <div className="text-base md:text-lg font-semibold text-gray-900">{vehicle.annee}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl md:text-3xl mr-3 md:mr-4">🛣️</span>
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">Kilométrage</div>
                    <div className="text-base md:text-lg font-semibold text-gray-900">
                      {vehicle.kilometrage.toLocaleString('fr-FR')} km
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl md:text-3xl mr-3 md:mr-4">⛽</span>
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">Carburant</div>
                    <div className="text-base md:text-lg font-semibold text-gray-900 capitalize">{vehicle.carburant}</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl md:text-3xl mr-3 md:mr-4">⚙️</span>
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">Boîte de vitesses</div>
                    <div className="text-base md:text-lg font-semibold text-gray-900 capitalize">{vehicle.boite}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            {vehicle.description && (
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-4 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Description
                </h2>
                <p className="text-sm md:text-base text-gray-700 whitespace-pre-line leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* Options */}
            {vehicle.options && vehicle.options.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  Options et Équipements
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  {vehicle.options.map((option, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-2 md:mr-3 mt-0.5 md:mt-1">✓</span>
                      <span className="text-sm md:text-base text-gray-700">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Contact CTA */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 md:p-8 lg:sticky lg:top-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Intéressé par ce véhicule ?</h2>
              
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-8">
                <p className="text-sm md:text-base text-gray-300">
                  Contactez-nous pour plus d'informations, organiser un essai ou négocier le prix.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <a
                  href="tel:+33123456789"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 md:py-4 md:px-6 rounded-lg text-center transition-colors text-sm md:text-base"
                >
                  📞 Appeler le garage
                </a>
                <Link
                  href="/contact"
                  className="block w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 md:py-4 md:px-6 rounded-lg text-center transition-colors text-sm md:text-base"
                >
                  ✉️ Demande d'information
                </Link>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700">
                <h3 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Nos garanties</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Véhicules contrôlés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Garantie disponible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Reprise possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Financement disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
