showAniamtion = true;
var acticeSection = 0;

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	$('.after-images-item').addClass('no-transition');
}
// f

// Check if is mobile / touch. if touch - show mobile version
checkMobile = function () {
	var check = false;
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	if (window.innerWidth < 800) {
		check = true;
	}
	return check;
};



// if safari 


var isMobile = checkMobile();

function resizedNow() {

	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;


	isMobile = checkMobile();


	// Menu hide timer 
	if (!isMobile) {
		var menuTimer = null;
		var menuTimeout = 2000;
		$("body").mousemove(function () {
			clearTimeout(menuTimer);
			$("menu").removeClass('menu--hide');
			menuTimer = setTimeout(function () {
				$("menu").addClass('menu--hide');
			}, menuTimeout);
		}).mouseleave(function () {
			clearTimeout(menuTimer);
			$("menu").addClass('menu--hide');
		});

	} else {
		$("menu").removeClass('menu--hide');
	}



	// Create images grid
	if (!isMobile) {
		$('.after-images-container').imagesLoaded(function () {

			$('.after-images-container').isotope({
				itemSelector: '.after-images-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.after-images-item',
					gutter: 22
				}
			});

		});

	} else {
		// $('.after-images-container').isotope('destroy');
	}


	// Tooltips for images and map
	// TODO: Fade between images
	if (!isMobile) {
		$(".after-images-item").mousemove(function (e) {
			if (screenWidth / 2 > e.pageX) {
				$(this).children('.tooltip').css('left', e.pageX - $(this).offset().left + 0).css('top', e.pageY - $(this).offset().top + 10).css('display', 'block');

			} else {
				$(this).children('.tooltip').css('left', e.pageX - $(this).offset().left - 340).css('top', e.pageY - $(this).offset().top + 10).css('display', 'block');
			}
		});
		$(".after-images-item").mouseout(function () {
			$(this).children('.tooltip').css('display', 'none');
		});
	}


	// Open all zippies
	


	// Update images section





}

$(window).resize(function () {
	resizedNow();

});




// console.log(isMobile);

// images iso

// if (!isMobile) {
// 	$('.after-images-container').imagesLoaded(function () {

// 		$('.after-images-container').isotope({
// 			itemSelector: '.after-images-item',
// 			percentPosition: true,
// 			masonry: {
// 				columnWidth: '.after-images-item',
// 				gutter: 22
// 			}
// 		});

// 	});

// }



// Sliders

// var count = 0;




// Menu links
$(".menu-link__zira").click(function () {
	//Scroll to top
	$('html, body, .wrap-svt, .wrap-zira').animate({
		scrollTop: 0
	}, 300);
	//Focus on Zira
	focusOnHazira();
	// Remove backdrop
	$(".svt-backdrop").removeClass('svt-backdrop--visible');
	$("menu").removeClass('menu--open');
});

$(".menu-link__svt").click(function () {
	// Remove backdrop
	$(".svt-backdrop").removeClass('svt-backdrop--visible');
	$("menu").removeClass('menu--open');

	//Scroll to top
	$('html, body, .wrap-svt, .wrap-zira').animate({
		scrollTop: 0
	}, 300);
	//Focus on Zira
	focusOnSvt();

});

$(".menu-link__preformers").click(function () {
	//Scroll to section
	$('body, html').animate({
		scrollTop: $('.after-section').offset().top
	}, 300);
	// Remove backdrop
	$(".svt-backdrop").removeClass('svt-backdrop--visible');
	$("menu").removeClass('menu--open');

});

$(".menu-link__map").click(function () {
	//Scroll to section
	$('body, html').animate({
		scrollTop: $('.after-map-container').offset().top
	}, 300);
	// Remove backdrop
	$(".svt-backdrop").removeClass('svt-backdrop--visible');
	$("menu").removeClass('menu--open');

});

$(".menu-link__details").click(function () {
	//Scroll to section
	$('body, html').animate({
		scrollTop: $('.after-map-credits').offset().top
	}, 300);
	// Remove backdrop
	$(".svt-backdrop").removeClass('svt-backdrop--visible');
	$("menu").removeClass('menu--open');

});

