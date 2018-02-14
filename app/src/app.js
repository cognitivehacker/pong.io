import PongIO from 'Lib/gameEngine'
import gameActors from 'Modules/gameActors'
import render from 'Modules/render'

PongIO.setGameActors(gameActors)
PongIO.setRender(render)
PongIO.run()
