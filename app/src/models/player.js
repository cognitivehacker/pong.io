import {
  default as collision,
  TOP_LIMIT,
  BOTTOM_LIMIT
} from '../modules/physics/collision'

const speed = 10

export default class {
  constructor(merge) {
    merge = merge || {}
    this.posX = 10
    this.posY = 250
    this.paddle = 'default'
    this.paddleThickness = 10
    this.paddleHeight = 100
    this.paddleColor = "white"

    for( let i in merge )
      if(!!this[i])
        this[i] = merge[i]

  }
  moveUp(){
    if(!collision.outOfBoundsTop(this.posY, this.paddleHeight)){
      this.posY = this.posY - speed
    } else {
      this.posY = TOP_LIMIT
    }
  }

  moveDown(){
    if(!collision.outOfBoundsBottom(this.posY, this.paddleHeight)){
      this.posY = this.posY + speed
    } else {
      this.posY = BOTTOM_LIMIT - this.paddleHeight
    }
  }
}
