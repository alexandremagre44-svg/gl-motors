// Database schema for vehicles
export interface Vehicle {
  id: number;
  marque: string;           // Brand
  modele: string;           // Model
  annee: number;            // Year
  kilometrage: number;      // Mileage
  carburant: string;        // Fuel type: essence, diesel, electrique, hybride
  boite: string;            // Transmission: manuelle, automatique
  prix: number;             // Price
  description: string;      // Full description
  options: string[];        // Array of options/features
  photos: string[];         // Cloudinary URLs with order
  statut: 'disponible' | 'reserve' | 'vendu';  // Status
  isActive: boolean;        // Active listing
  createdAt: string;
  updatedAt: string;
}

export interface CreateVehicleInput {
  marque: string;
  modele: string;
  annee: number;
  kilometrage: number;
  carburant: string;
  boite: string;
  prix: number;
  description: string;
  options: string[];
  photos: string[];
  statut?: 'disponible' | 'reserve' | 'vendu';
  isActive?: boolean;
}

export interface UpdateVehicleInput extends Partial<CreateVehicleInput> {
  id: number;
}
