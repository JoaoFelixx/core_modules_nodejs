// trabalha com caminhos /etc/etc/etc

const path = require('path'); 

const filePath = path.join(__dirname, '/folder/subfolder', 'text.txt');
console.log(filePath)

const extensionName = path.extname(filePath);
console.log(extensionName)

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(filePath);
console.log(absolute);