class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.fromTowerIdx = null;
    this.render();

    this.$el.on('click', 'ul', this.clickTower.bind(this));
  }

  clickTower(e){
    const clickedTowerIdx = $(e.currentTarget).index();

    if (this.fromTowerIdx === null) {
     this.fromTowerIdx = clickedTowerIdx;
   } else {
     if (!this.game.move(this.fromTowerIdx, clickedTowerIdx)) {
       alert("Invalid Move! Try again.");
     }

     this.fromTowerIdx = null;
   }

   this.render();

   if (this.game.isWon()) {
      this.$el.off("click");
      this.$el.addClass("game-over");
      alert("Good work, you!");
    }
  }

  setupTowers(){
    for(var i = 0; i < 3; i++) {
      const $ul = $('<ul>');
      for(var j = 0; j < 3; j++) {
        let $li = $('<li>');
        if (i === 0) {
          $li.addClass(`disk-${j + 1}`);
        } else {
          $li.addClass("");
        }
        $ul.append($li);
      }
      this.$el.append($ul);
    }

  }

  render() {
    //rerender the page
    // debugger
    const $uls = this.$el.find('ul');
    $uls.removeClass();  //remove selected
    if (this.fromTowerIdx !== null) {
      $uls.eq(this.fromTowerIdx).addClass('selected');
    }

    this.game.towers.forEach((array,i) => {
      const $lis = $uls.eq(i).children();
      $lis.removeClass(); // remove disk-1 -2 -3

      array.forEach((num, j) => {
        $lis.eq(-1 * (j+ 1)).addClass(`disk-${num}`);
      });
    });

  }
}

module.exports = View;
