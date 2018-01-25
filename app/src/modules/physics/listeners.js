import keyboard from './keyboard'
import GameObjects from '../game-objects/gameObjects'

const Listeners = {
  addListeners(){
    var PLAYERS = window.PLAYERS
    // PLAYER ONE
    document.addEventListener("keyup", function(e) {
      keyboard.keyPress(e, PLAYERS.PLAYER_ONE)
  }, false)
    document.addEventListener("keydown", function(e) {
      keyboard.keyPress(e, PLAYERS.PLAYER_ONE)
    }, false)
  },
}

export default Listeners
