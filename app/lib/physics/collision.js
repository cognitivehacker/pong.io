import Canvas from 'Lib/render/canvas'

export const BOTTOM_LIMIT = Canvas.height
export const TOP_LIMIT = 0

const collision = {
  outOfBoundsTop: (posY) => posY <= TOP_LIMIT ? true : false,
  outOfBoundsBottom: (posY, objectHeight) => posY >= (BOTTOM_LIMIT - objectHeight) ? true : false
}

export default collision
