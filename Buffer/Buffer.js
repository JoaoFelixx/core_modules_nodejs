const { Buffer } = require('buffer') // Serve para trabalhar com tipo binário
const ID = 'ds4fs64fsd4f4sd4fs'

const hash = Buffer.from(ID, 'utf8').toString('hex')

console.log(hash)