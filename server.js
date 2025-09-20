const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const __path = process.cwd();

const code = require('./connect'); // ton routeur pour /code
require('events').EventEmitter.defaultMaxListeners = 500;

// ⭐ MIDDLEWARES ESSENTIELS ⭐
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (CSS, JS, images)
app.use(express.static(path.join(__path))); // si tes CSS/JS sont à la racine

// ROUTE RACINE → index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__path, 'index.html'));
});

// ROUTE POUR LE CODE
app.use('/code', code);

// ROUTE CONNECT
app.get('/connect', (req, res) => {
  res.sendFile(path.join(__path, 'index.html'));
});

// LANCEMENT DU SERVEUR
app.listen(3000, () => {
  console.log("✅ Serveur démarré sur http://localhost:3000");
});