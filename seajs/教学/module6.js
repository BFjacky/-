define(function (require, exports, module) {
    exports.sum = function (a, b) {
        var ret = parseInt(a) + parseInt(b);
        console.log("导出方式不为对象" + ret)

    };
    exports.abstract = function (a, b) {
        var ret = parseInt(a) - parseInt(b)
        console.log("导出方式不为对象" + ret);
    }

//----------------------------------------------这两种导出方式不能同时使用
    var obj = {};
    obj.sum = function (a, b) {
        var ret = parseInt(a) + parseInt(b);
        console.log("导出方式为对象" + ret)

    };
    obj.abstract = function (a, b) {
        var ret = parseInt(a) - parseInt(b)
        console.log("导出方式为对象" + ret);
    }
    module.exports = obj;
});