"use strict";
exports.__esModule = true;
exports.Jocker = void 0;
var https = require("https");
//const https = require("https")
var Jocker = /** @class */ (function () {
    function Jocker() {
    }
    Jocker.getJoke = function () {
        return new Promise(function (resolve, reject) {
            var data = "";
            https.get("https://v2.jokeapi.dev/joke/Any?format=txt", function (res) {
                res.on("data", function (chunk) {
                    data += chunk;
                });
                res.on("end", function () {
                    resolve(data);
                });
            });
        });
    };
    return Jocker;
}());
exports.Jocker = Jocker;
