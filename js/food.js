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

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      })

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
});