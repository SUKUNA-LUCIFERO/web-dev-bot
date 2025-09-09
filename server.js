const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const path = require("path");

// ⭐ MIDDLEWARES ESSENTIELS ⭐
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidDecode, downloadContentFromMessage } = require('@whiskeysockets/baileys');


// Page d’accueil 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/connect", async (req, res) => {
  try {
    const { number } = req.body;
    
    if (!number) {
      return res.status(400).json({ success: false, message: "Numéro requis" });
    }

    // Nettoyer le numéro (supprimer tous les caractères non numériques incluant le +)
    const cleanedNumber = number.replace(/[^0-9]/g, '');
    
    if (!cleanedNumber) {
      return res.status(400).json({ success: false, message: "Numéro invalide" });
    }

    const Xreturn = cleanedNumber + "@s.whatsapp.net";

    // Vérification du format du numéro
    const numberOnly = cleanedNumber;
    const countryCode = numberOnly.slice(0, 3);
    const prefixxx = numberOnly.slice(0, 1);
    const firstTwoDigits = numberOnly.slice(0, 2);

    const isValidWhatsAppNumber = (num) => {
      return num.length >= 10 && num.length <= 15 && !isNaN(num);
    };

    // Vérifications de sécurité (adaptées selon vos besoins)
    if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
      return res.status(400).json({ 
        success: false, 
        message: "Désolé, les numéros avec le code pays 252, préfixe 0, commençant par 89, ou +85 ne sont pas supportés." 
      });
    }

    if (!isValidWhatsAppNumber(numberOnly)) {
      return res.status(400).json({ 
        success: false, 
        message: "Numéro WhatsApp invalide. Veuillez entrer un numéro valide." 
      });
    }

    // Lancer le processus de pairing
    const startpairing = require('./base-bot/connect.js');
    await startpairing(Xreturn);
    
    // Attendre un moment
    await new Promise(resolve => setTimeout(resolve, 4000));

    // Lire le code de pairing
    const fs = require('fs');
    const cu = fs.readFileSync('./system/database/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    // Attendre encore un peu
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Réponse réussie
    res.json({
      success: true,
      message: "Connexion réussie",
      code: cuObj.code,
      formattedNumber: Xreturn
    });

  } catch (err) {
    console.error("Erreur dans /connect:", err);
    res.status(500).json({ 
      success: false, 
      message: "Erreur lors de la connexion",
      error: err.message 
    });
  }
});

app.listen(3000, () => {
  console.log("✅ Serveur démarré sur http://localhost:3000");
});