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
});
