const fs = require("fs")
const axios = require('axios');
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// function to handle GET requests
function handleGetRequest(req, res) {
    if(req.url === '/'){
        fs.readFile('./views/index.html',(err, data) => {
            if(err){
                res.writeHead(500, { 'Content-Type' : 'text/plain'});
                res.end('Internal Server error')
            } else{
                res.writeHead(200, { 'Content-Type' : 'text/html'})
                res.end(data);
            }
        });
    } else if (req.url === '/api/posts') {
        // Fetch data from external API
        axios.get(apiUrl)
            .then(response => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(response.data));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error fetching data from API');
            });
    } else{
        res.writeHead(404,{'Content-Type' : 'text/plain'});
        res.end(`404 - Not Found for ${req.url}`);
    }
};

module.exports = {
    handleGetRequest,
};
