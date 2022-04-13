// Serve para trabalhar com tipo binário

const { Buffer } = require('buffer');
const message = 'Bom dia'

const hash = Buffer.from(message, 'utf8').toString('hex')

console.log(hash)