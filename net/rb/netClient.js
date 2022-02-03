const net = require('net');

const client = new net.Socket()

client.connect(3000, '192.168.3.21');

client.on('connect', () => client.write('new User join at chat'));

client.on('data', (message) => console.log(message.toString()));

process.stdin.on('readable', () => {
  let message = process.stdin.read();

  if (!message) return;

  message = message.toString().replace(/\n/, '');

  client.write(message);
});