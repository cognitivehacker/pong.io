import gameActor from "Lib/gameActors"

import Player from "./actors/player"
import Ball from "./actors/ball"

gameActor.add('player-1', new Player() )
gameActor.add('player-2', new Player({ posX: 780 }) )
gameActor.add('ball', new Ball())

export default gameActor
