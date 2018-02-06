import * as keymap from './keymap'

export default {
  keymap,
  keyUp(callback){
    document.addEventListener("keyup", function(e) {
      let keyID = e.keyCode || e.which
      callback(keymap, keyID, e)
    }, false)
  },
  keyDown(callback){
    document.addEventListener("keydown", function(e) {
      let keyID = e.keyCode || e.which
      callback(keymap, keyID, e)
    }, false)
  }
}
