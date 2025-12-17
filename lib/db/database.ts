import Database from 'better-sqlite3';
import path from 'path';
import { Vehicle, CreateVehicleInput, UpdateVehicleInput } from './schema';

const dbPath = path.join(process.cwd(), 'data', 'vehicles.db');

// Initialize database
let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    // Create data directory if it doesn't exist
    const fs = require('fs'); // Keep for compatibility with better-sqlite3
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    
    // Create tables
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

    // Migration: Check if old columns exist and migrate data
    try {
      const tableInfo = db.prepare("PRAGMA table_info(vehicles)").all() as Array<{ name: string }>;
      const hasOldSchema = tableInfo.some((col) => col.name === 'name');
      
      if (hasOldSchema) {
        // Migrate old data to new schema
        db.exec(`
          CREATE TABLE IF NOT EXISTS vehicles_new (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            marque TEXT NOT NULL,
            modele TEXT NOT NULL,
            annee INTEGER NOT NULL,
            kilometrage INTEGER NOT NULL,
            carburant TEXT NOT NULL DEFAULT 'essence',
            boite TEXT NOT NULL DEFAULT 'manuelle',
            prix REAL NOT NULL,
            description TEXT NOT NULL DEFAULT '',
            options TEXT NOT NULL DEFAULT '[]',
            photos TEXT NOT NULL DEFAULT '[]',
            statut TEXT NOT NULL DEFAULT 'disponible' CHECK(statut IN ('disponible', 'reserve', 'vendu')),
            isActive INTEGER NOT NULL DEFAULT 1,
            createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
          );

          INSERT INTO vehicles_new (id, marque, modele, annee, kilometrage, prix, photos, statut, createdAt, updatedAt)
          SELECT 
            id,
            CASE 
              WHEN instr(name, ' ') > 0 THEN substr(name, 1, instr(name, ' ') - 1)
              ELSE 'Autre'
            END as marque,
            CASE 
              WHEN instr(name, ' ') > 0 THEN substr(name, instr(name, ' ') + 1)
              ELSE name
            END as modele,
            year as annee,
            mileage as kilometrage,
            price as prix,
            images as photos,
            CASE status
              WHEN 'available' THEN 'disponible'
              WHEN 'sold' THEN 'vendu'
              ELSE 'disponible'
            END as statut,
            createdAt,
            updatedAt
          FROM vehicles;

          DROP TABLE vehicles;
          ALTER TABLE vehicles_new RENAME TO vehicles;
        `);
      }
    } catch (error) {
      // Table might not exist yet or already migrated
      console.log('Migration check:', error);
    }
  }
  return db;
}

// Database abstraction layer
export const vehicleDb = {
  // Get all vehicles
  getAll(): Vehicle[] {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM vehicles ORDER BY createdAt DESC');
    const rows = stmt.all() as Array<{
      id: number;
      marque: string;
      modele: string;
      annee: number;
      kilometrage: number;
      carburant: string;
      boite: string;
      prix: number;
      description: string;
      options: string;
      photos: string;
      statut: 'disponible' | 'reserve' | 'vendu';
      isActive: number;
      createdAt: string;
      updatedAt: string;
    }>;
    return rows.map(row => ({
      ...row,
      options: JSON.parse(row.options || '[]') as string[],
      photos: JSON.parse(row.photos || '[]') as string[],
      isActive: Boolean(row.isActive)
    }));
  },

  // Get vehicle by ID
  getById(id: number): Vehicle | null {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM vehicles WHERE id = ?');
    const row = stmt.get(id) as {
      id: number;
      marque: string;
      modele: string;
      annee: number;
      kilometrage: number;
      carburant: string;
      boite: string;
      prix: number;
      description: string;
      options: string;
      photos: string;
      statut: 'disponible' | 'reserve' | 'vendu';
      isActive: number;
      createdAt: string;
      updatedAt: string;
    } | undefined;
    if (!row) return null;
    return {
      ...row,
      options: JSON.parse(row.options || '[]') as string[],
      photos: JSON.parse(row.photos || '[]') as string[],
      isActive: Boolean(row.isActive)
    };
  },

  // Create vehicle
  create(input: CreateVehicleInput): Vehicle {
    const db = getDb();
    const stmt = db.prepare(`
      INSERT INTO vehicles (marque, modele, annee, kilometrage, carburant, boite, prix, description, options, photos, statut, isActive)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(
      input.marque,
      input.modele,
      input.annee,
      input.kilometrage,
      input.carburant,
      input.boite,
      input.prix,
      input.description || '',
      JSON.stringify(input.options || []),
      JSON.stringify(input.photos || []),
      input.statut || 'disponible',
      input.isActive !== false ? 1 : 0
    );
    return this.getById(info.lastInsertRowid as number)!;
  },

  // Update vehicle
  update(input: UpdateVehicleInput): Vehicle | null {
    const db = getDb();
    const current = this.getById(input.id);
    if (!current) return null;

    const updates: string[] = [];
    const values: Array<string | number> = [];

    if (input.marque !== undefined) {
      updates.push('marque = ?');
      values.push(input.marque);
    }
    if (input.modele !== undefined) {
      updates.push('modele = ?');
      values.push(input.modele);
    }
    if (input.annee !== undefined) {
      updates.push('annee = ?');
      values.push(input.annee);
    }
    if (input.kilometrage !== undefined) {
      updates.push('kilometrage = ?');
      values.push(input.kilometrage);
    }
    if (input.carburant !== undefined) {
      updates.push('carburant = ?');
      values.push(input.carburant);
    }
    if (input.boite !== undefined) {
      updates.push('boite = ?');
      values.push(input.boite);
    }
    if (input.prix !== undefined) {
      updates.push('prix = ?');
      values.push(input.prix);
    }
    if (input.description !== undefined) {
      updates.push('description = ?');
      values.push(input.description);
    }
    if (input.options !== undefined) {
      updates.push('options = ?');
      values.push(JSON.stringify(input.options));
    }
    if (input.photos !== undefined) {
      updates.push('photos = ?');
      values.push(JSON.stringify(input.photos));
    }
    if (input.statut !== undefined) {
      updates.push('statut = ?');
      values.push(input.statut);
    }
    if (input.isActive !== undefined) {
      updates.push('isActive = ?');
      values.push(input.isActive ? 1 : 0);
    }

    updates.push('updatedAt = CURRENT_TIMESTAMP');
    values.push(input.id);

    const stmt = db.prepare(`
      UPDATE vehicles SET ${updates.join(', ')} WHERE id = ?
    `);
    stmt.run(...values);

    return this.getById(input.id);
  },

  // Delete vehicle
  delete(id: number): boolean {
    const db = getDb();
    const stmt = db.prepare('DELETE FROM vehicles WHERE id = ?');
    const info = stmt.run(id);
    return info.changes > 0;
  }
};

// Close database connection on process exit
if (typeof process !== 'undefined') {
  process.on('exit', () => {
    if (db) {
      db.close();
    }
  });
}
