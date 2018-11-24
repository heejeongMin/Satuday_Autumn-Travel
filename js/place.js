/*scroll down이 일어나 화면이 아래로 300px 이동하게 되면 위로 올라가는 아이콘 보이게하기 ==============*/
$(function(){
    var deviceSize={
        pc:1024,
        tablet:769,
        mobile:768
    } /* pc는 1024px이상 tablet은 769px이상 1024px미만, mobile은 768px이하 */

    function scrollHideShow(status){
        $("html").css({"overflow-y":status});
        return $("html").width();
    }


    // 제이쿼리의 너비계산방식 = 스크롤바를 제외한 너비,   미디어쿼리의 너비계산방식 = 스크롤바를 포함한 너비.
    // tablet과 mobile에선 제이쿼리와 미디어쿼리의 너비계산방식이 똑같아짐.
    // 왜냐하면 tablet과 mobile에선 스크롤바가 브라우저 위에 생성되기 때문.
    var sc_div = 1; //기기를 구분하는 변수. 1이면 tablet이나 pc, 0이면 모바일.
    var w_size = $(window).width();

    //어느기기에서든지간에 무족건 스크롤바가 뜨도록 함.
    if(w_size >= deviceSize.pc){
        scrollHideShow("scroll"); 
        sc_div = 1;
    }else if(w_size >= deviceSize.tablet && w_size < deviceSize.pc){
        scrollHideShow("scroll");
        sc_div = 1;
    }else if(w_size <= deviceSize.mobile){
        scrollHideShow("scroll");
        sc_div = 0;
    }
    $(window).on("resize",function(){
        var w_size = $(window).width();
        if(w_size >= deviceSize.pc){
            scrollHideShow("scroll");
            sc_div = 1;
        }else if(w_size >= deviceSize.tablet && w_size < deviceSize.pc){
            scrollHideShow("scroll");
            sc_div = 1;
        }else if(w_size <= deviceSize.mobile){
            scrollHideShow("scroll");
            sc_div = 0;
        }
    });

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

    var screenWidth = screen.width;
    /*headerbar dropdown : place, history, food, search 공통*/
    $("#headerdropdown>button").click(function () {
        if(sc_div == 0){
            $(".content1>.swiper-container, .content2>.swiper-container").css({
                "z-index":"-1"
            });
        }
        $("#headerdropdown .headerbar").slideDown(500);
    });
    $("#headerClose").click(function () {
        $("#headerdropdown .headerbar").slideUp(500);
        if(sc_div == 0){
            $(".content1>.swiper-container, .content2>.swiper-container").css({
                "z-index":"auto"
            });
        }
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
