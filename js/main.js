$(document).ready(function() {
	$('.license_activates').on('click', function(e) {
		$(this).parent().find('.license_activates_content').toggleClass('show');
	});
});