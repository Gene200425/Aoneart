# 🎨 A-OneArt - Site Web pour Entreprise d'Art

Un site web moderne et professionnel pour une entreprise spécialisée dans la **sérigraphie**, le **portrait** et le **dessin**.

## 📁 Structure du Projet

```
website/
├── index.html              # Page d'accueil
├── portfolio.html          # Galerie du portfolio
├── services.html           # Services et tarifs
├── about.html              # À propos de l'entreprise
├── contact.html            # Formulaire de contact
├── css/
│   └── style.css          # Feuille de styles complète
├── js/
│   └── script.js          # Fonctionnalités JavaScript (menu mobile, filtre, formulaire)
└── images/                # Dossier pour vos images
    ├── portfolio1.jpg
    ├── portfolio2.jpg
    └── ... (vos images)
```

## 🚀 Démarrage Rapide

1. **Ouvrir le site localement**
   - Ouvrez simplement `index.html` dans votre navigateur
   - Ou utilisez un serveur local (voir ci-dessous)

2. **Avec un serveur local (Python)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Puis ouvrir: http://localhost:8000
   ```

3. **Avec Node.js (http-server)**
   ```bash
   npm install -g http-server
   http-server
   ```

## ✨ Fonctionnalités

✅ **Responsive Design** - Adapté à tous les appareils (mobile, tablette, desktop)
✅ **Menu Mobile** - Hamburger menu automatique sur écrans petits
✅ **Filtre Portfolio** - Trier les projets par catégorie (Sérigraphie, Portrait, Dessin)
✅ **Formulaire de Contact** - Validation côté client avec retour utilisateur
✅ **Animations Smooth** - Animations CSS et scroll fluides
✅ **SEO-Friendly** - Structure HTML sémantique
✅ **Performance** - Lazy loading des images
✅ **Design Artistique** - Élégant avec palette de couleurs chaudes et professionnelles

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `css/style.css` à la ligne 1-10 :
```css
:root {
    --primary-color: #8B4513;        /* Marron (à adapter)
    --secondary-color: #D2691E;      /* Orange marron */
    --accent-color: #FF8C00;         /* Orange vif */
    /* ... autres couleurs */
}
```

### Texte et Contenu
- **Accueil**: Modifiez `index.html` pour personnaliser le message de bienvenue
- **Services**: Modifiez `services.html` pour ajouter vos vrais tarifs
- **À Propos**: Modifiez `about.html` avec vos informations
- **Contact**: Modifiez `contact.html` avec vos vrais coordonnées

### Images
1. Remplacez les images dans le dossier `images/`:
   - `portfolio1.jpg` à `portfolio6.jpg` - Vos créations
   - `team1.jpg` à `team3.jpg` - Photos de l'équipe
   
   OU laissez les chemins d'image actuels et ils afficheront un placeholder

2. Les images doivent être en `.jpg` ou `.png`

## 📧 Formulaire de Contact

Le formulaire de contact fonctionne actuellement en **mode local** (affiche juste un message de confirmation).

**Pour vraiment envoyer les e-mails**, vous devez:

**Option 1: Avec un backend (recommandé)**
```javascript
// Dans js/script.js, remplacez la fonction contactForm par:
const response = await fetch('https://votre-serveur.com/contact', {
    method: 'POST',
    body: JSON.stringify({name, email, phone, subject, message})
});
```

**Option 2: Avec un service like Formspree**
```html
<!-- Remplacez <form id="contactForm" class="contact-form"> par: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```

## 🌐 Déploiement

### Netlify (Recommandé - Gratuit)
1. Poussez votre code sur GitHub
2. Allez sur [netlify.com](https://netlify.com)
3. Connectez votre repo
4. Cliquez "Deploy"

### Vercel
1. Importez votre repo
2. Cliquez "Deploy"

### Hébergement Traditionnel
1. Uploadez tous les fichiers via FTP
2. Assurez-vous que `index.html` est accessible à la racine

## 🔧 Configuration Avancée

### Ajouter un Blog
Créez `blog.html` et importez-le dans la navigation:
```html
<li><a href="blog.html">Blog</a></li>
```

### Ajouter une Galerie Lightbox
Ajoutez une librairie comme [GLightbox](https://glightbox.js.org/)

### Ajouter un Panier d'Achat
Intégrez Shopify ou WooCommerce

## 📱 Dimensions Images Recommandées

- **Portfolio**: 800x800px min
- **Team**: 400x400px min
- **Logo**: Ajustez selon vos besoins

## 🐛 Dépannage

**Q: Les images ne s'affichent pas**
- Vérifiez que les fichiers image sont dans le dossier `images/`
- Vérifiez les chemins d'accès dans les HTML

**Q: Le site ne s'affiche pas correctement**
- Videz le cache du navigateur (Ctrl+Shift+Delete)
- Vérifiez que tous les chemins CSS/JS sont corrects

**Q: Le formulaire ne fonctionne pas**
- C'est normal - il affichait juste un message en local
- Configurez un backend pour vraiment envoyer des e-mails

## 📚 Ressources Utiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web Dev](https://web.dev/)

## 📄 License

Libre d'utilisation pour votre entreprise.

---

**Créé avec ❤️ pour votre entreprise d'art**
