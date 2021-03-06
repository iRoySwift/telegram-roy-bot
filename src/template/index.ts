// import weatherEmoji from "../utils/weatherCode";

const startMessage = `Helloï¼ææ¯ RoyBot ð
è¼¸å¥ \`/help\` äºè§£å¦ä½ä½¿ç¨ Roy Botã
`;

const helpMessage = `
è¼¸å¥ \`/\` æå½ä»¤æç¤ºå¯ä»¥ä½¿ç¨ï¼å¯ä»¥ééå®ä½æ¥è©¢å¤©æ°£ï¼
æèè¼¸å¥ \`/where cityName\` ä¾å°æ¾è©²å°åçå¤©æ°£è³è¨ã
`;

//  const weatherTemplate = (response, date, time, direction) =>
//   `ð© *${response.location.city}*
//   - - - - - - - - - - - - - - - - - - - - - -
//   ð ç®åæé â¡ï¸ ${time}
//   ð° ç®åæº«åº¦ â¡ï¸ ${response.item.condition.temp}Â°C
//   ð§ ç®åæ¿åº¦ â¡ï¸ ${response.atmosphere.humidity}%
//   ð å¤©æ°£çæ â¡ï¸ ${weatherEmoji(response.item.condition.code)}
//   ð¨ ç®åé¢¨é â¡ï¸ ${response.wind.speed} km/h
//   ð é¢¨éé¢¨å â¡ï¸ ${direction}
//   - - - - - - - - - - - - - - - - - - - - - -
//   ð æ¥åºæé â¡ï¸ ${response.astronomy.sunrise}
//   ð æ¥è½æé â¡ï¸ ${response.astronomy.sunset}

//   è©³ç´°è³è¨ ð [Yahoo Weather](${response.link})
//   `;

const forecastTemplate = (text, link) =>
  `âï¸ æªä¾ä¸é±å¤©æ°£
  ${text}

  è©³ç´°è³è¨ ð [Yahoo Weather](${link})  `;

const weiboTopTemplate = (datas) => {
  const template = (i, text, link) => {
    return `${i}ã[${text}](${link})
    `;
  };
  const data = datas.map(({ top, title, href }) => template(top, title, href));
  return `
    ç­ææ¦:
    ---
    ${data.join("")}
  `;
};

export { startMessage, helpMessage, forecastTemplate, weiboTopTemplate };
