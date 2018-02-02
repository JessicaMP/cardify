'use strict';

(function ($) {
  $.fn.cardify = function () {

    var containerA = $('.container-img');

    var pluginImage = function pluginImage(containerX) {
      var searchImage = containerX.find('img');

      console.log(searchImage);

      var _loop = function _loop(i) {
        console.log(searchImage[i]);

        var figure = $('<figure></figure>');
        figure.append(searchImage[i]);
        var altImage = $(searchImage[i]).attr('alt');
        var figcaption = $('<figcaption>' + altImage + '</figcaption>');
        figure.append(figcaption);

        containerX.append(figure);
        figure.hover(function () {
          $(searchImage[i]).css({ 'visibility': 'hidden' });
          $(searchImage[i]).animate(4000);
          figcaption.css({ 'transform': 'translateY(-300%)', 'text-align': 'center' });
        }, function () {
          $(searchImage[i]).css({ 'visibility': 'visible' });
          $(searchImage[i]).animate(4000);
          figcaption.css({ 'transform': 'translateY(0%)' });
        });
      };

      for (var i = 0; i < searchImage.length; i++) {
        _loop(i);
      }
    };
    pluginImage(containerA);
  };
})(jQuery);