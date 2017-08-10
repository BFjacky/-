define(function(require){
    for(var i=0;i<3;i++){
        console.log(i);
    }
    var m3= require("./module3.js");
    m3.showInfo();
});