/**
 * Created by lenovo on 2018/6/26.
 */
$(function () {
    var $circle = $(".list-circle");
    var $item = $(".carousel-item");
    var $width = $(".carousel-image").eq(0).width();
    var $index = 0;
    //1. 图片切换
    $circle.click(function () {
        // 圆点切换样式
        $(this).addClass("circle-active").siblings().removeClass("circle-active");
        // 移动宽度为点击时圆点下标*w
        $index = $(this).index();
        $item.animate({
            right: $width * $index
        });
        // console.log($index);
    });
    // 2.点击向左，下标-1；如果为第一张，则跳转到最后一张下标4
    $(".nav-pre").click(function () {
        console.log($index);
        if ($index !== 0) {
            $index--;
        } else {
            $index = 4;
        }
        $item.animate({
            right: $width * $index + 'px'
        });
        $circle.removeClass("circle-active").eq($index).addClass("circle-active");
    });
    //2.点击向右，下标+1；如果为最后一张，则跳转到第一张下标0
    $(".nav-next").click(function () {
        if ($index !== 4) {
            $index++;
        } else {
            $index = 0;
        }
        $item.animate({
            right: $width * $index + 'px'
        });
        $circle.removeClass("circle-active").eq($index).addClass("circle-active");
    });
    // 自动轮播
    var timer;
    timer = setInterval(play, 3000);

    function play() {
        $index++;
        if ($index == 5) {
            $index = 0;
        }
        $item.animate({
            right: $width * $index + 'px'
        });
        $circle.removeClass("circle-active").eq($index).addClass("circle-active");
    }
});