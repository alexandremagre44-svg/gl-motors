import { getFirestoreDb } from './firebase';
import { Vehicle, CreateVehicleInput, UpdateVehicleInput } from './db/schema';

const COLLECTION_NAME = 'vehicles';

/**
 * Firestore-based vehicle service
 * Replaces in-memory storage with persistent Firebase storage
 */
export const vehicleService = {
  /**
   * Get all vehicles from Firestore
   * Returns vehicles sorted by creation date (newest first)
   */
  async getAll(): Promise<Vehicle[]> {
    try {
      const db = getFirestoreDb();
      const snapshot = await db.collection(COLLECTION_NAME)
        .orderBy('createdAt', 'desc')
        .get();

      const vehicles: Vehicle[] = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        vehicles.push({
          id: parseInt(doc.id),
          marque: data.marque,
          modele: data.modele,
          annee: data.annee,
          kilometrage: data.kilometrage,
          carburant: data.carburant,
          boite: data.boite,
          prix: data.prix,
          description: data.description || '',
          options: data.options || [],
          photos: data.photos || [],
          statut: data.statut || 'disponible',
          isActive: data.isActive !== false,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        });
      });

      return vehicles;
    } catch (error) {
      console.error('Error fetching vehicles from Firestore:', error);
      throw error;
    }
  },

  /**
   * Get vehicle by ID from Firestore
   */
  async getById(id: number): Promise<Vehicle | null> {
    try {
      const db = getFirestoreDb();
      const doc = await db.collection(COLLECTION_NAME).doc(id.toString()).get();

      if (!doc.exists) {
        return null;
      }

      const data = doc.data()!;
      return {
        id: parseInt(doc.id),
        marque: data.marque,
        modele: data.modele,
        annee: data.annee,
        kilometrage: data.kilometrage,
        carburant: data.carburant,
        boite: data.boite,
        prix: data.prix,
        description: data.description || '',
        options: data.options || [],
        photos: data.photos || [],
        statut: data.statut || 'disponible',
        isActive: data.isActive !== false,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };
    } catch (error) {
      console.error(`Error fetching vehicle ${id} from Firestore:`, error);
      throw error;
    }
  },

  /**
   * Create new vehicle in Firestore
   */
  async create(input: CreateVehicleInput): Promise<Vehicle> {
    try {
      const db = getFirestoreDb();
      const now = new Date().toISOString();

      // Get next ID by finding the max ID and incrementing
      const snapshot = await db.collection(COLLECTION_NAME).get();
      let maxId = 0;
      snapshot.forEach(doc => {
        const docId = parseInt(doc.id);
        if (!isNaN(docId) && docId > maxId) {
          maxId = docId;
        }
      });
      const newId = maxId + 1;

      const vehicleData = {
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
        updatedAt: now,
      };

      await db.collection(COLLECTION_NAME).doc(newId.toString()).set(vehicleData);

      return {
        id: newId,
        ...vehicleData,
      };
    } catch (error) {
      console.error('Error creating vehicle in Firestore:', error);
      throw error;
    }
  },

  /**
   * Update vehicle in Firestore
   */
  async update(input: UpdateVehicleInput): Promise<Vehicle | null> {
    try {
      const db = getFirestoreDb();
      const docRef = db.collection(COLLECTION_NAME).doc(input.id.toString());
      const doc = await docRef.get();

      if (!doc.exists) {
        return null;
      }

      const now = new Date().toISOString();

      const updatedData: Record<string, unknown> = {
        updatedAt: now,
      };

      // Only update fields that are provided
      if (input.marque !== undefined) updatedData.marque = input.marque;
      if (input.modele !== undefined) updatedData.modele = input.modele;
      if (input.annee !== undefined) updatedData.annee = input.annee;
      if (input.kilometrage !== undefined) updatedData.kilometrage = input.kilometrage;
      if (input.carburant !== undefined) updatedData.carburant = input.carburant;
      if (input.boite !== undefined) updatedData.boite = input.boite;
      if (input.prix !== undefined) updatedData.prix = input.prix;
      if (input.description !== undefined) updatedData.description = input.description;
      if (input.options !== undefined) updatedData.options = input.options;
      if (input.photos !== undefined) updatedData.photos = input.photos;
      if (input.statut !== undefined) updatedData.statut = input.statut;
      if (input.isActive !== undefined) updatedData.isActive = input.isActive;

      await docRef.update(updatedData);

      // Fetch and return updated document
      const updatedDoc = await docRef.get();
      const data = updatedDoc.data()!;

      return {
        id: input.id,
        marque: data.marque,
        modele: data.modele,
        annee: data.annee,
        kilometrage: data.kilometrage,
        carburant: data.carburant,
        boite: data.boite,
        prix: data.prix,
        description: data.description || '',
        options: data.options || [],
        photos: data.photos || [],
        statut: data.statut || 'disponible',
        isActive: data.isActive !== false,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };
    } catch (error) {
      console.error(`Error updating vehicle ${input.id} in Firestore:`, error);
      throw error;
    }
  },

  /**
   * Delete vehicle from Firestore
   */
  async delete(id: number): Promise<boolean> {
    try {
      const db = getFirestoreDb();
      const docRef = db.collection(COLLECTION_NAME).doc(id.toString());
      const doc = await docRef.get();

      if (!doc.exists) {
        return false;
      }

      await docRef.delete();
      return true;
    } catch (error) {
      console.error(`Error deleting vehicle ${id} from Firestore:`, error);
      throw error;
    }
  },
};
