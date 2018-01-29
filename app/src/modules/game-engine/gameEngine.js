import graphicsEngine  from '../graphics/graphicsEngine'
import listeners from '../physics/listeners'
import gameObjects from '../game-objects/gameObjects'

const GameEngine = {
  graphicsEngine,
  listeners,
  gameObjects,
  run(){
    this.graphicsEngine.render()
    this.listeners.addListeners()
  },
}

export default GameEngine
