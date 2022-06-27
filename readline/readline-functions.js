const readline = require('readline'); // Módulo que trabalha com dados do terminal
const { stdin, stdout } = require('process');

const writer = readline.createInterface({
  input: stdin,
  output: stdout,
})

writer.question('What do you think of Node.js? ', (answer) => { // Pega os dados de pergunta
  console.log(`Thank you for your valuable feedback: ${answer}`);

  writer.close();
});

writer.on('line', (message) => { // Pega os dados toda vez que você clilca em enter no terminal
  if (message === '.exit')
    writer.close();

  console.log(message)
})