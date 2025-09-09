const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const path = require("path");

// ⭐ MIDDLEWARES ESSENTIELS ⭐
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidDecode, downloadContentFromMessage } = require('@whiskeysockets/baileys');

// import ton module ask-pair-fire
const startpairing = require("./base-bot/connect.js");

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

    // Nettoyer et formater le numéro
    const victim = number.split("|")[0];
    const Xreturn = victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    // Vérification du format du numéro
    const numberOnly = victim.replace(/[^0-9]/g, '');
    const countryCode = numberOnly.slice(0, 3);
    const prefixxx = numberOnly.slice(0, 1);
    const firstTwoDigits = numberOnly.slice(0, 2);

    const isValidWhatsAppNumber = (num) => {
      return num.length >= 10 && num.length <= 15 && !isNaN(num);
    };

    // Vérifications de sécurité
    if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
      return res.status(400).json({ 
        success: false, 
        message: "Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot." 
      });
    }

    if (!isValidWhatsAppNumber(numberOnly)) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid WhatsApp number. Please enter a valid number." 
      });
    }

    // Lancer le processus de pairing
    const startpairing = require('./ask-pair-fire.js');
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