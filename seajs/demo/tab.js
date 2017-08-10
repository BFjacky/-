define(function (require, exports, module) {
    function Tab(cId) {
        this.container = document.getElementById(cId);
        this.aInput = this.container.getElementsByTagName("input");
        this.aP = this.container.getElementsByTagName("p");
    }

    module.exports = Tab;

    Tab.prototype.init = function () {
        var that = this;
        this.aInput[0].style.backgroundColor = "orange";
        this.aP[0].style.display = "block";
        for (var i = 0; i < 3; i++) {
            
            this.aInput[i].index = i;
            this.aInput[i].onclick = function () {
                console.log("每一次点击按钮，这里都执行了-----------" + i);
                that.change(this);
            }
        }
    }
    /*
       console.log("每一次点击按钮，这里都执行了-----------" + i);
       由这句话和运行效果可以看出，onclick= 函数，不是事先绑定的，
       而是在onclick被点击的时候，它去寻找相应的函数 
    */
    Tab.prototype.change = function (obj) {
        for (var i = 0; i < this.aInput.length; i++) {
            this.aInput[i].style.backgroundColor = "";
            this.aP[i].style.display = "none";
        }
        obj.style.backgroundColor = "orange";
        this.aP[obj.index].style.display = "block";
    }

    Tab.prototype.change_ = function (order) {//所以这种方法是不是行不通？？？
        for (var i = 0; i < this.aInput.length; i++) {
            this.aInput[i].style.backgroundColor = "";
            this.aP[i].style.display = "none";
        }
        this.aInput[parseInt("order")].style.backgroundColor = "orange";
        this.aP[parseInt("order")].style.display = "block";
    }
});