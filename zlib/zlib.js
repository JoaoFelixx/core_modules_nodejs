// Módulo para compactar e descompactar arquivos

const zlib = require('zlib'); 
const fs = require('fs');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./demofile.txt');

const writeStream = fs.createWriteStream('./mygzipfile.txt.gz');

readStream.pipe(gzip).pipe(writeStream);