$(document).ready(function(){
  console.log(':)');

  var tiles = $('.tile');
  var num_clicks = 0;

  $.each(tiles, function(index, tile){
      var tile = $(tile);
      $(tile).on('click', handle_click);
  });

  function handle_click(tile){

    var tile = $(this);
    tile.addClass('active');
  }

})
