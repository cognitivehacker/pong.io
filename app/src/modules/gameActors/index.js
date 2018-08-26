import gameActor from "Lib/gameActors"
import Player from "./actors/player"
import Ball from "./actors/ball"

import pListener from './actors/player/listener'

gameActor.add( new Player('player-1', {}, pListener.playerOne ))
gameActor.add( new Player('player-2', { posX: 780 }, pListener.playerTwo))
gameActor.add( new Ball('ball'))

export default gameActor
