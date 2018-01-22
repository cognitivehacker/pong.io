
var GameEngine = function(){
    return new GameEngine.init()
}

GameEngine.prototype = {
  render: function(){
    var gameloopObj = new GameEngine.init()
    gameloopObj.clearEverything()
    gameloopObj.drawEverything()
    gameloopObj.animationFrame(gameloopObj.render)
  },
  clearEverything: function(){
    this.CANVAS_CONTEXT.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)
  },
  drawEverything: function(){
    this.drawBackground()
    this.drawPlayers()
  },
  animationFrame: function(callback){
    this.requestAnimationFrame = window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame(callback) ||
      function(callback){ window.setTimeout(callback, 1000/this.FRAMES_PER_SECOND) }
  },
  drawBackground: function(){
    this.drawColorRectangle(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT, this.CANVAS_COLOR)
  },
  drawColorRectangle: function( leftX, topY, width, height, drawColor){
    this.CANVAS_CONTEXT.fillStyle = drawColor
    this.CANVAS_CONTEXT.fillRect(leftX, topY, width, height)
  },
  drawPlayers: function(){
    this.drawColorRectangle(window.PLAYER_ONE.posX, window.PLAYER_ONE.posY, this.PADDLE_THICKNESS, this.PADDLE_HEIGHT, this.PADDLE_COLOR)
    this.drawColorRectangle(window.PLAYER_TWO.posX, window.PLAYER_TWO.posY, this.PADDLE_THICKNESS, this.PADDLE_HEIGHT, this.PADDLE_COLOR)
  },

}

GameEngine.init = function(){
  this.CANVAS_COLOR = "green"
  this.FRAMES_PER_SECOND = 30
  this.CANVAS_WIDTH = 800
  this.CANVAS_HEIGHT = 600
  this.PADDLE_THICKNESS = 10
  this.PADDLE_HEIGHT = 100
  this.PADDLE_COLOR = "white"

  this.CANVAS = document.getElementById("canvas")
  this.CANVAS_CONTEXT = this.CANVAS.getContext("2d")
  this.CANVAS_CONTEXT.font = "30px Arial"
}

GameEngine.init.prototype = GameEngine.prototype

export default GameEngine
