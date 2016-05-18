$(function () {

	$('.carousel').carousel({
		interval: 5000
	})


	var portfolio = $('.portfolio');

	portfolio.on('click', function(e) {
		var that = $(this);
		that.toggleClass('activeSubLi');
		that.find('.sub-menu').slideToggle();

	});

	$('.portfolio li').on('click',function(e) {
		e.stopPropagation();
	});

	var subPortfolio = $('.sub-portfolio');

	subPortfolio.on('click', function(e) {
		var that = $(this);
		that.toggleClass('activeSub2Li');
		that.find('.sub-sub-menu').slideToggle();
	});

});