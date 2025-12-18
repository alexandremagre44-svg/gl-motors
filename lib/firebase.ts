import admin from "firebase-admin";

if (!process.env.FIREBASE_PROJECT_ID) {
  throw new Error("Missing FIREBASE_PROJECT_ID");
}
if (!process.env.FIREBASE_CLIENT_EMAIL) {
  throw new Error("Missing FIREBASE_CLIENT_EMAIL");
}
if (!process.env.FIREBASE_PRIVATE_KEY) {
  throw new Error("Missing FIREBASE_PRIVATE_KEY");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

/**
 * 🔥 Firestore
 */
export function getFirestoreDb() {
  return admin.firestore();
}

/**
 * 🔥 Firebase Storage
 */
export function getFirebaseStorage() {
  return admin.storage().bucket();
}
