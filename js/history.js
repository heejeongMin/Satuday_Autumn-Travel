
$(document).ready(function() {

    $(".history_1").on("click",function() {
        $('.history_main').attr("src", "img/history/1.jpg");
        $('.explain-2, .explain-3').css("display", "none");
        $('.explain-1').css("display", "block");
    });
    $(".history_2").on("click",function() {
        $('.history_main').attr("src", "img/history/2.jpg");
        $('.explain-1, .explain-3').css("display", "none");
        $('.explain-2').css("display", "block");
    });
    $(".history_3").on("click",function() {
        $('.history_main').attr("src", "img/history/3.jpg");
        $('.explain-1, .explain-2').css("display", "none");
        $('.explain-3').css("display", "block");
    });
    $(".history_1 > img, .history_2 > img, .history_3 > img").mouseover(function() {
        $(this).removeClass("smaller");
        $(this).addClass("scale");
    });

    $(".history_1 > img, .history_2 > img, .history_3 > img").mouseleave(function() {
        $(this).addClass("smaller");
        $(this).removeClass("scale");
    })
});