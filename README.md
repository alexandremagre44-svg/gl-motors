# GL MOTORS - Site Vitrine pour Garage Automobile

Site web professionnel pour GL MOTORS, un garage automobile local spécialisé dans l'entretien, la réparation et la vente de véhicules.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Base de données**: SQLite (better-sqlite3)
- **Images**: Cloudinary
- **Déploiement**: Vercel

## 📁 Structure du Projet

```
gl-motors/
├── app/                      # Pages et routes Next.js
│   ├── page.tsx             # Page d'accueil
│   ├── services/            # Page services
│   ├── showroom/            # Page showroom (dynamique)
│   ├── contact/             # Page contact
│   ├── admin/
│   │   └── showroom/        # Administration showroom
│   └── api/
│       ├── vehicles/        # API CRUD véhicules
│       ├── upload/          # API upload Cloudinary
│       └── admin/auth/      # API authentification admin
├── components/              # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   └── VehicleCard.tsx
├── lib/
│   ├── db/
│   │   ├── schema.ts        # Schéma de données
│   │   └── database.ts      # Abstraction base de données
│   └── auth.ts              # Utilitaires authentification
├── public/
│   └── images/              # Images statiques
└── data/                    # Base de données SQLite (généré)
```

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd gl-motors
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**

Copiez `.env.example` vers `.env.local` et configurez :

```bash
cp .env.example .env.local
```

Éditez `.env.local` avec vos propres valeurs :

```env
# Admin Authentication
ADMIN_EMAIL=admin@glmotors.fr
ADMIN_PASSWORD_HASH=<votre_hash_bcrypt>

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=<votre_cloud_name>
CLOUDINARY_API_KEY=<votre_api_key>
CLOUDINARY_API_SECRET=<votre_api_secret>
```

**Générer un hash de mot de passe** :
```bash
node -e "console.log(require('bcryptjs').hashSync('votre_mot_de_passe', 10))"
```

4. **Ajouter une image de garage**

Placez une photo de votre garage dans `/public/images/garage.jpg` pour le hero de la page d'accueil.

5. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📄 Pages du Site

### Pages Publiques

- **/** : Page d'accueil avec hero, services, section confiance et CTA
- **/services** : Liste complète des services automobiles
- **/showroom** : Affichage des véhicules disponibles et vendus
- **/contact** : Informations de contact, horaires, carte et formulaire

### Administration

- **/admin/showroom** : Interface d'administration protégée pour gérer les véhicules
  - Connexion sécurisée
  - CRUD complet des véhicules
  - Upload d'images vers Cloudinary
  - Gestion du statut (disponible/vendu)

## 🔐 Authentification Admin

L'accès à l'administration est protégé par :
- Email et mot de passe stockés dans les variables d'environnement
- Hash bcrypt pour le mot de passe
- Cookie de session simple

**Identifiants par défaut (développement)** :
- Email : `admin@glmotors.fr`
- Mot de passe : `admin123`

⚠️ **Important** : Changez ces identifiants en production !

## 🖼️ Configuration Cloudinary

1. Créez un compte sur [Cloudinary](https://cloudinary.com/)
2. Récupérez vos credentials dans le Dashboard
3. Ajoutez-les dans `.env.local`

Les images sont automatiquement uploadées dans un dossier `gl-motors` sur Cloudinary.

## 💾 Base de Données

Le projet utilise SQLite avec `better-sqlite3` pour la persistance :
- Base créée automatiquement au premier lancement
- Stockée dans `/data/vehicles.db`
- Architecture permettant de migrer facilement vers PostgreSQL/MySQL

### Schéma Vehicle

```typescript
{
  id: number;
  name: string;
  year: number;
  mileage: number;
  price: number;
  status: 'available' | 'sold';
  images: string[];
  createdAt: string;
  updatedAt: string;
}
```

## 🚢 Déploiement sur Vercel

1. **Connecter votre repository GitHub à Vercel**

2. **Configurer les variables d'environnement** dans Vercel :
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `NODE_ENV=production`

3. **Déployer**
```bash
npm run build
```

⚠️ **Note sur la base de données** : SQLite fonctionne localement mais Vercel utilise des fonctions serverless. Pour la production, considérez :
- Vercel Postgres
- PlanetScale
- Supabase
- Ou toute base de données cloud

L'abstraction dans `/lib/db/database.ts` facilite la migration.

## 🎨 Design & Identité

### Palette de Couleurs

- **Primaire** : Gris anthracite / Noir (#111827)
- **Secondaire** : Blanc (#FFFFFF)
- **Accent** : Rouge (#DC2626)

### Style

- Design moderne et sobre
- Mobile First
- Navigation sticky
- Composants réutilisables
- Transitions fluides

## 📝 Développement

### Commandes Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linter ESLint
```

### Ajouter un Service

Modifiez `/app/page.tsx` ou `/app/services/page.tsx` pour ajouter des services.

### Personnaliser les Informations

- **Contact** : Modifiez `/app/contact/page.tsx` et `/components/Footer.tsx`
- **Ville** : Changez "Paris" dans `/app/page.tsx` (ligne 40)
- **Téléphone** : Remplacez `+33123456789` dans tous les fichiers

## 🔒 Sécurité

- Authentification par hash bcrypt
- Variables d'environnement pour les secrets
- Validation des entrées API
- Cookies httpOnly pour les sessions
- Protection CSRF via sameSite

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

## 📜 Licence

Propriété de GL MOTORS. Tous droits réservés.
