$(document).ready(function(){
          $(".tech-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive:{
              0:{
                items: 2
              },
              600:{
                items: 3
              },
              1000:{
                items: 5
              },
              1200:{
                items: 6
              }
            }
          });
        });