function scrollToTop() {
	$('html, body').animate({
		scrollTop: 0
	}, 300);
}
// Accordeon zippy

// if (isMobile) {
// 	$(".zir-cal-items-wrap").slideToggle();
// 	$(".zir-cal-day-header").toggleClass('svt-zippy--open');
// 	$(".svt-cal-items-wrap").slideToggle();
// 	$(".svt-cal-day-header").toggleClass('svt-zippy--open');
// }




$(".menucircle").click(function () {
	$(".svt-backdrop").addClass('svt-backdrop--visible');
	$("menu").addClass('menu--open');
});


$(".svt-backdrop").click(function () {
	$(".svt-backdrop").removeClass('svt-backdrop--visible');
	$("menu").removeClass('menu--open');
});



// Onscroll event svt

var innitialScroll = 0;

var ziraScroll = 0;
var svtScroll = 0;



function focusOnHazira() {

	acticeSection = 'zira';
	$(".wrap-svt").addClass('scroll-blur');
	$(".wrap-svt").removeClass('scroll-focus');
	$(".wrap-zira").addClass('scroll-focus');
	$(".wrap-zira").removeClass('scroll-blur');
	$(".white").addClass('hideintro');
	$(".green").removeClass('hideintro');
	$(".white").removeClass('showintro');
	$(".green").addClass('showintro');

	$(".wrapper").addClass('focus-zira');
	$(".wrapper").removeClass('focus-svt');
	$(".wrapper").removeClass('focus-start');

	$("body").removeClass('body-start');
	$("body").addClass('body-zira');
	$("body").removeClass('body-svt');

	scrollToTop();
}

function focusOnSvt() {
	acticeSection = 'svt';

	$(".wrap-svt").addClass('scroll-focus');
	$(".wrap-svt").removeClass('scroll-blur');
	$(".wrap-zira").addClass('scroll-blur');
	$(".wrap-zira").removeClass('scroll-focus');
	$(".white").removeClass('hideintro');
	$(".green").addClass('hideintro');
	$(".green").removeClass('showintro');
	$(".white").addClass('showintro');

	$(".wrapper").addClass('focus-svt');
	$(".wrapper").removeClass('focus-zira');
	$(".wrapper").removeClass('focus-start');

	$("body").removeClass('body-start');
	$("body").removeClass('body-zira');
	$("body").addClass('body-svt');

	scrollToTop();
}



// Focus on Click
$(".wrap-svt").click(function () {
	if (acticeSection != 'svt') {
		focusOnSvt();
		acticeSection = 'svt';

	}

});


$(".wrap-zira").click(function () {
	if (acticeSection != 'zira') {
		focusOnHazira();
		acticeSection = 'zira';

	}
});




// On scroll check if the bottom part is showing
var isSectionTwoUp = false;
var menuState = 'top';

$(window).scroll(function () {
	var top_of_element = $(".after-section").offset().top;
	var bottom_of_element = $(".after-section").offset().top + $(".after-section").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + $(window).height();
	var top_of_screen = $(window).scrollTop();
	if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
		// Is visible
		isSectionTwoUp = true;
		$(".floating-tickets").addClass('floating-tickets--hidden');
	} else {
		$(".floating-tickets").removeClass('floating-tickets--hidden');
	}

	if ((top_of_screen > top_of_element)) {
		// green menu
		if (menuState == 'top') {
			$('menu').addClass('menu--green');
			menuState = 'bottom';

		}

	} else {
		// white menu
		if (menuState == 'bottom') {
			$('menu').removeClass('menu--green');
			menuState = 'top';
		}
	}

	updateCircleOpacity();
});
// var scrollPos1;

$(".wrap-svt").scroll(function () {

	// get positoin of title;
	// scrollPos1 = $(".intro-main-title").offset().top;

	// Detect if scroll up or down
	var currScrollTop = $(this).scrollTop()

	if (currScrollTop > svtScroll) {
		// down scroll 

	} else {
		// up scroll 
		if (isSectionTwoUp) {
			$('html, body').animate({
				scrollTop: 0
			}, 100);
			isSectionTwoUp = false;
		}
	}

	// Hide / show intro circle
	updateCircleOpacity();

	// After innitial scroll remove 1/2 class
	if (!innitialScroll) {
		innitialScroll = 1;
		focusOnSvt();
		$(".wrap-svt").addClass('scroll-focus');
		$(".wrap-zira").addClass('scroll-blur');
		$(".container-half").removeClass('scroll-begin');
	}
	// Save new valie for up / down detection



	svtScroll = currScrollTop;



});


