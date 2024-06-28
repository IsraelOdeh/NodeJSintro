const http = require('http');

const fs = require("fs")
const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hello,World!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});