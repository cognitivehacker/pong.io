import keyboard from 'Lib/periferic/keyboard'

export default {
  addListeners(player) {
    keyboard.keyDown((keymap, keyID, e)=>{
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          player.moveUp()
          break;
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          player.moveDown()
          break;
      }
    });
    keyboard.keyUp((keymap, keyID, e) => {
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          player.moveUp()
          break;
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          player.moveDown()
          break;
      }
    });
  }
}
