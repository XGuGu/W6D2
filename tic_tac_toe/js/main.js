const View = require("./ttt-view.js");// require appropriate file
const Game = require("./game.js");// require appropriate file

$( () => {
  const page = $(".ttt");
  const game = new Game();
  const view = new View(game, page);
  // const game = Game();
  // Your code here
});
