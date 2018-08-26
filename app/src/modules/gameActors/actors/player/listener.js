import keyboard from 'Lib/periferic/keyboard'
import movements from './movements'

export default {
  playerOne(id, state, socket) {

    keyboard.keyDown((keymap, keyID, e)=>{
      e.preventDefault()
      switch (true) {
        case keyID === keymap.KEY_UP || keyID === keymap.KEY_PG_UP:
          socket.emit('playerKeyUp', JSON.stringify({ sid: socket.id }))
          break
        case keyID === keymap.KEY_DOWN || keyID === keymap.KEY_PG_DOWN:
          socket.emit('playerKeyDown', JSON.stringify({ sid: socket.id }))
          break
      }
    })

    socket.on('playerOneMove', (msg) => {
      console.log(id)
      switch (msg.event) {
        case 'keyUp':
          movements.moveUp( state )
          break;
        case 'keyDown':
          movements.moveDown( state )
          break;
      }
    })
  },

  playerTwo(id, state, socket) {
    socket.on('playerTwoMove', (msg) => {
      switch (msg.event) {
        case 'keyUp':
          movements.moveUp( state )
          break;
        case 'keyDown':
          movements.moveDown( state )
          break;
      }
    })

  }
}
