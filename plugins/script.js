const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Joel James*
> *BOT REPO:*
*|* *https://github.com/joeljamestechinfo/JOEL-XMD*
> *CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K*
*╰──────────────●●►*
> *Here is your repo*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363296314610373@newsletter',
      newsletterName: "Joel James,
      serverMessageId: 999
    },
externalAdReply: { 
title: 'Joel James',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/joeljamestechinfo/JOEL-XMD" ,
thumbnailUrl: "https://i.imgur.com/XxFF6f2.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
