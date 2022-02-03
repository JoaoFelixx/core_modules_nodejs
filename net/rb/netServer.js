const net = require('net')

let connections = []

const server = net.createServer(async (socket) => {
  try {
    connections.push(socket)

    socket.write('Welcome to Server')
    socket.on('data', (message) => {

      console.log(message.toString())

      connections.forEach((connection) => {
        if (connection === socket) return

        connection.write('User: ' + Date.now() + ' > ' + message)
      })
    })

    socket.pipe(socket)
  } catch(error) {
    console.log(error)
  }

})
  .listen(3000, '192.168.3.21', () => console.log('Server on at', server.address()))