define(function (require, exports, module) {
    function Drag(targetId, locateId) {
        this.target = document.getElementById(targetId);
        this.locate = document.getElementById(locateId);

    }

    module.exports = Drag;
    Drag.prototype.init = function () {
        var that = this;
        this.target.onmousedown = function (e) {
            var disx = e.clientX - this.offsetLeft;
            var disy = e.clientY - this.offsetTop;
            var that2 = this; //不太懂onmousedown的this和onmousemove的this有什么区别??
            document.onmousemove = function (e) {
                that.locate.innerHTML = "(" + that2.offsetLeft + "," + that2.offsetTop + ")";
                that.target.style.left = e.clientX - disx + "px";
                that.target.style.top = e.clientY - disy + "px";
            }

            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
            }
        }
    }
});