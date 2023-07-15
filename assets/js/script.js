$(document).ready(function(){
  // Nav Toggle
  $('#toggleNav-icon').click(function(){
    $(this).toggleClass('open');
    $('.header-menu').slideToggle();
  });

});

// Scroll-button
$(window).scroll(function () {
  let scrollSize = $(window).scrollTop();
  if (scrollSize > 300) {
    $(".header-area").addClass("fixed-menu");
  } else {
    $(".header-area").removeClass("fixed-menu");
  }
});

$(document).ready(function(){
   // Banner-carousel
  $('.testimonial-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:20,
    center:true,
    items:3,
    navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2,
            center:false,
        },
        1000:{
            items:3,
        }
    }
  })
});






