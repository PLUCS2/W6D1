Function.prototype.inherits = function(parent) {
  let child = this;
  function Surrogate () {}
  Surrogate.prototype = parent.prototype; 
  child.prototype= new Surrogate(); 
  child.prototype.constructor = child;
}

// Function.prototype.inherits = function(parent) {
//   this.prototype = Object.create(parent.prototype)

// }

function MovingObject() {}
MovingObject.prototype.move = function() {
  console.log("I moved");
};


function Ship() {}
Ship.inherits(MovingObject);
Ship.prototype.color = function() {
  console.log("RED");
};

function Asteroid() {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.speed = function() {
  console.log("V Fast");
};



let asty = new Asteroid();
asty.move()
asty.speed()

let shippy = new Ship(); 

shippy.move();
shippy.color()
//shippy.speed()
