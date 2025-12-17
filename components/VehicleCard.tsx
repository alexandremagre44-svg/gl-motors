import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/lib/db/schema';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const mainImage = vehicle.photos[0] || '/images/placeholder-car.jpg';
  
  // Check if vehicle is new (created within last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const isNew = new Date(vehicle.createdAt) > thirtyDaysAgo;

  return (
    <Link href={`/showroom/${vehicle.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
          <Image
            src={mainImage}
            alt={`${vehicle.marque} ${vehicle.modele}`}
            fill
            className="object-cover object-center"
            unoptimized={mainImage.includes('cloudinary')}
          />
          {/* Status Badges */}
          <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-2">
            {vehicle.statut === 'vendu' && (
              <div className="bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-base font-semibold shadow-lg">
                VENDU
              </div>
            )}
            {vehicle.statut === 'reserve' && (
              <div className="bg-orange-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-base font-semibold shadow-lg">
                RÉSERVÉ
              </div>
            )}
            {isNew && vehicle.statut === 'disponible' && (
              <div className="bg-green-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-base font-semibold shadow-lg">
                NOUVEAU
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-6 space-y-2 md:space-y-0">
          <h3 className="text-base md:text-2xl font-bold text-gray-900 leading-tight md:mb-2">
            {vehicle.marque} {vehicle.modele}
          </h3>
          
          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-4 text-xs md:text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-semibold mr-1 md:mr-2">📅</span>
              <span>{vehicle.annee}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-1 md:mr-2">🛣️</span>
              <span>{vehicle.kilometrage.toLocaleString('fr-FR')} km</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-1 md:mr-2">⛽</span>
              <span className="capitalize">{vehicle.carburant}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-1 md:mr-2">⚙️</span>
              <span className="capitalize">{vehicle.boite}</span>
            </div>
          </div>

          <div className="pt-2 md:pt-4 border-t border-gray-200">
            <div className="text-lg md:text-3xl font-bold text-red-600">
              {vehicle.prix.toLocaleString('fr-FR')} €
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
