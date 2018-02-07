import state from './state'
import render from './render'
import listener from './listener'
import Player from '../../../../models/player'

export default class  extends Player{
  constructor(merge){
    super()
    merge = merge || {}

    this.state = {}

    for ( var i in state ){
      this.state[i] = typeof merge[i] === 'undefined' ? state[i] : merge[i]
    }
  }

  render(canvas){
    render.draw(this.state, canvas)
  }

  addListeners(){
    listener.addListeners(this);
  }

}
