"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var jocker_1 = require("./jocker");
var commander_1 = require("commander");
var program = new commander_1.Command();
program.version('1.0', '-v');
program.addOption(new commander_1.Option('-c, --category <category>')["default"]('no'));
program.parse();
var options = program.opts();
function showCategories() {
    jocker_1.Jocker.getJokeCategories()
        .then(function (categories) {
        console.log.apply(console, __spreadArray(['Допустимые категории шуток:'], categories, false));
    })["catch"](console.log);
}
if (options.category !== 'no') {
    jocker_1.Jocker.getJokeByCategory(options.category)
        .then(console.log)["catch"](function (err) {
        switch (err) {
            case 'incorrect_category': {
                console.log('Выбранная категория не существует!');
                showCategories();
                break;
            }
        }
    });
}
else { // пользователь не указал категорию
    console.log('Необходимо указать категорию шутки!');
    showCategories();
}
