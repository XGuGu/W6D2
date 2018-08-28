class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul').on('click', 'li', (e)=>{
      // debugger
      const $square = $(e.currentTarget);
      this.makeMove($square);

    });
  }

  makeMove($square) {
    const pos = $square.data('pos');
    const currentPlayer = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.addClass(`${currentPlayer}`);
    $square.text(`${currentPlayer}`);
    if (this.game.isOver()) {
      alert('game over');
    }
  }

  setupBoard() {
    const $ul = $('<ul>');

    for(var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $li = $('<li>');
        // debugger
        $li.data('pos', [i, j]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
