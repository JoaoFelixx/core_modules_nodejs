import { pipeline, Readable, Writable } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const readableStream = Readable({
	read: function () {
		this.push('Hello 1')
		this.push('Hello 2')
		this.push('Hello 3')
		this.push(null)
	}
})

const writableStream = Writable({
	write(chunk, enconding, callback) {
		console.log('Message: ', chunk.toString())
		callback()
	}
})

await pipelineAsync(
	readableStream,
	writableStream,
)

console.log('Processo acabou')