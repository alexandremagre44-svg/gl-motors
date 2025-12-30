# GL MOTORS - Site Vitrine pour Garage Automobile

Site web professionnel pour GL MOTORS, un garage automobile local spécialisé dans l'entretien, la réparation et la vente de véhicules.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Base de données**: Firebase Firestore
- **Stockage d'images**: Firebase Storage
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
│       ├── upload/          # API upload Firebase Storage
│       └── admin/auth/      # API authentification admin
├── components/              # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   └── VehicleCard.tsx
├── lib/
│   ├── db/
│   │   └── schema.ts        # Schéma de données
│   ├── firebase.ts          # Initialisation Firebase
│   ├── vehicles.service.ts  # Service Firestore véhicules
│   └── auth.ts              # Utilitaires authentification
└── public/
    └── images/              # Images statiques
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

# Firebase Configuration (REQUIS)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
```

**Générer un hash de mot de passe** :
```bash
node -e "console.log(require('bcryptjs').hashSync('votre_mot_de_passe', 10))"
```

**Configuration Firebase** :
1. Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Allez dans Paramètres du projet > Comptes de service
3. Cliquez sur "Générer une nouvelle clé privée"
4. Copiez les valeurs dans `.env.local`

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

## 🔐 Sécurité de l'authentification admin

### Configuration

L'accès à l'administration (`/admin/showroom`) est protégé par : 

- **Email + Mot de passe** stockés dans les variables d'environnement
- **Mot de passe fort** (32+ caractères aléatoires recommandés)
- **Protection anti-bruteforce** : 5 tentatives max, blocage 15 minutes

### Générer un mot de passe fort

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Variables d'environnement requises

```env
ADMIN_EMAIL=votre-email@example.com
ADMIN_PASSWORD=<votre_mot_de_passe_fort>
```

### Protection anti-bruteforce

Le système enregistre les tentatives de connexion échouées :
- Maximum **5 tentatives** par adresse email
- Après 5 échecs : **blocage de 15 minutes**
- Le compteur se réinitialise automatiquement après une connexion réussie
- Les logs sont anonymisés et n'apparaissent qu'en mode développement

### Bonnes pratiques

1. **Utilisez un mot de passe fort** : Minimum 32 caractères générés aléatoirement
2. **Ne commitez jamais** vos variables d'environnement dans le dépôt
3. **Changez le mot de passe** si vous soupçonnez une compromission
4. **Surveillez les logs** en développement pour détecter des tentatives suspectes

## 💾 Base de Données Firebase

Le projet utilise Firebase pour la persistance des données :

### Firestore
- Collection `vehicles` pour stocker les véhicules
- Synchronisation en temps réel entre admin et site client
- Accessible depuis n'importe où (local et Vercel)

### Firebase Storage
- Stockage des images de véhicules
- URLs publiques pour l'affichage
- Dossier `vehicles/` pour l'organisation

### Schéma Vehicle (Firestore)

```typescript
{
  id: number;
  marque: string;
  modele: string;
  annee: number;
  kilometrage: number;
  carburant: string;
  boite: string;
  prix: number;
  description: string;
  options: string[];
  photos: string[];
  statut: 'disponible' | 'reserve' | 'vendu';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```

## 🚢 Déploiement sur Vercel

1. **Connecter votre repository GitHub à Vercel**

2. **Configurer les variables d'environnement** dans Vercel :
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH`
   - `SESSION_SECRET`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
   - `FIREBASE_STORAGE_BUCKET`
   - `NODE_ENV=production`

3. **Déployer**
```bash
npm run build
```

✅ **Firebase et Vercel** : Firebase fonctionne parfaitement avec Vercel grâce à son architecture cloud. Aucune configuration supplémentaire nécessaire !

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
