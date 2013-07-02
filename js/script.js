$(document).ready(function(){
  var boxes = $('.box');
  var winning = new Object;
  var num_clicks = 2;
  $.each($('button'), function(index, button){
      $(button).on('click', function(){
        window.location.href = window.location.href;
      });
  });
  $.each(boxes, function(index, box){
      var box = $(box);
      $(box).on('click', handle_click);
  });

  function check_for_win(){

    $(boxes).each(function(index, box){
      if ($(box).hasClass("kanquest")){
        winning[index] = 'k';
      } else if ($(box).hasClass("justified")){
        winning[index] = 'j';
      } else {
        winning[index] = '';
      }

    });
    if (winning[0] === winning[1] && winning[1] === winning[2]){
        if(winning[1] == 'k'){
          return "kanye";
        }
        if (winning[1] == 'j') {
          return 'justin';
        }
    }
    if (winning[3] === winning[4] && winning[4] === winning[5]){
        if(winning[3] == 'k'){
          return "kanye";
        }
        if (winning[3] == 'j') {
          return 'justin';
        }
      }
    if (winning[6] === winning[7] && winning[7] === winning[8]){
        if(winning[6] == 'k'){
          return "kanye";
        }
        if (winning[6]) {
          return 'justin';
        }
      }
    if (winning[0] === winning[3] && winning[3] === winning[6]){
        if(winning[0] == 'k'){
          return "kanye";
        }
        if (winning[0] == 'j') {
          return 'justin';
        }
      }
    if (winning[1] === winning[4] && winning[4] === winning[7]){
        if(winning[1] == 'k'){
          return "kanye";
        }
        if (winning[1] == 'j') {
          return 'justin';
        }
      }
    if (winning[2] === winning[5] && winning[5] === winning[8]){
        if(winning[2] == 'k'){
          return "kanye";
        }
        if(winning[2] == 'j'){
          return 'justin';
        }
    if (winning[0] === winning[4] && winning[4] === winning[8]){
        if(winning[0] == 'k'){
          return "kanye";
        }
        if(winning[2] == 'j'){
          return 'justin';
        }
      }
    if (winning[2] === winning[4] && winning[4] === winning[6]){
        if(winning[2] == 'k'){
          return "kanye";
        }
        if(winning[2] == 'j'){
          return 'justin';
        }
    }
    return false;
  }
}
  function game_end(winner){
    if(winner == "justin"){
      $('.kanye').fadeOut(850);
      $('#results img').attr("src", "j_wins.png");
      $('#winner-name').text("J-T");
      $("#results").fadeIn(850);
    }
    if (winner == "kanye"){
      $('.justin').fadeOut(850);
      $('#results img').attr("src", "k_wins.png");
      $('#winner-name').text("Kanye");
      $("#results").fadeIn(850);

    }
  }


  function handle_click(box){
      var box = $(this);
    if (box.hasClass('kanquest') || box.hasClass('justified')){
      return false;
    }
    if (num_clicks % 2 === 0){
      //it's Kanye's turn!
      $(box).addClass("kanquest");
      if (check_for_win() == 'kanye'){
        game_end('kanye');
      } else if (check_for_win() == 'justin'){
        game_end('justin');
      }
      num_clicks++;
    } else {
      $(box).addClass("justified");
      if (check_for_win() == 'kanye'){
        game_end('kanye');
      } else if (check_for_win() == 'justin'){
        game_end('justin');
      }
      num_clicks++;
    }

  }

});