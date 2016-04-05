$(document).ready(function(){



/*scroll to section - links/anchors*/

	$('.scroll-to-about').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-about').offset().top - 70}, 1000);
	});

	$('.scroll-to-skills').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-skills').offset().top - 70}, 1000);
	});

	$('.scroll-to-resume').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-resume').offset().top - 70}, 1000);
	});	

	$('.scroll-to-contact').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-contact').offset().top - 70}, 1000);
	});



/*Navigation-Sticky-Scroll*/
$('.js--anchor').waypoint(function(direction){
	if(direction == "down") {
			$('nav').addClass('sticky');
	} else{
		$('nav').removeClass('sticky');
	}
}, {
		offset: '30px;'
});


/*animations on scroll*/

$('.js--wp1').waypoint(function(direction) {
	$('.js--wp1').addClass('animated fadeIn');
}, {
	offset: '70%'
});

$('.js--wp2').waypoint(function(direction) {
	$('.js--wp2').addClass('animated fadeIn');
}, {
	offset: '70%'
});

$('.js--wp3').waypoint(function(direction) {
	$('.js--wp3').addClass('animated fadeIn');
}, {
	offset: '70%'
});

$('.js--wp4').waypoint(function(direction) {
	$('.js--wp4').addClass('animated fadeInUp');
}, {
	offset: '70%'
});

/*- - - - MOBILE NAV - - - - -*/

$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200);

		if (icon.hasClass('fa-bars')) {
		icon.addClass('fa-times');
		icon.removeClass('fa-bars');
		
		} else {
			icon.addClass('fa-bars');
			icon.removeClass('fa-times');
		}

	});

/*	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200);

		if (icon.hasClass('.fa-bars')) {
		icon.addClass('.fa-times');
		icon.removeClass('.fa-bars');
		
		} else {
			icon.addClass('.fa-bars');
			icon.removeClass('.fa-times');
		}

	});*/


/*Scroll to Top of page for logo link*/
function scrollToTop(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};




});