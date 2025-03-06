const http = require('node:http');

const puestodesignado = process.env.PORT ?? 3000;

const procesarRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf8');
    if(req.url === '/') {
        res.end('<h1>Bienvenido a mi página web 2</h1>');
    } else if(req.url === '/contacto') {
        res.end('<h1>Bienvenido a Contacto</h1>');
    } else {
        res.end('<h1>404</h1>');
    }
};

const server = http.createServer(procesarRequest);

server.listen(puestodesignado, () => {
    console.log(`El servidor está escuchando a través de la ruta http://localhost:${puestodesignado}`);
});