// Onscroll event zira
$(".wrap-zira").scroll(function () {
	var currScrollTop = $(this).scrollTop()


	// Detect if scroll up or down
	if (currScrollTop > ziraScroll) {
		// down scroll
	} else {
		// up scroll
		if (isSectionTwoUp) {
			$('html, body').animate({
				scrollTop: 0
			}, 100);
			isSectionTwoUp = false;
		}
	}

	// Hide / show intro circle
	updateCircleOpacity();


	// After innitial scroll remove 1/2 class
	if (!innitialScroll) {
		focusOnHazira();
		innitialScroll = 1;
		$(".wrap-zira").addClass('scroll-focus');
		$(".wrap-svt").addClass('scroll-blur');
		$(".container-half").removeClass('scroll-begin');
	}


	// Do animation:
	// $('.intro-moon-1').animate({

	// 		left: $(this).width()*0.07 + (ziraScroll / 4) + "px",
	// 		top: $(this).height()*0.07 + (ziraScroll / 20) + "px"
	// 		// scale: $(this).height()*0.07
	// 	  }, 0);

	ziraScroll = $(this).scrollTop();

	// Save new valie for up / down detection
});

function updateCircleOpacity() {
	if ($(window).scrollTop() > 200 || $(".wrap-svt").scrollTop() > 200 || $(".wrap-zira").scrollTop() > 200) {
		$(".float-intro").addClass("intro-scrolldown");
	} else {
		$(".float-intro").removeClass("intro-scrolldown");
	}
}

if ($(this).scrollTop() > 200) {
	$(".float-intro").addClass("intro-scrolldown");
} else {
	$(".float-intro").removeClass("intro-scrolldown");
}


// initiate animation:






// $('.after-map-container').addClass('scrolloff'); // set the pointer events to none on doc ready

// $('.after-map-container').click(function () {
// 	$('.after-map-container .map-embed').css("pointer-events", "auto");
// });

// $(".after-map-container").mouseleave(function () {
// 	$('.after-map-container .map-embed').css("pointer-events", "none");
// });


// Animaitons
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;



