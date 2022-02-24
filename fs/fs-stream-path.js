const { createReadStream } = require('fs');
const { createServer } = require('http');
const { join } = require('path');

createServer(async (request, response, next) => {
  try {
    const path = join(__dirname, 'favicon.png');

    const file = createReadStream(path);

    const filename = (new Date()).toISOString();

    response.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"');

    file.pipe(response);
    
  } catch (err) {
    console.log(err)
  }
}).listen(4000, () => console.log('OK'));