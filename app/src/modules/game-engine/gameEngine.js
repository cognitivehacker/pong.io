import gameObjects from '../game-objects/gameObjects'
import graphicsEngine from '../graphics/graphicsEngine'
import listeners from '../physics/listeners'

var GameEngine = function(){
  return {
    execute: function(){
      graphicsEngine.render()
      listeners.addListeners()
    }
  }
}

export default GameEngine
