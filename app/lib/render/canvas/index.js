import Canvas from './canvas'

export default class {
  constructor(config){
    config = config || {}

    this.canvas = new Canvas({
      target: config.target || 'canvas',
      context: config.context || "2d",
      font: config.font || "30px Arial",
    })

    this.color = config.color || "black"
    this.width = config.width || 800
    this.height= config.height || 600
    this.framerate = config.framerate || 1000/60

  }

  run(actors){
    this.clearWorkSpace()
    this.drawBackground()
    this.drawActors(actors)
    this.animationFrame(this.run.bind(this, actors))
  }

  animationFrame(callback){
    this.requestAnimationFrame = window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame(callback) ||
    function(callback){ window.setTimeout(callback, 1000/60) }
  }

  clearWorkSpace(){
    this.canvas.clear(this.width, this.height)
  }

  drawBackground(){
    this.canvas.drawRectangle(0, 0, this.width, this.height, this.color)
  }

  drawActors(actors){

    for(var i in actors) {
      let actor = actors[i]

      if(typeof actor.render === 'function')
        actor.render(this.canvas)

    }

  }
}
