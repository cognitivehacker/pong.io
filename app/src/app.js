/*
import PongIO from 'Lib/gameEngine'
import gameActors from 'Modules/gameActors'
import render from 'Modules/render'

PongIO.setGameActors(gameActors)
PongIO.setRender(render)
PongIO.run()
*/

import render from 'Modules/render'

render.run({
  'circle': {
    render(canvas){

      let x = 200,
          y = 200,
          radius = 100,
          startAng = 0,
          endAng = Math.PI * 2

      canvas.context.beginPath()
      canvas.context.strokeStyle = 'white'
      canvas.context.lineWidth = 1

      canvas.context.arc(x, y, radius, startAng, endAng, false)
      canvas.context.stroke()

      // Last Point on Arc's Circ to Another point on Arc's Circ

      canvas.context.beginPath()
      canvas.context.strokeStyle = 'green'
      canvas.context.lineWidth = 2

      let xs = x - (radius * Math.cos(startAng) )
      let ys = y - (radius * Math.sin(endAng) )
      canvas.context.moveTo(xs, ys)


      let xe = x - (radius * Math.cos( Math.PI /2 ))
      let ye = y - (radius * Math.sin( canvas.degreesToRad(90) )  )

      canvas.context.lineTo(xe, ye)
      canvas.context.stroke()

    },
  }
})
