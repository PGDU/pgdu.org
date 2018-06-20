$(document).ready(function() {
  $('.member-button').on('click', function() {
    if ($('.hidden-menu:visible').length === 0) {
      $('.hidden-menu').fadeIn();
    } else {
      $('.hidden-menu').fadeOut();
    }
    $('.button').css(
      'boxShadow',
      $('.button').css('boxShadow') === 'none' ? '0 0 20px #333' : 'none'
    );
    $(this).css('opacity', $(this).css('opacity') == '0.6' ? 1 : 0.6);
  });
});
