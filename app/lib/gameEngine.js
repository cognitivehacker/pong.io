import gameWorld from './gameWorld'

export default {
  gameWorld,
  setGameActors(gameActors){
    this.gameActors = gameActors
  },
  setRender(render){
    this.render = render
    this.gameWorld.height = render.height
    this.gameWorld.width = render.width
  },
  setSocket(socket){
    this.socket = socket
  },
  run(){
    this.initListeners()
    this.gameLoop()
  },
  initListeners(){
    for ( var i in this.gameActors.actors ) {
      let actor = this.gameActors.actors[i]
      if(typeof actor.addListeners === 'function')
        actor.addListeners(this.socket)
    }
  },
  gameLoop(){
    this.render.run(this.gameActors.actors)
  },
}
