$(document).ready(function() {
    $(document).click(function(e) {
        console.log($(e.target).is(".zoom-picture img"));
        if (!$(e.target).is(".zoom-picture img")) {
            $('.zoom-picture').hide();
        }
    });

    $('.food-picture img').mouseenter(function() {
        $(this)
            .css('transform', 'scale(1.2)')
            .css('transition', 'all 0.5s ease-in-out');
    }).mouseleave(function() {
        $(this)
            .css('transform', 'scale(1)')
            .css('transition', 'all 0.3s ease-in-out');
    }).click(function() {
            var src = $(this).attr('src');
            setTimeout(function () {
                $('.zoom-picture').show();
                $('.zoom-picture img').attr('src', src);
            }, 1);
    });
});