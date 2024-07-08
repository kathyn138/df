$(document).ready(function () {
  // NAVBAR ANIMATIONS

  $(window).resize(function () {
    // mobile devices
    if (window.matchMedia('(max-width: 576px)').matches) {
      $('.social-icons')
        .removeClass('justify-content-end')
        .addClass('justify-content-center');

      $('.navbar-default').wrap('<div class="collapse navbar-collapse"></div>');
      $('.navbar-mobile').wrap(
        '<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>'
      );
    }
  });

  // mobile devices
  if (window.matchMedia('(max-width: 576px)').matches) {
    $('.social-icons')
      .removeClass('justify-content-end mt-3')
      .addClass('justify-content-center');

    $('.navbar-default').wrap('<div class="collapse navbar-collapse"></div>');
    $('.navbar-mobile').wrap(
      '<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>'
    );

    $('#navbar-open').on('click touch', function() {
      $('.navbar-mobile').css({display: 'block'})

      $('#navbar-open').css({display: 'none'});
      $('#navbar-close').css({display: 'inline'});

    });

    $('#navbar-close').on('click touch', function() {
      // $('.navbar-mobile').css({display: 'none'})
      $('#navbar-close').css({display: 'none'});
      $('#navbar-open').css({display: 'inline'});
    });
  }
});
