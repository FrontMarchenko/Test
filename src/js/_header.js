export default function header() {
    const header = $('.js-header'),
          burger = $('.js-burger'),
          content = $('.js-header-content'),
          body = $('body');
    burger.on('click', function () {
        body.toggleClass('is-mobile');
      if (!$(this).hasClass('is-active')) {
        $(this).addClass('is-active');
        header.addClass('is-active');
        content.slideDown();
      } else {
        $(this).removeClass('is-active');
        content.slideUp(()=>{
          header.removeClass('is-active');
        });
      }
  
    });
  
    function debounce(func, wait, immediate) {
      let timeout;
      return function() {
        let context = this, args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  
    let myEfficientFn = debounce(function() {
      const w = $(window).width();
      if (w >= 768) {
        burger.removeClass('is-active');
        header.removeClass('is-active');
        content.slideDown();
      } else if (w < 768 && !burger.hasClass('is-active')) {
        content.slideUp();
      }
    }, 250);
    $(window).on('resize', myEfficientFn);
  
  
  }