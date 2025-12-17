import bcrypt from 'bcryptjs';

// Simple session management
const SECRET = process.env.SESSION_SECRET || 'change-this-in-production';

export function createSessionToken(email: string): string {
  const payload = `${email}:${Date.now()}`;
  const signature = bcrypt.hashSync(payload + SECRET, 10);
  return Buffer.from(`${payload}:${signature}`).toString('base64');
}

export function validateSessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString();
    const [email, timestamp, signature] = decoded.split(':');
    
    if (!email || !timestamp || !signature) {
      return false;
    }

    // Check if token is expired (24 hours)
    const tokenAge = Date.now() - parseInt(timestamp);
    if (tokenAge > 24 * 60 * 60 * 1000) {
      return false;
    }

    // Verify signature
    const payload = `${email}:${timestamp}`;
    return bcrypt.compareSync(payload + SECRET, signature);
  } catch (error) {
    return false;
  }
}
