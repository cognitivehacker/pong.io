import {
  default as collision,
  TOP_LIMIT,
  BOTTOM_LIMIT
} from 'Lib/physics/collision'

export default {
  moveUp(player){
    var state = player.state
    state.posY = state.posY - state.speed
    console.log(state)
    return true
    if(!collision.outOfBoundsTop(state.posY, state.paddleHeight)){
      state.posY = state.posY - state.speed
    } else {
      state.posY = TOP_LIMIT
    }
  },
  moveDown(player){
    var state = player.state
    if(!collision.outOfBoundsBottom(state.posY, state.paddleHeight)){
      state.posY = state.posY + state.speed
    } else {
      state.posY = BOTTOM_LIMIT - state.paddleHeight
    }
  }
}
