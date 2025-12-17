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
        name TEXT NOT NULL,
        year INTEGER NOT NULL,
        mileage INTEGER NOT NULL,
        price REAL NOT NULL,
        status TEXT NOT NULL CHECK(status IN ('available', 'sold')),
        images TEXT NOT NULL,
        createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}

// Database abstraction layer
export const vehicleDb = {
  // Get all vehicles
  getAll(): Vehicle[] {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM vehicles ORDER BY createdAt DESC');
    const rows = stmt.all() as any[];
    return rows.map(row => ({
      ...row,
      images: JSON.parse(row.images)
    }));
  },

  // Get vehicle by ID
  getById(id: number): Vehicle | null {
    const db = getDb();
    const stmt = db.prepare('SELECT * FROM vehicles WHERE id = ?');
    const row = stmt.get(id) as any;
    if (!row) return null;
    return {
      ...row,
      images: JSON.parse(row.images)
    };
  },

  // Create vehicle
  create(input: CreateVehicleInput): Vehicle {
    const db = getDb();
    const stmt = db.prepare(`
      INSERT INTO vehicles (name, year, mileage, price, status, images)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(
      input.name,
      input.year,
      input.mileage,
      input.price,
      input.status,
      JSON.stringify(input.images)
    );
    return this.getById(info.lastInsertRowid as number)!;
  },

  // Update vehicle
  update(input: UpdateVehicleInput): Vehicle | null {
    const db = getDb();
    const current = this.getById(input.id);
    if (!current) return null;

    const updates: string[] = [];
    const values: any[] = [];

    if (input.name !== undefined) {
      updates.push('name = ?');
      values.push(input.name);
    }
    if (input.year !== undefined) {
      updates.push('year = ?');
      values.push(input.year);
    }
    if (input.mileage !== undefined) {
      updates.push('mileage = ?');
      values.push(input.mileage);
    }
    if (input.price !== undefined) {
      updates.push('price = ?');
      values.push(input.price);
    }
    if (input.status !== undefined) {
      updates.push('status = ?');
      values.push(input.status);
    }
    if (input.images !== undefined) {
      updates.push('images = ?');
      values.push(JSON.stringify(input.images));
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
