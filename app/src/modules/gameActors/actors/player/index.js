import state from './state'
import render from './render'
import listener from './listener'

export default class {
  constructor(merge, haveListener = false){
    merge = merge || {}
    this.state = {}

    for ( var i in state ){
      this.state[i] = typeof merge[i] === 'undefined' ? state[i] : merge[i]
    }

    this.haveListener = haveListener
  }

  render(canvas){
    render.draw(this.state, canvas)
  }

  addListeners(){
    if(this.haveListener)
      listener.addListeners(this)

  }

}
