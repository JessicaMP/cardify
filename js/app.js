var arr = [];

function begin() {
  var image = $('.container img');
  //$('<figure> <img></figure>').replaceAll('.container');
  //$('div').replaceWith($('<figure>'));
  for (var i = 0; i < image.length; i++) {
    image[i];
    console.log(image[i]);
    //console.log(image[1]);
    arr.push(image[i]);
    function change() {
      $('<figure><img>').replaceAll('.container');
      //$('img').attr('src', arr);
    };
  }
  change();
};

$(document).ready(begin);



console.log(arr);
