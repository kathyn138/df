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

  const player = new playerjs.Player(document.getElementById('promo'));

  // always keep video on mute on landing page initially to keep autoplay
  // default is that player will remember unmute state ie blocks autoplay if left unmuted
  player.on('ready', () => {
      player.mute();
  });
});
