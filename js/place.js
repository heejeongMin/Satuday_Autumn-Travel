/*scroll down이 일어나 화면이 아래로 300px 이동하게 되면 위로 올라가는 아이콘 보이게하기 ==============*/
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
});
