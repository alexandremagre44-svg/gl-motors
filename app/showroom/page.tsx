import { vehicleStore } from "@/lib/vehicles.store";
import VehicleCard from "@/components/VehicleCard";

export const metadata = {
  title: "Showroom - Véhicules disponibles - GL MOTORS",
  description: "Découvrez nos véhicules d'occasion disponibles à la vente.",
};

// Disable caching for this page to always show latest vehicles
export const dynamic = 'force-dynamic';

export default function ShowroomPage() {
  const vehicles = vehicleStore.getAll();
  // Filter only active vehicles for public display
  const activeVehicles = vehicles.filter(v => v.isActive);
  const availableVehicles = activeVehicles.filter(v => v.statut === 'disponible');
  const reservedVehicles = activeVehicles.filter(v => v.statut === 'reserve');
  const soldVehicles = activeVehicles.filter(v => v.statut === 'vendu');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-8 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Notre Showroom</h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules d'occasion contrôlés et garantis
          </p>
        </div>
      </div>

      {/* Available Vehicles */}
      <div className="container mx-auto px-4 py-8 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">
          Véhicules Disponibles ({availableVehicles.length})
        </h2>

        {availableVehicles.length === 0 ? (
          <div className="text-center py-8 md:py-12 bg-white rounded-lg shadow">
            <p className="text-lg md:text-xl text-gray-600">
              Aucun véhicule disponible pour le moment.
            </p>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              Revenez bientôt ou contactez-nous pour plus d'informations.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {availableVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}

        {/* Reserved Vehicles */}
        {reservedVehicles.length > 0 && (
          <div className="mt-12 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">
              Véhicules Réservés ({reservedVehicles.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 opacity-75">
              {reservedVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}

        {/* Sold Vehicles */}
        {soldVehicles.length > 0 && (
          <div className="mt-12 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">
              Véhicules Vendus ({soldVehicles.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 opacity-60">
              {soldVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-8 md:mt-16 bg-gray-900 text-white rounded-lg p-6 md:p-12 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Intéressé par un véhicule ?</h2>
          <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-8">
            Contactez-nous pour plus d'informations ou pour organiser un essai
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="tel:+33123456789"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-colors"
            >
              📞 Appeler
            </a>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
