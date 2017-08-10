define(function (require, exports, module) {
    var Calculate = require("./calculation.js");
    var cal = new Calculate("right1");
    cal.init();

    var Tab = require("./tab.js");
    var tab = new Tab("tab");
    tab.init();

    var Drag = require("./drag.js");
    var drag = new Drag("drag","locate");
    drag.init();

});