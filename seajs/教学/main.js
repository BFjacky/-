/*
三个参数的名字是固定的不可修改
三个参数都是可以省略的，但是只能从后面开始省略
*/
define(function (require, exports, module) {
    function showLog() {
        console.log("hello world");
        console.log("hello worl!!!d");
    }
    function showInfo() {
        console.log("hello kitty");
        var ret = m1.sum(1, 2, 3);
        console.log(ret);
    }
    exports.showLog = showLog;   //这里把showLog函数公开出去
    exports.showInfo = showInfo;

    //引入别的模块
    var m1 = require("./module1.js");
    var m2 = require("./module2.js");
    var m4 = require("./module4.js");
    var m6 = require("./module6.js");
    var sum = m6.sum(12, 12);
    var abs = m6.abstract(12, 12);
    var m7 = require("./module7.js");
});