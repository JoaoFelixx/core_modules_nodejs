const fs = require('fs');

const getText = async (path) => {
	return await fs.readFile(path, 'utf8');
}

const start = async () => {
	try {
		const data = await getText('./folder/subfolder/first.txt');
		console.log(data)
	} catch (err) {
		console.log(err)
	}
}  

start();