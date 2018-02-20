'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {
  $(document).ready(function() {
    // --------> just for turning on/off ratio graphoc, design tool only

    $(".LS").click(function() {
      $('#ratio').toggle();
    });

    $(".P").click(function() {
      $('#ratioRotated').toggle();
    });

    // --------------------> END

    const mq = window.matchMedia("(min-width: 768px)");

    if (mq.matches) {
      $('#mainLogo').animate({
        marginLeft: '70px',
        opacity: '1.0'
      }, 1300);
      $('footer').animate({
        marginLeft: '0px',
        marginBottom: '0px',
        opacity: '1.0'
      }, 1300);
      $('nav').animate({
        marginTop: '110px',
        opacity: '1.0'
      }, 1300);

    } else {
      $('#mainLogo').animate({
        marginLeft: '1.0em',
        opacity: '1.0'
      }, 1300);
      $('footer').animate({
        marginBottom: '0px',
        marginLeft: '0px',
        opacity: '1.0'
      }, 1300);
      $('nav').animate({
        marginTop: '70px',
        opacity: '1.0'
      }, 1300);

    }

    // 
    // $(window).scroll(function(){
    // if ($(window).scrollTop()>50) {
    //
    //   $('#mainLogo').animate({marginTop: '100px'})
    // } else {
    //   $('#mainLogo').animate({marginTop: '0px'})
    // }
    // });









  }); //document ready close

} //window onload close
// });
