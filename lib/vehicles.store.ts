import { Vehicle, CreateVehicleInput, UpdateVehicleInput } from './db/schema';

/**
 * In-memory storage for vehicles
 * 
 * IMPORTANT NOTES:
 * - Data is stored in memory and will be lost on server restart or redeployment
 * - This is intentional for Vercel compatibility (no file system access)
 * - In Next.js serverless environment, each instance handles one request at a time
 * - Data persistence is not a priority (acceptable per requirements)
 */
const vehicles: Vehicle[] = [];
let nextId = 1;

// Initialize with sample data
function initializeSampleData() {
  if (vehicles.length > 0) return; // Already initialized

  const sampleVehicles: Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt'>[] = [
    {
      marque: 'Renault',
      modele: 'Clio V',
      annee: 2021,
      kilometrage: 45000,
      carburant: 'essence',
      boite: 'manuelle',
      prix: 15900,
      description: 'Belle Renault Clio V en excellent état. Entretien régulier, premier propriétaire.',
      options: ['Climatisation automatique', 'GPS', 'Bluetooth', 'Régulateur de vitesse'],
      photos: ['/images/placeholder-car.jpg', '/images/placeholder-car.jpg'],
      statut: 'disponible',
      isActive: true
    },
    {
      marque: 'Peugeot',
      modele: '308',
      annee: 2020,
      kilometrage: 62000,
      carburant: 'diesel',
      boite: 'manuelle',
      prix: 18500,
      description: 'Peugeot 308 diesel, économique et spacieuse. Parfaite pour les longs trajets.',
      options: ['Climatisation', 'Système audio premium', 'Caméra de recul', 'Aide au stationnement'],
      photos: ['/images/placeholder-car.jpg'],
      statut: 'disponible',
      isActive: true
    },
    {
      marque: 'Volkswagen',
      modele: 'Golf',
      annee: 2019,
      kilometrage: 78000,
      carburant: 'essence',
      boite: 'automatique',
      prix: 16900,
      description: 'VW Golf avec boîte automatique. Très bon état général, carnet d\'entretien complet.',
      options: ['Climatisation automatique', 'Sièges chauffants', 'GPS', 'Régulateur adaptatif'],
      photos: ['/images/placeholder-car.jpg'],
      statut: 'disponible',
      isActive: true
    },
    {
      marque: 'BMW',
      modele: 'Série 3',
      annee: 2022,
      kilometrage: 25000,
      carburant: 'diesel',
      boite: 'automatique',
      prix: 32900,
      description: 'BMW Série 3 récente avec toutes les options. État impeccable.',
      options: ['Cuir', 'Toit ouvrant', 'GPS premium', 'Aide au stationnement', 'Système audio Harman Kardon'],
      photos: ['/images/placeholder-car.jpg'],
      statut: 'reserve',
      isActive: true
    },
    {
      marque: 'Mercedes',
      modele: 'Classe A',
      annee: 2018,
      kilometrage: 95000,
      carburant: 'essence',
      boite: 'automatique',
      prix: 21500,
      description: 'Mercedes Classe A, élégante et confortable. Entretien Mercedes.',
      options: ['Cuir', 'Climatisation', 'GPS', 'Bluetooth', 'Jantes alliage'],
      photos: ['/images/placeholder-car.jpg'],
      statut: 'vendu',
      isActive: true
    },
    {
      marque: 'Toyota',
      modele: 'Yaris',
      annee: 2021,
      kilometrage: 35000,
      carburant: 'hybride',
      boite: 'automatique',
      prix: 17900,
      description: 'Toyota Yaris hybride, économique et écologique. Garantie constructeur restante.',
      options: ['Caméra de recul', 'Climatisation', 'GPS', 'Apple CarPlay', 'Android Auto'],
      photos: ['/images/placeholder-car.jpg'],
      statut: 'disponible',
      isActive: true
    }
  ];

  const now = new Date().toISOString();
  sampleVehicles.forEach((vehicle) => {
    vehicles.push({
      ...vehicle,
      id: nextId++,
      createdAt: now,
      updatedAt: now
    });
  });
}

// Initialize sample data on first load
initializeSampleData();

// Vehicle store functions
export const vehicleStore = {
  // Get all vehicles
  getAll(): Vehicle[] {
    return [...vehicles].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  },

  // Get vehicle by ID
  getById(id: number): Vehicle | null {
    const vehicle = vehicles.find(v => v.id === id);
    return vehicle ? { ...vehicle } : null;
  },

  // Create vehicle
  create(input: CreateVehicleInput): Vehicle {
    const now = new Date().toISOString();
    const newVehicle: Vehicle = {
      id: nextId++,
      marque: input.marque,
      modele: input.modele,
      annee: input.annee,
      kilometrage: input.kilometrage,
      carburant: input.carburant,
      boite: input.boite,
      prix: input.prix,
      description: input.description || '',
      options: input.options || [],
      photos: input.photos || [],
      statut: input.statut || 'disponible',
      isActive: input.isActive !== false,
      createdAt: now,
      updatedAt: now
    };
    vehicles.push(newVehicle);
    return { ...newVehicle };
  },

  // Update vehicle
  update(input: UpdateVehicleInput): Vehicle | null {
    const index = vehicles.findIndex(v => v.id === input.id);
    if (index === -1) return null;

    const current = vehicles[index];
    const now = new Date().toISOString();
    
    const updated: Vehicle = {
      ...current,
      marque: input.marque !== undefined ? input.marque : current.marque,
      modele: input.modele !== undefined ? input.modele : current.modele,
      annee: input.annee !== undefined ? input.annee : current.annee,
      kilometrage: input.kilometrage !== undefined ? input.kilometrage : current.kilometrage,
      carburant: input.carburant !== undefined ? input.carburant : current.carburant,
      boite: input.boite !== undefined ? input.boite : current.boite,
      prix: input.prix !== undefined ? input.prix : current.prix,
      description: input.description !== undefined ? input.description : current.description,
      options: input.options !== undefined ? input.options : current.options,
      photos: input.photos !== undefined ? input.photos : current.photos,
      statut: input.statut !== undefined ? input.statut : current.statut,
      isActive: input.isActive !== undefined ? input.isActive : current.isActive,
      updatedAt: now
    };

    vehicles[index] = updated;
    return { ...updated };
  },

  // Delete vehicle
  delete(id: number): boolean {
    const index = vehicles.findIndex(v => v.id === id);
    if (index === -1) return false;
    vehicles.splice(index, 1);
    return true;
  }
};
