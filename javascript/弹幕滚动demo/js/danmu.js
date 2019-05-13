$(function () {
    var $screen = $(".screen");
    var $enter = $(".enter");
    var $height = $screen.height();
    // 点击post,获取enter输入框中的内容val()
    $(".post").click(function () {
        var $message = $enter.val();
        // 若弹幕为空，无法发送
        if($message=="") {
            return false;
        }
        // 1.-------添加span新元素--------
        $screen.append("<span class='message'>" + $message + "</span>");
        $enter.val("");                 //点击post发送后清空输入框
        // 2.--------随机高度--------
        var randomTop = Math.floor(Math.random() * $height - 36);
        if(randomTop<36) {
            randomTop=36;
        }
        //3. ---------随机速率--------
        var speed = Math.floor(Math.random() *5000+8000);
        $(".message").last().animate({
                left: "-200px"
            }, speed,
            "linear",
            function(){
                $(this).remove();   //回调函数：动画执行结束后清除该弹幕
            });
        //4. --------随机颜色---------
        function randomColor(){
            return '#'+Math.floor(Math.random()*0xffffff).toString(16);
        }
        // 5.--------给最新输入弹幕，赋予随机样式---------
        $(".message").last().css({
            "top": randomTop + "px",
            "color": randomColor()
        });
    });

    // 绑定回车键发送
    document.onkeydown = function(){
        if(event.keyCode == 13){
         $(".post").click();
        }
       };

    // 点击clear，清空ente输入框内容并且清空所有弹幕
    $(".clear").click(function () {
        $enter.val("");
        $(".message").remove();
    });

});