import GameWorld from '../game-objects/gameWorld'
import GameObjects from '../game-objects/gameObjects'
import GameActors from '../game-objects/gameActors'

const GraphicsEngine = {
    render(){
      // var engine = new GraphicsEngine()

      this.GAME_OBJECT = GameObjects

      this.GAME_WORLD = GameWorld

      GameActors.forEach( Actors => {
        Actors.graphics.render()
      })


      this.clearEverything()
      this.drawEverything()
      this.animationFrame(this.render.bind(this))
    },
    clearEverything(){
      this.GAME_WORLD.CANVAS_CONTEXT.clearRect(0, 0, this.GAME_WORLD.CANVAS_WIDTH, this.GAME_WORLD.CANVAS_HEIGHT)
    },
    drawEverything(){
      this.drawBackground()
      this.drawPlayers()
    },
    animationFrame(callback){
      this.requestAnimationFrame = window.requestAnimationFrame(callback) ||
        window.webkitRequestAnimationFrame(callback) ||
        window.mozRequestAnimationFrame(callback) ||
        window.oRequestAnimationFrame(callback) ||
        window.msRequestAnimationFrame(callback) ||
        function(callback){ window.setTimeout(callback, 1000/this.GAME_WORLD.FRAMES_PER_SECOND) }
    },
    drawBackground(){
      this.drawColorRectangle(0, 0, this.GAME_WORLD.CANVAS_WIDTH, this.GAME_WORLD.CANVAS_HEIGHT, this.GAME_WORLD.CANVAS_COLOR)
    },
    drawColorRectangle( leftX, topY, width, height, drawColor){
      this.GAME_WORLD.CANVAS_CONTEXT.fillStyle = drawColor
      this.GAME_WORLD.CANVAS_CONTEXT.fillRect(leftX, topY, width, height)
    },
    drawPlayers(){
      this.drawColorRectangle(
        this.PLAYERS.PLAYER_ONE.posX,
        this.PLAYERS.PLAYER_ONE.posY,
        this.PLAYERS.PLAYER_ONE.paddleThickness,
        this.PLAYERS.PLAYER_ONE.paddleHeight,
        this.PLAYERS.PLAYER_ONE.paddleColor
      )

      this.drawColorRectangle(
        this.PLAYERS.PLAYER_TWO.posX,
        this.PLAYERS.PLAYER_TWO.posY,
        this.PLAYERS.PLAYER_TWO.paddleThickness,
        this.PLAYERS.PLAYER_TWO.paddleHeight,
        this.PLAYERS.PLAYER_TWO.paddleColor
      )
    }
}

export default GraphicsEngine
