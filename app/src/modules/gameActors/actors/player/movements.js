import collision from 'Lib/physics/collision'
export default {
  moveUp(state){
    if(!collision.outOfBoundsTop(state.posY, state.height)){
      state.posY = state.posY - state.speed
    } else {
      state.posY = collision.getTopLimit()
    }
  },
  moveDown(state){
    if(!collision.outOfBoundsBottom(state.posY, state.height)){
      state.posY = state.posY + state.speed
    } else {
      state.posY = collision.getBottomLimit() - state.height
    }
  }
}
