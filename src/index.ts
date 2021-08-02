process.env.NTBA_FIX_319 = "1";
import TelegramBot from "node-telegram-bot-api";
import { getNewHot } from "./controller/news";
// import { getWeather } from "./controller/weather";
import { startMessage, helpMessage } from "./template/index";
const token = "1929229553:AAFg-CdZehykDuXX_zU2V2b-5Zm3KHsSBIw";
const bot = new TelegramBot(token, {
  polling: true,
  // request: {
  //   proxy: "http://127.0.0.1:7890",
  // },
});

bot.onText(/\/start/, (message) => {
  console.log(message); // for debug
  const chatId = message.chat.id;

  bot.sendMessage(chatId, startMessage, {
    parse_mode: "markdown",
  });
});

bot.onText(/\/help/, (message, match) => {
  console.log(match);

  const chatId = message.chat.id;

  bot.sendMessage(chatId, helpMessage, {
    parse_mode: "markdown",
  });
});

bot.onText(/\/news/, getNewHot);

export { bot };
