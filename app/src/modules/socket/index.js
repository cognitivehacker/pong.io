import io from 'socket.io-client'

const socket = io('http://localhost:3000')

socket.on('connect', onConnect)

function onConnect(){
  console.log('connect ' + socket.id)
}

socket.on('keydown', (data) => {
  console.log('data', data)
})

window.socket = socket
export default socket
