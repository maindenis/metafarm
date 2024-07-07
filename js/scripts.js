function getHeaderParams() {
   if($("#nav").length > 0) {
       docScroll = $(document).scrollTop();
       headerTopCoord = $("#headerTop").offset().top;
       navTopCoord = $("#scrollCoord").offset().top;
       header2TopCoord = $(".header_2_wrapp").offset().top;
       if(docScroll >= headerTopCoord) {
           $("#headerTop").addClass("fixed");
       } else {
           $("#headerTop").removeClass("fixed");
       }
       if(docScroll >= navTopCoord) {
           $("#nav").addClass("fixed");
           $("#nav").css({
               "top": $(".header_top").height() + "px"
           });
       } else {
           $("#nav").removeClass("fixed");
           $("#nav").css({
               "top": "auto"
           });
       }
       if(bodyWidth <= 1124 && docScroll >= header2TopCoord - $(".header_top").height() - $(".header_top").offset().top ) {
         $("#respHeader2").addClass("fixed");
         $("#respHeader2").css({
            "top": $(".header_top").height() + "px"
         });
       } else {
         $("#respHeader2").removeClass("fixed");
         $("#respHeader2").css({
            "top": "auto"
         });
       }
    }
}

function getSubMenuParams() {
   if($(".sub_menu").length > 0) {
       $(".sub_menu").css({
           "height" : "auto"
       });
       $(".sub_menu .row").css({
           "height" : $(window).height() - $("#headerHeight").height() + "px"
       });
    }
}

function getRespSlider() {
    var advThumbsSlider;
    if(bodyWidth <= 600) {
        if($(".adv_thumbs .swiper-slide").length == 0) {
            $(".adv_thumb_wrapp").addClass("swiper-slide");
        }
        if(!$(".adv_thumbs").hasClass("swiper-wrapper") ) {
            $(".adv_thumbs").addClass("swiper-wrapper");
        }
        if($(".advThumbsSlider").length == 0) {
            $(".adv_thumbs_wrapp").addClass("swiper");
        }
        if(!$(".advThumbsSlider").hasClass("swiper-init")) {
            advThumbsSlider = new Swiper(".advThumbsSlider", {
            loop: true,
              slidesPerView: "auto",
              spaceBetween: 0,
              pagination: {
                el: ".advThumbsSlider_pagination",
                clickable: true
              },
                on: {
                    init: function () {
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    },
                    slideChange: function () {
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".advThumbsSlider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    }
                  }
            });
        }
    } else {
        $(".adv_thumb_wrapp").removeClass("swiper-slide");
        $(".adv_thumbs").removeClass("swiper-wrapper");
        $(".adv_thumbs").attr("style", "");
        $(".adv_thumbs_wrapp").removeClass("swiper");
    }

    var bonuseThumbsSlider;

    if(bodyWidth <= 768) {
        if($(".verticalScroll_box .swiper-slide").length == 0) {
            $(".bonuse_thumb_wrapp").addClass("swiper-slide");
        }
        if(!$(".bonuse_thumbs").hasClass("swiper-wrapper") ) {
            $(".bonuse_thumbs").addClass("swiper-wrapper");
        }
        if($(".verticalScroll_box").length == 0) {
            $(".verticalScroll_box").addClass("swiper");
        }
        if(!$(".verticalScroll_box").hasClass("swiper-init")) {
            advThumbsSlider = new Swiper(".verticalScroll_box", {
            loop: true,
              slidesPerView: "auto",
              spaceBetween: 0,
              pagination: {
                el: ".verticalScroll_box_pagination",
                clickable: true
              },
                on: {
                    init: function () {
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    },
                    slideChange: function () {
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".verticalScroll_box_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    }
                  }
            });
        }
    } else {
        $(".bonuse_thumb_wrapp").removeClass("swiper-slide");
        $(".bonuse_thumbs").removeClass("swiper-wrapper");
        $(".bonuse_thumbs").attr("style", "");
        $(".verticalScroll_box").removeClass("swiper");
    }


    var articles_box;

    if(bodyWidth <= 1124) {
        if($(".articles_box .swiper-slide").length == 0) {
            $(".article_thumb_wrapp").addClass("swiper-slide");
        }
        if(!$(".articles_thumbs").hasClass("swiper-wrapper") ) {
            $(".articles_thumbs").addClass("swiper-wrapper");
        }
        if($(".articles_box").length == 0) {
            $(".articles_box").addClass("swiper");
        }
        if(!$(".articles_box").hasClass("swiper-init")) {
            articles_box = new Swiper(".articles_box", {
            loop: true,
              slidesPerView: "auto",
              spaceBetween: 0,
              pagination: {
                el: ".articles_box_pagination",
                clickable: true
              },
                on: {
                    init: function () {
                        $(".articles_box_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".articles_box_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".articles_box_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".articles_box_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    },
                    slideChange: function () {
                        $(".articles_box_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".articles_box_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".articles_box_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".articles_box_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    }
                  }
            });
        }
    } else {
        $(".article_thumb_wrapp").removeClass("swiper-slide");
        $(".articles_thumbs").removeClass("swiper-wrapper");
        $(".articles_thumbs").attr("style", "");
        $(".articles_box").removeClass("swiper");
    }

    var articles_thumbs_3;

    if(bodyWidth <= 768) {
        if($(".articles_thumbs_3_sl .swiper-slide").length == 0) {
            $(".article_thumb_3_wrapp").addClass("swiper-slide");
        }
        if(!$(".articles_thumbs_3").hasClass("swiper-wrapper") ) {
            $(".articles_thumbs_3").addClass("swiper-wrapper");
        }
        if($(".articles_thumbs_3_sl").length == 0) {
            $(".articles_thumbs_3_sl").addClass("swiper");
        }
        if(!$(".articles_thumbs_3_sl").hasClass("swiper-init")) {
            articles_box = new Swiper(".articles_thumbs_3_sl", {
                loop: true,
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: {
                    el: ".articles_box_pagination_2",
                    clickable: true
                },
                on: {
                    init: function () {
                        $(".articles_box_pagination_2 .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".articles_box_pagination_2 .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".articles_box_pagination_2 .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".articles_box_pagination_2 .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    },
                    slideChange: function () {
                        $(".articles_box_pagination_2 .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".articles_box_pagination_2 .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".articles_box_pagination_2 .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".articles_box_pagination_2 .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    }
                  }
            });
        }
    } else {
        $(".article_thumb_3_wrapp").removeClass("swiper-slide");
        $(".articles_thumbs_3").removeClass("swiper-wrapper");
        $(".articles_thumbs_3").attr("style", "");
        $(".articles_thumbs_3_sl").removeClass("swiper");
    }

    var adreeses_thumbs_sl;

    if(bodyWidth <= 900) {
        if($(".adreeses_thumbs_sl .swiper-slide").length == 0) {
            $(".adrees_thumb_wrapp").addClass("swiper-slide");
        }
        if(!$(".adreeses_thumbs").hasClass("swiper-wrapper") ) {
            $(".adreeses_thumbs").addClass("swiper-wrapper");
        }
        if($(".adreeses_thumbs_sl").length == 0) {
            $(".adreeses_thumbs_sl").addClass("swiper");
        }
        if(!$(".adreeses_thumbs_sl").hasClass("swiper-init")) {
            articles_box = new Swiper(".adreeses_thumbs_sl", {
                loop: true,
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: {
                    el: ".adreeses_thumbs_sl_pg",
                    clickable: true
                },
                on: {
                    init: function () {
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    },
                    slideChange: function () {
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet").removeClass("prevBullet");
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet").removeClass("nextBullet");
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                        $(".adreeses_thumbs_sl_pg .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
                    }
                  }
            });
        }
    } else {
        $(".adrees_thumb_wrapp").removeClass("swiper-slide");
        $(".adreeses_thumbs").removeClass("swiper-wrapper");
        $(".adreeses_thumbs").attr("style", "");
        $(".adreeses_thumbs_sl").removeClass("swiper");
    }

}

function getScrollTopParams() {
    docScroll = $(document).scrollTop();
    if(docScroll >= $("#header").height()) {
        $(".scroll_top").addClass("visible");
    } else {
        $(".scroll_top").removeClass("visible");
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
var topCoord;

$(window).resize(function() {
   bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    getSubMenuParams();
    getHeaderParams();
    getRespSlider();
    getScrollTopParams();
});

window.addEventListener('load', function() {
    getRespSlider();
    getScrollTopParams();
});

$(document).scroll(function() {
   bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
getHeaderParams();
getSubMenuParams();
// getRespSlider();
getScrollTopParams();
});

$(document).ready(function() {
    // getSubMenuParams();
    getHeaderParams();
    // getRespSlider();

    $(document).on("click", ".checkout_list [data-value]",  function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      val = $(this).attr("data-value");
      src = $(this).find("img").attr("src");
      parent.find(".p_val span").text(val);
      parent.find(".p_val img").attr("src", src);
      parent.removeClass("active");
      parent.find("[data-value]").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".custom_select .p_val", function(e) {
      e.preventDefault();
      parent = $(this).closest(".custom_select");
      z_parent = $(this).closest(".z_parent");
      if(parent.hasClass("active")) {
        parent.removeClass("active");
        setTimeout(function() {
            z_parent.removeClassClass("active");
        }, 300);
      } else {
        $(".custom_select").removeClass("active");
        parent.addClass("active");
        z_parent.addClass("active");
      }
    });

    $(document).mouseup(function(e) {
      hide_element = $(".custom_select");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".custom_select").removeClass("active");
      }
    });

    // --------------

    $(document).on("click", ".filter .filter_title", function(e) {
      e.preventDefault();
      parent = $(this).closest(".filter");
      z_parent = $(this).closest(".z_parent");
      if(parent.hasClass("active")) {
        parent.removeClass("active");
        setTimeout(function() {
            z_parent.removeClassClass("active");
        }, 300);
      } else {
        $(".filter").removeClass("active");
        parent.addClass("active");
        z_parent.addClass("active");
      }
    });

    $(document).mouseup(function(e) {
      hide_element = $(".filter");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
        }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".filter").removeClass("active");
      }
    });

    // ----------

    $(".price_valute input").on("change", function() {
        valute = $(this).val();
        $("#valuteVal").text(valute);
    });


    $("#startPriceInput").on("change", function() {
        valute = $(this).val();
        $("#startPrice").text(valute);
    });
    $("#endPriceInput").on("change", function() {
        valute = $(this).val();
        $("#endPrice").text(valute);
    });

    // ----------

    $(".tab_pill").on("click", function(e) {
        parent = $(this).closest(".tabs_wrapp");
        parent.find(".tab_pill").removeClass("active");
        $(this).addClass("active");
    });    
    $(".tabs_wrapp .filter_ch > input").each(function() {
      parent = $(this).closest(".tabs_wrapp");
      chCounter = 0;
      parent.find(".filter_ch > input").each(function() {
         if($(this).is(":checked")) {
            chCounter++;
         }
      });
      $(".countFilters").text(chCounter);
    });
    
    $(".tabs_wrapp .filter_ch > input").on("change", function() {
      chCounter = 0;
        parent = $(this).closest(".tabs_wrapp");
         parent.find(".filter_ch > input").each(function() {
           if($(this).is(":checked")) {
               chCounter++;
           }
         });
         $(".countFilters").text(chCounter);
    });

    // ----------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#respNav").is(":hidden") ) {
          $("#respNav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#respNav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#respNav").is(":visible") &&
            bodyWidth <= 1124) {
                $("#respNav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    $(".resp_item_btn").on("click", function(e) {
      e.preventDefault();
      index = $(this).attr("data-respindex");
      $(".resp_sub_menu[data-respindex = '"+index+"']").addClass("visible");
    });

    $(".back_link_resp").on("click", function(e) {
      e.preventDefault();
      $(".resp_sub_menu").removeClass("visible");
    });

    // --------------

    const swiper = new Swiper('.promo_slider', {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        // autoplay: {
        //     delay: 2000, // время задержки между слайдами
        //     disableOnInteraction: false, // слайды будут продолжать автоматически переключаться при нажатии на кнопки навигации
        // },
      navigation: {
        nextEl: '.slide_next',
        prevEl: '.slide_prev',
      },
      pagination: {
        el: ".promo_slider_pagination",
        clickable: true
      },
    });

    // -------------
    const cards_slider = new Swiper(".cardsSliderWrapper", {
    loop: true,
      // slidesPerView: 4,
      slidesPerView: "auto",
      spaceBetween: 0,
      pagination: {
        el: ".cards_slider_pagination",
        clickable: true
      },
    navigation: {
        nextEl: '.cards_next',
        prevEl: '.cards_prev',
    },
    on: {
        init: function () {
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        },
        slideChange: function () {
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".cards_slider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        }
      }
    });

    const cardSlider = new Swiper(".card_slider_wrapper", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        pagination: {
            el: ".card_slider_pag",
            clickable: true
        }
    });

    // ------------
    const team_slider = new Swiper(".team_slider", {
    loop: true,
    slidesPerView: "auto",
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".team_slider_pag",
        clickable: true
    },
    navigation: {
        nextEl: '.team_sl_next',
        prevEl: '.team_sl_prev',
    },
    on: {
        init: function () {
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("nextBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        },
        slideChange: function () {
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet").removeClass("nextBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
            $(".team_slider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
        }
      }
    });

    // ------------

    var cardsSlider = new Swiper(".cardsSlider", {
        grabCursor: true,
        effect: "creative",
        loop: true,
        creativeEffect: {
        prev: {
        shadow: true,
            translate: [0, 0, 0],
        },
        next: {
            translate: ["100%", 0, 0],
        },
        },
        pagination: {
            el: ".cardsSlider_pag",
            clickable: true
        },
        on: {
            init: function () {
                countSlides = $(".cardsSlider .card_slide_2").length;
                $("#cardsSliderCount").text(countSlides);
                currentSlide = parseInt($(".cardsSlider .swiper-slide-active").attr("data-swiper-slide-index")) + 1;
                $("#cardsSliderCurrent").text(currentSlide);
                $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("prevBullet");
                $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("nextBullet");
                $(".cardsSlider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                $(".cardsSlider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
            },
            slideChange: function () {
                currentSlide = parseInt($(".cardsSlider .swiper-slide-active").attr("data-swiper-slide-index")) + 1;
                $("#cardsSliderCurrent").text(currentSlide);
                $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("prevBullet");
                $(".cardsSlider_pag .swiper-pagination-bullet").removeClass("nextBullet");
                $(".cardsSlider_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                $(".cardsSlider_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
            }
        }
    });

    // -------------

    const testimonialSlider = new Swiper('.testimonialSlider', {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        // autoplay: {
        //     delay: 2000, // время задержки между слайдами
        //     disableOnInteraction: false, // слайды будут продолжать автоматически переключаться при нажатии на кнопки навигации
        // },
      navigation: {
        nextEl: '.test_slide_next',
        prevEl: '.test_slide_prev',
      },
      pagination: {
            el: ".testimonialSlider_pagination",
            clickable: true
        },
        on: {
            init: function () {
                $(".testimonialSlider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                $(".testimonialSlider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                $(".testimonialSlider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                $(".testimonialSlider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
            },
            slideChange: function () {
                $(".testimonialSlider_pagination .swiper-pagination-bullet").removeClass("prevBullet");
                $(".testimonialSlider_pagination .swiper-pagination-bullet").removeClass("nextBullet");
                $(".testimonialSlider_pagination .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                $(".testimonialSlider_pagination .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
            }
        }
    });

    // ---------------

    // var verticalScroll = new Swiper("#verticalScroll", {
    //   direction: "vertical",
    //   slidesPerView: "auto",
    //   freeMode: true,
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
    //   mousewheel: true,
    // });
    // var verticalScroll = new Swiper("#verticalScroll", {
    //     direction: 'vertical',
    //     slidesPerView: "auto",
    //     mousewheelControl: true,
    //     freeMode: true,
    //     mousewheel: true
    // });


    // ---------------

    const videoSlider2 = new Swiper(".videoSlider2", {
        loop: true,
        // slidesPerView: 4,
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            nextEl: '.videos_next',
            prevEl: '.videos_prev',
        },
        pagination: {
            el: ".videoSlider2_box_pag",
            clickable: true
        },
        on: {
            init: function () {
                $(".videoSlider2_box_pag .swiper-pagination-bullet").removeClass("prevBullet");
                $(".videoSlider2_box_pag .swiper-pagination-bullet").removeClass("nextBullet");
                $(".videoSlider2_box_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                $(".videoSlider2_box_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
            },
            slideChange: function () {
                $(".videoSlider2_box_pag .swiper-pagination-bullet").removeClass("prevBullet");
                $(".videoSlider2_box_pag .swiper-pagination-bullet").removeClass("nextBullet");
                $(".videoSlider2_box_pag .swiper-pagination-bullet-active").prev(".swiper-pagination-bullet").addClass("prevBullet");
                $(".videoSlider2_box_pag .swiper-pagination-bullet-active").next(".swiper-pagination-bullet").addClass("nextBullet");
            }
        }
    });

    // ---------------

    $(".nav li").on("mouseover", function() {
        index = $(this).attr("data-itemindex");
        subMenu = $("[data-subindex = '"+index+"']");
        if(subMenu.length > 0) {
            $(".sub_menu").removeClass("visible");
            $(".nav li").removeClass("active");
            marginTop = $("#headerHeight").height();
            subMenu.css({
                "margin-top" : marginTop + "px"
            });
            subMenu.addClass("visible");
            $("#subNavBg").addClass("active");
            $("#headerHeight").addClass("z");
            $(this).addClass("active");
            getSubMenuParams();
        } else {
            $("#subNavBg").removeClass("active");
            $("#headerHeight").removeClass("z");
            $(".sub_menu").removeClass("visible");
            $(this).removeClass("active");
        }
    });

    $(document).on("mouseup", function(e) {
      hide_element = $(".subMenuInner");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
        $("#subNavBg").removeClass("active");
        $("#headerHeight").removeClass("z");
        $(".sub_menu").removeClass("visible");
        $(".nav li").removeClass("active");
      }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
            $("#subNavBg").removeClass("active");
            $("#headerHeight").removeClass("z");
            $(".sub_menu").removeClass("visible");
            $(".nav li").removeClass("active");
            $(".nav li").removeClass("active");
        }
    });

    // -------------

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_parent");
      sl = parent.find(".dr_content");
      z_parent = $(this).closest(".z_parent");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
        z_parent.addClass("active");
      } else {               
        sl.slideUp(300);
        parent.removeClass("active");
        setTimeout(function() {
            z_parent.removeClass("active");
        }, 300);
      }
    });

    // -----------

    $(".tel_code_title").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".tel_input_wrapp");
        sl = parent.find(".tel_dr_box");
        // z_parent = $(this).closest(".z_parent");
        if(sl.is(":hidden")) {
            sl.slideDown(300);
            // z_parent.addClass("active");
        } else {
            sl.slideUp(300);
            // setTimeout(function() {
            //     z_parent.removeClass("active");
            // }, 300);
        }
    });

    $(document).on("mouseup", function(e) {
      hide_element = $(".tel_dr_box");
      z_parent = hide_element.closest(".z_parent");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
        hide_element.slideUp(300);
        // setTimeout(function() {
        //     z_parent.removeClass("active");
        // }, 300);
      }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
          $(".tel_dr_box").slideUp(300);
        }
    });

    $(".tel_dr_box .tel_radio").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".tel_input_wrapp");
        hideInput = parent.find(".tel_code");
        value = $(this).find("input").val();
        hideInput.val(value);
        src = $(this).find("img").attr("src");
        parent.find(".tel_flag img").attr("src", src);
        sl = parent.find(".tel_dr_box");
        sl.slideUp(300);
    });

    // ------------

    $(".dr_tels_title").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".dr_tels");
        sl = parent.find(".dr_tels_list");
        z_parent = $(this).closest(".z_parent");
        if(sl.is(":hidden")) {
            sl.slideDown(300);
            parent.addClass("active");
            z_parent.addClass("active");
        } else {
            sl.slideUp(300);
            parent.removeClass("active");
            setTimeout(function() {
                z_parent.removeClass("active");
            }, 300);
        }
    });

    $(document).on("mouseup", function(e) {
      hide_element = $(".dr_tels_list");
      z_parent = hide_element.closest(".z_parent");
      parent = hide_element.closest(".dr_tels");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
        hide_element.slideUp(300);
        parent.removeClass("active");
        setTimeout(function() {
            z_parent.removeClass("active");
        }, 300);
      }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
          $(".dr_tels_list").slideUp(300);
          $(".z_parent").removeClass("active");
          $(".dr_tels").removeClass("active");
        }
    });

    $(".close_dr, .dr_bg").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".dr_tels");
        parent.removeClass("active");
        sl = parent.find(".dr_tels_list");
        sl.slideUp(300);
        z_parent = $(this).closest(".z_parent");
        setTimeout(function() {
            z_parent.removeClass("active");
        }, 300);
    });

    $(".close_dr, .dr_bg").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".custom_select");
        parent.removeClass("active");
        // sl = parent.find(".custom_select_list");
        // sl.slideUp(300);
        z_parent = $(this).closest(".z_parent");
        setTimeout(function() {
            z_parent.removeClass("active");
        }, 300);
    });

    $(".close_dr, .dr_bg").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".filter");
        parent.removeClass("active");
        // sl = parent.find(".custom_select_list");
        // sl.slideUp(300);
        z_parent = $(this).closest(".z_parent");
        setTimeout(function() {
            z_parent.removeClass("active");
        }, 300);
    });

    $(".close_dr, .dr_bg").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".more_tags");
        parent.removeClass("active");
        z_parent = $(this).closest(".z_parent");
        setTimeout(function() {
            z_parent.removeClass("active");
        }, 300);
    });

    $(".more_tags > .tag_pill").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".more_tags");
        parent.addClass("active");
    });

    // $(document).on("mouseup", function(e) {
    //   hide_element = $(".dr_tels_list");
    //   if (!hide_element.is(e.target)
    //       && hide_element.has(e.target).length === 0) {
    //     hide_element.slideUp(300);
    //   }
    // });

    // $(this).keydown(function(eventObject){
    //     if (eventObject.which == 27) {
    //       $(".dr_tels_list").slideUp(300);
    //     }
    // });

    // $(".dr_tels_list > div").on("click", function(e) {
    //     e.preventDefault();
    //     parent = $(this).closest(".dr_tels");
    //     value = $(this).html();
    //     parent.find(".dr_tels_title_templ").html(value);
    //     sl = parent.find(".dr_tels_list");
    //     sl.slideUp(300);
    // });

    // -----------------

    $(".resp_dr_title").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".resp_dr");
        sl = parent.find(".resp_dr_list");
        if(sl.is(":hidden")) {
            sl.slideDown(300);
            parent.addClass("active");
        } else {
            sl.slideUp(300);
            parent.removeClass("active");
        }
    });

    // -----------------

    $(".scroll_top").on("click", function() {
        $('html, body').stop().animate({
          'scrollTop': 0
        }, 500);
    });    

});