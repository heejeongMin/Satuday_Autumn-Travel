$(function () {

    /*headerbar dropdown : place, history, food, search 공통*/
    $("#headerdropdown>button").click(function () {
        $("#headerdropdown .headerbar").slideDown(500);
    });
    $("#headerClose").click(function () {
        $("#headerdropdown .headerbar").slideUp(500);
    });

    
    /*리스트 자동 돌아가고, 마우스 오버 하면 멈췄다, 마우스 오버 안하면 다시 돌기*/
    var mylist = setInterval(auto, 1800);
    function auto() {$("#foodList ul li").eq(0).insertAfter($("#foodList ul li").eq(9));}
    
    $("main #foodList")
        .on("mouseenter", function(){clearInterval(mylist);})
        .on("mouseleave", function(){mylist = setInterval(auto, 1800);});



    /*Best3 먹거리 사진을 클릭하면 zoomIn하고 zoomIn된 사진 다시 클릭하면 zoomOut*/
    $("div.over").click(function () {
        var src = $(this).next().attr("src"); // 클릭한 건의 src 속성을 추출해서 src 오브젝트에 담고, 
        $("img#popup").attr("src", src).click(function(){$(this).attr("src", "");}); 
        //popup 이미지에 넣은다음 그 이미지를 다시 클릭하면, 경로를 지워서 원래 3가지 이미지가 보이게 하기. 

    });





}); //end of document
