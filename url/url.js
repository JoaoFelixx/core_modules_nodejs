const url = require('url'); // O módulo de URL fornece uma maneira de analisar a string de URL.
const http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  const result = url.parse(req.url, true);
  res.write(result.href);
  res.end();
}).listen(8080);