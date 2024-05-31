const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 767px
        767: {
        slidesPerView: 2,
        spaceBetween: 10
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: false // Ensure navigation buttons remain visible
    },
  
   
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,

    // Autoplay
  autoplay: {
    delay: 5000, // Time in milliseconds between slides
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with the swiper
  },
  
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //   hideOnClick: false 
    // },
  
   
  });