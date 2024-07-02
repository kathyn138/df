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
      animation: 'none',
    });
    $('.brand-rest').css({
      animation: 'none',
      display: 'none',
    });
    $('.brand-initial-last').css({
      animation: 'none',
      marginLeft: '-15px',
    });
    $('.brand-initial-first').css({
      animation: 'none',
    });

    // if uncollapsed parent navbar is there then remove
    // otherwise will be present after going from
    // collapsed viewport to non collapsed viewport
    if ($('#navbarSupportedContent').length) {
      $('.navbar-nav').unwrap();
    }

    // if not mobile view, use desktop version of video
    if ($('#promo').attr('src') !== 'https://iframe.mediadelivery.net/embed/261546/dc276456-7fe6-403a-b903-d9044f5355e3?autoplay=true&loop=false&muted=true&preload=true&responsive=true') {
      $('#promo').attr(
        'src',
        'https://iframe.mediadelivery.net/embed/261546/dc276456-7fe6-403a-b903-d9044f5355e3?autoplay=true&loop=false&muted=true&preload=true&responsive=true'
      );
    }

    // DF on top left for desktops
    if (window.matchMedia('(min-width: 992px)').matches) {
      console.log('here');
      $('.brand').css({ left: '1%' });
    }

    // center DF for medium devices
    if (
      window.matchMedia('(max-width: 992px) and (min-width: 768px)').matches
    ) {
      $('.brand').css({ left: '0%' });
    }

    if (window.matchMedia('(max-width: 576px)').matches) {
      $('.navbar-nav').wrap(
        '<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>'
      );

      // switch video player for mobile device
      // allows volume button to appear
      $('#promo').attr(
        'src',
        'https://iframe.mediadelivery.net/embed/263606/5e2e3857-2aff-4f4e-8689-8ad384b028de?autoplay=true&loop=false&muted=true&preload=true&responsive=true'
      );

      $('.social-icons').removeClass('justify-content-end').addClass('justify-content-center');
    }
  });

  // mobile devices
  if (window.matchMedia('(max-width: 576px)').matches) {
    $('.navbar-nav').wrap(
      '<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>'
    );

    // switch video player for mobile device
    // allows volume button to appear
    $('#promo').attr(
      'src',
      'https://iframe.mediadelivery.net/embed/263606/5e2e3857-2aff-4f4e-8689-8ad384b028de?autoplay=true&loop=false&muted=true&preload=true&responsive=true'
    );

    $('.social-icons').removeClass('justify-content-end mt-3').addClass('justify-content-center');
  }

  const player = new playerjs.Player(document.getElementById('promo'));

  // always keep video on mute on landing page initially to keep autoplay
  // default is that player will remember unmute state ie blocks autoplay if left unmuted
  player.on('ready', () => {
    player.mute();
  });
});
