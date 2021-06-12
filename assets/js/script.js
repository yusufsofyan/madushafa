$('.owl-carousel').owlCarousel({
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
})