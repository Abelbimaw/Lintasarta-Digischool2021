const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type','application/json');
    response.setHeader('X-Powered-By','NodeJS');
    // response.end('<h1>Hello HTTP Server</h1>');

    const { url,method } = request;

    if(url == '/'){
        if(method == 'GET'){
            response.statusCode = 200;
            response.end('<h1>Ini adalah HomePage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1> Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if (url == '/about'){
        if(method == 'POST'){
            response.statusCode = 200;
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
    
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1> Hai, ${name}! ini adalah halaman about</h1>`);
            });
        } else if( method == 'GET'){
            response.statusCode = 200;
            response.end('<h1> Halo! Ini adalah halaman about</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1> Halaman ini tidak dapat diakses dengan ${method} request`);
        }
    } else {
        response.statusCode = 404;
        response.end('<h1> Halaman tidak ditemukan</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});