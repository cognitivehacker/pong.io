
var GameEngine = function(){
    return new GameEngine.init()
}

var requestAnimationFrame,
    CANVAS,
    CANVAS_CONTEXT,
    CANVAS_COLOR,
    FRAMES_PER_SECOND,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    PADDLE_THICKNESS,
    PADDLE_HEIGHT,
    PADDLE_COLOR

GameEngine.prototype = {
  render: function(){
    this.animationFrame(this.gameLoop)
  },
  gameLoop: function(){
    var gameloopObj = new GameEngine.init()
    gameloopObj.clearEverything()
    gameloopObj.drawEverything()
    gameloopObj.animationFrame(gameloopObj.gameLoop)
  },
  clearEverything: function(){
    this.CANVAS_CONTEXT.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
  },
  drawEverything: function(){
    this.drawPlayer()
  },
  animationFrame: function(callback){
    this.requestAnimationFrame = window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame(callback) ||
      function(callback){ window.setTimeout(callback, 1000/this.FRAMES_PER_SECOND) }
  },
  drawColorRectangle: function( leftX, topY, width, height, drawColor){
    this.CANVAS_CONTEXT.fillStyle = drawColor
    this.CANVAS_CONTEXT.fillRect(leftX, topY, width, height)
  },
  drawPlayer: function(){
    this.drawColorRectangle(window.PLAYER_ONE.posX, window.PLAYER_ONE.posY, this.PADDLE_THICKNESS, this.PADDLE_HEIGHT, this.PADDLE_COLOR)
  },

}

GameEngine.init = function(){
  this.CANVAS_COLOR = "white"
  this.FRAMES_PER_SECOND = 30
  this.CANVAS_WIDTH = 800
  this.CANVAS_HEIGHT = 600
  this.PADDLE_THICKNESS = 10
  this.PADDLE_HEIGHT = 100
  this.PADDLE_COLOR = "white"

  this.CANVAS = document.getElementById("canvas")
  this.CANVAS_CONTEXT = this.CANVAS.getContext("2d")
  this.CANVAS_CONTEXT.font = "30px Arial"
  this.CANVAS_CONTEXT.style = CANVAS_COLOR // background color
}

GameEngine.init.prototype = GameEngine.prototype

export default GameEngine
