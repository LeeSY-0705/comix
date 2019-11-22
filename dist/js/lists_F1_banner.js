
    var swiper = new Swiper('#swiper2', {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });