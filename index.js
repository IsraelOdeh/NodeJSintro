const http = require('http');
const { handleGetRequest, handlePostRequest } = require('./requestHandler');
const EventEmitter = require('events');

class RequestEmitter extends EventEmitter {}
const requestEmitter = new RequestEmitter();

const server = http.createServer((req, res) =>{
    requestEmitter.emit('requestReceived', req.url);
    if (req.method === 'GET') {
        handleGetRequest(req, res);
    } else if (req.method === 'POST') {
        handlePostRequest(req, res);
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

requestEmitter.on('requestReceived', (url) => {
    console.log(`Received request for: ${url}`);
});