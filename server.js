const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
__path = process.cwd()

code = require('./connect');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/code', code);

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidDecode, downloadContentFromMessage } = require('@whiskeysockets/baileys');


// ⭐ MIDDLEWARES ESSENTIELS ⭐
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Page d’accueil Et connexion incluses 
app.use('/connect',async (req, res, next) => {
res.sendFile(__path + '/index.html')
})


app.listen(3000, () => {
  console.log("✅ Serveur démarré sur http://localhost:3000");
});
