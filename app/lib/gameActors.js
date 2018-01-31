export default {
  add(id, actor){

    if(typeof actor.addListeners !== 'function')
      actor.addListeners = function(){}

    this.actors[id] = actor

  },
  actors: {

  }
}
