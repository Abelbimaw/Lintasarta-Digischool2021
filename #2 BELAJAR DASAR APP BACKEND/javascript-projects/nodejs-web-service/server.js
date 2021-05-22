const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type','text/html');

    response.statusCode = 200;
    // response.end('<h1>Hello HTTP Server</h1>');

    const { method } = request;
    if(method == 'POST'){
        console.log('<h1>Hai POST</h1>');
    }
    
    if(method == 'PUT'){
        console.log('<h1>Hai PUT</h1>');
    }

    if(method == 'GET'){
        console.log('<h1>Hai GET</h1>');
    }

    if(method == 'DELETE'){
        console.log('<h1>Hai DELETE</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});