import state from './state'
import render from './render'

export default class {
  constructor(id, merge){
    this.id = id
    merge = merge || {}
    this.state = {}
    for ( var i in state ){
      this.state[i] = typeof merge[i] === 'undefined' ? state[i] : merge[i]
    }
  }

  render(canvas){
    render.draw(this.state, canvas)
  }
}
