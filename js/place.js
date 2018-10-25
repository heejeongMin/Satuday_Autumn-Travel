$(function () {

    /*headerbar dropdown : place, history, food, search 공통*/
    $("#headerdropdown>button").click(function () {
        $("#headerdropdown .headerbar").slideDown(500);
    });
    $("#headerClose").click(function () {
        $("#headerdropdown .headerbar").slideUp(500);
    });
    
    
    /*place.html: 각 article 간의 간격=======================================*/  
    var top = 0;

    for (var i = 0; i < 4; i++) {
        var article = $("main section article:nth-of-type(" + (i + 2) + ")");
        /*loop을 0~3까지 4번밖에 안도는 이유는 css에서 이미 article 요소의 first child에 위치를 맨 상위로 잡아놓았기 때문, loop을 4번 돌면서, article의 2,3,4,5 번에 접근 각각 접근하여 article이라는 object에 저장*/

        top += 420; 
        //loop을 4번돌면서, top에 css에서 정의된 article 의 높이 400px + js에서 추가로 마진 20px을 넣어 줌. 
        article.css("top", top); //2,3,4,5 번째의 article의 style에 접근하여, top의 속성값을 js에서 계산된 top 객체 값으로 각각 넣어준다.
    }
    
    

    /*article안에 이미지 swiper ============================================*/
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    
    /*scroll down이 일어나 화면이 아래로 300px 이동하게 되면 위로 올라가는 아이콘 보이게하기 ==============*/
    $(window).scroll(function () {
        var windowY = window.scrollY;
        if (windowY < 300) {
            $("footer button").fadeOut();
        } else if (windowY >= 300) {
            $("footer button").fadeIn().click(function () {
                //$(window).scrollTop(0); -> 부드럽게 올라가는 효과를 주기위해 js로변경
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            });
        }
    });



}) // end of document ready
