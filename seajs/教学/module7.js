define(function(require,exports,module){
    console.log("------------1");
    //这种形式采用异步方式加载模块
    require.async("./module8.js",function(m8){
        m8.showInfo();
    });
    console.log("------------3");
});