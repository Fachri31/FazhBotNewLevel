const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Fachri;;;'
                    + 'FN:Fachri??\n' // full name
                    + 'ORG:FachriOfc;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281390199407:+62 882-2775-8096\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Fachri', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
