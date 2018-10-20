$(function(){
    
    /*aside에 있는 썸네일을 클릭하면 큰이미지로 이동*/
    $(".over").click(function(){
        /*클릭하는 건의 이미지의 src경로와 alt값 추출*/
        var src = $(this).next().attr("src");
        var alt = $(this).next().attr("alt");    
        /*클릭하는 건의 .story 전체를 추출*/
        var detail = $(this).siblings(".story");       
    
    
        /*큰이미지의 속성 src, alt 값에 대입*/
        $("#picture").attr("src", src).attr("alt", alt); 
        if ($("article div.story")){
            $("article div.story").remove();
            detail.clone().appendTo("#historyMain article");
        }
        
        
    });
    
    

    
    
    
    
    
});//end of document