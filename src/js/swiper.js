window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    resizableSwiper(
      '(max-width: 767px)',
      '.brandSection__slider',
      {
        spaceBetween: 10, 
        loop: true, 
        autoHeight: true, 
        width: 200, 
        centerInsufficientSlides: true,
        pagination: { 
            el: '.swiper-pagination', 
            clickable: true, 
            dynamicBullets: true,
        },
      },
    );

    resizableSwiper(
      '(max-width: 767px)',
      '.typeSection__slider',
      {
        spaceBetween: 10, 
        loop: true, 
        autoHeight: true, 
        width: 200, 
        centerInsufficientSlides: true,
        pagination: { 
            el: '.swiper-pagination', 
            clickable: true, 
            dynamicBullets: true,
        },
      },
    );

    resizableSwiper(
      '(max-width: 767px)',
      '.priceSection__slider',
      {
        spaceBetween: 30, 
        loop: true,
        height: 100,
        width: 200, 
        centerInsufficientSlides: true,
        pagination: { 
            el: '.swiper-pagination', 
            clickable: true, 
            dynamicBullets: true,
        },
      },
    );
  
    
  });