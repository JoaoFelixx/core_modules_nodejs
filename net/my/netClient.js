const net = require('net');

const client = net.createConnection({port: 3000});

client.on('data', (message) => console.log(message.toString())); // get message
  
