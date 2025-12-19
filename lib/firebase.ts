import admin from "firebase-admin";

let app: admin.app.App | null = null;

export function initFirebase() {
  if (app) return app;

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId) throw new Error("FIREBASE_PROJECT_ID manquant");
  if (!clientEmail) throw new Error("FIREBASE_CLIENT_EMAIL manquant");
  if (!privateKey) throw new Error("FIREBASE_PRIVATE_KEY manquant");

  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });

  return app;
}

export function getFirestoreDb() {
  const firebaseApp = initFirebase();
  return firebaseApp.firestore();
}
