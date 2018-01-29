import GameObjects from './gameObjects'
import Player from '../../models/player'

var PLAYER_ONE = new Player({
  paddleColor: 'blue'
})

var PLAYER_TWO = new Player({
  posX: 780,
  posY: 250,
  paddleColor: 'red'
})

var Players = {
  PLAYER_ONE,
  PLAYER_TWO,
}

window.PLAYERS = Players
export default Players
