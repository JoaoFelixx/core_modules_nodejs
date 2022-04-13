// Módulo que trabalha com eventos no node js

const events = require('events');

const eventEmmiter = new events.EventEmmiter();

eventEmitter.on('scream', () => console.log('A scream is detected!'));

eventEmitter.emit('scream');