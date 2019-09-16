function Game (num) {
  this.DIM_X = 700;
  this.DIM_Y = 500;
  this.ASTEROIDS = []; 
  this.NUM_ASTEROIDS = num;
}

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.ASTEROIDS.push( new Asteroid([Math.random()*this.DIM_X, Math.random()*this.DIM_Y]));
  }
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 700, 500);
  ctx.fillStyle = "#ada8e9";
  ctx.fillRect(0, 0, 700, 500);
  this.ASTEROIDS.forEach(function(asteroid) {
    asteroid.draw(ctx);
  })
}

Game.prototype.moveObjects = function(ctx) {
  this.ASTEROIDS.forEach(function(asteroid) {
    asteroid.move();
  })
  this.draw(ctx);
}

module.exports = Game;