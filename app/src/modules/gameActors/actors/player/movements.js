import {
  default as collision,
  TOP_LIMIT,
  BOTTOM_LIMIT
} from 'Lib/physics/collision'

export default {
  moveUp(state){
    if(!collision.outOfBoundsTop(state.posY, state.paddleHeight)){
      debugger
      state.posY = state.posY - state.speed
    } else {
      state.posY = TOP_LIMIT
    }
  },
  moveDown(state){
    if(!collision.outOfBoundsBottom(state.posY, state.paddleHeight)){
      state.posY = state.posY + state.speed
    } else {
      state.posY = BOTTOM_LIMIT - state.paddleHeight
    }
  }
}
