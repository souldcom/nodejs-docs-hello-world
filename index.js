const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World my Friend FIESTA FIESTA FIESTA (=P)");
});

const port = process.env.PORT || 6060;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
