import fetch from "node-fetch"
import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
if (!text) throw "[!] Masukkan teks."
const configuration = new Configuration({
    apiKey: "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"
});
if (command == 'ai') {
m.reply('Sedang Mengetik')
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
}
if (command == 'aidraw') {
m.reply('Sedang Menggambar')
const response = await openai.createImage({
  prompt: text,
  n: 1,
  size: "1024x1024",
});
let url = image_url = response.data.data[0].url;
}
}
handler.command = handler.help = ['ai', 'aidraw']
handler.tags = ['tools']

export default handler