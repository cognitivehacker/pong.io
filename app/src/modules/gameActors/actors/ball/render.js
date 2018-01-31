export default {
  draw(state, canvas){
    canvas.drawRectangle(state.posX, state.posY, state.width, state.height, state.color)
  }
}
