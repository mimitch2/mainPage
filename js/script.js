'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
window.onload = function() {

// --------> just for turning on/off ratio graphoc, design tool only

  $(".LS").click(function(){
$('#ratio').toggle();
});

$(".P").click(function(){
$('#ratioRotated').toggle();
});

// --------------------> END

  $(document).ready(function() {
$('#mainLogo').animate({marginLeft: '90px', opacity: '1.0'}, 1300);

$('footer').animate({marginLeft: '0px', opacity: '1.0'}, 1300);

// $(window).scroll(function(){
// if ($(window).scrollTop()>50) {
//
//   $('#mainLogo').animate({marginTop: '100px'})
// } else {
//   $('#mainLogo').animate({marginTop: '0px'})
// }
// });















});//document ready close

}//window onload close
// });
