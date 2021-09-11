$(function () {
    $('.header a').on('click', function() {
        let href = $(this).attr('href');
        $('html').animate({
            scrollTop: $(href).offset().top
        }, 700);
    });
})