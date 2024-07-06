var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

function getModalsParams() {
    $(".modal_sect").css({
        "height" : "auto"
    });
    $(".modal_sect").css({
        "height" : $(window).height() - $("#header").height() - $("#footer").height() + "px"
    });
}

$(window).resize(function() {
// getModalsParams();
});

$(document).scroll(function() {
// getModalsParams();
});

$(document).ready(function() {
// getModalsParams();
    const swiper = new Swiper('.slider', {
        loop: true,
        navigation: {
            nextEl: '.slide_next',
            prevEl: '.slide_prev',
        }
    });

});