define(function (require, exports, module) {
    console.dir(module.dependencies);
    console.dir(module.deps);
    require("./module5.js");
    console.dir(exports);
    console.dir(module.exports);
    console.dir(module);
    console.log(exports == module.exports);
});