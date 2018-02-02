	// $('.slider-for').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '.slider-nav'
	// });
	// $('.slider-nav').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.slider-for',
	// 	dots: true,
	// 	centerMode: true,
	// 	focusOnSelect: true
	// });
	var myExtObject = (function() {

		return {
			func1: function() {
				alert('function 1 called');
			},
			func2: function() {
				alert('function 2 called');
			}
		}

	})(myExtObject||{})
