(function ($, Drupal) {
  Drupal.behaviors.pageLoader = {
    attach: function (context, settings) {
      // Process only once on the initial window load
      $(window).on('load', function () {
        $('body').removeClass('js-loading');
      });
    }
  };
})(jQuery, Drupal);