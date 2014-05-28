// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 800);
//         return false;
//       }
//     }
//   });
// });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var currentOffset = $(document).scrollTop();
        var targetOffset = target.offset().top;
        var distance = Math.abs(currentOffset-targetOffset);
        console.log(distance);
        $('html,body').animate({
          scrollTop: target.offset().top
        }, distance/2000*1000);
        return false;
      }
    }
  });
});