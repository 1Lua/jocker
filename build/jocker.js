"use strict";
exports.__esModule = true;
exports.Jocker = void 0;
var https = require("https");
var Jocker = /** @class */ (function () {
    function Jocker() {
    }
    /**
    * This returns random joke
    * @returns Promise<string>
    */
    Jocker.getJoke = function () {
        return new Promise(function (resolve, reject) {
            var data = '';
            https.get("https://v2.jokeapi.dev/joke/Any?format=txt", function (res) {
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    resolve(data);
                });
                res.on('error', function (err) {
                    reject('Не удалось получить шутку ;(');
                });
            });
        });
    };
    /**
     * This returns categories of joke
     * @returns Promise<Array<string>>
     */
    Jocker.getJokeCategories = function () {
        return new Promise(function (resolve, reject) {
            var data = '';
            https.get('https://v2.jokeapi.dev/categories', function (res) {
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    try {
                        var categories = JSON.parse(data).categories;
                        resolve(categories);
                    }
                    catch (err) {
                        reject('Не удалось получить категории шуток..');
                    }
                });
                res.on('error', function (err) {
                    reject('Не удалось получить категории шуток..');
                });
            });
        });
    };
    /**
     * This returns random joke by categiry
     *
     * @param category
     * @returns Promise<string>
     */
    Jocker.getJokeByCategory = function (category) {
        return new Promise(function (resolve, reject) {
            var data = '';
            https.get("https://v2.jokeapi.dev/joke/" + category + "?format=txt", function (res) {
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    if (!data.match('No matching joke found')) {
                        resolve(data);
                    }
                    else {
                        reject('incorrect_category');
                    }
                });
                res.on('error', function (err) {
                    reject('Не удалось получить шутку ;(');
                });
            });
        });
    };
    return Jocker;
}());
exports.Jocker = Jocker;
