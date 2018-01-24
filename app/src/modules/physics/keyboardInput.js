import Collision from './collision'

var Keyboard = function(){
  return {
    checkKey: function(e, player) {
      var keyID = e.keyCode || e.which
      var speed = 10
      var collision = new Collision()
      if (keyID === 38) { // Up arrow
        player.posY = player.posY - speed
        collision.outOfBounds(player)
        e.preventDefault()
      }
      if (keyID === 40) { // Down arrow
        player.posY = player.posY + speed
        collision.outOfBounds(player)
        e.preventDefault()
      }
      if (keyID === 39) { // Right arrow
        player.posY = player.posY + speed
        collision.outOfBounds(player)
        e.preventDefault()
      }
      if (keyID === 37) { // Left arrow
        player.posY = player.posY - speed
        collision.outOfBounds(player)
        e.preventDefault()
      }
      if (keyID === 32) { // Spacebar
        e.preventDefault()
      }
      //console.log("PLAYER POSITION", player.posY)
    }
  }
}

export default Keyboard
