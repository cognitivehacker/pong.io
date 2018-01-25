import gameWorld from '../game-objects/gameWorld'

export const BOTTOM_LIMIT = gameWorld.CANVAS_HEIGHT
export const TOP_LIMIT = 0

const collision = {
  outOfBoundsTop: (posY) => posY <= TOP_LIMIT ? true : false,
  outOfBoundsBottom: (posY, objectHeight) => posY >= ( BOTTOM_LIMIT - objectHeight ) ? true : false
}

export default collision
