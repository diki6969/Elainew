const { Configuration, OpenAIApi } = require("openai");
let handler = async (m, { command, conn, from, client, text, mek, image_url, img }) => {
if (!text) throw "[!] Masukkan teks."
const configuration = new Configuration({
  apiKey: global.aikey,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: text,
  temperature: 0,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
m.reply(response.data.choices[0].text)
}
handler.command = /^(javatopython)$/i
handler.tags = ['tools']
handler.help = ['javatopython']
handler.premium = false
handler.limit = true

export default handler