import Collision from './collision'
import { KEY_UP, KEY_PG_UP, KEY_DOWN, KEY_PG_DOWN } from '../periferic/keyboard'

const Keyboard = {
    keyPress(e, player) {

      e.preventDefault()
      let keyID = e.keyCode || e.which

      switch(true){
        case keyID === KEY_UP || keyID === KEY_PG_UP :
          player.moveUp()
          break;
        case keyID === KEY_DOWN || keyID === KEY_PG_DOWN :
          player.moveDown()
          break;
      }
    }
}

export default Keyboard
