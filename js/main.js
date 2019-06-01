$(document).ready(function() {

	// Slider Event

	$('.about-sliderFor').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 12.121 21.414"><path d="M240,4240l10,10-10,10" transform="translate(-239.293 -4239.293)"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 12.121 21.414"><path d="M240,4240l10,10-10,10" transform="translate(-239.293 -4239.293)"/></svg></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		asNavFor: '.about-sliderNav'
	});
	$('.about-sliderNav').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		speed: 500,
		asNavFor: '.about-sliderFor',
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	$('.certificate-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: false,
		arrows: true,
		infinite: true,
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4
				}
			}
		]
	});
	$('.works-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.history-slider').slick({
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}).on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY > 0) {
			if($('.history-slider').slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
				return
			}
			e.preventDefault()
			$(this).slick('slickNext')
		} else {
			if($('.history-slider').slick('slickCurrentSlide') == 0) {
				return
			}
			e.preventDefault()
			$(this).slick('slickPrev')
		}
	}));
	$('.reviews-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					adaptiveHeight: true,
					slidesToShow: 1
				}
			}
		]
	});

	//

	// Gallery Event

	$('.js-play').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-with-zoom',
		zoom: {
			enabled: true,
			duration: 300
		}
	});
	$('.certificate-slider').each(function() {
		$(this).magnificPopup({
			delegate: '.slide:not(.slick-cloned) a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				opener: function(element) {
					return element.find('img');
				}
			}
		});
	});
	$('.works-slider').each(function() {
		$(this).magnificPopup({
			delegate: '.slide:not(.slick-cloned) a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				opener: function(element) {
					return element.find('img');
				}
			}
		});
	});

	//

	// Click Event

	$(document).on('click', '.js-article', function() {
		var title = $(this).find('.information-box-title').text();
				text = $(this).find('.information-box-text').text();
		$('.popup-info-title').html(title);
		$('.popup-info-text').html(text);
		$('.popup-article').addClass('open');
	});
	$(document).on('click', '.js-order', function() {
		$('.popup-form-title').html('Заказать звонок');
		$('.popup .btn').html('Отправить');
		$('.popup-call').addClass('open');
	});
	$(document).on('click', '.js-consultation', function() {
		$('.popup-form-title').html('Получить консультацию');
		$('.popup .btn').html('Отправить');
		$('.popup-call').addClass('open');
	});
	$(document).on('click', '.js-call', function() {
		$('.popup-form-title').html('Записаться на диагностику');
		$('.popup .btn').html('Записаться');
		$('.popup-call').addClass('open');;
	});
	$(document).on('click', '.js-close', function() {
		$('.popup').removeClass('open');
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.popup-info').length || $(e.target).closest('.popup-form').length || $(e.target).closest('.popup-block').length || $(e.target).closest('.js-required').length) return;
		$('.popup').removeClass('open');
		$('.input').removeClass('error');
	});

	//

	// Tab Event

	$(function() {
		var clickedTab = $('.price-tabItem.active');
		var tabWrapper = $('.price-tabWrap');
		var activeTab = tabWrapper.find('.open');
		var activeTabHeight = activeTab.outerHeight();

		activeTab.show();
		tabWrapper.height(activeTabHeight);

		function tabInit() {
			clickedTab = $('.price-tabItem.active');
			activeTab.fadeOut(300, function() {
				$('.price-tabInfo').removeClass('open');
				var clickedTabIndex = clickedTab.index('.price-tabItem');
				$('.price-tabInfo').eq(clickedTabIndex).addClass('open');
				activeTab = $('.price-tabWrap .open');
				activeTabHeight = activeTab.outerHeight();
				tabWrapper.stop().delay(50).animate({
					height: activeTabHeight
				}, 250, function() {
					activeTab.delay(50).fadeIn(250);
				});
			});
		}
		$('.price-tabList').on('click', '.price-tabItem', function() {
			$('.price-tabItem').removeClass('active');
			$(this).addClass('active');
			tabInit();
		});
	});

	//

	// IE 'object-fit: cover' fix

	function ObjectFitIt() {
		$('.js-obj').each(function() {
			var imgSrc = $(this).attr('src');
			var fitType = 'cover';
			if ($(this).data('fit-type')) {
				fitType = $(this).data('fit-type');
			}
			$(this).parent().css({ 
				'background' : 'transparent url("' + imgSrc + '") no-repeat center center/' + fitType
			});
			$('.js-obj').css('display','none'); 
		});
	}
	if ('objectFit' in document.documentElement.style === false) {
		ObjectFitIt();
	}

	//

	// Scroll Event

	$(document).on('click', '.js-anchor', function() {
		var id = $(this).attr('href');
				scroll = $(id).offset().top;
		if ($('.head-nav').hasClass('open')) {
			$('.head-nav').removeClass('open');
		}
		$('html, body').animate({
			scrollTop: scroll
		}, 1500);
		return false;
	});

	//

	// Validate Event

	$('.js-validate-name').on('keyup', function(e) {
		var regex =	/[^a-zA-Zа-яА-ЯёЁ\s-']/;
		$(this).parent().toggleClass('error', regex.test($(this).val()) || $(this).val() == '');
	});
	$('.js-validate-phone').on('keypress', function(event) {
		if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { 
			event.preventDefault() 
		}
		var mask = '+0 (000)-000-00-00';
		if (/[0-9\+\ \-\(\)]/.test(event.key)) {
			var currentString = $(this).val();
			var currentLength = currentString.length;
			if (/[0-9]/.test(event.key)) {
				if (mask[currentLength] == '0') {
					this.value = currentString + event.key;
					
				} else {
					for (var i = currentLength; i < mask.length; i++) {
						if (mask[i] == '0') {
							this.value = currentString + event.key;
							break;
						}
						currentString += mask[i];
					}
				}
			}
		}
		$(this).parent().toggleClass('error', $(this).val().length < 18);
	}).on('keyup', function(event) {
		if (event.key == 'Backspace') {
			$('.js-validate-phone').trigger('keypress');
		}
	});
	$(document).on('click', '.js-submit', function(event) {
		if ($(this).parent().find('.js-required').val() == '') {
			event.preventDefault();
			$(this).parent().find('.js-required').each(function(){
				$(this).parent().toggleClass('error', $(this).val() == '');
			});
		} else if ($(this).parent().find('.js-required').parent().hasClass('error')) {
			event.preventDefault();
		}
	});

	//

	// Load Event

	$(window).on('load', function() {
		$('.pulse').fadeOut();
		$('.preloader').delay(400).fadeOut('slow');

		setTimeout(function(){
			$('.animated').each(function(){
				if ($(document).scrollTop() >= $(this).offset().top - 600) {
					$(this).removeClass('animated');
				}
			});
		}, 500);
	});

	//
	
});