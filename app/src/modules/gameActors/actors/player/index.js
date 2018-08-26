import state from './state'
import render from './render'

export default class {
  constructor(id, merge, listeners){
    this.id = id
    merge = merge || {}
    this.state = {}

    for ( var i in state ){
      this.state[i] = typeof merge[i] === 'undefined' ? state[i] : merge[i]
    }

    this.listeners = listeners

  }

  render(canvas){
    render.draw(this.state, canvas)
  }

  addListeners(socket){
    this.listeners(this.id, this.state, socket)
  }

}
