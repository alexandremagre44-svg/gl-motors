# Conformité RGPD - GL MOTORS

Ce document explique comment les fonctionnalités de conformité RGPD ont été mises en place sur le site GL MOTORS.

## 📋 Fonctionnalités implémentées

### 1. Page Mentions légales (`/mentions-legales`)
Page accessible depuis le footer contenant :
- Identification complète de l'entreprise (raison sociale, adresse, téléphone, email)
- Numéros d'immatriculation (SIRET, RCS, TVA intracommunautaire) - **à compléter par l'entreprise**
- Nom et adresse de l'hébergeur (Vercel)
- Informations sur la propriété intellectuelle
- Droits relatifs aux données personnelles
- Politique cookies
- Crédits et droit applicable

### 2. Page Politique de confidentialité (`/politique-confidentialite`)
Page détaillée conforme au RGPD contenant :
- Responsable du traitement des données
- Données personnelles collectées (formulaire de contact, cookies, navigation)
- Finalités du traitement (base légale : consentement, intérêt légitime, obligation légale)
- Destinataires des données (prestataires techniques : Vercel, Firebase)
- Durée de conservation des données
- Droits des utilisateurs (accès, rectification, effacement, opposition, limitation, portabilité)
- Droit de réclamation auprès de la CNIL
- Mesures de sécurité
- Détails sur l'utilisation des cookies

### 3. Bandeau de consentement aux cookies
Bandeau modal conforme aux recommandations de la CNIL :

#### Fonctionnalités
- **Affichage automatique** à la première visite
- **Trois options claires** :
  - "Tout accepter" : active tous les cookies
  - "Tout refuser" : active uniquement les cookies essentiels
  - "Paramétrer" : accès aux paramètres détaillés
- **Cookies essentiels** : toujours actifs (préférences, sessions)
- **Cookies analytiques** : nécessitent le consentement (désactivés par défaut)
- **Stockage local** : préférences sauvegardées dans `localStorage`
- **Pas de cookies non essentiels** avant consentement explicite

#### Paramètres détaillés
- Vue détaillée avec explication de chaque type de cookie
- Toggle pour activer/désactiver les cookies analytiques
- Possibilité d'enregistrer ses préférences personnalisées
- Bouton "Retour" pour revenir à l'écran principal

### 4. Gestion des cookies depuis le footer
Lien "Gestion des cookies" dans le footer permettant de :
- Rouvrir le bandeau de cookies à tout moment
- Modifier ses préférences
- Révoquer ou donner son consentement

