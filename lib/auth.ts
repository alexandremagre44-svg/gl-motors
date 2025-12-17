/**
 * Auth admin SIMPLE
 * - email + password en clair
 * - compatible Vercel
 * - aucune dépendance externe
 */

export function checkAdminCredentials(
  email?: string,
  password?: string
): boolean {
  if (!email || !password) return false;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error("ADMIN ENV MISSING");
    return false;
  }

  return (
    email.trim() === adminEmail &&
    password.trim() === adminPassword
  );
}
