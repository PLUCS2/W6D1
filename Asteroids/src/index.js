console.log("Webpack is working!");

const Util = require("./util.js")
window.Util = Util;

const MovingObject = require("./moving_object.js"); 
window.MovingObject = MovingObject; 

const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid; 

const Game = require("./game.js"); 
window.Game = Game;

const GameView = require("./game_view.js");
window.GameView = GameView;

//  debugger

const dcl = document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = 700;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ada8e9";
  ctx.fillRect(0, 0, 700, 500);
  window.ctx = ctx; 
});
