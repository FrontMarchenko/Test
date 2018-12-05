import sayHello from './lib/sayHello.js';
sayHello();
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable, TimelineLite } from 'gsap';
import header from "./_header";
// import './_perlin.js';
// import './_sketch.js';
header();


import {updateViewportUnits} from "./_updateViewportUnits";
updateViewportUnits();
var tl = new TimelineLite()

tl
	.from( $('.logo__u'), 2, {
  		y: -100
})
	.from( $('.logo__r'), 1, {
		rotation: 18,
		transformOrigin: "100% 50%"
	},"-=1.5")
	.from( $('.logo__i'), 2, {
		y: "100%"
	},"-=1.5")
	.from( $('.logo__t-top'), 2, {
		x: "100%"
	},"-=1.5")
	.from( $('.logo__t-bottom'), 2, {
		y: "-100%"
	},"-=1.5")
	.from( $('.logo__y'), 2, {
		x: "100%",
		rotation: 45,
		transformOrigin: "0% 0%"
	},"-=2");

//scroll


import AOS from './lib/aos.js';
import 'slick-carousel';
// import headerScroll from './components/headerScroll.js';
// headerScroll ();
// import AOS from'./lib/aos.js';
// import vhCheck from 'vh-check';
// import 'owl.carousel';
// import '@fancyapps/fancybox';
// vhCheck();
AOS.init({
  once: true,
  duration: 2000,
  offset: 200,
  disable: 'mobile'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-for',
  dots: false,
  // centerMode: true,
  // focusOnSelect: true,
  autoplay: false,
  rows: 0
});
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  cssEase: 'linear',
  rows: 0,
  asNavFor: '.slider-nav'
});

//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// $(document).ready(function() {

//     var sync1 = $("#sync1");
//     var sync2 = $("#sync2");
//     var slidesPerPage = 1; //globaly define number of elements per page
//     var syncedSecondary = true;
  
//     sync1.owlCarousel({
//         items : 1,
//         slideSpeed : 4000,
//         paginationSpeed: 5000,
//         singleItem: true,
//         nav: false,
//         autoplay: false,
//         dots: false,
//         loop: true,
//         responsiveRefreshRate : 200,
//         navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
//     }).on('changed.owl.carousel', syncPosition);
  
//     sync2
//       .on('initialized.owl.carousel', function () {
//         sync2.find(".owl-item").eq(0).addClass("current");
//       })
//       .owlCarousel({
//       items : 1,
//       animateOut: 'fadeOut',
//       animateIn: 'fadeIn',
//       dots: false,
//       onInitialize: function (event) {
//         if ($('.owl-carousel .item').length <= 1) {
//            this.settings.loop = false;
//         }
//     },
//       nav: true,
//       smartSpeed: 200,
//       slideSpeed : 500,
//       slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
//       responsiveRefreshRate : 100
//     }).on('changed.owl.carousel', syncPosition2);
  
//     function syncPosition(el) {
//       //if you set loop to false, you have to restore this next line
//       var current = el.item.index;
      
//       //if you disable loop you have to comment this block
//       var count = el.item.count-1;
//       var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
//       if(current < 0) {
//         current = count;
//       }
//       if(current > count) {
//         current = 0;
//       }
      
//       //end block
  
//       sync2
//         .find(".owl-item")
//         .removeClass("current")
//         .eq(current)
//         .addClass("current");
//       var onscreen = sync2.find('.owl-item.active').length - 1;
//       var start = sync2.find('.owl-item.active').first().index();
//       var end = sync2.find('.owl-item.active').last().index();
      
//       if (current > end) {
//         sync2.data('owl.carousel').to(current, 100, true);
//       }
//       if (current < start) {
//         sync2.data('owl.carousel').to(current - onscreen, 100, true);
//       }
//     }
    
//     function syncPosition2(el) {
//       if(syncedSecondary) {
//         var number = el.item.index;
//         sync1.data('owl.carousel').to(number, 100, true);
//       }
//     }
    
//     sync2.on("click", ".owl-item", function(e){
//       e.preventDefault();
//       var number = $(this).index();
     
//     });
//   });










  