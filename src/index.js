import TelegramBot from "node-telegram-bot-api";
import express from "express";
import dotenv from "dotenv";
import * as helper from "./helper.js";

dotenv.config();
const { BOT_TOKEN, PORT, GPT_API_KEY } = process.env;
const app = express();

//server and bot initialization
/* const bot = new TelegramBot(BOT_TOKEN);
bot.setWebHook(`${SERVER_URL}/bot${BOT_TOKEN}`);

app.use(json())
app.post(`/bot${BOT_TOKEN}`, (req, res) => {
  const { body } = req;
  try{
  bot.processUpdate(body)
  res.sendStatus(200);
  } catch (err) {
    console.log(err)
  }
});
helper.logStart(); */

const bot = new TelegramBot(BOT_TOKEN, { polling: true })

app.listen(PORT, () => {
  console.log(`Server is start on PORT: ${PORT}`)
})

bot.onText(/\/start/, msg => {
  const text = `Hello ${msg.chat.username}, please choose command for start work`;
  
  const chatId = helper.getChatId(msg);
  bot.sendMessage(chatId, text)
});


