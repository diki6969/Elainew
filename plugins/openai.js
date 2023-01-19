import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
m.reply('Sedang Mencari Jawaban')
  if (!args[0]) throw `Use example .ai buatkan kode html`
  let api = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${global.lolkey}&text=${text}&user=user-unique-id`)
  let res = await api.json()
  m.reply(res.result)
}
handler.command = ['ai']
handler.tags = ['tools']
handler.help = ['ai <apa>']

export default handler
