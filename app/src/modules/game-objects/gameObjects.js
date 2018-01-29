import GameWorld from './gameWorld'
import Players from './players'

var GameObjects = function(gameWorld){
    return {
      gameWorld: new GameWorld()
    }
}
export default GameObjects
