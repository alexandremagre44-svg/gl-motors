import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

let app: any;

function initFirebase() {
  if (app) return app;

  const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
  const bucket = process.env.FIREBASE_STORAGE_BUCKET;

  if (!base64) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_BASE64 manquant");
  }

  if (!bucket) {
    throw new Error("FIREBASE_STORAGE_BUCKET manquant");
  }

  const json = JSON.parse(
    Buffer.from(base64, "base64").toString("utf8")
  );

  app = initializeApp({
    credential: cert(json),
    storageBucket: bucket,
  });

  return app;
}

/* ========= EXPORTS ========= */

export function getFirestoreDb() {
  initFirebase();
  return getFirestore();
}

export function getFirebaseStorage() {
  initFirebase();
  return getStorage();
}
