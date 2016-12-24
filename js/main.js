;(function($) {
	"use strict";

	$(function(){
		$('.ba-slider').slick(
		{
			infinite: true,
			slidesToShow: 3.5,
			slidesToScroll: 1,
			slide: '.ba-slider__item',
			prevArrow: '.ba-slider__prev',
			nextArrow: '.ba-slider__next'
		});
	});
})(jQuery);
