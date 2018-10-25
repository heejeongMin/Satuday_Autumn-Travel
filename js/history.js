$(function () {
    
    /*headerbar dropdown : place, history, food, search 공통*/
    $("#headerdropdown>button").click(function () {
        $("#headerdropdown .headerbar").slideDown(500);
    });
    $("#headerClose").click(function () {
        $("#headerdropdown .headerbar").slideUp(500);
    });


    /*ZoomOut되어 있는 aside 태크 안에 있는 썸네일을 클릭하면 큰이미지로 이동*/
    $(".over").click(function () {
        /*클릭하는 건의 이미지의 src경로와 alt값 추출*/
        var src = $(this).next().attr("src");
        var alt = $(this).next().attr("alt");
        /*클릭하는 건의 .story 전체를 추출*/
        var detail = $(this).siblings(".story");

        
        
        /*zoomIn 되는 큰이미지의 속성 src, alt 값에 대입*/
        $("#picture").attr("src", src).attr("alt", alt);
        
         /*Zoomin되어 있는 건의 내용을 먼저 지우고, 클릭한 건의 내용을 복사 & 붙여넣기*/
        if ($("article div.story")) {
            $("article div.story").remove();
            detail.clone().appendTo("#historyMain article");
        }

    });

}); //end of document
