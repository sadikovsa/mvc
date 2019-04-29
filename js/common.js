$(function () {
	new WOW().init();

	$('.owl-carousel.delivery-slider').owlCarousel({
		center: true,
		items: 1,
		loop: true,
		margin: 10,
		nav: true,
		smartSpeed: 1500,
		navText: ['<span class="icon-caret-down2"></span>', '<span class="icon-caret-down2"></span>'],
		responsive: {
			300: {
				dots: true,
				nav: false,
			},
			750: {
				dots: false,
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