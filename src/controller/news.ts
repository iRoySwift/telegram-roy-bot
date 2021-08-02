import { queryHotNews } from "../api/news";
import { bot } from "..";

const getNewHot = (message, match) => {
  const chatId = message.chat.id;
  queryHotNews().then((res) => {
    bot.sendMessage(chatId, res, {
      parse_mode: "markdown",
    });
  });
};

export { getNewHot };
