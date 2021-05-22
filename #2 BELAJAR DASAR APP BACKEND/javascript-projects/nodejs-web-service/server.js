const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type','application/json');
    response.setHeader('X-Powered-By','NodeJS');
    // response.end('<h1>Hello HTTP Server</h1>');

    const { url,method } = request;

    if(url == '/'){
        if(method == 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini Halaman Homepage!',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: ` Halaman tidak dapat diakses dengan ${method} request`,
            }));
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
                response.end(JSON.stringify({
                    message : `Hai, ${name}! ini adalah halaman about`,
                }));
            });
        } else if( method == 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman ini tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message : 'Halaman tidak ditemukan',
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});