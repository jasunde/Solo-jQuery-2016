var colorTotals = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0
};

$(document).ready(function () {
  // Container for color cubes
  var $container = $('.container');

  // Handle click on color buttons
  $('.color-button').on('click', function () {
    var color = $(this).data('color');
    makeCube(color);
    incrementColor(color);
  });

  // Add a cube of given color to container
  function makeCube(color) {
    var $el = $('<div></div>');
    $el.addClass("color-cube " + color);
    $container.append($el);
  }

  // Increment the number of a given color in colorTotals object and on DOM
  function incrementColor(color) {
    colorTotals[color]++;
    $('#' + color).text('Total ' + color + ': ' + colorTotals[color]);
  }
});
