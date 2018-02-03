$(window).load(function () {
	$('#slider_testimonial').flickity({
	  wrapAround: true,
	  initialIndex: 3,
	  prevNextButtons: false,
	  pageDots: true,
          autoPlay: 1500
	});		
});

$(document).ready(function(){
	
    // var img_width = 1920;
    // var img_height = 996;
    // var w_width = $(window).width();
    // var t_height = img_height*w_width/img_width;
    // $("#top_header").css("height", t_height + "px");
    // $(window).resize(function(){
		// w_width = $(window).width();
		// t_height = img_height*w_width/img_width;
		// $("#top_header").css("height", t_height + "px");
    // });
	$('.core_value .col-md-2:nth-child(odd)').each(function (){
		$(this).appear(function(){
			$(this).addClass('animated slideInLeft').delay(10000);
		});
		
	});
	$('.core_value .col-md-2:nth-child(even)').each(function (){
		$(this).appear(function(){
			$(this).addClass('animated slideInRight').delay(10000);
		});
		
	});
        $('#online-design .product').each(function (){
		$(this).appear(function(){
			$(this).addClass('animated slideInUp').delay(10000);
		});
		
	});
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });	
    $(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#back-to-top').addClass('back-to-top');
			$('#back-to-top').removeClass('no-display');
		} else {
			$('#back-to-top').removeClass('back-to-top');
			$('#back-to-top').addClass('no-display');			
		}
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });	
	function menuPosition() {
		if (jQuery('#myNavbar .dropdown-menu').length) {
			jQuery('#myNavbar .dropdown-menu').each(function () {
				jQuery(this).removeAttr("style");
				var $containerWidth = jQuery("body").outerWidth();
				var $menuwidth = jQuery(this).outerWidth();
				if ($menuwidth > $containerWidth) {
					jQuery(this).css({
						'width': ($containerWidth - 20) + 'px'
					}).offset({
						'left': 10
					});
				} else {
					var $parentleft = jQuery(this).parent().offset().left;
					var $parentright = jQuery(this).parent().offset().left + jQuery(this).parent().outerWidth();
					if (jQuery(this).parents('.dropdown-menu').length) {
						var $menuright = $parentright + jQuery(this).outerWidth();
						if ($menuright > $containerWidth) {
							var $menuleft = $parentleft - jQuery(this).outerWidth();
							if ($menuleft < 0) {
								if ($parentleft > ($containerWidth - $parentright)) {
									jQuery(this).css({
										'width': $parentleft + 'px',
										'left': 'auto',
										'right': '100%'
									});
								} else {
									jQuery(this).css({
										'width': ($containerWidth - $parentright) + 'px',
										'left': '100%'
									});
								}
							} else {
								jQuery(this).offset({
									'left': $menuleft
								});
							}
						} else {
							jQuery(this).css({
								'left': '100%'
							});
						}
					} else {
						var $menuright = $parentleft + jQuery(this).outerWidth();
						if ($menuright > $containerWidth) {
							var $menuleft = $parentright - jQuery(this).outerWidth();
							if ($menuleft < 0) {
								jQuery(this).offset({
									'left': ($containerWidth - $menuwidth) / 2
								});
							} else {
								jQuery(this).offset({
									'left': $menuleft
								});
							}
						} else {
							 // jQuery(this).offset({
								 // 'left': $parentleft
							 // });
							jQuery(this).css({
								'left': 0
							});
						}
					}
				}
			});
		} else if (jQuery('#myNavbar ul.children').length) {
			jQuery('#myNavbar ul.children').each(function () {
				var $containerWidth = jQuery("body").outerWidth();
				var $menuwidth = jQuery(this).outerWidth();
				var $parentleft = jQuery(this).parent().offset().left;
				var $parentright = jQuery(this).parent().offset().left + jQuery(this).parent().outerWidth();
				if (jQuery(this).parents('.children').length) {
					var $menuright = $parentright + jQuery(this).outerWidth();
					if ($menuright > $containerWidth) {
						var $menuleft = $parentleft - jQuery(this).outerWidth();
						if ($menuleft < 0) {
							if ($parentleft > ($containerWidth - $parentright)) {
								jQuery(this).css({
									'left': 'auto',
									'right': '100%'
								});
							} else {
								jQuery(this).css({
									'left': '100%'
								});
							}
						} else {
							jQuery(this).offset({
								'left': $menuleft
							});
						}
					} else {
						jQuery(this).css({
							'left': '100%'
						});
					}
				} else {
					var $menuright = $parentleft + jQuery(this).outerWidth();
					if ($menuright > $containerWidth) {
						var $menuleft = $parentright - jQuery(this).outerWidth();
						if ($menuleft < 0) {
							jQuery(this).offset({
								'left': ($containerWidth - $menuwidth) / 2
							});
						} else {
							jQuery(this).offset({
								'left': $menuleft
							});
						}
					} else {
						//jQuery(this).offset({
						//	'left': $parentleft
						//});
						jQuery(this).css({
							'left': 0
						});
					}
				}
			});
		}
	}
	menuPosition();
	jQuery(window).on('resize', function () {
		menuPosition();
	});
});