const fs = require("fs")

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
    }else{
        res.writeHead(404,{'Content-Type' : 'text/plain'});
        res.end('404 - Not Found');
    }
}

module.exports = {
    handleGetRequest,
};
