export default {
  setGameActors(gameActors){
    this.gameActors = gameActors
  },
  run(){
    this.initListeners()
    this.gameLoop()
  },
  gameLoop(){
    
  },
  initListeners(){
    this.gameActors.forEach((actor) => actor.addListeners())
  }

}
