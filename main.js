$(document).ready(function () {
  // NAVBAR ANIMATIONS

  $(window).resize(function () {
    // mobile devices
    if (window.matchMedia('(max-width: 576px)').matches) {
      $('.social-icons')
        .removeClass('justify-content-end')
        .addClass('justify-content-center');
    }
  });

  // mobile devices
  if (window.matchMedia('(max-width: 576px)').matches) {
    $('.social-icons')
      .removeClass('justify-content-end mt-3')
      .addClass('justify-content-center');
  }
});
