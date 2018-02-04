jQuery(function ($) {
    var coreLanding = {

        init: function () {

			/*================= Testimonial =================*/
            this.testimonial();

			/*================= Screen header =================*/
            this.screenHerder();

			/*================= Scroll to top =================*/
            this.scrollToTop();

			/*================= fixed menu =================*/
            this.menuFixed();

			/*================= Scroll to section =================*/
            this.scrollToSection();

			/*================= menu responsive UI =================*/
            this.menuResponsiveUi();


        },

        testimonial: function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                items: 1,
                autoplay: true
            });
        },

        screenHerder: function () {
            var $windowSize = $(window).height();
            $('#top_header').css({
                'height' : $windowSize + 'px'
            });
        },

        animationParallax: function () {

            $('#core-value .bg-core-value').on({
                mouseenter: function () {
                    $(this).addClass('animated pulse');
                },
                mouseleave: function () {
                    $(this).removeClass('animated pulse');
                }
            });

            $('.core_value .value-item:nth-child(odd)').each(function (){
                $(this).appear(function(){
                    $(this).addClass('animated slideInRight').delay(1000);
                });

            });

            $('.core_value .value-item:nth-child(even)').each(function (){
                $(this).appear(function(){
                    $(this).addClass('animated slideInLeft').delay(1000);
                });

            });

            $('#demos .democ1a').appear(function () {
                $(this).addClass('animated fadeInLeft').delay(1000);
            });

            $('#demos .democ1b').appear(function () {
                $(this).addClass('animated fadeInUp').delay(1000);
            });

            $('#demos .democ1c').appear(function () {
                $(this).addClass('animated fadeInRight').delay(1000);
            });

            $('#pages .gallery-cell:nth-child(odd)').each(function () {
                $(this).appear(function () {
                    $(this).addClass('animated bounceInLeft').delay(1000);
                });
            });

            $('#pages .gallery-cell:nth-child(even)').each(function () {
                $(this).appear(function () {
                    $(this).addClass('animated bounceInRight').delay(1000);
                });
            });

            $('#top_header .buy-now').appear(function () {
                $(this).addClass('animated slideInUp').delay(1000);
            });

            $('#top_header .slide img').appear(function () {
                $(this).addClass('animated bounce').delay(1000);
            });

            $('#top_header .slide .p-slide').appear(function () {
                $(this).addClass('animated slideInUp').delay(1000);
            });

        },

        scrollToTop: function () {
            $('#back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });

            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 500) {
                    $('#back-to-top').addClass('back-to-top');
                    $('#back-to-top').removeClass('no-display');
                } else {
                    $('#back-to-top').removeClass('back-to-top');
                    $('#back-to-top').addClass('no-display');
                }
            });
        },

        menuFixed: function () {
            var $navbar = $('#top_header nav').outerHeight();

            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $navbar) {
                    $('#top_header .navbar').addClass('fixed-top')
                }else {
                    $('#top_header .navbar').removeClass('fixed-top')
                }
            });
        },

        scrollToSection: function () {

            $('a[href*="#"]:not([href="#"])').on('click',function(e) {

                e.preventDefault();
                var $href = $(this).attr("href");
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {

                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            //attach the hash (#jumptarget) to the pageurl
                            location.hash = $href;
                        });
                        return false;
                    }
                }
            });
        },


        menuResponsiveUi: function () {
            $('#top_header .nav-item .nav-link').on('click', function () {

                if ($('#myNav').hasClass('show')) {
                    $('#myNav').removeClass('show');
                }
            });
        },

        activeMenu: function () {

            $('#top_header .nav-link:not([href="#"])').each(function () {
                if ($(this).attr('href') !== null) {
                    var divId = $(this).attr('href');

                    if (coreLanding.isView($(divId))) {
                        $('#top_header .nav-link').removeClass('active');
                        $(this).addClass('active');
                        return false;
                    }
                }
            });
        },

        isView: function (elem) {
            var docViewTop = $(window).scrollTop();
            if (elem.length) {
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();
                return ((elemTop >= docViewTop && elemTop <= docViewBottom) || (elemBottom <= docViewBottom && elemBottom >= docViewTop) ||
                (elemTop >= docViewTop && elemBottom <= docViewBottom) || (elemTop <= docViewTop && elemBottom >= docViewBottom));
            }

            return false;
        }
    };

    $(document).ready(function () {
        coreLanding.init();
        $(document).on('scroll', function () {
            coreLanding.activeMenu();
        });

        $(window).on('resize', function () {
            coreLanding.screenHerder();
        });

        $(window).on('load', function () {
            coreLanding.animationParallax();
        });
    });
});