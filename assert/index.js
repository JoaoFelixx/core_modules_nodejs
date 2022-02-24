const assert = require('assert'); // Módulo trablha com asserção no node

const amountFromClientOne = '120';
const amountFromClientTwo = '100';

assert.equal(amountFromClientOne, amountFromClientTwo, 'Deve ser igual');
assert.notEqual(amountFromClientOne, amountFromClientTwo, 'Deve ser diferente');