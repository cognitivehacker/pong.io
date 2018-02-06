import keyboard from '../../../../../lib/periferic/keyboard'
import { KEY_UP, KEY_PG_UP, KEY_DOWN, KEY_PG_DOWN } from '../../../../../lib/periferic/keyboard/keymap'

export default {
  addListeners(state) {
    keyboard.keyDown((keyID, e)=>{
      e.preventDefault()
      switch (true) {
        case keyID === KEY_UP || keyID === KEY_PG_UP:
          state.moveUp()
          break;
        case keyID === KEY_DOWN || keyID === KEY_PG_DOWN:
          state.moveDown()
          break;
      }
    });
    keyboard.keyUp((keyID, e) => {
      e.preventDefault()
      switch (true) {
        case keyID === KEY_UP || keyID === KEY_PG_UP:
          state.moveUp()
          break;
        case keyID === KEY_DOWN || keyID === KEY_PG_DOWN:
          state.moveDown()
          break;
      }
    });
  }
}
