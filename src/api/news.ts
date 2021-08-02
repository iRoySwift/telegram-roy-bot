var superagent = require("superagent");
var charset = require("superagent-charset");
charset(superagent);
const cheerio = require("cheerio");
import { weiboTopTemplate } from "../template";

/**
 * 查weibo热点
 * @returns
 */
const queryHotNews = () => {
  // https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6
  // const top = "https://s.weibo.com/top/summary?Refer=top_hot&topnav=1&wvr=6";
  // const weiboHot = `https://s.weibo.com/ajax/jsonp/gettopsug?_cb=${params._cb}`;
  return new Promise((resolve, reject) => {
    superagent
      .get("https://s.weibo.com/top/summary")
      .charset("utf-8")
      .end(function (err, res) {
        var items = [];
        if (err) {
          console.log("ERR: " + err);
          return reject(err);
        }
        var $ = cheerio.load(res.text);
        $("div.data table tbody tr td.td-02").each(function (index, element) {
          var $element = $(element);
          var $a = $element.find("a");
          items.push({
            top: index + 1,
            title: $a.text(),
            href: `https://s.weibo.com${$a.attr("href")}`,
            // thumbSrc: thumbImgSrc
          });
        });
        resolve(weiboTopTemplate(items));
      });
  });
};
export { queryHotNews };
