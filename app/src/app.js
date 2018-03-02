import PongIO from 'Lib/gameEngine'
import gameActors from 'Modules/gameActors'
import render from 'Modules/render'
import socket from 'Modules/socket'

PongIO.setGameActors(gameActors)
PongIO.setRender(render)
PongIO.setSocket(socket)
PongIO.run()
