export default class{
  constructor(config){
    this.target = document.getElementById(config.target)
    this.context = this.target.getContext(config.context)
    this.context.font = config.font
  }

  clear(width, height){
    this.context.clearRect(0, 0, width, height)
  }

  drawRectangle(posX, posY, width, height, color){
    this.context.fillStyle = color
    this.context.fillRect(posX , posY, width, height, color)
  }

}
