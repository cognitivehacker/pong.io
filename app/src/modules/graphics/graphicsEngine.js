import GameObjects from '../game-objects/gameObjects'

var GraphicsEngine = function(){
  return {
    render: function(){
      // var engine = new GraphicsEngine()
      var gameObject = new GameObjects()
      this.GAME_OBJECT = gameObject
      this.PLAYERS = window.PLAYERS
      this.GAME_WORLD = gameObject.gameWorld

      this.clearEverything()
      this.drawEverything()
      this.animationFrame(this.render.bind(this))
    },
    clearEverything: function(){
      this.GAME_WORLD.CANVAS_CONTEXT.clearRect(0, 0, this.GAME_WORLD.CANVAS_WIDTH, this.GAME_WORLD.CANVAS_HEIGHT)
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
        function(callback){ window.setTimeout(callback, 1000/this.GAME_WORLD.FRAMES_PER_SECOND) }
    },
    drawBackground: function(){
      this.drawColorRectangle(0, 0, this.GAME_WORLD.CANVAS_WIDTH, this.GAME_WORLD.CANVAS_HEIGHT, this.GAME_WORLD.CANVAS_COLOR)
    },
    drawColorRectangle: function( leftX, topY, width, height, drawColor){
      this.GAME_WORLD.CANVAS_CONTEXT.fillStyle = drawColor
      this.GAME_WORLD.CANVAS_CONTEXT.fillRect(leftX, topY, width, height)
    },
    drawPlayers: function(){
      this.drawColorRectangle(this.PLAYERS.PLAYER_ONE.posX, this.PLAYERS.PLAYER_ONE.posY, this.GAME_WORLD.PADDLE_THICKNESS, this.GAME_WORLD.PADDLE_HEIGHT, this.GAME_WORLD.PADDLE_COLOR)
      this.drawColorRectangle(this.PLAYERS.PLAYER_TWO.posX, this.PLAYERS.PLAYER_TWO.posY, this.GAME_WORLD.PADDLE_THICKNESS, this.GAME_WORLD.PADDLE_HEIGHT, this.GAME_WORLD.PADDLE_COLOR)
    }
  }
}

export default GraphicsEngine
