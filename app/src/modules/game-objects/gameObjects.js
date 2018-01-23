import gameWorld from './gameWorld'
import players from './players'

var gameObjects = function(gameWorld, players){
    return {
      gameWorld: gameWorld,
      players: players
    }
}

export default gameObjects
