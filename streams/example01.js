process.stdin.pipe(process.stdout) // assim

process.stdin.pipe(process.stdout)
	.on('data', msg => console.log('Terminal data: ', msg.toString())) // ou assim

const stdin = process.stdin
	.on('data', msg => console.log('Entrada de dados: ', msg.toString()));

const stdout = process.stdout
	.on('data', msg => console.log('Saida de dados: ', msg.toString()));