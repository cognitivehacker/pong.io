import collision from './collision'
import Keyboard from './keyboardInput'
import GameObjects from '../game-objects/gameObjects'

var Listeners = function(collision) {
  return {
    addListeners: function(){
      var keyboard = new Keyboard()
      var PLAYERS = window.PLAYERS
      // PLAYER ONE
      document.addEventListener("keyup", function(e) {
        var keyboard = new Keyboard()
        keyboard.checkKey(e, PLAYERS.PLAYER_ONE)
      }, false)
      document.addEventListener("keydown", function(e) {
        var keyboard = new Keyboard()
        keyboard.checkKey(e, PLAYERS.PLAYER_ONE)
      }, false)

      // PLAYER TWO
      document.addEventListener("keyup", function(e) {
        var keyboard = new Keyboard()
        keyboard.checkKey(e, PLAYERS.PLAYER_TWO)
      }, false)
      document.addEventListener("keydown", function(e) {
        var keyboard = new Keyboard()
        keyboard.checkKey(e, PLAYERS.PLAYER_TWO)
      }, false)
    },
  }
}

export default Listeners
