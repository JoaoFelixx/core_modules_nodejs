const net = require('net');

// Conectando socket via comando do terminal de forma fantastica

// node -e "process.stdin.pipe(require('net').connect(3000))"

net.createServer(socket => socket.pipe(process.stdout))
	.listen(3000)