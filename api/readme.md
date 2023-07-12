

# Documentation du fichier product.js

Ce fichier contient les routes de l'API pour la gestion des produits à l'aide de Mongoose et Express.

## Fonctions

### `get_all_products`

- Type: Méthode GET
- URL: /api/products
- Description: Récupère tous les produits de la base de données.
- Paramètres de requête:
  - Aucun
- Réponse:
  - Code de statut : 200
  - Corps de la réponse : Tableau des produits

### `get_one_product`

- Type: Méthode GET
- URL: /api/products/:name
- Description: Récupère un produit spécifique de la base de données en fonction de son nom.
- Paramètres de requête:
  - `name` : Le nom du produit
- Réponse:
  - Code de statut : 200
  - Corps de la réponse : Le produit trouvé

### `create_product`

- Type: Méthode POST
- URL: /api/products
- Description: Crée un nouveau produit dans la base de données.
- Paramètres de requête:
  - `name` : Le nom du produit
  - `type` : Le type du produit
  - `price` : Le prix du produit
  - `rating` : L'évaluation du produit
  - `available` : La disponibilité du produit
- Réponse:
  - Code de statut : 200
  - Corps de la réponse : Le produit créé

### `delete_product`

- Type: Méthode DELETE
- URL: /api/products/:name
- Description: Supprime un produit spécifique de la base de données en fonction de son nom.
- Paramètres de requête:
  - `name` : Le nom du produit
- Réponse:
  - Code de statut : 200
  - Corps de la réponse : Résultat de la suppression

### `update_product`

- Type: Méthode PUT
- URL: /api/products/:name
- Description: Met à jour un produit spécifique dans la base de données en fonction de son nom.
- Paramètres de requête:
  - `name` : Le nom du produit
  - `type` : Le type du produit
  - `price` : Le prix du produit
  - `rating` : L'évaluation du produit
  - `available` : La disponibilité du produit
- Réponse:
  - Code de statut : 200 si mis à jour avec succès, 404 si le produit n'est pas trouvé
  - Corps de la réponse : Message de succès ou d'erreur

## Installation

Pour utiliser ce fichier, vous devez avoir Mongoose et Express installés dans votre application Node.js. Assurez-vous d'importer le modèle `product` et d'utiliser ce fichier comme un routeur dans votre application.

```javascript
import product from '../models/product.js';
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

// Définition des routes...

export default router;
