'use strict';

var begin = function begin() {
  $('.style-figure').addClass('col-xs-12 col-sm-6 col-lg-3');
  $('.container-img img').addClass('img-responsive images');
};

var active = function active() {
  $('#active').addClass('disabled');
  $('.container-img').cardify();
  begin();
  $('figure').addClass('col-xs-12 col-sm-6 col-lg-3');
  $('.style-figure').removeClass('col-xs-12 col-sm-6 col-lg-3');
};

var desactive = function desactive() {
  $('#desactive').attr('href', 'example.html');
};

$(document).ready(begin);
$('#active').click(active);
$('#desactive').click(desactive);