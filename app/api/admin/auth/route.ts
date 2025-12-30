export const runtime = "nodejs";

import { NextResponse } from "next/server";

// Anti-bruteforce simple : stocke les tentatives en mémoire
const loginAttempts = new Map<string, { count: number; blockedUntil?: number }>();
const MAX_ATTEMPTS = 5;
const BLOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutes

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error("ADMIN ENV VARIABLES NOT SET");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Vérifier si l'IP/email est bloqué
    const attempt = loginAttempts.get(email);
    if (attempt?.blockedUntil && Date.now() < attempt.blockedUntil) {
      const minutesLeft = Math.ceil((attempt.blockedUntil - Date.now()) / 60000);
      return NextResponse.json(
        { error: `Trop de tentatives. Réessayez dans ${minutesLeft} minute(s).` },
        { status: 429 }
      );
    }

    // Vérification des credentials
    const isValid = 
      email.trim() === adminEmail.trim() && 
      password.trim() === adminPassword.trim();

    if (!isValid) {
      // Incrémenter le compteur de tentatives
      const currentAttempt = loginAttempts.get(email) || { count: 0 };
      currentAttempt.count += 1;

      if (currentAttempt.count >= MAX_ATTEMPTS) {
        currentAttempt.blockedUntil = Date.now() + BLOCK_DURATION_MS;
        // Reset le compteur après le délai
        setTimeout(() => {
          loginAttempts.delete(email);
        }, BLOCK_DURATION_MS);
      }

      loginAttempts.set(email, currentAttempt);

      // Log anonymisé
      if (process.env.NODE_ENV === 'development') {
        console.log(`AUTH: Échec (${currentAttempt.count}/${MAX_ATTEMPTS})`);
      }

      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 });
    }

    // Connexion réussie : reset les tentatives
    loginAttempts.delete(email);

    if (process.env.NODE_ENV === 'development') {
      console.log("AUTH: Connexion réussie");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("AUTH ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Optionnel : endpoint de déconnexion
export async function DELETE() {
  return NextResponse.json({ success: true });
}
