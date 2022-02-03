const fs = require('fs');

const first  = fs.readFileSync('./folder/subfolder/first.txt', 'utf8');
const second = fs.readFileSync('./folder/subfolder/second.txt', 'utf8');

console.log(first);
console.log(second);

fs.writeFileSync(
	'./folder/subfolder/result-sync.txt', 
		`Here is the results: ${first}, ${second}`,
		{ flag: 'a' } 
);