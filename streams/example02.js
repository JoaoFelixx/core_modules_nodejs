const http = require('http');
const { readFileSync, createReadStream } = require('fs');

// Criará arquivo de giga de tamanho ao jogar esse comando no terminal

// node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file 

http.createServer((request, response) => {
	
	// Jeito errado
	// const file = readFileSync('./big.file'); 
	// response.write(file);
	// response.end();

	// Jeito certo
	createReadStream('big.file')
	  .pipe(response)

}).listen(3000, () => console.log('Server running at http://localhost:3000'))