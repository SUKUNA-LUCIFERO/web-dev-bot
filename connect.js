//Dev Ask Web BoT connect.js
require('./system/config');

//Module Export
const fs = require('fs');
const pino = require('pino');
const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const { Boom } = require('@hapi/boom');
const { exec } = require("child_process");


//Baileys Store
const {
    default: 
    makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    DisconnectReason,
    jidDecode,
    downloadContentFromMessage
} = require("@whiskeysockets/baileys");

//Router Auth Code
router.get('/', async (req, res) => {
    let num = req.query.number;
    
    
    //Function Start Code By DvAsk
    async function DvAsk() {
 
        const { state, saveCreds } = await useMultiFileAuthState('./session_user');
        const ask = makeWASocket({
            logger: pino({ level: "silent" }),
            printQRInTerminal: !usePairingCode,
            auth: state,
            browser: Browsers.macOS("ASK XMD"),
        });

        //Récupération Of Code Router 
        if (!ask.authState.creds.registered) {
            await delay(1500);
            num = num.replace(/[^0-9]/g, '');
            const code = await ask.requestPairingCode(num);
            if (!res.headersSent) await res.send({ code });
        }
    }

    // ✅ Appel de la fonction DvAsk
    DvAsk();
      
    ask.ev.on('creds.update', saveCreds);
    ask.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;
        ask.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                    DvAsk(); // Reconnexion automatique
                }
            } else if (connection === 'open') {
                ask.newsletterFollow("120363330359618597@newsletter");           
                ask.newsletterFollow("120363401251267400@newsletter");
                ask.sendMessage(ask.user.id, {
                    image: { url: 'welcome.png' },
                    caption: `
╭──✧* 𝖠𝖲𝖪 - 𝖷𝖬𝖣 *✧───╮
├ ❏ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙳𝙴𝚅: +24174265527
├ ❏ 𝙽𝙾𝙼 𝙳𝚄 𝙱𝙾𝚃 : *𝖠𝖲𝖪-𝖷𝖬𝖣 𝖵𝟷.2.0*
├ ❏ 𝙽𝙾𝙼𝙱𝚁𝙴𝚂 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝙴 : 50
├ ❏ 𝙿𝚁𝙴𝙵𝙸𝚇 : *${global.prefix}*
├ ❏ 𝙳𝙴𝚅 : 𝘋𝘦𝘷 𝘈𝘴𝘬
├ ❏ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : *𝟷.2.0*
╰──────────────╯
╭──✧*WA GROUPE*✧───╮
├ ❏ *${global.group}*
╰──────────────╯
╭──✧*WA CHANNEL*✧───╮
├ ❏ *${global.chanel}*
╰──────────────╯
> 𝖳𝖧𝖤 𝖡𝖮𝖳 𝖠𝖲𝖪 𝖷𝖬𝖣 𝖨𝖲 𝖢𝖮𝖭𝖭𝖤𝖢𝖳 ✅..!!
> 𝖯𝖮𝖶𝖤𝖱 𝖡𝖸 𝖠𝖲𝖪 𝖳𝖤𝖢𝖧 𝖣𝖤V 1.2.0`
                });
            }
        });
    });

    // Auto-status and Handler
    ask.ev.on('messages.upsert', async ({ messages, type }) => {
        try {
            const msg = messages[0] || messages[messages.length - 1];
            if (type !== "notify") return;
            if (!msg?.message) return;
            if (msg.key && msg.key.remoteJid === "status@broadcast") {
                await ask.readMessages([msg.key]);
                await ask.sendMessage(msg.key.remoteJid, { react: { text: "❤️", key: msg.key }});
            }
            const m = smsg(ask, msg, store);
            require(`./base-bot/handler`)(ask, m, msg, store);
        } catch (err) {
            console.error('Erreur dans messages.upsert:', err);
        }
    });
  
    //FUNCTION STORE DOWNLOAD
    ask.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifImg(buff, options) : await imageToWebp(buff);
        await ask.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    ask.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer = options && (options.packname || options.author) ? await writeExifVid(buff, options) : await videoToWebp(buff);
        await ask.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    ask.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };
  
    ask.sendTextWithMentions = async (jid, text, quoted, options = {}) => ask.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted });

    ask.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype 
        ? message.mtype.replace(/Message/gi, '') 
        : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };
});

// ========================
// EXPORT ROUTER
// ========================
module.exports = router;

//Function File Update
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.whiteBright('├'), chalk.keyword("red")("[ UPDATE ]"), __filename);
    delete require.cache[file];
    require(file);
});