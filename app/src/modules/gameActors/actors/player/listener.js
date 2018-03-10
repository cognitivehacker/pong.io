import keyboard from 'Lib/periferic/keyboard'
import movements from './movements'

export default {
  addListeners(state, socket) {
    keyboard.keyDown((keymap, keyID, e)=>{
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          movements.moveUp(state)
          socket.emit('keyUp', { id: socket.id, others: 'asasasdasdad'})
          break
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          movements.moveDown(state)
          socket.emit('keyDown', { id: socket.id, others: 'asasasdasdad'})
          break
      }
    })
    keyboard.keyUp((keymap, keyID, e) => {
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          movements.moveUp(state)
          socket.emit('keyUp', { id: socket.id, others: 'asasasdasdad'})
          break
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          movements.moveDown(state)
          socket.emit('keyDown', { id: socket.id, others: 'asasasdasdad'})
          break
      }
    })
  }
}
