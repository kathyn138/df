$(document).ready(function () {
  // NAVBAR ANIMATIONS

    $(window).resize(function() {
      console.log('he')
      $('.navbar-nav').css({animation: 'none', opacity: 1,
      visibility: 'visible'})})

  if ($(window).width() >= 992) {
    console.log('here')
    // $('.brand-rest').css({ opacity: 1 });
    // to remove rest of branding
    // setTimeout(function () {
    //   $('.brand-rest').animate({ opacity: 0 }, 3000);
    // }, 500);
    
    // to shift last initial closer to first initial on left
    // setTimeout(function () {
    //   $('.brand-initial-last').animate({ marginLeft: '-40px' }, 1000);
    // }, 3500);
  }

  if ($(window).width() < 992) {
    console.log('wtf');
    // $('#navbar').addClass('flex-column');
    // $('.brand').css({position: 'relative', left: 0});
    // setTimeout(function() {
    //   $('.brand-initial-last').animate({marginLeft: '-10px'}, 1000)
    // }, 3500)
    // setTimeout(function () {
    //   $('.brand-rest').hide();
    //   $('.brand-initial-first').css({ marginRight: '-7px' });
    //   $('.brand-initial-last').css({ marginLeft: '-7px' });
    // }, 3500);
  }

  const player = new playerjs.Player(document.getElementById('promo'));

  // always keep video on mute on landing page initially to keep autoplay
  // default is that player will remember unmute state ie blocks autoplay if left unmuted
  player.on('ready', () => {
    player.mute();
  });

});
