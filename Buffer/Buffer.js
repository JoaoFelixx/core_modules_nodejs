const { Buffer } = require('buffer') // Serve para trabalhar com tipo binário
const message = 'Bom dia'

const hash = Buffer.from(message, 'utf8').toString('hex')

console.log(hash)