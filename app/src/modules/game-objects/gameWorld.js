var GameWorld = function(){

  var FRAMES_PER_SECOND = 30
  var CANVAS_COLOR = "black"
  var CANVAS_WIDTH = 800
  var CANVAS_HEIGHT = 600
  var PADDLE_THICKNESS = 10
  var PADDLE_HEIGHT = 100
  var PADDLE_COLOR = "white"
  var CANVAS = document.getElementById("canvas")
  var CANVAS_CONTEXT = CANVAS.getContext("2d")
  CANVAS_CONTEXT.font = "30px Arial"

  return {
    CANVAS_COLOR
    ,FRAMES_PER_SECOND
    ,CANVAS_WIDTH
    ,CANVAS_HEIGHT
    ,PADDLE_THICKNESS
    ,PADDLE_HEIGHT
    ,PADDLE_COLOR
    ,CANVAS
    ,CANVAS_CONTEXT
  }
}

export default GameWorld
