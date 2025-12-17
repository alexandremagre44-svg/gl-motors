import bcrypt from 'bcryptjs';

// Simple authentication check
export function checkAuth(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminPasswordHash) {
    console.error('Admin credentials not configured');
    return false;
  }

  if (email !== adminEmail) {
    return false;
  }

  return bcrypt.compareSync(password, adminPasswordHash);
}

// Generate password hash (for setup)
export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}
