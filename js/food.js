$(function(){
    $(window).scroll(function () {
        var windowY = $(this).scrollTop();
        if (windowY < 300) {
            $("footer button").fadeOut();
        } else if (windowY >= 300) {
            $("footer button").fadeIn().click(function () {
                //$(window).scrollTop(0); -> 부드럽게 올라가는 효과를 주기위해 js로변경
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    });

    /*headerbar dropdown : place, history, food, search 공통*/
    $("#headerdropdown>button").click(function () {
        $("#headerdropdown .headerbar").slideDown(500);
    });
    $("#headerClose").click(function () {
        $("#headerdropdown .headerbar").slideUp(500);
    });


    $(".rolling-list").vTicker({
        // 스크롤 속도(default: 700)  
         speed: 500,  
        // 스크롤 사이의 대기시간(default: 4000)  
        pause: 2000,  
        // 스크롤 애니메이션  
        animation: 'fade',  
        // 마우스 over 일때 멈출 설정  
        mousePause: true,  
        // 한번에 보일 리스트수(default: 2)  
        showItems: 5,  
        // 스크롤 컨테이너 높이(default: 0)  
        height: 0,  
        // 아이템이 움직이는 방향, up/down (default: up)  
        direction: 'up'
    });

    //음식 사진에 있는 돋보기 아이콘 클릭했을때.
    $(".food-image i").on("click", function(){
        var img = $(this).next();
        var src = img.attr("src");
        var alt = img.attr("alt");

        var picture = $(".picture");
        var picture_img = picture.find("img");

        picture_img.attr("src",src);
        picture_img.attr("alt",alt);

        //큰 사진으로 보이도록 한다.(.picture는 큰사진을 의미함)
        picture.css({
            "display":"block"
        });

    });

    // 큰 사진을 클릭했을때
    $(".food-content .picture").on("click", function(){
        $(this).css({
            "display":"none"
        }); // 큰 사진이 보이지 않도록 한다.
    })
});