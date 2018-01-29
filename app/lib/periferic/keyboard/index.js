export default {
  keyUp(callback){
    document.addEventListener("keyup", function(e) {
      let keyID = e.keyCode || e.which
      callback(keyID, e)
    }, false)
  },
  keyDown(callback){
    document.addEventListener("keydown", function(e) {
      let keyID = e.keyCode || e.which
      callback(keyID, e)
    }, false)
  }
}
