const { promisify, format } = require('util') // O módulo Util fornece acesso a algumas funções de utilitários.
const { createHash } = require('crypto');

const createHash = (password) => {
	return createHash('md5')
  	.update(password)
  	.digest('hex')
}

const hash = await promisify(createHash)('123456'); 

const txt = 'Congratulate %s on his %dth birthday!';
const result = format(txt, 'Linus', 6); 

console.log(result);