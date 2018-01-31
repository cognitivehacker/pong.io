import PongIO from '../lib/gameEngine'
import gameActors from './modules/gameActors'
import render from './modules/render'

PongIO.setGameActors(gameActors)
PongIO.setRender(render)
PongIO.run()
