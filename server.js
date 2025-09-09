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

// Assurez-vous d'avoir ces imports en haut

// Route POST corrigée
app.post("/connect", async (req, res) => {
  try {
    const number = req.body.number;
    if (!number) {
      return res.status(400).send("Numéro requis");
    }

    const Xreturn = number.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    // Lancer pairing
    await startpairing(Xreturn);

    // Lire le code depuis pairing.json (avec gestion d'erreur)
    const cu = await fs.readFile("../system/database/pairing.json", "utf-8");
    const cuObj = JSON.parse(cu);

    res.json({
      success: true,
      message: "Connexion réussie",
      code: cuObj.code
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erreur lors de la connexion" });
  }
});

app.listen(3000, () => {
  console.log("✅ Serveur démarré sur http://localhost:3000");
});