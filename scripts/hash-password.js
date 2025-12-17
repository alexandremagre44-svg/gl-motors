// Script to generate password hash for admin authentication
// Usage: node scripts/hash-password.js your_password

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.js <password>');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
console.log('\nPassword hash generated:');
console.log(hash);
console.log('\nAdd this to your .env.local:');
console.log(`ADMIN_PASSWORD_HASH=${hash}`);
