$(document).ready(function () {
  // NAVBAR ANIMATIONS

  function navBarCollapse() {
    $('#navbar-close').css({ display: 'none' });
    $('#navbar-open').css({ display: 'inline' });

    $('.navbar-default').wrap('<div class="collapse navbar-collapse"></div>');
    $('.navbar-mobile').wrap(
      '<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>'
    );

    $('#navbar-open').on('click touch', function () {
      $('.navbar-mobile').css({ display: 'block' });

      $('#navbar-open').css({ display: 'none' });
      $('#navbar-close').css({ display: 'inline' });
    });

    $('#navbar-close').on('click touch', function () {
      $('#navbar-close').css({ display: 'none' });
      $('#navbar-open').css({ display: 'inline' });
    });
  }

  $(window).resize(function () {
    $('.navbar-mobile').css({ display: 'none' });

    // if uncollapsed parent navbar is there then remove
    // otherwise will be present after going from
    // collapsed viewport to non collapsed viewport
    if ($('#navbarSupportedContent').length) {
      $('.navbar-nav').unwrap();
    }

    // mobile devices
    if (window.matchMedia('(max-width: 576px)').matches) {
      $('.social-icons')
        .removeClass('justify-content-end')
        .addClass('justify-content-center');

      navBarCollapse();

      $('.navbar-brand').html('DEL FICO');
    } else {
      $('.navbar-brand').html('DF');
    }
  });

  // mobile devices
  if (window.matchMedia('(max-width: 576px)').matches) {
    $('.social-icons')
      .removeClass('justify-content-end mt-3')
      .addClass('justify-content-center');

    navBarCollapse();

    $('.navbar-brand').html('DEL FICO');
  } else {
    $('.navbar-brand').html('DF');
  }

  $('#newsletter-form').submit(function (e) {
    e.preventDefault();
    let form = e.target;
    let http = new XMLHttpRequest();
    http.open('POST', form.action);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let params =
      'email=' + document.getElementById('input-newsletter-email').value;
    http.send(params);
  });
});
