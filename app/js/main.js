$(function () {

	$('.carousel').carousel({
		interval: 5000
	})


	var portfolio = $('.portfolio');

	portfolio.on('click', function(e) {
		var that = $(this);
		if(that.find('.sub-portfolio').hasClass('activeSub2Li')) {
			that.find('.sub-portfolio').removeClass('activeSub2Li')
			.find('.sub-sub-menu').slideToggle(200);
		}
		that.toggleClass('activeSubLi');
		that.find('.sub-menu').slideToggle(2);

	});

	$('.portfolio li').on('click',function(e) {
		e.stopPropagation();
	});

	var subPortfolio = $('.sub-portfolio');

	subPortfolio.on('click', function(e) {
		var that = $(this);
		that.toggleClass('activeSub2Li');
		that.find('.sub-sub-menu').slideToggle(200);
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle(200);
	});

	$('.menu-trigger').click(function() {
		$('.sf-menu').slideToggle(200);
	});

	$(window).resize(function() {
		if($(window).width() >= 992) {
			$('.sf-menu').slideDown();
		}
		if($(window).width() < 992) {
			$('.sf-menu').slideUp();
			$('.toggle-mnu').removeClass('on');
		}
	});

});