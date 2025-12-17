# GL MOTORS - Quick Setup Guide

## 🚀 Quick Start (Development)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   - Admin email and password hash
   - Session secret
   - Firebase credentials (REQUIRED - see below)

3. **Generate admin password hash**
   ```bash
   node scripts/hash-password.js your_password
   ```
   Copy the output to `ADMIN_PASSWORD_HASH` in `.env.local`

4. **Add your garage photo**
   - Replace `/public/images/garage.jpg` with an actual photo of your garage
   - Recommended size: 1920x1080 or larger

5. **Start development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

## 🔐 Admin Access

- URL: http://localhost:3000/admin/showroom
- Default credentials (development):
  - Email: `admin@glmotors.fr`
  - Password: `admin123`
  
⚠️ **Change these in production!**

## 📦 Production Deployment (Vercel)

### Before Deploying

1. **Configure Firebase** (REQUIS)
   - Créez un projet sur Firebase Console: https://console.firebase.google.com/
   - Activez Firestore Database et Storage
   - Générez une clé de compte de service (Paramètres > Comptes de service)
   - Configurez les règles Firestore (voir ci-dessous)

2. **Set environment variables in Vercel**
   ```
   ADMIN_EMAIL=your_email@example.com
   ADMIN_PASSWORD_HASH=your_generated_hash
   SESSION_SECRET=generate_with_crypto_randomBytes
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key\n-----END PRIVATE KEY-----\n"
   FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   NODE_ENV=production
   ```

4. **Update contact information**
   - Edit `/app/contact/page.tsx` with real phone, address, hours
   - Update Google Maps embed URL with actual coordinates
   - Edit `/components/Footer.tsx` with correct contact info

5. **Replace placeholder images**
   - Add real garage photo to `/public/images/garage.jpg`
   - Logo can be added to `/public` if you have one

### Deploy to Vercel

```bash
npm run build  # Test build locally
```

Then:
- Push to GitHub
- Connect repository to Vercel
- Configure environment variables
- Deploy!

## 🧪 Testing

```bash
npm run build   # Build for production
npm run start   # Run production build locally
npm run lint    # Run ESLint
```

## 📝 Customization

### Change City/Location
- Edit `/app/page.tsx` line 40: "Garage automobile à Paris"
- Update throughout the site as needed

### Change Phone Number
- Search for `+33123456789` in all files
- Replace with actual phone number

### Add More Services
- Edit services array in `/app/page.tsx` (homepage preview)
- Edit services array in `/app/services/page.tsx` (full list)

### Modify Colors
The brand colors are:
- Red accent: `bg-red-600`, `text-red-600` (Tailwind classes)
- Dark: `bg-gray-900`, `text-gray-900`
- Light gray: `bg-gray-50`

## ⚠️ Common Issues

1. **Build fails with font error**
   - Already fixed - using system fonts instead of Google Fonts

2. **Database not created**
   - Database is created automatically in `/data/` directory
   - This directory is gitignored

3. **Admin login doesn't work**
   - Check `.env.local` has correct `ADMIN_PASSWORD_HASH`
   - Verify cookies are enabled in browser

4. **Images not uploading**
   - Configure Cloudinary credentials
   - Check API keys are correct

## 🛠️ Database Migration

To migrate from SQLite to PostgreSQL/MySQL:

1. Install database client:
   ```bash
   npm install pg  # or mysql2
   ```

2. Update `/lib/db/database.ts`
   - Replace `better-sqlite3` with new client
   - Keep the same exported functions
   - Update SQL syntax if needed

3. The rest of the application will work without changes!

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Vercel Deployment](https://vercel.com/docs)

## 🆘 Support

For issues or questions:
1. Check the main README.md
2. Review this setup guide
3. Check Next.js documentation
4. Review the code comments

---

Built with ❤️ for GL MOTORS
