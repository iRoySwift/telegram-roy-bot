import request from "request";
import CryptoJS from "crypto-js";
import queryString from "query-string";
const queryWeather = (query, u = "c") => {
  const arg =
    typeof query === "object"
      ? `(${query.latitude}, ${query.longitude})`
      : query;

  var url = "https://weather-ydn-yql.media.yahoo.com/forecastrss";
  var method = "GET";
  var app_id = "22r6wUsa";
  var consumer_key = "roy";
  var consumer_secret = "roy";
  var concat = "&";
  var q = { location: "sunnyvale,ca", format: "json" };
  var oauth = {
    oauth_consumer_key: consumer_key,
    oauth_nonce: Math.random().toString(36).substring(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: parseInt(`${new Date().getTime() / 1000}`).toString(),
    oauth_version: "1.0",
  };
  var merged = {};
  Object.assign(merged, query, oauth);
  // Note the sorting here is required
  var merged_arr = Object.keys(merged)
    .sort()
    .map(function (k) {
      return [k + "=" + encodeURIComponent(merged[k])];
    });
  var signature_base_str =
    method +
    concat +
    encodeURIComponent(url) +
    concat +
    encodeURIComponent(merged_arr.join(concat));

  var composite_key = encodeURIComponent(consumer_secret) + concat;
  var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  var signature = hash.toString(CryptoJS.enc.Base64);

  oauth["oauth_signature"] = signature;
  var auth_header =
    "OAuth " +
    Object.keys(oauth)
      .map(function (k) {
        return [k + '="' + oauth[k] + '"'];
      })
      .join(",");
  const api = url + queryString.stringify(q);
  return request(api, {
    headers: {
      Authorization: auth_header,
      "X-Yahoo-App-Id": app_id,
    },
    method: "GET",
  });
};

export { queryWeather };
