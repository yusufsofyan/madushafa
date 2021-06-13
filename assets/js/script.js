$('.slide-1').owlCarousel({
	items: 1,
	margin:0,
	loop: true,
	navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
	responsiveClass: true,
	responsive: {
		0: {},
		640: {},
		768: {},
		1024: {},
		1280: {
			nav: true,
		}
	}
});

$('.slide-2').owlCarousel({
	margin:20,
	loop: true,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
	dots:false,
	nav:true,
	navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
	responsive:{
		0:{
				items:1
		},
		640:{
				items:2
		},
		1024:{
				items:4
		}
}
});

