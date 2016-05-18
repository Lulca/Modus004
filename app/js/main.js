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
		that.find('.sub-menu').slideToggle(200);

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

});