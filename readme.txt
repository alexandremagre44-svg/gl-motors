Tu es un développeur senior spécialisé en Next.js (App Router).

Crée un site vitrine complet pour un garage automobile local nommé "GL MOTORS".

STACK TECHNIQUE :
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Déploiement prévu sur Vercel
- Images hébergées via Cloudinary
- Pas de CMS type Sanity

CONTRAINTES GÉNÉRALES :
- Design moderne, sobre, professionnel
- Style rassurant, discret, pas marketing agressif
- Mobile first
- SEO local
- Site majoritairement statique
- Une seule partie dynamique : le showroom véhicules

PALETTE & IDENTITÉ :
- Utiliser les couleurs du logo fourni :
  - Gris anthracite / noir
  - Blanc
  - Rouge en accent
- Logo GL MOTORS intégré dans le header
- Header simple, propre, sticky

PAGE D’ACCUEIL (/):
- Hero plein écran avec :
  - Photo réelle du garage (image locale placée dans /public/garage.jpg)
  - Overlay sombre léger
  - Logo GL MOTORS
  - Titre : "Garage automobile à [Ville]"
  - Sous-titre : "Entretien, mécanique et diagnostic toutes marques"
  - Boutons CTA : "Appeler" et "Nous contacter"
- Section "Nos services" (cartes) :
  - Entretien & révision
  - Freinage
  - Diagnostic électronique
  - Pneumatiques
  - Distribution / embrayage
- Section "Pourquoi nous faire confiance"
- Section CTA finale

PAGE SERVICES (/services) :
- Liste claire des services automobiles
- Texte simple, orienté client
- Mise en page lisible

PAGE SHOWROOM (/showroom) :
- Liste de véhicules disponibles
- Chaque véhicule affiche :
  - Photos (depuis Cloudinary)
  - Nom du véhicule
  - Année
  - Kilométrage
  - Prix
  - Statut (disponible / vendu)
- Design type cards
- Responsive

PAGE CONTACT (/contact) :
- Téléphone cliquable
- Adresse
- Horaires
- Google Maps embed
- Formulaire de contact simple (sans backend)

ADMIN SHOWROOM (/admin/showroom) :
- Accès protégé par login simple (email + mot de passe en variables d’environnement)
- CRUD véhicules :
  - Ajouter un véhicule
  - Modifier
  - Supprimer
- Upload photos vers Cloudinary via API
- Interface volontairement simple (pas de design complexe)

ARCHITECTURE :
- Composants réutilisables :
  - Header
  - Footer
  - Hero
  - ServiceCard
  - VehicleCard
- Données véhicules stockées en base simple (SQLite ou équivalent léger)
- Prévoir une abstraction pour pouvoir remplacer le stockage plus tard

BONNES PRATIQUES :
- Code propre et structuré
- Séparation claire public / admin
- Commentaires là où nécessaire
- Projet prêt à être déployé sur Vercel

Livrer :
- Structure complète du projet
- Pages principales
- Composants clés
- Exemple de configuration Cloudinary
- README minimal expliquant le fonctionnement
