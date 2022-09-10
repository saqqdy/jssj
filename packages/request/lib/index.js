/*!
 * @jssj/request v1.0.0-alpha.8
 * jssj request module
 * (c) 2021-2022 saqqdy<https://github.com/saqqdy> 
 * Released under the MIT License.
 */
'use strict';

var https = require('https');
var http = require('http');
var zlib = require('zlib');
var url = require('url');
var qs = require('qs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);

class Request {
  constructor() {
    this.cookies = [];
  }
  getHeaders(host, postData) {
    const headers = {
      Host: host,
      rejectUnauthorized: "false",
      Pragma: "no-cache",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Jssj/"
    };
    if (this.cookies.length) {
      headers.Cookie = this.cookies.join("; ");
    }
    if (postData) {
      headers["Content-Length"] = Buffer.byteLength(postData);
    }
    return headers;
  }
  setCookie(cookie) {
    const cookies = cookie.split(";");
    for (let item of cookies) {
      item = item.replace(/^\s/, "");
      this.cookies.push(item);
    }
    return this;
  }
  request(method, url$1, postData, headers = {}, options = {}) {
    const urlObj = new url.URL(url$1);
    headers = { ...this.getHeaders(urlObj.host, postData), ...headers };
    const params = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method,
      headers
    };
    return new Promise((resolve, reject) => {
      const req = (urlObj.protocol === "http:" ? http__default["default"] : https__default["default"]).request(
        params,
        (res) => {
          const chunks = [];
          res.on("data", (buffer) => {
            chunks.push(buffer);
          });
          res.on("end", () => {
            const buffer = Buffer.concat(chunks);
            const encoding = res.headers["content-encoding"];
            let data, result;
            if (encoding === "gzip") {
              data = zlib__default["default"].gunzipSync(buffer).toString();
            } else if (encoding === "deflate") {
              data = zlib__default["default"].inflateSync(buffer).toString();
            } else {
              data = buffer.toString();
            }
            try {
              result = JSON.parse(data);
            } catch {
              result = data;
            }
            if (typeof result === "string" && /<html>/.test(result) || typeof result === "object" && (result.status === false || result.success === false)) {
              if (options.error) {
                reject(result);
              } else {
                console.error(
                  typeof result === "object" ? result.msg || result.message : result
                );
              }
              return;
            }
            resolve(result);
          });
        }
      );
      req.on("error", (err) => {
        if (options.error) {
          reject(err);
          return;
        }
        console.error(err);
      });
      if (postData) {
        req.write(postData);
      }
      req.end();
    });
  }
  async get({ url, data = {}, headers = {}, options = {} }) {
    const postData = qs__default["default"].stringify(data, {
      arrayFormat: "indices",
      allowDots: true
    });
    if (postData) {
      url += !url.includes("?") ? "?" : "&";
      url += postData;
    }
    return await this.request("GET", url, "", headers, options);
  }
  async post({ url, data = {}, headers = {}, options = {} }) {
    let postData;
    if (["application/json"].includes(headers["Content-Type"])) {
      postData = JSON.stringify(data);
    } else {
      postData = qs__default["default"].stringify(data, {
        arrayFormat: "indices",
        allowDots: true
      });
    }
    return await this.request("POST", url, postData, headers, options);
  }
  async put({ url, data = {}, headers = {}, options = {} }) {
    let postData;
    if (["application/json"].includes(headers["Content-Type"])) {
      postData = JSON.stringify(data);
    } else {
      postData = qs__default["default"].stringify(data, {
        arrayFormat: "indices",
        allowDots: true
      });
    }
    return await this.request("PUT", url, postData, headers, options);
  }
  async delete({ url, data = {}, headers = {}, options = {} }) {
    let postData;
    if (["application/json"].includes(headers["Content-Type"])) {
      postData = JSON.stringify(data);
    } else {
      postData = qs__default["default"].stringify(data, {
        arrayFormat: "indices",
        allowDots: true
      });
    }
    return await this.request("DELETE", url, postData, headers, options);
  }
}
var index = new Request();

module.exports = index;
