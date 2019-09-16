function MovingObject (options) {
  this.pos = options.pos; 
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = this.color;
  ctx.stroke();
  ctx.fill();
}

MovingObject.prototype.move = function() {
  // debugger
  this.pos[0] += this.vel[0]; 
  this.pos[1] += this.vel[1]; 
  // debugger 
}

module.exports = MovingObject; 
