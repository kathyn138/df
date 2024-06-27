$(document).ready(function () {
  // NAVBAR ANIMATIONS
  
  // to remove rest of branding
  setTimeout(function () {
    $('.brand-rest, .brand-rest').animate({ opacity: 0 }, 3000);
  }, 500);
  
  // to shift last initial closer to first initial on left
  setTimeout(function() {
    $('.brand-initial-last').animate({marginLeft: '-40px'}, 1000)
  }, 3500)
});
