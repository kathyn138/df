$(document).ready(function () {
  setTimeout(function () {
    $('.brand-rest, .brand-rest').animate(
      { opacity: 0 },
      3000,
      function () {
        $(this).hide();
        $('.navbar-brand').html('DF');
      }
    );
  }, 500);
});