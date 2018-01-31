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

  }

  run(actors){
    this.clearWorkSpace()
    this.drawBackground()
    this.drawActors(actors)
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
