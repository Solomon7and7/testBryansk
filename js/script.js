import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// const direction
// const loop
// const 
// const 
// const 
// const 
// const 
// const swiper = new Swiper(...);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});