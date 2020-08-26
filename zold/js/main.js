$(document).ready(function($) {
  $window = $(window);

  // Back2Init scroll listener
  $window.scroll(function() {
    if ($window.scrollTop() > 100) {
      $('.back2init').addClass('visible');
      return;
    }
    $('.back2init').removeClass('visible');
  });

  // Close modal on link click
  $('.modal').on('click', 'a', function() {
    $(this).parents('.modal').modal('hide');
  });

}); //document.ready

AOS.init();
