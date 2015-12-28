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
	$('.one.projects').mouseover(function() {
		$('.ncmap').addClass('ncmapprojects');
	});
});
$(function() {
	console.log('yo');
	$('.one.projects').mouseleave(function() {
		$('.ncmap').removeClass('ncmapprojects');
	});
});
$(function() {
	console.log('yo');
	$('.one.about').mouseover(function() {
		$('.ncmap').addClass('ncmapabout');
	});
});
$(function() {
	console.log('yo');
	$('.one.about').mouseleave(function() {
		$('.ncmap').removeClass('ncmapabout');
	});
});
$(function() {
	console.log('yo');
	$('.one.contact').mouseover(function() {
		$('.ncmap').addClass('ncmapcontact');
	});
});
$(function() {
	console.log('yo');
	$('.one.contact').mouseleave(function() {
		$('.ncmap').removeClass('ncmapcontact');
	});
});
$(document).ready(function(){
  $('img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});
$(document).ready(function() {
		$(".fancybox").fancybox();
});
