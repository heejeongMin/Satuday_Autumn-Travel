$(function(){
     /*headerbar dropdown : place, history, food, search 공통*/
     $("#headerdropdown>button").click(function () {
        $("#headerdropdown .headerbar").slideDown(500);
    });
    $("#headerClose").click(function () {
        $("#headerdropdown .headerbar").slideUp(500);
    });


    
    $(".over").on("click",function(){ /*썸네일을 클릭하면 */
        var src = $(this).next().attr("src");
        var alt = $(this).next().attr("alt");

        var detail = $(this).siblings(".story").html();
        /*이미지와 이미지에 대한 설명을 가져온 후 */

        $("#picture").attr("src",src);
        $("#picture").attr("alt",alt);

        $("article .story").empty();
        $("article .story").html(detail);
        /* 크게 나오도록 설정 */
    });
});