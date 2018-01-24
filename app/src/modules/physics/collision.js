var Collision = function(){
  return {
    outOfBounds: function(player){
      if (player.posY > 500) player.posY = 500
      if (player.posY < 0) player.posY = 0
    }
  }
}

export default Collision