if (!isMobile && showAniamtion) {

	// aniamtions

	var loader = PIXI.loader.add('noise', 'images/displacetexture.png').once('complete', function (loader, resources) {
		resizedNow();
		$('.preloader').hide();
		setScene();
	}).load();


	var cursorPosW = 0,
		cursorPosH = 0;

	$(document).bind('mousemove', function (e) {
		$('#cursor').css({
			left: e.pageX - 65,
			top: e.pageY - 10
		});
		cursorPosW = e.pageX / screenWidth;
		cursorPosH = e.pageY / screenHeight;
	});


	// Set up canvas width
	var width = 700;
	var height = 700;

	var innerCircleRadius = 200;
	var outerCircleRadius = 250;

	var playground = document.getElementById('px-render');
	var playground2 = document.getElementById('px-render-green');
	var canvas, canvas2;
	// Timer for animation
	var count = 0;
	var raf;


	var renderer = PIXI.autoDetectRenderer(width, height, {
		transparent: true
	});
	var renderer2 = PIXI.autoDetectRenderer(width, height, {
		transparent: true
	});
	renderer.autoResize = false;
	renderer2.autoResize = false;

	renderer.backgroundColor = 0x000000;
	renderer2.backgroundColor = 0x00AE7C;

	var innerCircle, outerCircle, bgCircle;
	var innerCircle2, outerCircle2, bgCircle2;
	var displacementSprite,
		displacementFilter,
		stage, stage2;


	// Both blur filters
	var blurFilter1 = new PIXI.filters.BlurFilter();
	var blurFilter2 = new PIXI.filters.BlurFilter();

	// Groups
	var bgGroup = new PIXI.Container();
	var mainGroup = new PIXI.Container();

	var bgGroup2 = new PIXI.Container();
	var mainGroup2 = new PIXI.Container();

	var noiseFilter = new PIXI.filters.NoiseFilter(0.3, 6);





	function setScene() {

		playground.appendChild(renderer.view);
		playground2.appendChild(renderer2.view);
		stage = new PIXI.Container();
		stage2 = new PIXI.Container();

		stage.filters = stage2.filters = [new PIXI.filters.VoidFilter()];
		stage.filterArea = stage2.filterArea = new PIXI.Rectangle(0, 0, width, width);


		// create displacement map
		displacementSprite = new PIXI.Sprite(PIXI.loader.resources.noise.texture);
		
		displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
		displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

		displacementSprite.scale.y = 0.9;
		displacementSprite.scale.x = 0.9;


		var bgSquare = new PIXI.Graphics();
		var bgSquare2 = new PIXI.Graphics();
		bgSquare.beginFill(0x00AE7C);
		bgSquare.drawRect(0, 0, width, height);
		mainGroup.addChild(bgSquare);

		bgSquare2.beginFill(0xffffff);
		bgSquare2.drawRect(0, 0, width, height);
		mainGroup2.addChild(bgSquare2);


		bgCircle = new PIXI.Graphics();
		bgCircle.beginFill(0x00AE7C);
		bgCircle.drawCircle(width / 2, height / 2, (width)); //(x,y,radius)
		bgCircle.endFill();

		bgCircle2 = new PIXI.Graphics();
		bgCircle2.beginFill(0xffffff);
		bgCircle2.drawCircle(width / 2, height / 2, (width / 2)); //(x,y,radius)
		bgCircle2.endFill();


		outerCircle = new PIXI.Graphics();
		outerCircle.beginFill(0xffffff);
		outerCircle.drawCircle(width / 2, height / 2, outerCircleRadius); //(x,y,radius)
		outerCircle.endFill();

		outerCircle2 = new PIXI.Graphics();
		outerCircle2.beginFill(0x00AE7C);
		outerCircle2.drawCircle(width / 2, height / 2, outerCircleRadius); //(x,y,radius)
		outerCircle2.endFill();

		blurFilter1.blur = 25;


		innerCircle = new PIXI.Graphics();
		innerCircle.beginFill(0x00AE7C);
		innerCircle.drawCircle(width / 2, height / 2, innerCircleRadius); //(x,y,radius)
		innerCircle.endFill();

		innerCircle2 = new PIXI.Graphics();
		innerCircle2.beginFill(0xffffff);
		innerCircle2.drawCircle(width / 2, height / 2, innerCircleRadius); //(x,y,radius)
		innerCircle2.endFill();

		blurFilter2.blur = 4;
		innerCircle.filters = innerCircle2.filters = [blurFilter2];

		// adding  to the container
		bgGroup.addChild(bgCircle);
		bgGroup.addChild(outerCircle);

		bgGroup2.addChild(bgCircle2);
		bgGroup2.addChild(outerCircle2);

		// Apply filters to background+white circle
		bgGroup.filters = bgGroup2.filters = [blurFilter1, displacementFilter];

		// adding  to the main group	
		mainGroup.addChild(bgGroup);
		mainGroup2.addChild(bgGroup2);

		// Adding noise square (black)


		// var texture = PIXI.Texture.fromImage("images/noise.png");
		// var tilingSprite = new PIXI.TilingSprite(texture, width, height);
		// tilingSprite.mask = noiseSquare;

		// Adding noise square (white)
		// var noiseSquare2 = new PIXI.Graphics();
		// noiseSquare2.beginFill(0x000000);
		// noiseSquare2.drawRect(0, 0, width, height);
		// var texture2 = PIXI.Texture.fromImage("images/noisew.png");
		// var tilingSprite2 = new PIXI.TilingSprite(texture2, width, height);
		// tilingSprite2.mask = noiseSquare2;

		// Add everything to the group
		mainGroup.addChild(innerCircle);
		mainGroup2.addChild(innerCircle2);

		stage.addChild(mainGroup);
		//   stage.addChild(tilingSprite);
		//   stage.addChild(noiseSquare);
		// stage.addChild(displacementSprite);

		stage2.addChild(mainGroup2);
		//   stage2.addChild(tilingSprite2);
		//   stage2.addChild(noiseSquare2);
		// stage2.addChild(displacementSprite);


		animate();
	}

	// function removeScene(){
	// 	cancelAnimationFrame(raf);
	// 	stage.removeChildren();
	// 	stage.destroy(true);
	// 	playground.removeChild(canvas);
	// }
	canvas = playground.querySelector('canvas');
	canvas2 = playground2.querySelector('canvas');
	scaleFactor = 1;



	// setScene();

	var fps = 30;
	var now;
	var then = Date.now();
	var interval = 1000 / fps;
	var delta;
	var prevsvtScroll = 0;
	var animationState = 1;

	function animate() {

		requestAnimationFrame(animate);

		now = Date.now();
		delta = now - then;

		if (delta > interval) {
			// update time stuffs
			console.log()
			then = now - (delta % interval);
			// animate
			// if (svtScroll != prevsvtScroll)
			// {
			// prevsvtScroll = svtScroll;	
			// console.log('changed prev!');
			// console.log(scrollPos1)	;
			// }
			// innerCircle2.x = (ziraScroll-innerCircle2.x)/20;


			// CurrenPos2 = innerCircle2.x;

			innerCircle.x = svtScroll / 4;
			innerCircle.y = (svtScroll / 8);

			innerCircle2.x = ziraScroll / 4;
			innerCircle2.y = (ziraScroll / 8);


			// if (svtScroll > 200)
			// {
			// 	animationState = 1;

			// } else {
			// 	animationState = 0;
			// }

			// if (animationState == 1) {
			// 	if (innerCircle.x < 400)
			// 	{
			// 		innerCircle.x += 1;					
			// 		innerCircle.y +=0.02;
			// 	}
			// } else {
			// 	if (innerCircle.x > 0)
			// 	{
			// 		innerCircle.x -= 1;					
			// 		innerCircle.y -=0.02;
			// 	}
			// }


			if (acticeSection == 'svt') {
				renderer.render(stage);

			} else if (acticeSection == 'zira') {
				renderer2.render(stage2);

			} else {
				renderer.render(stage);
				renderer2.render(stage2);
			}


		}
	}
	// animate();
} else {
	$('.preloader').hide();
	
}


