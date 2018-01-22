var Listeners = {
  addListeners: function(){
    // PLAYER ONE
    document.addEventListener("keyup", function(e) {Listeners.checkKey(e, window.PLAYER_ONE)}, false)
    document.addEventListener("keydown", function(e) {Listeners.checkKey(e, window.PLAYER_ONE)}, false)

    // PLAYER TWO
    document.addEventListener("keyup", function(e) {Listeners.checkKey(e, window.PLAYER_TWO)}, false)
    document.addEventListener("keydown", function(e) {Listeners.checkKey(e, window.PLAYER_TWO)}, false)
  },
  outOfBounds: function(player){
    if (player.posY > 500) player.posY = 500
    if (player.posY < 0) player.posY = 0
  },
  checkKey: function(e, player) {
    var keyID = e.keyCode || e.which
    var speed = 10
    if (keyID === 38) { // Up arrow
      player.posY = player.posY - speed
      Listeners.outOfBounds(player)
      e.preventDefault()
    }
    if (keyID === 40) { // Down arrow
      player.posY = player.posY + speed
      Listeners.outOfBounds(player)
      e.preventDefault()
    }
    if (keyID === 39) { // Right arrow
      player.posY = player.posY + speed
      Listeners.outOfBounds(player)
      e.preventDefault()
    }
    if (keyID === 37) { // Left arrow
      player.posY = player.posY - speed
      Listeners.outOfBounds(player)
      e.preventDefault()
    }
    if (keyID === 32) { // Spacebar
      e.preventDefault()
    }
    //console.log("PLAYER POSITION", player.posY)
  }
}

export default Listeners
