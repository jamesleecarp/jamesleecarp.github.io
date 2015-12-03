$(function() {
	console.log('hey');
	$('.green.circle').on('click', function() {
		$(this).addClass('class1');
	});
});
$(function() {
	console.log('hey');
	$('.green.circle').on('click', function() {
		$('.blue.box').addClass('class1');
	});
});
$(function() {
	console.log('yo');
	$('.nav').mouseover(function() {
		$('.map').addClass('class2');
	});
});
$(function() {
	console.log('yo');
	$('.nav').mouseleave(function() {
		$('.map').removeClass('class2');
	});
});
