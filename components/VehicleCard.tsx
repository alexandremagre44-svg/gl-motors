import Image from 'next/image';
import { Vehicle } from '@/lib/db/schema';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const mainImage = vehicle.images[0] || '/images/placeholder-car.jpg';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-64 bg-gray-200">
        <Image
          src={mainImage}
          alt={vehicle.name}
          fill
          className="object-cover"
          unoptimized={mainImage.includes('cloudinary')}
        />
        {/* Status Badge */}
        {vehicle.status === 'sold' && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
            VENDU
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>
        
        <div className="space-y-2 mb-4 text-gray-600">
          <div className="flex items-center">
            <span className="font-semibold mr-2">📅 Année:</span>
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">🛣️ Kilométrage:</span>
            <span>{vehicle.mileage.toLocaleString('fr-FR')} km</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="text-3xl font-bold text-red-600">
            {vehicle.price.toLocaleString('fr-FR')} €
          </div>
        </div>
      </div>
    </div>
  );
}
