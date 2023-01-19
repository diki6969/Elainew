import axios from "axios"
import fetch from "node-fetch"
let handler = async (m, {command, text, conn}) => {
m.reply('Sedang Membuat Gambar')
if (command == 'aidraw') {
let haha = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`)
conn.sendButton(m.chat, `*Gambar ${text} selesai dibuat*`.trim(), author, haha.data, [[' Next', `.${command} ${text}`]], m)}
}
handler.command = handler.help = ['aidraw']
handler.tags = ['tools']
handler.limit = true
export default handler
