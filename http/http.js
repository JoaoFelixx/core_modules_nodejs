const http = require('http'); // Cria servidor web http
const DEFAULT_HEADER = { 'Content-Type': 'application/json' };

const server = http.createServer((request, response) => {
	response.writeHead(200, DEFAULT_HEADER);
	response.end(JSON.stringify({ result: 'Hello world' }))
})

server.listen(8080, () => console.log('Server on'))