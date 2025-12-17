import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/lib/db/schema';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const mainImage = vehicle.photos[0] || '/images/placeholder-car.jpg';
  
  // Check if vehicle is new (created within last 30 days)
  const isNew = new Date(vehicle.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  return (
    <Link href={`/showroom/${vehicle.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
        {/* Image */}
        <div className="relative h-64 bg-gray-200">
          <Image
            src={mainImage}
            alt={`${vehicle.marque} ${vehicle.modele}`}
            fill
            className="object-cover"
            unoptimized={mainImage.includes('cloudinary')}
          />
          {/* Status Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {vehicle.statut === 'vendu' && (
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                VENDU
              </div>
            )}
            {vehicle.statut === 'reserve' && (
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                RÉSERVÉ
              </div>
            )}
            {isNew && vehicle.statut === 'disponible' && (
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                NOUVEAU
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {vehicle.marque} {vehicle.modele}
          </h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-semibold mr-2">📅</span>
              <span>{vehicle.annee}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">🛣️</span>
              <span>{vehicle.kilometrage.toLocaleString('fr-FR')} km</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">⛽</span>
              <span className="capitalize">{vehicle.carburant}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">⚙️</span>
              <span className="capitalize">{vehicle.boite}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="text-3xl font-bold text-red-600">
              {vehicle.prix.toLocaleString('fr-FR')} €
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
