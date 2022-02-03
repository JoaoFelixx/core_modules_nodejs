const { createServer} = require('net'); // O módulo net cria servidores TCP/IP
const { readFile, writeFile } = require('fs/promises');
const { join } = require('path')

const file = join(__dirname, 'database', 'data.json');

const server = createServer( async (socket) => {
    
    const data = JSON.parse(await readFile(file, 'utf8'))
    

    socket.on('connection', async () => { 
        
        console.log('hi')

        socket.on('close', () => socket.write('Goodbye'))
    })

    
    socket.pipe(socket);
})
    .on('error', (err) => console.log(err))

server.listen(3000, '192.168.3.10', () => console.log('Server on'));