 (function($) {
     "use strict";
     $(document).on('ready', function() {

         jQuery(window).on('scroll', function() {
             if ($(this).scrollTop() > 200) {
                 $('#header .header-inner').addClass("sticky");
             } else {
                 $('#header .header-inner').removeClass("sticky");
             }
         });

         // Sticky Header JS
         jQuery(window).on('scroll', function() {
             if ($(this).scrollTop() > 100) {
                 $('.header').addClass("sticky");
             } else {
                 $('.header').removeClass("sticky");
             }
         });

         $('.pro-features .get-pro').on("click", function() {
             $('.pro-features').toggleClass('active');
         });

         // Mobile Menu
         $('.menu').slicknav({
             prependTo: ".mobile-nav",
             duration: 300,
             closeOnClick: true,
         });
         // slickslider

         //  Slider JS
         $(".hero-slider").owlCarousel({
             loop: true,
             autoplay: true,
             smartSpeed: 500,
             autoplayTimeout: 3500,
             singleItem: true,
             autoplayHoverPause: true,
             items: 1,
             nav: true,
             navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
             dots: false,
         });


         // Accordion JS

         $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
         $('.accordion a').on('click', function(j) {
             var dropDown = $(this).closest('li').find('p');
             $(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
             if ($(this).hasClass('active')) {
                 $(this).removeClass('active');
             } else {
                 $(this).closest('.accordion').find('a.active').removeClass('active');
                 $(this).addClass('active');
             }
             dropDown.stop(false, true).slideToggle(300);
             j.preventDefault();
         });



         $.scrollUp({
             scrollText: '<span><i class="fa fa-angle-up"></i></span>',
             easingType: 'easeInOutExpo',
             scrollSpeed: 900,
             animation: 'fade'
         });


         // Animate Scroll JS

         $('.scroll').on("click", function(e) {
             var anchor = $(this);
             $('html, body').stop().animate({
                 scrollTop: $(anchor.attr('href')).offset().top - 100
             }, 1000);
             e.preventDefault();
         });

         // Stellar 

         $.stellar({
             horizontalOffset: 0,
             verticalOffset: 0
         });

         /*====================
         	Google Maps JS
         ======================*/
         var map = new GMaps({
             el: '#map',
             lat: 23.011245,
             lng: 90.884780,
             scrollwheel: false,
         });
         map.addMarker({
             lat: 23.011245,
             lng: 90.884780,
             title: 'Marker with InfoWindow',
             infoWindow: {
                 content: '<p>welcome to Lord Buddha Himalyan</p>'
             }

         });
     });
     $('.first-owl').owlCarousel({
         items: 5,
         loop: true,
         margin: 10,
         dots: false,
         autoplayHoverPause: true,
         responsiveClass: true,
         autoplay: true,
         responsive: {
             0: {
                 items: 2,
                 nav: false
             },
             300: {
                 items: 2,
             },
             600: {
                 items: 3,
                 nav: false
             },
             768: {
                 items: 3,
                 margin: 5,

             },
             1000: {
                 items: 5,
                 loop: true
             },
             1025: {
                 items: 5,
                 loop: true
             }
         }
     })


     $('.galleryowl').owlCarousel({
         items: 4,
         loop: true,
         margin: 10,
         dots: false,
         autoplayHoverPause: true,
         responsiveClass: true,
         autoplay: false,
         responsive: {
             0: {
                 items: 2,
                 nav: false
             },
             300: {
                 items: 2,
             },
             600: {
                 items: 3,
                 nav: false
             },
             768: {
                 items: 3,
                 margin: 5,

             },
             1000: {
                 items: 4,
                 loop: true
             },
             1025: {
                 items: 4,
                 loop: true
             }
         }
     })

     var mybutton = document.getElementById("myBtn");

     window.onscroll = function() { scrollFunction() };

     function scrollFunction() {
         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
             mybutton.style.display = "block";
         } else {
             mybutton.style.display = "none";
         }
     }

     function topFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
     }
     //  view
     $(document).ready(function() {
         $('.minus').click(function() {
             var $input = $(this).parent().find('input');
             var count = parseInt($input.val()) - 1;
             count = count < 1 ? 1 : count;
             $input.val(count);
             $input.change();
             return false;
         });
         $('.plus').click(function() {
             var $input = $(this).parent().find('input');
             $input.val(parseInt($input.val()) + 1);
             $input.change();
             return false;
         });
     });

     //  view
     $('.sidebar-nav li a').click(function() {
         $(this).parent().toggleClass('active')
     })


     var lastImg = 1; //Set initial thumbnail and preview

     document.getElementById(1).src = document.getElementById(lastImg).src;
     document.getElementById(lastImg).className = "thumb selected";

     function preview(img) {
         document.getElementById(lastImg).className = "thumb normal";
         img.className = "thumb selected";
         document.getElementById(0).src = img.src;
         lastImg = img.id
     }
     // gallery


     /*====================
     	Preloader JS
     ======================*/
     $(window).on('load', function() {
         $('.preloader').addClass('preloader-deactivate');
     });


 })(jQuery);
 // description
 function openDescription(descriptionName) {
     var i;
     var x = document.getElementsByClassName("description");
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     document.getElementById(descriptionName).style.display = "block";
 }


 var lastImg = 1; //Set initial thumbnail and preview

 document.getElementById(1).src = document.getElementById(lastImg).src;
 document.getElementById(lastImg).className = "thumb selected";

 function preview(img) {
     document.getElementById(lastImg).className = "thumb normal";
     img.className = "thumb selected";
     document.getElementById(0).src = img.src;
     lastImg = img.id
 }