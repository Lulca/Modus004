var topNavigation = (function(){

	
	return {

		init: function() {
			var that = this;

			var portfolio = $('.portfolio');

			portfolio.on('click', function(e) {
				e.preventDefault()

				that.toggleMenu($(this));

			});

		

			// portfolio.on('mouseover', function(){
			// 	if( $(window).width() > 992) {
			// 		$this = $(this);

			// 		$this.addClass('activeSubLi').find('.sub-menu').fadeIn(1);
			// 	}

			// });

			// portfolio.on('mouseleave', function(){
			// 	if( $(window).width() > 992) {
			// 		$this = $(this);
			// 		$this.removeClass('activeSubLi');
			// 		setTimeout(
			// 			function() {
			// 				if(!$this.hasClass('activeSubLi')) {
			// 					$this.find('.sub-menu').fadeOut(200);	
			// 				}	
			// 			},
			// 			200);		
			// 	}
			// });

			$('.portfolio li').on('click',function(e) {
				e.stopPropagation();
				e.preventDefault();
			});

			var subPortfolio = $('.sub-portfolio');

			subPortfolio.on('click', function(e) {
				e.preventDefault();
				var that = $(this);
				that.toggleClass('activeSub2Li');
				that.find('.sub-sub-menu').fadeToggle(200);
			});

			// subPortfolio.on('mouseover', function(){
			// 	if( $(window).width() > 992) {
			// 		$this = $(this);

			// 		$this.addClass('activeSub2Li').find('.sub-sub-menu').fadeIn(1);
			// 	}
					
			// });

			// subPortfolio.on('mouseleave', function(){
			// 	$this = $(this);
			// 	if( $(window).width() > 992) {
					
			// 		$this.removeClass('activeSub2Li');
			// 		setTimeout(
			// 			function() {
			// 				if($this.hasClass('activeSub2Li')) {
			// 					$this.find('.sub-sub-menu').fadeOut(200);	
			// 				}	
			// 			},
			// 			200);		
			// 	}
			// });

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


var galery = (function(){


	// function move from left-right to center

	function toCenter ($this,degree) {
		var
			volumeGalery = $this.closest('.3d-galery');
			leftItem = volumeGalery.find('.left-item');
			activeItem = volumeGalery.find('.active-item');

		$this.animate({
			'-webkit-transform': 'rotateY(' + degree + 'deg)',
            '-moz-transform': 'rotateY(' + degree + 'deg)',
            '-ms-transform': 'rotateY(' + degree + 'deg)',
            '-o-transform': 'rotateY(' + degree + 'deg)',
            'transform': 'rotateY(' + degree + 'deg)',
            'zoom': 1,
			'left': '0px',
			'z-index': '4',
			'max-width': '300px'

		}, 1000, function(){
			
		});
	}

	// function mone from center to right-left


	return {
		init: function() {

			var that = this;

			$('.left-item').on('click', function(){
				$this = $(this);
				// $this.addClass('left-item-move active-item-move');
				toCenter($this,0);
			});




		}
	}

})();




$(function () {

	topNavigation.init();

	galery.init();


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