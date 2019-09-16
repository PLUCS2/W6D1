function GameView (ctx) {
  this.game = new Game(100);
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  this.game.addAsteroids(); 
  setInterval(this.game.moveObjects.bind(this.game, this.ctx), 100);
}

module.exports = GameView; 