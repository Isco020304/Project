const swiper = new Swiper('.swiper', {
    // direction: 'vertical',
    // slidesPerView: 3,
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      mousewheel: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });