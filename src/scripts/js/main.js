$(document).ready(function() {
    new WOW({
        offset: 50,
    }).init();
    // $('header').scrollToFixed({
    // zIndex: 1000,
    // });
    if ($(window).width() > 991) {
        $('.fly-menu').scrollToFixed({
            marginTop: $('header').outerHeight() + 20,
            limit: function limit() {
                return $('.product-other').offset().top - $('.fly-menu').outerHeight() - 40;
            },
            zIndex: 50
        });
    }
    $('[data-toggle="tooltip"]').tooltip()
        // $(".TickerNews").newsTicker();
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.up').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 700);
    });
    $(".counter").countimator({
        duration: 1000,
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // MENU
    $('.btn-showmenu').click(function() {
        $('.duramenu').toggleClass('open');
        $('.overlay').fadeToggle(500);
        // $('html').css('overflow', 'hidden');
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.duramenu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function() {
        $(this).toggleClass('active')
        $(this).siblings('.sub').slideToggle(500);
        $(this).siblings('.mega').slideToggle(500);
    });
    if ($(window).width() < 1200) {
        $('.toptool .search').insertBefore('.menu .menucontent .menuwrap');
        $('.toptool .language').insertAfter('.menu .search');
        $('.toptool .solution').insertAfter('.menu .menucontent .menuwrap');
        $('.toptool .hotline').insertAfter('.solution');
        $('.toptool .social').insertAfter('.hotline');
        $('.btn-book').insertAfter('.duralogo');
    }

    // VT-MENU
    $('.btn-showvtmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.vtoverlay').fadeIn(300);
        $('html').css('overflow', 'hidden');
    });
    $('.vtoverlay').click(function() {
        $('.menu').removeClass('open');
        $(this).fadeOut(300);
        $('html').css('overflow', 'auto');
    });


    // END-MENU

    // MAP SYSTEM
    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });
    $('.addresslist .address').click(function() {
        $('.addresslist .address').removeClass('active');
        $(this).addClass('active');
    });
    // END MAP SYSTEM

    // SLIDE
    $('.feature-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.feature-nav'
    });
    $('.feature-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.feature-slide',
        dots: false,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 2,
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });
    $('.home-project-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: false,
        arrows: true,
        dots: false,
        infinite: false,
    });
    $('.style-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.color-slide'
    });
    $('.color-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.style-slide',
        dots: false,
        arrows: true,
        // centerMode: true,
        focusOnSelect: true,
        swipe: true,
        swipeToSlide: true,
    });
    $('.product-video-slide').slick({
        slidesToShow: 3,
        slideSToScroll: 1,
        swipe: true,
        swipeToSlide: true,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        // centerMode: true,
        focusOnSelect: true,
        swipe: true,
        swipeToSlide: true,
    });

    // END SLIDE

    $('.btn-spin').click(function() {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);

    });
});

// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function() {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'hermes',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 20,
                    space: 10,

                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200

                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1600, 1024, 768, 575],
            gridheight: [450, 400, 300, 480],
            lazyType: "none",
            // parallax: {
            //     type: "scroll",
            //     origo: "slidercenter",
            //     speed: 50,
            //     levels: [5000]
            // },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
})