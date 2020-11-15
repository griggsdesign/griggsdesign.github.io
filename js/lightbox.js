$(document).ready(function() {
	$('.popup-link').magnificPopup({
		type: 'image',
		closeOnContentClick: true
	});
	$('.gallery_container').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		// other options
		gallery:{enabled:true},
		closeOnContentClick: true,
	});
});
