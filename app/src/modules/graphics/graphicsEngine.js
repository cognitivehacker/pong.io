import gameWorld from '../game-objects/gameWorld'

var graphicsEngine = function(){
  return {
    render: function(){
      // var engine = new graphicsEngine()
      console.log(this)
      this.clearEverything()
      this.drawEverything()

      this.animationFrame(this.render.bind(this))
    },
    clearEverything: function(){
      gameWorld.CANVAS_CONTEXT.clearRect(0, 0, gameWorld.CANVAS_WIDTH, gameWorld.CANVAS_HEIGHT)
    },
    drawEverything: function(){
      gameWorld.drawBackground()
      gameWorld.drawPlayers()
    },
    animationFrame: function(callback){
      this.requestAnimationFrame = window.requestAnimationFrame(callback) ||
        window.webkitRequestAnimationFrame(callback) ||
        window.mozRequestAnimationFrame(callback) ||
        window.oRequestAnimationFrame(callback) ||
        window.msRequestAnimationFrame(callback) ||
        function(callback){ window.setTimeout(callback, 1000/gameWorld.FRAMES_PER_SECOND) }
    },
    drawBackground: function(){
      this.drawColorRectangle(0, 0, gameWorld.CANVAS_WIDTH, gameWorld.CANVAS_HEIGHT, gameWorld.CANVAS_COLOR)
    },
    drawColorRectangle: function( leftX, topY, width, height, drawColor){
      this.CANVAS_CONTEXT.fillStyle = drawColor
      this.CANVAS_CONTEXT.fillRect(leftX, topY, width, height)
    },
    drawPlayers: function(){
      this.drawColorRectangle(window.PLAYER_ONE.posX, window.PLAYER_ONE.posY, gameWorld.PADDLE_THICKNESS, gameWorld.PADDLE_HEIGHT, gameWorld.PADDLE_COLOR)
      this.drawColorRectangle(window.PLAYER_TWO.posX, window.PLAYER_TWO.posY, gameWorld.PADDLE_THICKNESS, gameWorld.PADDLE_HEIGHT, gameWorld.PADDLE_COLOR)
    }
  }
}

export default graphicsEngine
