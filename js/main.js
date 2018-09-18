$(function() {
	$('.license_activates').on('click', function(e) {
		$(this).parent().find('.activates_title, .license_activates_content').toggleClass('open');
	});
});