const fs = require('fs'); // Módulo que trabalha com arquivos

fs.readFile('./folder/subfolder/first.txt', 'utf8', (err, result) => {
	if (err)
		return console.log(err);

	console.log(result)
});
