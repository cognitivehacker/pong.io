import gameActor from "../../lib/gameActors"

import Player from "actors/player"
import Ball from "actors/ball"

gameActor.add('player-1', new Player({ posX: 0, posY: 10 }) )
gameActor.add('player-2', new Player({ posX: 10, posY: 780 }) )
gameActor.add('ball', new Ball() )
