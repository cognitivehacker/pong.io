import GraphicsEngine from '../graphics/graphicsEngine'
import Listeners from '../physics/listeners'
import GameObjects from '../game-objects/gameObjects'

var GameEngine = function(){
  return {
    setGraphicsEngine: function(graphicsEngine){
      this.graphicsEngine = graphicsEngine
    },
    setListeners: function(listeners){
      this.listeners = listeners
    },
    setGameObject: function(gameObjects){
      this.gameObjects = gameObjects
    },
    execute: function(){
      this.graphicsEngine.render()
      this.listeners.addListeners()
    }
  }
}

export default GameEngine
