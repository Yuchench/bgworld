$(document).ready(function() {  
var stickyNavTop = $('.navbar').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
    $('.navbar').addClass('sticky'); 
    $('body').addClass('stickyBody'); 
    $('#aboutspacer').css('height','30px');
} else {  
    $('.navbar').removeClass('sticky');  
    $('body').removeClass('stickyBody'); 
    $('#aboutspacer').css('height','0px');
}  
};
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});

// jQuery(function($) {
//   $(document).ready( function() {
//     //enabling stickUp on the '.navbar-wrapper' class
//     $('.navbar').stickUp({
//                   parts: {
//                     0: 'about',
//                     1: 'new',
//                     2: 'menu',
//                     3: 'board',
//                     4: 'activity',
//                     5: 'contact',
//                   },
//                   itemClass: 'about',
//                   itemHover: 'active'
//                 });
//   });
// });