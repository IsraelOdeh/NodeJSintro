const http = require('http');
const { handleGetRequest, handlePostRequest } = require('./requestHandler');
const axios = require('axios');

const server = http.createServer((req, res) =>{
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


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
async function fetchData() {
    try {
        const response = await axios.get(apiUrl);
        console.log('Data fetched successfully');
        console.log(response.data); // Logs the data from the API
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function
fetchData();