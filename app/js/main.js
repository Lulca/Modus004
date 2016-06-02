var topNavigation = (function(){

	
	return {

		init: function() {
			var that = this;

			$('.portfolio').on('click', function(e) {

				that.toggleMenu($(this));

			});

			$('.portfolio li').on('click',function(e) {
				e.stopPropagation();
			});

			var subPortfolio = $('.sub-portfolio');

			subPortfolio.on('click', function(e) {
				var that = $(this);
				that.toggleClass('activeSub2Li');
				that.find('.sub-sub-menu').fadeToggle(200);
			});

			$(".toggle-mnu").click(function() {
				$(this).toggleClass("on");
				$(".main-mnu").fadeToggle(200);
			});

			$('.toggle-mnu').click(function() {
				$('.sf-menu').fadeToggle(200);
			});

			$(window).resize(function() {
				if($(window).width() >= 992) {
					$('.sf-menu').fadeIn(1);
				}
				if($(window).width() < 992) {
					$('.sf-menu').fadeOut(1);
					$('.toggle-mnu').removeClass('on');
				}
			});
		},


		toggleMenu: function (that) {
			if(that.find('.sub-portfolio').hasClass('activeSub2Li')) {
				that.find('.sub-portfolio').removeClass('activeSub2Li')
				.find('.sub-sub-menu').fadeToggle(200);
			}
			that.toggleClass('activeSubLi');

			if (that.hasClass('activeSubLi')) {
				that.find('.sub-menu').fadeIn(200);
			} else {
				that.find('.sub-menu').fadeOut(1);
			}
		}


	}

})();




$(function () {

	topNavigation.init();


	$('.slides').owlCarousel({
		margin:30,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true
			},
			400:{
				items:2,
				nav:true,
				loop:true
			},

			600:{
				items:3,
				nav:true,
				loop:true
			},
			1000:{
				items:5,
				nav:true,
				loop:true
			}
		},
		loop:true,

		navText: [
		'<i class="fa fa-chevron-left nav-bg" aria-hidden="true"></i>',
		'<i class="fa fa-chevron-right nav-bg" aria-hidden="true"></i>'
		]
	});

	// $('.card').on('click', function(){
	// 	$(this).addClass('rotate');
	// });


});