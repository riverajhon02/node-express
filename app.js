

const http = require('http');

http.createServer((request , res)=>{
    res.write('Hola Mundo');
    res.end();
})
.listen(8080);
console.log("Escuchando puesto 8080");