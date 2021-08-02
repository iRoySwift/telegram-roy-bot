import { queryHotNews } from "../api/news";
import { bot } from "..";

const getNewHot = async (message, match) => {
  const chatId = message.chat.id;
  const res = await queryHotNews();
  bot.sendMessage(chatId, res, {
    parse_mode: "markdown",
  });
};

export { getNewHot };
