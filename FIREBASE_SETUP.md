# Firebase Setup Guide for GL Motors

Ce guide vous accompagne dans la configuration de Firebase pour le projet GL Motors.

## 🔥 Pourquoi Firebase ?

Firebase offre :
- **Firestore** : Base de données NoSQL en temps réel
- **Storage** : Stockage d'images avec URLs publiques
- **Gratuit** pour les petits projets (quotas généreux)
- **Compatible Vercel** : Fonctionne parfaitement en serverless
- **Synchronisation** : Admin et client partagent les mêmes données

## 📋 Prérequis

- Un compte Google
- Node.js installé sur votre machine

## 🚀 Configuration étape par étape

### 1. Créer un projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Cliquez sur "Ajouter un projet"
3. Donnez un nom à votre projet (ex: `gl-motors`)
4. Désactivez Google Analytics (optionnel pour ce projet)
5. Cliquez sur "Créer un projet"

### 2. Activer Firestore Database

1. Dans la console Firebase, cliquez sur "Firestore Database" dans le menu latéral
2. Cliquez sur "Créer une base de données"
3. Choisissez le mode de démarrage :
   - **Production** (recommandé) avec les règles ci-dessous
   - OU **Test** pour débuter (attention : données publiques)
4. Choisissez un emplacement proche de vos utilisateurs (ex: europe-west)
5. Cliquez sur "Activer"

#### Règles de sécurité Firestore

Après activation, allez dans l'onglet "Règles" et utilisez :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permet la lecture publique des véhicules actifs
    match /vehicles/{vehicleId} {
      allow read: if true;
      // Permet l'écriture uniquement depuis le serveur (avec admin SDK)
      allow write: if false;
    }
  }
}
```

> **Note** : L'écriture se fait uniquement via les API routes qui utilisent le SDK Admin (pas de restrictions).

### 3. Activer Firebase Storage

1. Dans la console Firebase, cliquez sur "Storage" dans le menu latéral
2. Cliquez sur "Commencer"
3. Acceptez les règles par défaut (vous les modifierez ensuite)
4. Choisissez le même emplacement que Firestore
5. Cliquez sur "Terminé"

#### Règles de sécurité Storage

Allez dans l'onglet "Règles" et utilisez :

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Permet la lecture publique de toutes les images
    match /{allPaths=**} {
      allow read: if true;
      // Permet l'écriture uniquement depuis le serveur (avec admin SDK)
      allow write: if false;
    }
  }
}
```

### 4. Générer les credentials (Service Account)

1. Dans la console Firebase, cliquez sur l'icône ⚙️ > "Paramètres du projet"
2. Allez dans l'onglet "Comptes de service"
3. Cliquez sur "Générer une nouvelle clé privée"
4. Un fichier JSON sera téléchargé

### 5. Configurer les variables d'environnement

Ouvrez le fichier JSON téléchargé. Il contient :

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com",
  "client_id": "...",
  ...
}
```

Dans votre fichier `.env.local`, ajoutez :

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
```

> ⚠️ **Important** : Gardez la clé privée entre guillemets et conservez les `\n` pour les retours à la ligne.

### 6. Tester localement

1. Redémarrez votre serveur de développement :
   ```bash
   npm run dev
   ```

2. Allez sur http://localhost:3000/admin/showroom

3. Connectez-vous et ajoutez un véhicule avec une image

4. Vérifiez dans la Firebase Console :
   - **Firestore** : Le véhicule devrait apparaître dans la collection `vehicles`
   - **Storage** : L'image devrait être dans le dossier `vehicles/`

5. Allez sur http://localhost:3000/showroom pour voir le véhicule côté client

### 7. Déployer sur Vercel

1. Dans votre projet Vercel, allez dans "Settings" > "Environment Variables"

2. Ajoutez toutes les variables Firebase :
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
   - `FIREBASE_STORAGE_BUCKET`

3. Pour `FIREBASE_PRIVATE_KEY`, copiez-collez toute la clé avec les `-----BEGIN` et `-----END`, y compris les guillemets.

4. Redéployez votre application

## 🔒 Sécurité

### Bonnes pratiques

✅ **À FAIRE** :
- Garder les credentials Firebase secrets (ne jamais commit dans Git)
- Utiliser des variables d'environnement
- Les règles actuelles sont adaptées pour un site avec un seul admin

❌ **À NE PAS FAIRE** :
- Ne jamais exposer la clé privée côté client
- Ne pas partager le fichier JSON de credentials
- Ne pas utiliser le mode "test" en production

### Règles de sécurité expliquées

**Firestore** :
- `allow read: if true` : Tout le monde peut lire les véhicules (nécessaire pour le showroom public)
- `allow write: if false` : Personne ne peut écrire directement depuis le client
- Les écritures se font via les API routes qui utilisent le SDK Admin (pas de restrictions)

**Storage** :
- Même principe : lecture publique, écriture uniquement via le serveur

## 📊 Monitoring

### Quotas gratuits Firebase

- **Firestore** :
  - 50 000 lectures/jour
  - 20 000 écritures/jour
  - 1 Go de stockage

- **Storage** :
  - 5 Go de stockage
  - 1 Go de téléchargement/jour

Ces quotas sont largement suffisants pour un garage automobile.

### Surveiller l'utilisation

1. Allez dans Firebase Console > "Usage and Billing"
2. Consultez les métriques de Firestore et Storage
3. Configurez des alertes si vous approchez des limites

## 🐛 Dépannage

### Erreur : "Missing Firebase credentials"

**Solution** : Vérifiez que toutes les variables d'environnement sont définies dans `.env.local` et redémarrez le serveur.

### Erreur : "Failed to fetch vehicles"

**Solutions** :
1. Vérifiez que Firestore est activé dans Firebase Console
2. Vérifiez les règles de sécurité Firestore
3. Vérifiez les credentials dans `.env.local`

### Les images ne s'affichent pas

**Solutions** :
1. Vérifiez que Storage est activé
2. Vérifiez les règles de sécurité Storage (allow read: if true)
3. Vérifiez que le bucket est correct dans `.env.local`

### Erreur sur Vercel : "Invalid key format"

**Solution** : Assurez-vous que `FIREBASE_PRIVATE_KEY` est bien entre guillemets doubles et contient tous les `\n` pour les retours à la ligne.

## 📚 Ressources

- [Documentation Firebase](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Storage Guide](https://firebase.google.com/docs/storage)
- [Admin SDK Node.js](https://firebase.google.com/docs/admin/setup)

## 🆘 Support

Si vous rencontrez des problèmes :
1. Consultez ce guide
2. Vérifiez les logs dans Firebase Console
3. Consultez la documentation Firebase
4. Vérifiez les issues GitHub du projet

---

✅ Une fois Firebase configuré, votre application sera prête pour la production avec une base de données fiable et synchronisée !
