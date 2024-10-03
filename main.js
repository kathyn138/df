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

      // switch video player for mobile device
      // allows volume and play button to appear
      $('#imagine-you-video').attr(
        'src',
        'https://iframe.mediadelivery.net/embed/320142/66482fd5-b6e7-4638-bab3-8ee0083ff9ea?autoplay=true&loop=false&muted=true&preload=true&responsive=true'
      );
    } else {
      $('.navbar-brand').html('DF');
    }

    // if not mobile view, use desktop version of video
    if (
      $('#imagine-you-video').attr('src') !==
      'https://iframe.mediadelivery.net/embed/320142/66482fd5-b6e7-4638-bab3-8ee0083ff9ea?autoplay=true&loop=false&muted=true&preload=true&responsive=true'
    ) {
      $('#imagine-you-video').attr(
        'src',
        'https://iframe.mediadelivery.net/embed/319444/f75b9e2c-af51-468a-b14a-8e21ed74ea0e?autoplay=true&loop=false&muted=true&preload=true&responsive=true'
      );
    }
  });

  // mobile devices
  if (window.matchMedia('(max-width: 576px)').matches) {
    $('.social-icons')
      .removeClass('justify-content-end mt-3')
      .addClass('justify-content-center');

    navBarCollapse();

    $('.navbar-brand').html('DEL FICO');

    // switch video player for mobile device
    // allows volume and play button to appear
    $('#imagine-you-video').attr(
      'src',
      'https://iframe.mediadelivery.net/embed/320142/66482fd5-b6e7-4638-bab3-8ee0083ff9ea?autoplay=true&loop=false&muted=true&preload=true&responsive=true'
    );
  } else {
    $('.navbar-brand').html('DF');
  }

  $('#newsletter-form').submit(function (e) {
    e.preventDefault();
    let form = e.target;
    let http = new XMLHttpRequest();
    http.open('POST', form.action);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        form.reset();
        let emailInput = form.querySelector('#input-newsletter-email');
        let label = form.querySelector('.newsletter-form-label');
        let signUpBtn = form.querySelector('.newsletter-signup-btn');

        emailInput.style.display = 'none';
        signUpBtn.style.display = 'none';
        label.style.display = 'none';

        let thankYouMessage = form.querySelector('.newsletter-submission-msg');

        thankYouMessage.style.display = 'block';
      }
    };
    let params =
      'email=' + document.getElementById('input-newsletter-email').value;
    http.send(params);
  });

  $('#create-form').submit(function (e) {
    e.preventDefault();
    let form = e.target;
    let http = new XMLHttpRequest();
    http.open('POST', form.action);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        form.reset();
        let nameInput = form.querySelector('#create-name-input');
        let contactInput = form.querySelector('#create-contact-input');
        let msgInput = form.querySelector('#create-msg-input');
        let submitBtn = form.querySelector('.create-submit-btn');

        nameInput.style.visibility = 'hidden';
        contactInput.style.visibility = 'hidden';
        msgInput.style.visibility = 'hidden';
        submitBtn.style.visibility = 'hidden';

        let thankYouMessage = form.querySelector('.create-submission-msg');

        thankYouMessage.style.visibility = 'visible';
      }
    };
    let params =
      'name=' +
      document.getElementById('create-name-input').value +
      '&contact-info=' +
      document.getElementById('create-contact-input').value +
      '&message=' +
      document.getElementById('create-msg-input').value;

    http.send(params);
  });

  const playerLately = new playerjs.Player(document.getElementById('imagine-you-video'));
  playerLately.on('ready', () => {
    playerLately.mute();
    console.log('here inside lately')
  });
});
