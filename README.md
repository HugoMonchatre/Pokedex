# Pokédex

Projet React/Next.js et TypeScript inspiré du Pokédex : interface moderne, recherche rapide des créatures, fiches détaillées, intégration d'API Pokémon et design responsive pour explorer l'univers comme un vrai dresseur.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **CSS Modules** - Styles scopés
- **PokeAPI** - API Pokémon ([https://pokebuildapi.fr/api/v1](https://pokebuildapi.fr/api/v1))

## 📦 Installation

```bash
npm install
```

## 🏃 Démarrage

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
Pokedex/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   └── pokedex/
│       └── page.tsx        # Page du Pokédex
├── components/
│   ├── PokemonCard.tsx     # Carte Pokémon
│   └── SearchBar.tsx       # Barre de recherche
└── types/
    └── pokemon.ts          # Types TypeScript
```

## ✨ Fonctionnalités

- 🔍 Recherche de Pokémon par nom
- 📱 Design responsive
- 🎨 Interface moderne et intuitive
- 🖼️ Affichage des images et types
- ⚡ Chargement optimisé avec Next.js

## 🛠️ Commandes disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint
