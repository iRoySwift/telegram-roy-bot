// import weatherEmoji from "../utils/weatherCode";

const startMessage = `Hello！我是 RoyBot 😉
輸入 \`/help\` 了解如何使用 Roy Bot。
`;

const helpMessage = `
輸入 \`/\` 有命令提示可以使用，可以透過定位查詢天氣，
或者輸入 \`/where cityName\` 來尋找該地區的天氣資訊。
`;

//  const weatherTemplate = (response, date, time, direction) =>
//   `🚩 *${response.location.city}*
//   - - - - - - - - - - - - - - - - - - - - - -
//   🕘 目前時間 ➡️ ${time}
//   🔰 目前溫度 ➡️ ${response.item.condition.temp}°C
//   💧 目前濕度 ➡️ ${response.atmosphere.humidity}%
//   🌀 天氣狀態 ➡️ ${weatherEmoji(response.item.condition.code)}
//   💨 目前風速 ➡️ ${response.wind.speed} km/h
//   🔃 風速風向 ➡️ ${direction}
//   - - - - - - - - - - - - - - - - - - - - - -
//   🌅 日出時間 ➡️ ${response.astronomy.sunrise}
//   🌄 日落時間 ➡️ ${response.astronomy.sunset}

//   詳細資訊 🔍 [Yahoo Weather](${response.link})
//   `;

const forecastTemplate = (text, link) =>
  `☀️ 未來一週天氣
  ${text}

  詳細資訊 🔍 [Yahoo Weather](${link})  `;

const weiboTopTemplate = (datas) => {
  const template = (i, text, link) => {
    return `${i}、[${text}](${link})
    `;
  };
  const data = datas.map(({ top, title, href }) => template(top, title, href));
  return `
    热搜榜:
    ---
    ${data.join("")}
  `;
};

export { startMessage, helpMessage, forecastTemplate, weiboTopTemplate };
