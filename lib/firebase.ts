import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

let app: App;
let db: Firestore;
let storage: Storage;

/**
 * Initialize Firebase Admin SDK
 * Uses service account credentials from environment variables
 */
export function initializeFirebase() {
  if (getApps().length === 0) {
    // Initialize Firebase Admin with service account
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    let privateKey = process.env.FIREBASE_PRIVATE_KEY;

    // Validate required environment variables
    if (!projectId || !clientEmail || !privateKey) {
      throw new Error(
        'Missing Firebase credentials. Please set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables.'
      );
    }

    // Process private key - replace escaped newlines with actual newlines
    privateKey = privateKey.replace(/\\n/g, '\n');

    // Validate private key format
    if (!privateKey.includes('BEGIN PRIVATE KEY') || !privateKey.includes('END PRIVATE KEY')) {
      throw new Error(
        'Invalid FIREBASE_PRIVATE_KEY format. Must be a valid PEM-formatted private key including BEGIN and END markers.'
      );
    }

    app = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
  } else {
    app = getApps()[0];
  }

  db = getFirestore(app);
  storage = getStorage(app);

  return { app, db, storage };
}

/**
 * Get Firestore instance
 */
export function getFirestoreDb(): Firestore {
  if (!db) {
    initializeFirebase();
  }
  return db;
}

/**
 * Get Storage instance
 */
export function getFirebaseStorage(): Storage {
  if (!storage) {
    initializeFirebase();
  }
  return storage;
}
