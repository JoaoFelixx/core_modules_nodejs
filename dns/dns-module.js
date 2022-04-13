// DNS é um módulo de nó usado para fazer o recurso de resolução de nome que é fornecido pelo sistema operacional, bem como usado para fazer uma pesquisa de DNS real

const dns = require('dns'); 

dns.lookup('joaofelixx.github.io', // return IP from site
  (err, value) => err ? console.log(err) : console.log(value))

dns.resolve('joaofelixx.github.io', 'MX', // return IP from site array format
  (err, value) => err ? console.log(err) : console.log(value))