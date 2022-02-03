const { 
  createHmac,
  createHash,
  randomUUID,
} = require('crypto'); // Módulo que trabalha com criptografia 

// Gera senhas 
const password = '123456';

const SECRET_KEY = 'secret key';

const Hmac = createHmac('sha256', SECRET_KEY)
  .update(password)
  .digest('hex')

const hash = createHash('md5')
  .update(password)
  .digest('hex')


console.log('hash: ', hash);
console.log('Hmac: ', Hmac);

// Cria uuid muito mais rápido que a uuid V4

const uuid = randomUUID()

console.log(uuid)