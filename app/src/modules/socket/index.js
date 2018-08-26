import io from 'socket.io-client'

const socket = io('//' + window.location.hostname + ':3000')

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);
}

window.socket = socket
export default socket
