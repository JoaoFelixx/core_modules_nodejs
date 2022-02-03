import { pipeline, Readable, Transform } from 'stream';
import { promisify } from 'util';
import { createWriteStream } from 'fs'

const pipelineAsync = promisify(pipeline);

const readableStream = Readable({
	read: function () {
			
		for(let index = 0; index < 1e5; index++) {
			const person = { id: Date.now() + index, name: 'João: '+index }
			const json = JSON.stringify(person);
			this.push(json);
		}

		// Avisa que acabou os dados
		this.push(null)
	}
})

const writableMapToCSV = Transform({
	transform(chunk, enconding, callback) {
		const data = JSON.parse(chunk);
		const result = `ID: ${data.id}, name: ${data.name.toUpperCase()}\n`;

		callback(null, result)
	}
})

const setHeader = Transform({
	transform(chunk, enconding, callback) {
		this.couter = this.couter ?? 0;

		if (this.couter) return callback(null, chunk);

		this.couter += 1;

		callback(null, "id,name\n".concat(chunk));
	}
})

// Posso ter varuis transformers

await pipelineAsync(
	readableStream,
	writableMapToCSV,
	setHeader,
	createWriteStream('my.csv')
)

console.log('Processo acabou')