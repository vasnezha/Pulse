 // Элемент «вверх»
 $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

//Плавная прокрутка страницы, при нажатии на элемент «вверх»  
$("a[href=#up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();