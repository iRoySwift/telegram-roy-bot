import { queryWeather } from "../api/weather";

// import getWeather from "./../api/weather";
const getWeather = (message, match) => {
  const chatId = message.chat.id;
  const city = match[1];
  queryWeather(city).then((res) => {
    console.log(JSON.stringify(res));
  });
};

export { getWeather };
