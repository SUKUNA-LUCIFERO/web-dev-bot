const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const __path = process.cwd();

const codeRouter = require('./connect'); // ton connect.js
require('events').EventEmitter.defaultMaxListeners = 500;

// ⭐ MIDDLEWARES ESSENTIELS ⭐
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route pour récupérer le code
app.use('/code', codeRouter);

// Page d’accueil et connexion
app.get('/', (req, res) => {
    res.sendFile(path.join(__path, 'index.html'));
});

// Fichiers statiques (CSS, JS, images)
app.use(express.static(path.join(__path, '/')));

// Lancement serveur
app.listen(3000, () => {
    console.log("✅ Serveur démarré sur http://localhost:3000");
});