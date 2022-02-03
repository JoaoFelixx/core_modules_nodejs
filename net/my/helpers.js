// SERVER 
var net = require('net');
var server = net.createServer(function(socket) {
    // confirm socket connection from client
    console.log((new Date())+'A client connected to server...');
    socket.on('data', function(data) {
      var string = (data.toString());
      console.log(string)
});
    // send info to client
    socket.write('Echo from server: NODE.JS Server \r\n');
    socket.pipe(socket);
    socket.end();
    console.log('The client has disconnected...\n');
}).listen(3000, '192.168.3.10', () => console.log('Server on'));

// CLIENT

var net = require('net');

var client = new net.Socket();
client.connect(3000, '192.168.3.10', function() {
console.log('Connected');  // acknowledge socket connection
client.write('Hello, server! Love, Client.'); // send info to Server
});

client.on('data', function(data) {
console.log('Received: ' + data); // display info received from server
client.destroy(); // kill client after server's response
});

client.on('close', function() {
console.log('Connection closed');
});