import listeners from '../physics/listeners'
import graphicsEngine  from '../graphics/graphicsEngine'
import gameObjects from '../game-objects/gameObjects'

const GameEngine = {
  graphicsEngine,
  listeners,
  gameObjects,
  run(){
    //this.listeners.addListeners()
    this.gameLoop()
  },
  gameLoop(){

    this.physics.nextStep()
    graphicsEngine.render()
  }
}

export default GameEngine
