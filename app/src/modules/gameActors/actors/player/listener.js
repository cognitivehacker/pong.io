import keyboard from 'Lib/periferic/keyboard'
import movements from './movements'

export default {
  addListeners(player) {
    keyboard.keyDown((keymap, keyID, e)=>{
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          movements.moveUp(player)
          break
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          movements.moveDown(player)
          break
      }
    })
    keyboard.keyUp((keymap, keyID, e) => {
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          movements.moveUp(player)
          break
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          movements.moveDown(player)
          break
      }
    })
  }
}