### 5. Formulaire de contact mis à jour
Le formulaire de contact (`/contact`) inclut maintenant :
- **Case à cocher obligatoire** pour accepter la politique de confidentialité
- Lien vers la politique de confidentialité (s'ouvre dans un nouvel onglet)
- Message clair : "J'accepte que mes données soient traitées conformément à la politique de confidentialité de GL Motors."

## 🎨 Design et intégration

Toutes les pages et composants respectent :
- **Palette de couleurs** du site (rouge #DC2626, noir/gris foncé, blanc)
- **Style cohérent** avec le reste du site
- **Navigation intacte** (header et footer identiques)
- **Responsive design** (mobile et desktop)

## 🔧 Implémentation technique

### Structure des fichiers
```
/app
  /mentions-legales
    └── page.tsx              # Page mentions légales
  /politique-confidentialite
    └── page.tsx              # Page politique de confidentialité
  /contact
    └── page.tsx              # Formulaire avec consentement
  layout.tsx                  # Layout avec CookieConsent

/components
  ├── CookieConsent.tsx       # Composant bandeau cookies
  └── Footer.tsx              # Footer avec liens légaux
```

### Technologies utilisées
- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **localStorage** pour la persistance des préférences cookies

### Composant CookieConsent

Le composant `CookieConsent.tsx` gère :
1. **Détection** : vérifie si l'utilisateur a déjà fait un choix (`cookieConsent` dans localStorage)
2. **Affichage** : modal avec overlay bloquant l'interaction
3. **Stockage** : sauvegarde les préférences avec date (`cookieConsentDate`)
4. **Event listener** : écoute l'événement `openCookieSettings` pour réouvrir le bandeau
5. **Initialisation** : fonction `initializeAnalytics()` appelée si consentement donné

### Format de stockage
```javascript
localStorage.setItem('cookieConsent', JSON.stringify({
  essential: true,    // Toujours true
  analytics: false    // Selon choix utilisateur
}));
localStorage.setItem('cookieConsentDate', '2026-01-05T...');
```

## 📝 Configuration requise

### Informations à personnaliser dans `/app/mentions-legales/page.tsx`

Les champs suivants sont marqués `[À compléter]` et doivent être remplis par l'entreprise :

```typescript
<p>
  <strong>Numéro SIRET :</strong> [À compléter]
</p>
<p>
  <strong>Numéro RCS :</strong> [À compléter]
</p>
<p>
  <strong>Numéro de TVA intracommunautaire :</strong> [À compléter]
</p>
```

**Action requise** : Remplacez `[À compléter]` par les numéros officiels de l'entreprise.

### Intégration d'un outil d'analytics (optionnel)

Si vous souhaitez utiliser Google Analytics, Matomo ou un autre outil :

1. Modifiez la fonction `initializeAnalytics()` dans `/components/CookieConsent.tsx` :

```typescript
const initializeAnalytics = () => {
  // Exemple pour Google Analytics
  if (typeof window !== 'undefined' && preferences.analytics) {
    window.gtag('config', 'GA-MEASUREMENT-ID');
  }
};
```

2. Ajoutez les scripts d'analytics dans `/app/layout.tsx` avec condition :

```typescript
{/* Exemple Google Analytics */}
{typeof window !== 'undefined' && 
 JSON.parse(localStorage.getItem('cookieConsent') || '{}').analytics && (
  <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=GA-ID" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA-ID');
      `}
    </Script>
  </>
)}
```

## ✅ Conformité CNIL et RGPD

Cette implémentation respecte :

### Article 82 de la loi Informatique et Libertés
- ✅ Consentement explicite requis pour cookies non essentiels
- ✅ Pas de consentement pré-coché
- ✅ Refus aussi facile qu'accepter
- ✅ Durée de vie des cookies : 13 mois maximum

### Recommandations CNIL
- ✅ Bandeau informatif clair
- ✅ Trois options : Accepter / Refuser / Paramétrer
- ✅ Pas de cookies avant consentement (sauf essentiels)
- ✅ Modification du consentement à tout moment
- ✅ Toute action autre que "Accepter" = refus

### RGPD
- ✅ Information claire sur le traitement des données
- ✅ Finalités et bases légales précisées
- ✅ Droits des utilisateurs expliqués (accès, rectification, effacement, etc.)
- ✅ Coordonnées pour exercer ses droits
- ✅ Mention de la CNIL pour réclamations
- ✅ Durées de conservation précisées

## 🧪 Tests effectués

- ✅ Build Next.js réussi
- ✅ Page mentions légales accessible et affichée correctement
- ✅ Page politique de confidentialité accessible et affichée correctement
- ✅ Bandeau cookies s'affiche à la première visite
- ✅ Bouton "Tout accepter" fonctionne et enregistre les préférences
- ✅ Bouton "Tout refuser" fonctionne et enregistre les préférences
- ✅ Bouton "Paramétrer" ouvre le panneau de configuration
- ✅ Toggle des cookies analytiques fonctionne
- ✅ Bouton "Gestion des cookies" dans le footer rouvre le bandeau
- ✅ Case à cocher de consentement dans le formulaire de contact
- ✅ Liens vers politique de confidentialité fonctionnels
- ✅ Navigation et style préservés
- ✅ Responsive design (desktop et mobile)

## 📱 Responsive Design

Le bandeau de cookies et les pages légales sont entièrement responsives :
- **Desktop** : modal centré, layout 2 colonnes pour les pages
- **Mobile** : modal pleine largeur, layout 1 colonne, boutons empilés

## 🔄 Maintenance

### Mise à jour des mentions légales
1. Éditez `/app/mentions-legales/page.tsx`
2. La date de mise à jour se met à jour automatiquement

### Mise à jour de la politique de confidentialité
1. Éditez `/app/politique-confidentialite/page.tsx`
2. La date de mise à jour se met à jour automatiquement

### Ajout de nouveaux types de cookies
1. Modifiez le state `preferences` dans `/components/CookieConsent.tsx`
2. Ajoutez les nouveaux champs dans l'interface de paramétrage
3. Mettez à jour la documentation dans la politique de confidentialité

## 🚀 Déploiement

Aucune configuration supplémentaire n'est requise pour le déploiement. Les fonctionnalités RGPD sont :
- ✅ Entièrement client-side (pas de backend requis)
- ✅ Compatible avec Vercel
- ✅ Pas de cookies avant consentement
- ✅ Stockage local via localStorage

## 📞 Support

Pour toute question concernant la conformité RGPD ou l'implémentation technique, consultez :
- **Documentation CNIL** : https://www.cnil.fr
- **RGPD officiel** : https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on

## ⚠️ Important

Cette implémentation fournit une base solide pour la conformité RGPD, mais **ne constitue pas un conseil juridique**. 
Il est recommandé de consulter un avocat spécialisé en protection des données pour s'assurer de la conformité complète 
de votre site web aux réglementations en vigueur.
