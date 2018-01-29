const CANVAS = document.getElementById("canvas")
const CANVAS_CONTEXT = CANVAS.getContext("2d")
CANVAS_CONTEXT.font = "30px Arial"

const GameWorld = {
  FRAMES_PER_SECOND : 30,
  CANVAS_COLOR : "black",
  CANVAS_WIDTH : 800,
  CANVAS_HEIGHT : 600,
  CANVAS : CANVAS,
  CANVAS_CONTEXT: CANVAS_CONTEXT
}

export default GameWorld
