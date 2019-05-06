$(function () {
	new WOW().init();

	$('.owl-carousel.card-slider').owlCarousel({
		center: true,
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		dots: true,
		smartSpeed: 1500,
		navText: ['<span class="slider-left"></span>', '<span class="slider-right"></span>'],
	});
	
	$('.owl-carousel.review-slider').owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		nav: false,
		dots: true,
		smartSpeed: 1500,
		responsive: {
			768: {
				items: 2,
			},
			1050: {
				items: 3,
			}
		}
	});

	var btn = $('.back-to-top');
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
	});
	$(".phone").mask("+99(999) 999-99-99");


	// Sticky Header
	window.onscroll = function () {
		stickyHeader()
	};
	var header = document.getElementById("header");
	var sticky = header.offsetTop;

	function stickyHeader() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}

});