$(document).ready(function(){
  console.log(':)');

  var tiles = $('.tile');
  var num_clicks = 0;
  var selected = [];

  $.each(tiles, function(index, tile){
      var tile = $(tile);
      $(tile).on('click', handle_click);
  });

  function handle_click(tile){

    var tile = $(this);
    num_clicks++;
    if (tile.hasClass('active')){
      return false;
    } else {
    tile.addClass('active');
    selected.push(tile);
    console.log(selected);

    if (selected.length == 2 ){
      $('.tile.active').removeClass("active");
      selected = [];
    }
  }

}
});