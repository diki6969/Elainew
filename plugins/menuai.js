import axios from 'axios'
import fetch from 'node-fetch'
import { Configuration, OpenAIApi } from 'openai';
let handler = async (m, { command, conn, from, client, text, mek, image_url, img }) => {
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
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
                   prompt: text,
                   n: 1,
                   size: "1024x1024",
                  });
let url = response.data.data[0].url;               conn.sendFile(m.chat, response.data.data[0].url, 'aidraw.jpg', `Hasil dari *${text}*`, m)
}
}
handler.command = handler.help = ['ai', 'aidraw']
handler.tags = ['tools']

export default handler