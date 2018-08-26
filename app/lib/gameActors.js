export default {
  add(actor){

    if(typeof actor.addListeners !== 'function')
      actor.addListeners = function(){}

    this.actors[actor.id] = actor

  },
  actors: {


  }
}
