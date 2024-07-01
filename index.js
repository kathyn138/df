$(document).ready(function () {
  // NAVBAR ANIMATIONS

  $(window).resize(function () {
    console.log('he');
    $('.navbar-nav').css({
      animation: 'none',
      opacity: 1,
      visibility: 'visible',
    });
    $('.brand').css({
      animation: 'none'
    });
    $('.brand-rest').css({
      animation: 'none',
      display: 'none'
    });
    $('.brand-initial-last').css({
      animation: 'none',
      marginLeft: '-15px'
    });
    $('.brand-initial-first').css({
      animation: 'none'
    });

    // DF on top left for desktops
    if (window.matchMedia('(min-width: 992px)').matches) {
      console.log('here');
      $('.brand').css({left: '1%'});
    }

    // center DF for medium devices
    if (window.matchMedia('(max-width: 992px) and (min-width: 768px)').matches) {
      console.log('between')
      $('.brand').css({left: '0%'});
    }
  });

  

  if ($(window).width < 992 && $(window).width() > 768) {
    // $('.brand').css({left: '0%'});
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
