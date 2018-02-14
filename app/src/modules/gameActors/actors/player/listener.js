import keyboard from 'Lib/periferic/keyboard'
import movements from './movements'

export default {
  addListeners(state) {
    keyboard.keyDown((keymap, keyID, e)=>{
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          movements.moveUp(state)
          break
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          movements.moveDown(state)
          break
      }
    })
    keyboard.keyUp((keymap, keyID, e) => {
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          movements.moveUp(state)
          break
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          movements.moveDown(state)
          break
      }
    })
  }
}
