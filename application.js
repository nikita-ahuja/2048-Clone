$(document).ready(function() {

  game = new Game()
  $("#new-game-button").on('click', function() {
    console.log("clicked!")
    game.render()
    game.changeColor()
  });


  // #eee4da

});
