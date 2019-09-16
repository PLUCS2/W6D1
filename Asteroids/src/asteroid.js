
// debugger 

Util.inherits(Asteroid, MovingObject);

function Asteroid (arg) {
  // constructor () {
  //   super({color: this.color, radius: this.radius, pos: arg.pos, vel: Util.randomVec(1)})
  // }
  this.COLOR = "#eeeeee";
  this.RADIUS = 30;

  return movingObject = new MovingObject({
    color: this.COLOR,
    radius: this.RADIUS,
    pos: arg,
    vel: Util.scale(Util.randomVec(1), 10)
  });
}


module.exports = Asteroid;