$(document).ready(function () {
	// $('.zira-intro, .svt-intro, .preload-image').imagesLoaded(function () {
		$(".tooltip .title").click(function () {
			if (isMobile) {
				$(this).siblings(".tooltip-content").slideToggle();
				$(this).toggleClass('zippy--open');
				// console.log('fire! ' + count);
				// count++;
			}
		});


		if (isMobile) {
			$(".zir-cal-items-wrap").slideDown();
			$(".zir-cal-day-header").addClass('svt-zippy--open');
			$(".svt-cal-items-wrap").slideDown();
			$(".svt-cal-day-header").addClass('svt-zippy--open');
		} else {
			$(".zir-cal-items-wrap").slideUp();
			$(".zir-cal-day-header").removeClass('svt-zippy--open');
			$(".svt-cal-items-wrap").slideUp();
			$(".svt-cal-day-header").removeClass('svt-zippy--open');
		}
	// });

	$(".svt-cal-item-title").click(function () {
		$(this).siblings(".svt-cal-item-content-wrap").slideToggle();
		$(this).toggleClass('svt-zippy--open');
		scrollToTop();
	});
	$(".zir-cal-item-title").click(function () {
		$(this).siblings(".zir-cal-item-content-wrap").slideToggle();
		$(this).toggleClass('svt-zippy--open');
		scrollToTop();
	
	});
	
	// if (!isMobile) {
		$(".zir-cal-day-header").click(function () {
			$(this).siblings(".zir-cal-items-wrap").slideToggle();
			$(this).toggleClass('svt-zippy--open');
			scrollToTop();
	
		});
		$(".svt-cal-day-header").click(function () {
			$(this).siblings(".svt-cal-items-wrap").slideToggle();
			$(this).toggleClass('svt-zippy--open');
			scrollToTop();
	
		});
	// }
	
	
});