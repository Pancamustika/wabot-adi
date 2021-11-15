let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa/Gopay [08995888005]
│ • OVO/DANA [08995888005]
│ • Saweria https://saweria.co/ghilarpanca
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
