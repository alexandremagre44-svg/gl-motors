const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(process.cwd(), 'data', 'vehicles.db');
const db = new Database(dbPath);

// Create table
db.exec(`
  CREATE TABLE IF NOT EXISTS vehicles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    marque TEXT NOT NULL,
    modele TEXT NOT NULL,
    annee INTEGER NOT NULL,
    kilometrage INTEGER NOT NULL,
    carburant TEXT NOT NULL,
    boite TEXT NOT NULL,
    prix REAL NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    options TEXT NOT NULL DEFAULT '[]',
    photos TEXT NOT NULL DEFAULT '[]',
    statut TEXT NOT NULL DEFAULT 'disponible' CHECK(statut IN ('disponible', 'reserve', 'vendu')),
    isActive INTEGER NOT NULL DEFAULT 1,
    createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

// Sample vehicles
const vehicles = [
  {
    marque: 'Renault',
    modele: 'Clio V',
    annee: 2021,
    kilometrage: 45000,
    carburant: 'essence',
    boite: 'manuelle',
    prix: 15900,
    description: 'Belle Renault Clio V en excellent état. Entretien régulier, premier propriétaire.',
    options: JSON.stringify(['Climatisation automatique', 'GPS', 'Bluetooth', 'Régulateur de vitesse']),
    photos: JSON.stringify([
      '/images/placeholder-car.jpg',
      '/images/placeholder-car.jpg'
    ]),
    statut: 'disponible',
    isActive: 1
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
    options: JSON.stringify(['Climatisation', 'Système audio premium', 'Caméra de recul', 'Aide au stationnement']),
    photos: JSON.stringify([
      '/images/placeholder-car.jpg'
    ]),
    statut: 'disponible',
    isActive: 1
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
    options: JSON.stringify(['Climatisation automatique', 'Sièges chauffants', 'GPS', 'Régulateur adaptatif']),
    photos: JSON.stringify([
      '/images/placeholder-car.jpg'
    ]),
    statut: 'disponible',
    isActive: 1
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
    options: JSON.stringify(['Cuir', 'Toit ouvrant', 'GPS premium', 'Aide au stationnement', 'Système audio Harman Kardon']),
    photos: JSON.stringify([
      '/images/placeholder-car.jpg'
    ]),
    statut: 'reserve',
    isActive: 1
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
    options: JSON.stringify(['Cuir', 'Climatisation', 'GPS', 'Bluetooth', 'Jantes alliage']),
    photos: JSON.stringify([
      '/images/placeholder-car.jpg'
    ]),
    statut: 'vendu',
    isActive: 1
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
    options: JSON.stringify(['Caméra de recul', 'Climatisation', 'GPS', 'Apple CarPlay', 'Android Auto']),
    photos: JSON.stringify([
      '/images/placeholder-car.jpg'
    ]),
    statut: 'disponible',
    isActive: 1
  }
];

const stmt = db.prepare(`
  INSERT INTO vehicles (marque, modele, annee, kilometrage, carburant, boite, prix, description, options, photos, statut, isActive)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

vehicles.forEach(vehicle => {
  stmt.run(
    vehicle.marque,
    vehicle.modele,
    vehicle.annee,
    vehicle.kilometrage,
    vehicle.carburant,
    vehicle.boite,
    vehicle.prix,
    vehicle.description,
    vehicle.options,
    vehicle.photos,
    vehicle.statut,
    vehicle.isActive
  );
});

console.log(`Added ${vehicles.length} sample vehicles to the database`);
db.close();
